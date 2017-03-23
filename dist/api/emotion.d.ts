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
export interface EmotionRecognitionPostQueryParameters {
    /**
    * subscription key in url
    * Real name : subscription-key
    */
    subscriptionKey?: string;
}
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
export interface GetRecognitionInVideoOperationResultGetQueryParameters {
    /**
    * subscription key in url
    * Real name : subscription-key
    */
    subscriptionKey?: string;
}
export interface EmotionRecognitionPostHeaderParameters {
    /**
    * subscription key in header
    * Real name : Ocp-Apim-Subscription-Key
    */
    ocpApimSubscriptionKey?: string;
}
export interface EmotionRecognitionInVideoPostHeaderParameters {
    /**
    * subscription key in header
    * Real name : Ocp-Apim-Subscription-Key
    */
    ocpApimSubscriptionKey?: string;
}
export interface GetRecognitionInVideoOperationResultGetHeaderParameters {
    /**
    * subscription key in header
    * Real name : Ocp-Apim-Subscription-Key
    */
    ocpApimSubscriptionKey?: string;
}
export interface GetRecognitionInVideoOperationResultGetPathParameters {
    /**
    *
    * Real name : oid
    */
    oid: string;
}
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
export declare type EmotionRecognitionPostResult = {
    "faceRectangle": {
        "left": number;
        "top": number;
        "width": number;
        "height": number;
    };
    "scores": {
        "anger": number;
        "contempt": number;
        "disgust": number;
        "fear": number;
        "happiness": number;
        "neutral": number;
        "sadness": number;
        "surprise": number;
    };
}[];
export declare type EmotionRecognitionInVideoPostResult = {};
export declare type GetRecognitionInVideoOperationResultGetResult = {
    "status": string;
    "createdDateTime": string;
    "lastActionDateTime": string;
};
export declare type MethodType = 'post' | 'get' | 'put' | 'delete' | 'patch';
export declare class EmotionAPI {
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
    * Recognizes the emotions expressed by one or more people in an image, as well as returns a bounding box for the face. The emotions detected are happiness, sadness, surprise, anger, fear, contempt, and disgust or neutral. • The supported input image formats includes JPEG, PNG, GIF(the first frame), BMP. Image file size should be no larger than 4MB. • If a user has already called the Face API, they can submit the face rectangles as an optional input. Otherwise, Emotion API will first compute the rectangles. • The detectable face size range is 36x36 to 4096x4096 pixels. Faces out of this range will not be detected. • For each image, the maximum number of faces detected is 64 and the faces are ranked by face rectangle size in descending order. If no face is detected, an empty array will be returned. • Some faces may not be detected due to technical challenges, e.g. very large face angles (head-pose), large occlusion. Frontal and near-frontal faces have the best results. • The emotions contempt and disgust are experimental.
    *
    */
    emotionRecognitionPost(queryParams: EmotionRecognitionPostQueryParameters, headerParams: EmotionRecognitionPostHeaderParameters): Request<{
        "faceRectangle": {
            "left": number;
            "top": number;
            "width": number;
            "height": number;
        };
        "scores": {
            "anger": number;
            "contempt": number;
            "disgust": number;
            "fear": number;
            "happiness": number;
            "neutral": number;
            "sadness": number;
            "surprise": number;
        };
    }[]>;
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
    emotionRecognitionInVideoPost(queryParams: EmotionRecognitionInVideoPostQueryParameters, headerParams: EmotionRecognitionInVideoPostHeaderParameters): Request<EmotionRecognitionInVideoPostResult>;
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
    getRecognitionInVideoOperationResultGet(queryParams: GetRecognitionInVideoOperationResultGetQueryParameters, headerParams: GetRecognitionInVideoOperationResultGetHeaderParameters, pathParams: GetRecognitionInVideoOperationResultGetPathParameters): Request<GetRecognitionInVideoOperationResultGetResult>;
}
