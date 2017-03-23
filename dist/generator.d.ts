export interface SwaggerApiParameter {
    "name": string;
    "in": string;
    "description": string;
    "type": string;
    "default"?: string;
    "enum"?: string[];
}
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
}
export interface TemplateData {
    name: string;
    url: string;
    methods: TemplateDataMethod[];
    globalQueryParameters: SwaggerApiParameterNormalized[];
    globalHeaderParameters: SwaggerApiParameterNormalized[];
    globalPathParameters: SwaggerApiParameterNormalized[];
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
}
export declare const getData: (name: string, api: SwaggerApi) => TemplateData;
export declare const generate: (name: string, api: SwaggerApi) => string;
