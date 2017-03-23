import * as request from 'superagent';
import {Writable} from 'stream';

//unfortunately we need to 'rewrite' typings for superagent by adding type for body
export interface Response<BodyType> extends NodeJS.ReadableStream {
    text: string;
    body: BodyType;
    files: any;
    header: any;
    type: string;
    charset: string;
    status: number;
    statusType: number;
    info: boolean;
    ok: boolean;
    redirect: boolean;
    clientError: boolean;
    serverError: boolean;
    error: Error;
    accepted: boolean;
    noContent: boolean;
    badRequest: boolean;
    unauthorized: boolean;
    notAcceptable: boolean;
    notFound: boolean;
    forbidden: boolean;
    xhr: XMLHttpRequest;
    get(header: string): string;
}

export interface Request<Type> extends Promise<Response<Type>> {
    abort(): void;
    accept(type: string): this;
    attach(field: string, file: string, filename?: string): this;
    auth(user: string, name: string): this;
    buffer(val?: boolean): this;
    clearTimeout(): this;
    end(callback?: (err: any, res: Response<Type>) => void): this;
    field(name: string, val: string): this;
    get(field: string): string;
    on(name: string, handler: Function): this;
    on(name: 'error', handler: (err: any) => void): this;
    part(): this;
    pipe(stream: NodeJS.WritableStream, options?: Object): Writable;
    query(val: Object): this;
    redirects(n: number): this;
    responseType(type: string): this;
    send(data: string): this;
    send(data: Object): this;
    send(): this;
    set(field: string, val: string): this;
    set(field: Object): this;
    timeout(ms: number): this;
    type(val: string): this;
    unset(field: string): this;
    use(fn: Function): this;
    withCredentials(): this;
    write(data: string, encoding?: string): this;
    write(data: Buffer, encoding?: string): this;
    parse(fn: (res: Response<Type>, callback: (err: Error | null, body: Type) => void) => void): this;
}


//Interfaces for queryParameters of the methods

export interface SpellCheckPostQueryParameters {
    /**
    * Mode of spellcheck:
&lt;ul&gt;&lt;li&gt;Proof - Meant to provide Office Word like spelling corrections. It can correct long queries, provide casing corrections and suppresses aggressive corrections.&lt;/li&gt;
&lt;li&gt;Spell - Meant to provide Search engine like spelling corrections. It will correct small queries(up to length 9 tokens) without any casing changes and will be more optimized (perf and relevance) towards search like queries.&lt;/li&gt;&lt;/ul&gt;

    * Real name : mode
    */    
    mode?: string;
    /**
    * For proof mode, only support en-us, es-es, pt-br,
For spell mode, support all language codes.
    * Real name : mkt
    */    
    mkt?: string;
    /**
    * subscription key in url
    * Real name : subscription-key
    */    
    subscriptionKey?: string;
}
const SpellCheckPostQueryParametersNameMap = {
    mode: "mode",
    mkt: "mkt",
    subscriptionKey: "subscription-key"
};
export interface SpellCheckGetQueryParameters {
    /**
    * Mode of spellcheck:
&lt;ul&gt;&lt;li&gt;Proof - Meant to provide Office Word like spelling corrections. It can correct long queries, provide casing corrections and suppresses aggressive corrections.&lt;/li&gt;
&lt;li&gt;Spell - Meant to provide Search engine like spelling corrections. It will correct small queries(up to length 9 tokens) without any casing changes and will be more optimized (perf and relevance) towards search like queries.&lt;/li&gt;&lt;/ul&gt;

    * Real name : mode
    */    
    mode?: string;
    /**
    * The text string to check for spelling and grammar errors.
    * Real name : text
    */    
    text: string;
    /**
    * A string that gives context to the text string. For example, the text string petal is valid; however, if you set preContextText to bike, the context changes and the text string becomes not valid. In this case, the API will suggest that you change petal to pedal (as in bike pedal).
    * Real name : preContextText
    */    
    preContextText?: string;
    /**
    * A string that gives context to the text string. For example, the text string read is valid; however, if you set postContextText to carpet, the context changes and the text string becomes not valid. In this case, the API will suggest that you change read to red (as in red carpet).
    * Real name : postContextText
    */    
    postContextText?: string;
    /**
    * For proof mode, only support en-us, es-es, pt-br,
For spell mode, support all language codes.
    * Real name : mkt
    */    
    mkt?: string;
    /**
    * subscription key in url
    * Real name : subscription-key
    */    
    subscriptionKey?: string;
}
const SpellCheckGetQueryParametersNameMap = {
    mode: "mode",
    text: "text",
    preContextText: "preContextText",
    postContextText: "postContextText",
    mkt: "mkt",
    subscriptionKey: "subscription-key"
};
//Interfaces for headerParameters of the methods

export interface SpellCheckPostHeaderParameters {
    /**
    * subscription key in header
    * Real name : Ocp-Apim-Subscription-Key
    */    
    ocpApimSubscriptionKey?: string;
}
const SpellCheckPostHeaderParametersNameMap = {
    ocpApimSubscriptionKey: "Ocp-Apim-Subscription-Key"
};
export interface SpellCheckGetHeaderParameters {
    /**
    * subscription key in header
    * Real name : Ocp-Apim-Subscription-Key
    */    
    ocpApimSubscriptionKey?: string;
}
const SpellCheckGetHeaderParametersNameMap = {
    ocpApimSubscriptionKey: "Ocp-Apim-Subscription-Key"
};
//Interfaces for pathParameters of the methods


/**
*Interface for global Query parameters
*/
export interface GlobalQueryParameters {
    /**
    * Mode of spellcheck:
&lt;ul&gt;&lt;li&gt;Proof - Meant to provide Office Word like spelling corrections. It can correct long queries, provide casing corrections and suppresses aggressive corrections.&lt;/li&gt;
&lt;li&gt;Spell - Meant to provide Search engine like spelling corrections. It will correct small queries(up to length 9 tokens) without any casing changes and will be more optimized (perf and relevance) towards search like queries.&lt;/li&gt;&lt;/ul&gt;

    * Real name : mode
    */    
    mode?: string;
    /**
    * For proof mode, only support en-us, es-es, pt-br,
For spell mode, support all language codes.
    * Real name : mkt
    */    
    mkt?: string;
    /**
    * subscription key in url
    * Real name : subscription-key
    */    
    subscriptionKey?: string;
}
const GlobalQueryParametersNameMap = {
    mode: "mode",
    mkt: "mkt",
    subscriptionKey: "subscription-key"
};
/**
*Interface for global Header parameters
*/
export interface GlobalHeaderParameters {
    /**
    * subscription key in header
    * Real name : Ocp-Apim-Subscription-Key
    */    
    ocpApimSubscriptionKey?: string;
}
const GlobalHeaderParametersNameMap = {
    ocpApimSubscriptionKey: "Ocp-Apim-Subscription-Key"
};

//types for responses
export type SpellCheckPostResult = { "_type": string; "flaggedTokens": { "offset": number; "token": string; "type": string; "suggestions": { "suggestion": string; "score": number; }[]; }[]; };
export type SpellCheckGetResult = { "_type": string; "flaggedTokens": { "offset": number; "token": string; "type": string; "suggestions": { "suggestion": string; "score": number; }[]; }[]; };

export type MethodType = 'post' | 'get' | 'put' | 'delete' | 'patch';
interface Params {
    [key: string]: string
}

const convertParamsToRealParams = (params: Params, paramsNameMap: Params) => {
    return Object.keys(params).reduce((prev, key) => {
        return Object.assign(prev, { [paramsNameMap[key]]: params[key] });
    }, {}) as Params;
}

export class SpellCheckAPI {   
    /**
    * Global Query parameters. If defined this parameters will be used for every request.
    */
    public globalQueryParameters: GlobalQueryParameters = {};    
    /**
    * Global Header parameters. If defined this parameters will be used for every request.
    */
    public globalHeaderParameters: GlobalHeaderParameters = {};    

    private makeRequest(path: string, method: MethodType, queryParams: Params = {}, headerParams: Params = {}, pathParams: Params = {}) {        
        const url = `https://api.cognitive.microsoft.com/bing/v5.0/spellcheck${path}`;
        
        queryParams = Object.assign({}, convertParamsToRealParams(this.globalQueryParameters as any as Params, GlobalQueryParametersNameMap), queryParams);
        headerParams = Object.assign({}, convertParamsToRealParams(this.globalHeaderParameters as any as Params, GlobalHeaderParametersNameMap), headerParams);

        let urlWithPathParams = url;
        Object.keys(pathParams).forEach((key) => {
            urlWithPathParams = urlWithPathParams.replace(new RegExp(`{${key}}`, 'g'), encodeURIComponent(pathParams[key]));
        });

        let req = request[method](urlWithPathParams).query(queryParams).set(headerParams);
        return req;
    }    

    /**
    * 
    *
    */
    public spellCheckPost(queryParams: SpellCheckPostQueryParameters, headerParams: SpellCheckPostHeaderParameters) {
        const queryParamsMapped = {} as Params;
        const headerParamsMapped = {} as Params;
        const pathParamsMapped = {} as Params;
        Object.assign(queryParamsMapped, convertParamsToRealParams(queryParams as any as Params, SpellCheckPostQueryParametersNameMap));
        Object.assign(headerParamsMapped, convertParamsToRealParams(headerParams as any as Params, SpellCheckPostHeaderParametersNameMap));
        return this.makeRequest('/', 'post', queryParamsMapped, headerParamsMapped, pathParamsMapped) as Request<SpellCheckPostResult>;
    }
    /**
    * 
    *
    */
    public spellCheckGet(queryParams: SpellCheckGetQueryParameters, headerParams: SpellCheckGetHeaderParameters) {
        const queryParamsMapped = {} as Params;
        const headerParamsMapped = {} as Params;
        const pathParamsMapped = {} as Params;
        Object.assign(queryParamsMapped, convertParamsToRealParams(queryParams as any as Params, SpellCheckGetQueryParametersNameMap));
        Object.assign(headerParamsMapped, convertParamsToRealParams(headerParams as any as Params, SpellCheckGetHeaderParametersNameMap));
        return this.makeRequest('/', 'get', queryParamsMapped, headerParamsMapped, pathParamsMapped) as Request<SpellCheckGetResult>;
    }
}