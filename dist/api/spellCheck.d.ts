/// <reference types="node" />
import { Writable } from 'stream';
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
export interface SpellCheckPostHeaderParameters {
    /**
    * subscription key in header
    * Real name : Ocp-Apim-Subscription-Key
    */
    ocpApimSubscriptionKey?: string;
}
export interface SpellCheckGetHeaderParameters {
    /**
    * subscription key in header
    * Real name : Ocp-Apim-Subscription-Key
    */
    ocpApimSubscriptionKey?: string;
}
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
export declare type SpellCheckPostResult = {
    "_type": string;
    "flaggedTokens": {
        "offset": number;
        "token": string;
        "type": string;
        "suggestions": {
            "suggestion": string;
            "score": number;
        }[];
    }[];
};
export declare type SpellCheckGetResult = {
    "_type": string;
    "flaggedTokens": {
        "offset": number;
        "token": string;
        "type": string;
        "suggestions": {
            "suggestion": string;
            "score": number;
        }[];
    }[];
};
export declare type MethodType = 'post' | 'get' | 'put' | 'delete' | 'patch';
export declare class SpellCheckAPI {
    /**
    * Global Query parameters. If defined this parameters will be used for every request.
    */
    globalQueryParameters: GlobalQueryParameters;
    /**
    * Global Header parameters. If defined this parameters will be used for every request.
    */
    globalHeaderParameters: GlobalHeaderParameters;
    private makeRequest(path, method, queryParams?, headerParams?, pathParams?);
    /**
    *
    *
    */
    spellCheckPost(queryParams: SpellCheckPostQueryParameters, headerParams: SpellCheckPostHeaderParameters): Request<SpellCheckPostResult>;
    /**
    *
    *
    */
    spellCheckGet(queryParams: SpellCheckGetQueryParameters, headerParams: SpellCheckGetHeaderParameters): Request<SpellCheckGetResult>;
}
