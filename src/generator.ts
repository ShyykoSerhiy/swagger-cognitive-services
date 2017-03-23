import * as handlebars from 'handlebars';
import * as fs from 'fs';
import * as cheerio from 'cheerio';
import { getTypeInterface } from './typechecker/typechecker'

export interface SwaggerApiParameter {
  "name": string;
  "in": string;
  "description": string;
  "type": string;
  "default"?: string;
  "enum"?: string[];
};

export interface SwaggerApiParameterNormalized extends SwaggerApiParameter {
  "normName": string;
}

export interface SwaggerApi {
  "swagger": string;
  "info": {
    "title": string;
    "version": string;
  };
  "host": string;
  "basePath": string;
  "schemes": string[];
  "paths": {
    [key: string]: {
      [key: string]: {
        "description": string;
        "operationId": string;
        "parameters": SwaggerApiParameter[];
        "consumes": string[];
        "responses": {
          [key: string]: {
            "description": string;
            "examples": {
              "application/json": string;
            };
          };
        };
        "produces": string[];
      };
    };
  };
};

export interface TemplateData {
  name: string;
  url: string;
  methods: TemplateDataMethod[];
  globalQueryParameters: SwaggerApiParameterNormalized[];
  globalHeaderParameters: SwaggerApiParameterNormalized[]
  globalPathParameters: SwaggerApiParameterNormalized[]
}

export interface TemplateDataMethod {
  normName: string;
  path: string;
  method: string;
  queryParameters: SwaggerApiParameterNormalized[];
  headerParameters: SwaggerApiParameterNormalized[];
  pathParameters: SwaggerApiParameterNormalized[];
  normQueryParametersName: string;
  normHeaderParametersName: string;
  normPathParametersName: string;
};

export const getData = (name: string, api: SwaggerApi) => {
  const normalizeMethodName = (operationId: string) => {
    var r = '';
    operationId.replace(/[a-zA-Z_$][0-9a-zA-Z_$]*/g, (match) => {
      r += match[0].toUpperCase() + match.substring(1);
      return '';
    });
    r = r[0].toLowerCase() + r.substring(1);
    return r;
  }


  const typesMap = {
    'integer': 'number'
  } as { [key: string]: string };
  /**
   * Not pure
   * @param parameter 
   */
  const normalizeParameterNotPure = (parameter: SwaggerApiParameter): SwaggerApiParameterNormalized => {
    const normName = normalizeMethodName(parameter.name);
    typesMap[parameter.type] && (parameter.type = typesMap[parameter.type]);
    return Object.assign({}, parameter, { normName });;
  }

  let data = { name } as TemplateData;
  data.url = `${api.schemes[0]}://${api.host}${api.basePath}`;
  try {
    const methods = Object.keys(api.paths).map((path) => {
      const pathPart = api.paths[path];
      const methods = Object.keys(pathPart).map((method) => {
        const methodPart = pathPart[method];
        const description = cheerio.load(methodPart.description || '').root().text();
        const normName = normalizeMethodName(methodPart.operationId) + method[0].toUpperCase() + method.substring(1);
        const normNameCap = normName[0].toUpperCase() + normName.substring(1);
        const queryParameters = methodPart.parameters.filter(p => p.in === 'query').map(normalizeParameterNotPure);
        const headerParameters = methodPart.parameters.filter(p => p.in === 'header').map(normalizeParameterNotPure);
        const pathParameters = methodPart.parameters.filter(p => p.in === 'path').map(normalizeParameterNotPure);
        const normQueryParametersName = `${normNameCap}QueryParameters`;
        const normHeaderParametersName = `${normNameCap}HeaderParameters`;
        const normPathParametersName = `${normNameCap}PathParameters`;
        let params = [];
        queryParameters.length && params.push(`queryParams: ${normQueryParametersName}`);
        headerParameters.length && params.push(`headerParams: ${normHeaderParametersName}`);
        pathParameters.length && params.push(`pathParams: ${normPathParametersName}`);

        //trying to guess response by response example in swagger api 
        const responseTypeName = `${normNameCap}Result`;
        let responseType = '{}';
        if (methodPart.responses
          && methodPart.responses['200']
          && methodPart.responses['200'].examples
          && methodPart.responses['200'].examples['application/json']) {
          const exampleResponse = methodPart.responses['200'].examples['application/json'];

          responseType = getTypeInterface(typeof exampleResponse === 'string' ?
            exampleResponse :
            JSON.stringify(exampleResponse)
          );
        }

        let m = {
          normName,
          normNameCap,
          responseTypeName,
          responseType,
          description,
          path,
          method,
          queryParameters,
          headerParameters,
          pathParameters,
          normQueryParametersName,
          normHeaderParametersName,
          normPathParametersName,
          params: params.join(', ')
        };
        if (!m.queryParameters.length) {
          delete m.queryParameters;
        }
        if (!m.headerParameters.length) {
          delete m.headerParameters;
        }
        if (!m.pathParameters.length) {
          delete m.pathParameters;
        }
        return m;
      });
      return methods;
    }).reduce((prev, current) => {
      return prev.concat(current);
    }, []);
    data.methods = methods;

    const getGlobalParams = (paramsType: 'queryParameters' | 'headerParameters' | 'pathParameters') => {
      let nameToParamMap = new Map<string, SwaggerApiParameterNormalized>();
      let nameToCount = new Map<string, number>();
      const globalQueryParams = data.methods.forEach((methods) => {
        const parameters = methods[paramsType];
        parameters && parameters.forEach((param) => {
          const { name } = param;
          if (!nameToParamMap.has(name)) {
            nameToParamMap.set(name, param);
          }
          nameToCount.set(name, (nameToCount.get(name) || 0) + 1);
        });
      });
      let globalParams: SwaggerApiParameterNormalized[] = [];
      nameToCount.forEach((count, name) => {
        if (count === data.methods.length) {
          globalParams.push(nameToParamMap.get(name));
        }
      });
      return globalParams;
    }
    const globalQueryParameters = getGlobalParams('queryParameters');
    const globalHeaderParameters = getGlobalParams('headerParameters');
    const globalPathParameters = getGlobalParams('pathParameters');
    globalQueryParameters && (data.globalQueryParameters = globalQueryParameters);
    globalHeaderParameters && (data.globalHeaderParameters = globalHeaderParameters);
    globalPathParameters && (data.globalPathParameters = globalPathParameters);
  } catch (e) {
    throw new Error(`Failed to generate data for api ${name}` + e);
  }

  return data;
}

export const generate = (name: string, api: SwaggerApi) => {
  const data = getData(name, api);
  const template = handlebars.compile(fs.readFileSync(`./src/handlebars/template.handlebars`).toString('utf-8'));
  return template(data);
}