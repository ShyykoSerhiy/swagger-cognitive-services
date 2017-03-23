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

export interface StabilizationPostQueryParameters {
    /**
    * subscription key in url
    * Real name : subscription-key
    */    
    subscriptionKey?: string;
}
const StabilizationPostQueryParametersNameMap = {
    subscriptionKey: "subscription-key"
};
export interface GetOperationResultGetQueryParameters {
    /**
    * subscription key in url
    * Real name : subscription-key
    */    
    subscriptionKey?: string;
}
const GetOperationResultGetQueryParametersNameMap = {
    subscriptionKey: "subscription-key"
};
export interface FaceDetectionAndTrackingPostQueryParameters {
    /**
    * subscription key in url
    * Real name : subscription-key
    */    
    subscriptionKey?: string;
}
const FaceDetectionAndTrackingPostQueryParametersNameMap = {
    subscriptionKey: "subscription-key"
};
export interface MotionDetectionPostQueryParameters {
    /**
    * Specify the detection sensitivity level: “low”, “medium”, “high”. Higher sensitivity means more motions will be detected at a cost that more false alarms will be reported. The default value is “medium”.
    * Real name : sensitivityLevel
    */    
    sensitivityLevel?: string;
    /**
    * User may skip frames by setting this parameter. It can be used as a tradeoff between performance and cost, skipping frames may reduce processing time but result in worse detection performance. The default value is 1, meaning detecting motion for every frame. If set to 2, then the algorithm will detect one frame for every two frames. The upper bound is 20.
    * Real name : frameSamplingValue
    */    
    frameSamplingValue?: number;
    /**
    * User can setup detection zones by passing in a string like “detectionZones&#x3D;0,0;0.5,0;1,0;1,0.5;1,1;0.5,1;0,1;0,0.5 |0.3,0.3;0.55,0.3;0.8,0.3; 0.8,0.55;0.8,0.8;0.55,0.8;0.3,0.8;0.3,0.55;| 0,0;1,0;1,1;0,1”, each detection zone is separated by a “|” and each point is defined by a “x,y” pair and separated by a “;”. At most 8 detection zones are supported and each detection zone should be defined by at least 3 points and no more than 16 points. The default setting is “detectionZones&#x3D;0,0;0.5,0;1,0;1,0.5;1,1;0.5,1;0,1;0,0.5”, i.e. the whole frame defined by an 8-point polygon.
    * Real name : detectionZones
    */    
    detectionZones?: string;
    /**
    * Specify whether light change events should be detected. The default value is false.
    * Real name : detectLightChange
    */    
    detectLightChange?: boolean;
    /**
    * Specify the threshold on whether successive motions should be merged together, if the interval between successive motions is &lt;&#x3D; mergeTimeThreshold, they will be merged. The default value is 0.0 and upper bound is 10.0.
    * Real name : mergeTimeThreshold
    */    
    mergeTimeThreshold?: number;
    /**
    * subscription key in url
    * Real name : subscription-key
    */    
    subscriptionKey?: string;
}
const MotionDetectionPostQueryParametersNameMap = {
    sensitivityLevel: "sensitivityLevel",
    frameSamplingValue: "frameSamplingValue",
    detectionZones: "detectionZones",
    detectLightChange: "detectLightChange",
    mergeTimeThreshold: "mergeTimeThreshold",
    subscriptionKey: "subscription-key"
};
export interface GetResultVideoGetQueryParameters {
    /**
    * subscription key in url
    * Real name : subscription-key
    */    
    subscriptionKey?: string;
}
const GetResultVideoGetQueryParametersNameMap = {
    subscriptionKey: "subscription-key"
};
export interface ThumbnailPostQueryParameters {
    /**
    * Specifies maximum duration of output video (in seconds). The default value is 0, which indicates the duration will be automatically decided by the algorithm.
    * Real name : maxMotionThumbnailDurationInSecs
    */    
    maxMotionThumbnailDurationInSecs?: number;
    /**
    * Indicates whether output video should include audio track. The default value is true.
    * Real name : outputAudio
    */    
    outputAudio?: boolean;
    /**
    * Indicates whether output video should have fade in/out effect during scene changes. The default value is true.
    * Real name : fadeInFadeOut
    */    
    fadeInFadeOut?: boolean;
    /**
    * subscription key in url
    * Real name : subscription-key
    */    
    subscriptionKey?: string;
}
const ThumbnailPostQueryParametersNameMap = {
    maxMotionThumbnailDurationInSecs: "maxMotionThumbnailDurationInSecs",
    outputAudio: "outputAudio",
    fadeInFadeOut: "fadeInFadeOut",
    subscriptionKey: "subscription-key"
};
//Interfaces for headerParameters of the methods

export interface StabilizationPostHeaderParameters {
    /**
    * subscription key in header
    * Real name : Ocp-Apim-Subscription-Key
    */    
    ocpApimSubscriptionKey?: string;
}
const StabilizationPostHeaderParametersNameMap = {
    ocpApimSubscriptionKey: "Ocp-Apim-Subscription-Key"
};
export interface GetOperationResultGetHeaderParameters {
    /**
    * subscription key in header
    * Real name : Ocp-Apim-Subscription-Key
    */    
    ocpApimSubscriptionKey?: string;
}
const GetOperationResultGetHeaderParametersNameMap = {
    ocpApimSubscriptionKey: "Ocp-Apim-Subscription-Key"
};
export interface FaceDetectionAndTrackingPostHeaderParameters {
    /**
    * subscription key in header
    * Real name : Ocp-Apim-Subscription-Key
    */    
    ocpApimSubscriptionKey?: string;
}
const FaceDetectionAndTrackingPostHeaderParametersNameMap = {
    ocpApimSubscriptionKey: "Ocp-Apim-Subscription-Key"
};
export interface MotionDetectionPostHeaderParameters {
    /**
    * subscription key in header
    * Real name : Ocp-Apim-Subscription-Key
    */    
    ocpApimSubscriptionKey?: string;
}
const MotionDetectionPostHeaderParametersNameMap = {
    ocpApimSubscriptionKey: "Ocp-Apim-Subscription-Key"
};
export interface GetResultVideoGetHeaderParameters {
    /**
    * subscription key in header
    * Real name : Ocp-Apim-Subscription-Key
    */    
    ocpApimSubscriptionKey?: string;
}
const GetResultVideoGetHeaderParametersNameMap = {
    ocpApimSubscriptionKey: "Ocp-Apim-Subscription-Key"
};
export interface ThumbnailPostHeaderParameters {
    /**
    * subscription key in header
    * Real name : Ocp-Apim-Subscription-Key
    */    
    ocpApimSubscriptionKey?: string;
}
const ThumbnailPostHeaderParametersNameMap = {
    ocpApimSubscriptionKey: "Ocp-Apim-Subscription-Key"
};
//Interfaces for pathParameters of the methods

export interface GetOperationResultGetPathParameters {
    /**
    * OperationId
    * Real name : oid
    */    
    oid: string;
}
const GetOperationResultGetPathParametersNameMap = {
    oid: "oid"
};
export interface GetResultVideoGetPathParameters {
    /**
    * 
    * Real name : oid
    */    
    oid: string;
}
const GetResultVideoGetPathParametersNameMap = {
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
export type StabilizationPostResult = {};
export type GetOperationResultGetResult = { "status": string; "createdDateTime": string; "lastActionDateTime": string; };
export type FaceDetectionAndTrackingPostResult = {};
export type MotionDetectionPostResult = {};
export type GetResultVideoGetResult = {};
export type ThumbnailPostResult = {};

export type MethodType = 'post' | 'get' | 'put' | 'delete' | 'patch';
interface Params {
    [key: string]: string
}

const convertParamsToRealParams = (params: Params, paramsNameMap: Params) => {
    return Object.keys(params).reduce((prev, key) => {
        return Object.assign(prev, { [paramsNameMap[key]]: params[key] });
    }, {}) as Params;
}

export class VideoAPI {   
    /**
    * Global Query parameters. If defined this parameters will be used for every request.
    */
    public globalQueryParameters: GlobalQueryParameters = {};    
    /**
    * Global Header parameters. If defined this parameters will be used for every request.
    */
    public globalHeaderParameters: GlobalHeaderParameters = {};    

    private makeRequest(path: string, method: MethodType, queryParams: Params = {}, headerParams: Params = {}, pathParams: Params = {}) {        
        const url = `https://westus.api.cognitive.microsoft.com/video/v1.0${path}`;
        
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
    * Smooths and stabilizes a video.  •  The supported input video formats include MP4, MOV, and WMV. Video file size should be no larger than 100MB. •  Stabilization is optimized for small camera motions, with or without rolling shutter effects (e.g. holding a static camera, and walking with a slow speed). •  Both width and height of the input video must be even numbers. •  The resolution of the input video should be less than or equal to 2160P (4K, 3840 X 2160). • Output files are deleted after 24 hours.
    *
    */
    public stabilizationPost(queryParams: StabilizationPostQueryParameters, headerParams: StabilizationPostHeaderParameters) {
        const queryParamsMapped = {} as Params;
        const headerParamsMapped = {} as Params;
        const pathParamsMapped = {} as Params;
        Object.assign(queryParamsMapped, convertParamsToRealParams(queryParams as any as Params, StabilizationPostQueryParametersNameMap));
        Object.assign(headerParamsMapped, convertParamsToRealParams(headerParams as any as Params, StabilizationPostHeaderParametersNameMap));
        return this.makeRequest('/stabilize', 'post', queryParamsMapped, headerParamsMapped, pathParamsMapped) as Request<StabilizationPostResult>;
    }
    /**
    * Get operation result. If succeeded, this interface returns a JSON that includes time stamps and operation status. Below is an example:

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


            
            Video OperationHow to Retrieve Result
            
            
            StabilizationThe result (as a video file) can be retrieved from the URL specified in resourceLocation field.
            Face Detection and TrackingMotion Detection 
The result (as a JSON in string) is available in processingResult field.
             

    *
    */
    public getOperationResultGet(queryParams: GetOperationResultGetQueryParameters, headerParams: GetOperationResultGetHeaderParameters, pathParams: GetOperationResultGetPathParameters) {
        const queryParamsMapped = {} as Params;
        const headerParamsMapped = {} as Params;
        const pathParamsMapped = {} as Params;
        Object.assign(queryParamsMapped, convertParamsToRealParams(queryParams as any as Params, GetOperationResultGetQueryParametersNameMap));
        Object.assign(headerParamsMapped, convertParamsToRealParams(headerParams as any as Params, GetOperationResultGetHeaderParametersNameMap));
        Object.assign(pathParamsMapped, convertParamsToRealParams(pathParams as any as Params, GetOperationResultGetPathParametersNameMap));
        return this.makeRequest('/operations/{oid}', 'get', queryParamsMapped, headerParamsMapped, pathParamsMapped) as Request<GetOperationResultGetResult>;
    }
    /**
    * Detects and tracks human faces in a video and returns face locations. • The supported input video formats include MP4, MOV, and WMV. Video file size should be no larger than 100MB. • The detectable face size range is 24x24 to 2048x2048 pixels. The faces out of this range will not be detected. • For each video, the maximum number of faces returned is 64. • Some faces may not be detected due to technical challenges; e.g. very large face angles (head-pose), and large occlusion. Frontal and near-frontal faces have the best results. • Output files are deleted after 24 hours.

    *
    */
    public faceDetectionAndTrackingPost(queryParams: FaceDetectionAndTrackingPostQueryParameters, headerParams: FaceDetectionAndTrackingPostHeaderParameters) {
        const queryParamsMapped = {} as Params;
        const headerParamsMapped = {} as Params;
        const pathParamsMapped = {} as Params;
        Object.assign(queryParamsMapped, convertParamsToRealParams(queryParams as any as Params, FaceDetectionAndTrackingPostQueryParametersNameMap));
        Object.assign(headerParamsMapped, convertParamsToRealParams(headerParams as any as Params, FaceDetectionAndTrackingPostHeaderParametersNameMap));
        return this.makeRequest('/trackface', 'post', queryParamsMapped, headerParamsMapped, pathParamsMapped) as Request<FaceDetectionAndTrackingPostResult>;
    }
    /**
    * Detects motion in a video, and returns the frame and duration of the motion that was captured. • The supported input video formats include MP4, MOV, and WMV. Video file size should be no larger than 100MB. • User can input detection zones to set up as areas to detect motion. • User can specify motion sensitivity: high, medium, and low. Higher sensitivity means more motions will be detected at a cost that more false alarms will be reported.• Motion Detection is optimized for stationary background videos. • User can specify whether light change events should be detected. A light change refers to a change in the frame that was caused by a light turning off and on. Some developers do not want to detect this, as they consider it a false alarm. Other developers want to make sure they capture any change, light changes included.• User can specify whether successive motions should be merged together by passing in a parameter (mergeTimeThreshold) For example, if a motion happens from 1 to 4 seconds and the next motion happens from 5 to 10 seconds, some developers will want to count that as one instance of motion.• User can specify which frames to be detected by passing in a parameter (frameSamplingValue).• Some motion may not be detected due to technical challenges; e.g. semi-transparent objects, and some small objects. • Output files are deleted after 24 hours.

    *
    */
    public motionDetectionPost(queryParams: MotionDetectionPostQueryParameters, headerParams: MotionDetectionPostHeaderParameters) {
        const queryParamsMapped = {} as Params;
        const headerParamsMapped = {} as Params;
        const pathParamsMapped = {} as Params;
        Object.assign(queryParamsMapped, convertParamsToRealParams(queryParams as any as Params, MotionDetectionPostQueryParametersNameMap));
        Object.assign(headerParamsMapped, convertParamsToRealParams(headerParams as any as Params, MotionDetectionPostHeaderParametersNameMap));
        return this.makeRequest('/detectmotion', 'post', queryParamsMapped, headerParamsMapped, pathParamsMapped) as Request<MotionDetectionPostResult>;
    }
    /**
    * This interface is used for getting result video content. Currently only Stabilization outputs video content as result. The URL to this interface should be retrieved from resourceLocation field of JSON returned from Get Operation Result interface.
    *
    */
    public getResultVideoGet(queryParams: GetResultVideoGetQueryParameters, headerParams: GetResultVideoGetHeaderParameters, pathParams: GetResultVideoGetPathParameters) {
        const queryParamsMapped = {} as Params;
        const headerParamsMapped = {} as Params;
        const pathParamsMapped = {} as Params;
        Object.assign(queryParamsMapped, convertParamsToRealParams(queryParams as any as Params, GetResultVideoGetQueryParametersNameMap));
        Object.assign(headerParamsMapped, convertParamsToRealParams(headerParams as any as Params, GetResultVideoGetHeaderParametersNameMap));
        Object.assign(pathParamsMapped, convertParamsToRealParams(pathParams as any as Params, GetResultVideoGetPathParametersNameMap));
        return this.makeRequest('/operations/{oid}/content', 'get', queryParamsMapped, headerParamsMapped, pathParamsMapped) as Request<GetResultVideoGetResult>;
    }
    /**
    * Generates a motion thumbnail from a video. The Video Thumbnail API provides an automatic summary for videos to let people see a preview or snapshot quickly. Selection of scenes from a video create a preview in form of a short video. 
• The supported input video formats include MP4, MOV, and WMV. Video file size should be no larger than 100MB. 
• The number of scenes displayed in the thumbnail is either chosen by the user or defaults to the optimal duration supported by the Video API’s algorithm.
• A scene is a collection of indexed frames. Scenes are mapped according to sequence in video. 
• Fade in/fade out effects are included in the thumbnail by default, but can be turned off by the user. 
• Audio is included by default, but can be turned off by the user. Pauses in audio are detected to divide video into coherent scenes and avoid breaking sentences of speech.
• Output files are deleted after 24 hours.

* Optimal Duration of Video Thumbnail Supported by Video API shown in table below.






Motion Thumbnail


Video duration (d)
d < 3min
3min < d < 15min
15min < d < 30min
30min < d


Thumbnail duration
15sec (2-3 scenes)
30sec (3-5 scenes)
60sec (5-10 scenes)
90sec (10-15 scenes)



    *
    */
    public thumbnailPost(queryParams: ThumbnailPostQueryParameters, headerParams: ThumbnailPostHeaderParameters) {
        const queryParamsMapped = {} as Params;
        const headerParamsMapped = {} as Params;
        const pathParamsMapped = {} as Params;
        Object.assign(queryParamsMapped, convertParamsToRealParams(queryParams as any as Params, ThumbnailPostQueryParametersNameMap));
        Object.assign(headerParamsMapped, convertParamsToRealParams(headerParams as any as Params, ThumbnailPostHeaderParametersNameMap));
        return this.makeRequest('/generatethumbnail', 'post', queryParamsMapped, headerParamsMapped, pathParamsMapped) as Request<ThumbnailPostResult>;
    }
}