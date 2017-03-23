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

export interface EmotionRecognitionPostQueryParameters {
    /**
    * subscription key in url
    * Real name : subscription-key
    */    
    subscriptionKey?: string;
}
const EmotionRecognitionPostQueryParametersNameMap = {
    subscriptionKey: "subscription-key"
};
export interface EmotionRecognitionInVideoPostQueryParameters {
    /**
    * Defaults to â€œaggregateâ€ style, but a user can specify â€œperFrameâ€ style.
    * Real name : outputStyle
    */    
    outputStyle?: string;
    /**
    * subscription key in url
    * Real name : subscription-key
    */    
    subscriptionKey?: string;
}
const EmotionRecognitionInVideoPostQueryParametersNameMap = {
    outputStyle: "outputStyle",
    subscriptionKey: "subscription-key"
};
export interface GetRecognitionInVideoOperationResultGetQueryParameters {
    /**
    * subscription key in url
    * Real name : subscription-key
    */    
    subscriptionKey?: string;
}
const GetRecognitionInVideoOperationResultGetQueryParametersNameMap = {
    subscriptionKey: "subscription-key"
};
//Interfaces for headerParameters of the methods

export interface EmotionRecognitionPostHeaderParameters {
    /**
    * subscription key in header
    * Real name : Ocp-Apim-Subscription-Key
    */    
    ocpApimSubscriptionKey?: string;
}
const EmotionRecognitionPostHeaderParametersNameMap = {
    ocpApimSubscriptionKey: "Ocp-Apim-Subscription-Key"
};
export interface EmotionRecognitionInVideoPostHeaderParameters {
    /**
    * subscription key in header
    * Real name : Ocp-Apim-Subscription-Key
    */    
    ocpApimSubscriptionKey?: string;
}
const EmotionRecognitionInVideoPostHeaderParametersNameMap = {
    ocpApimSubscriptionKey: "Ocp-Apim-Subscription-Key"
};
export interface GetRecognitionInVideoOperationResultGetHeaderParameters {
    /**
    * subscription key in header
    * Real name : Ocp-Apim-Subscription-Key
    */    
    ocpApimSubscriptionKey?: string;
}
const GetRecognitionInVideoOperationResultGetHeaderParametersNameMap = {
    ocpApimSubscriptionKey: "Ocp-Apim-Subscription-Key"
};
//Interfaces for pathParameters of the methods

export interface GetRecognitionInVideoOperationResultGetPathParameters {
    /**
    * 
    * Real name : oid
    */    
    oid: string;
}
const GetRecognitionInVideoOperationResultGetPathParametersNameMap = {
    oid: "oid"
};

/**
*Interface for global Query parameters
*/
export interface GlobalQueryParameters {
    /**
    * subscription key in url
    * Real name : subscription-key
    */    
    subscriptionKey?: string;
}
const GlobalQueryParametersNameMap = {
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
export type EmotionRecognitionPostResult = { "faceRectangle": { "left": number; "top": number; "width": number; "height": number; }; "scores": { "anger": number; "contempt": number; "disgust": number; "fear": number; "happiness": number; "neutral": number; "sadness": number; "surprise": number; }; }[];
export type EmotionRecognitionInVideoPostResult = {};
export type GetRecognitionInVideoOperationResultGetResult = { "status": string; "createdDateTime": string; "lastActionDateTime": string; };

export type MethodType = 'post' | 'get' | 'put' | 'delete' | 'patch';
interface Params {
    [key: string]: string
}

const convertParamsToRealParams = (params: Params, paramsNameMap: Params) => {
    return Object.keys(params).reduce((prev, key) => {
        return Object.assign(prev, { [paramsNameMap[key]]: params[key] });
    }, {}) as Params;
}

export class EmotionAPI {   
    /**
    * Global Query parameters. If defined this parameters will be used for every request.
    */
    public globalQueryParameters: GlobalQueryParameters = {};    
    /**
    * Global Header parameters. If defined this parameters will be used for every request.
    */
    public globalHeaderParameters: GlobalHeaderParameters = {};    

    private makeRequest(path: string, method: MethodType, queryParams: Params = {}, headerParams: Params = {}, pathParams: Params = {}) {        
        const url = `https://westus.api.cognitive.microsoft.com/emotion/v1.0${path}`;
        
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
    * Recognizes the emotions expressed by one or more people in an image, as well as returns a bounding box for the face. The emotions detected are happiness, sadness, surprise, anger, fear, contempt, and disgust or neutral. • The supported input image formats includes JPEG, PNG, GIF(the first frame), BMP. Image file size should be no larger than 4MB. • If a user has already called the Face API, they can submit the face rectangles as an optional input. Otherwise, Emotion API will first compute the rectangles. • The detectable face size range is 36x36 to 4096x4096 pixels. Faces out of this range will not be detected. • For each image, the maximum number of faces detected is 64 and the faces are ranked by face rectangle size in descending order. If no face is detected, an empty array will be returned. • Some faces may not be detected due to technical challenges, e.g. very large face angles (head-pose), large occlusion. Frontal and near-frontal faces have the best results. • The emotions contempt and disgust are experimental.
    *
    */
    public emotionRecognitionPost(queryParams: EmotionRecognitionPostQueryParameters, headerParams: EmotionRecognitionPostHeaderParameters) {
        const queryParamsMapped = {} as Params;
        const headerParamsMapped = {} as Params;
        const pathParamsMapped = {} as Params;
        Object.assign(queryParamsMapped, convertParamsToRealParams(queryParams as any as Params, EmotionRecognitionPostQueryParametersNameMap));
        Object.assign(headerParamsMapped, convertParamsToRealParams(headerParams as any as Params, EmotionRecognitionPostHeaderParametersNameMap));
        return this.makeRequest('/recognize', 'post', queryParamsMapped, headerParamsMapped, pathParamsMapped) as Request<EmotionRecognitionPostResult>;
    }
    /**
    * Welcome to the Microsoft Emotion API for Video. Emotion API for Video is a cloud-based API that recognizes the emotions expressed by the people in an image and returns their emotions. The emotions detected are happiness, sadness, surprise, anger, fear, contempt, and disgust or neutral. These APIs allow you to build more personalized and intelligent apps by understanding your video content. 

Emotion Recognition
Returns aggregate emotions for the faces in a video.
• The supported input video formats include MP4, MOV, and WMV. Video file size should be no larger than 100MB. 
• The detectable face size range is 24x24 to 2048x2048 pixels. The faces out of this range will not be detected. 
• For each video, the maximum number of faces returned is 64. 
• Some faces may not be detected due to technical challenges; e.g. very large face angles (head-pose), and large occlusion. Frontal and near-frontal faces have the best results. 
• Output files are deleted after 24 hours. 
    *
    */
    public emotionRecognitionInVideoPost(queryParams: EmotionRecognitionInVideoPostQueryParameters, headerParams: EmotionRecognitionInVideoPostHeaderParameters) {
        const queryParamsMapped = {} as Params;
        const headerParamsMapped = {} as Params;
        const pathParamsMapped = {} as Params;
        Object.assign(queryParamsMapped, convertParamsToRealParams(queryParams as any as Params, EmotionRecognitionInVideoPostQueryParametersNameMap));
        Object.assign(headerParamsMapped, convertParamsToRealParams(headerParams as any as Params, EmotionRecognitionInVideoPostHeaderParametersNameMap));
        return this.makeRequest('/recognizeinvideo', 'post', queryParamsMapped, headerParamsMapped, pathParamsMapped) as Request<EmotionRecognitionInVideoPostResult>;
    }
    /**
    * Get operation result. If succeeded, this interface returns a JSON that includes time stamps and operation status/result. Below is an example: 

Example JSON:

            
            
            
            
{
	"status": "Running",
	"createdDateTime":  "2015-09-30T01:28:23.4493273Z",
	"lastActionDateTime": "2015-09-30T01:32:23.0895791Z",
}
             
            



Possible values of "status" field are:
Not Started - video content is received/uploaded but the process has not started.
Uploading - the video content is being uploaded by the URL client side provides.
Running - the process is running.
Failed - the process is failed. Detailed information will be provided in "message" field.
Succeeded - the process succeeded. In this case, depending on specific operation client side created, the result can be retrieved in following two ways:

The result (as a JSON in string) is available in processingResult field.
    *
    */
    public getRecognitionInVideoOperationResultGet(queryParams: GetRecognitionInVideoOperationResultGetQueryParameters, headerParams: GetRecognitionInVideoOperationResultGetHeaderParameters, pathParams: GetRecognitionInVideoOperationResultGetPathParameters) {
        const queryParamsMapped = {} as Params;
        const headerParamsMapped = {} as Params;
        const pathParamsMapped = {} as Params;
        Object.assign(queryParamsMapped, convertParamsToRealParams(queryParams as any as Params, GetRecognitionInVideoOperationResultGetQueryParametersNameMap));
        Object.assign(headerParamsMapped, convertParamsToRealParams(headerParams as any as Params, GetRecognitionInVideoOperationResultGetHeaderParametersNameMap));
        Object.assign(pathParamsMapped, convertParamsToRealParams(pathParams as any as Params, GetRecognitionInVideoOperationResultGetPathParametersNameMap));
        return this.makeRequest('/operations/{oid}', 'get', queryParamsMapped, headerParamsMapped, pathParamsMapped) as Request<GetRecognitionInVideoOperationResultGetResult>;
    }
}