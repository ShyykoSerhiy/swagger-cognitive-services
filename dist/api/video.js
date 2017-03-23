"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const request = require("superagent");
const StabilizationPostQueryParametersNameMap = {
    subscriptionKey: "subscription-key"
};
const GetOperationResultGetQueryParametersNameMap = {
    subscriptionKey: "subscription-key"
};
const FaceDetectionAndTrackingPostQueryParametersNameMap = {
    subscriptionKey: "subscription-key"
};
const MotionDetectionPostQueryParametersNameMap = {
    sensitivityLevel: "sensitivityLevel",
    frameSamplingValue: "frameSamplingValue",
    detectionZones: "detectionZones",
    detectLightChange: "detectLightChange",
    mergeTimeThreshold: "mergeTimeThreshold",
    subscriptionKey: "subscription-key"
};
const GetResultVideoGetQueryParametersNameMap = {
    subscriptionKey: "subscription-key"
};
const ThumbnailPostQueryParametersNameMap = {
    maxMotionThumbnailDurationInSecs: "maxMotionThumbnailDurationInSecs",
    outputAudio: "outputAudio",
    fadeInFadeOut: "fadeInFadeOut",
    subscriptionKey: "subscription-key"
};
const StabilizationPostHeaderParametersNameMap = {
    ocpApimSubscriptionKey: "Ocp-Apim-Subscription-Key"
};
const GetOperationResultGetHeaderParametersNameMap = {
    ocpApimSubscriptionKey: "Ocp-Apim-Subscription-Key"
};
const FaceDetectionAndTrackingPostHeaderParametersNameMap = {
    ocpApimSubscriptionKey: "Ocp-Apim-Subscription-Key"
};
const MotionDetectionPostHeaderParametersNameMap = {
    ocpApimSubscriptionKey: "Ocp-Apim-Subscription-Key"
};
const GetResultVideoGetHeaderParametersNameMap = {
    ocpApimSubscriptionKey: "Ocp-Apim-Subscription-Key"
};
const ThumbnailPostHeaderParametersNameMap = {
    ocpApimSubscriptionKey: "Ocp-Apim-Subscription-Key"
};
const GetOperationResultGetPathParametersNameMap = {
    oid: "oid"
};
const GetResultVideoGetPathParametersNameMap = {
    oid: "oid"
};
const GlobalQueryParametersNameMap = {
    subscriptionKey: "subscription-key"
};
const GlobalHeaderParametersNameMap = {
    ocpApimSubscriptionKey: "Ocp-Apim-Subscription-Key"
};
const convertParamsToRealParams = (params, paramsNameMap) => {
    return Object.keys(params).reduce((prev, key) => {
        return Object.assign(prev, { [paramsNameMap[key]]: params[key] });
    }, {});
};
class VideoAPI {
    constructor() {
        /**
        * Global Query parameters. If defined this parameters will be used for every request.
        */
        this.globalQueryParameters = {};
        /**
        * Global Header parameters. If defined this parameters will be used for every request.
        */
        this.globalHeaderParameters = {};
    }
    makeRequest(path, method, queryParams = {}, headerParams = {}, pathParams = {}) {
        const url = `https://westus.api.cognitive.microsoft.com/video/v1.0${path}`;
        queryParams = Object.assign({}, convertParamsToRealParams(this.globalQueryParameters, GlobalQueryParametersNameMap), queryParams);
        headerParams = Object.assign({}, convertParamsToRealParams(this.globalHeaderParameters, GlobalHeaderParametersNameMap), headerParams);
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
    stabilizationPost(queryParams, headerParams) {
        const queryParamsMapped = {};
        const headerParamsMapped = {};
        const pathParamsMapped = {};
        Object.assign(queryParamsMapped, convertParamsToRealParams(queryParams, StabilizationPostQueryParametersNameMap));
        Object.assign(headerParamsMapped, convertParamsToRealParams(headerParams, StabilizationPostHeaderParametersNameMap));
        return this.makeRequest('/stabilize', 'post', queryParamsMapped, headerParamsMapped, pathParamsMapped);
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
    getOperationResultGet(queryParams, headerParams, pathParams) {
        const queryParamsMapped = {};
        const headerParamsMapped = {};
        const pathParamsMapped = {};
        Object.assign(queryParamsMapped, convertParamsToRealParams(queryParams, GetOperationResultGetQueryParametersNameMap));
        Object.assign(headerParamsMapped, convertParamsToRealParams(headerParams, GetOperationResultGetHeaderParametersNameMap));
        Object.assign(pathParamsMapped, convertParamsToRealParams(pathParams, GetOperationResultGetPathParametersNameMap));
        return this.makeRequest('/operations/{oid}', 'get', queryParamsMapped, headerParamsMapped, pathParamsMapped);
    }
    /**
    * Detects and tracks human faces in a video and returns face locations. • The supported input video formats include MP4, MOV, and WMV. Video file size should be no larger than 100MB. • The detectable face size range is 24x24 to 2048x2048 pixels. The faces out of this range will not be detected. • For each video, the maximum number of faces returned is 64. • Some faces may not be detected due to technical challenges; e.g. very large face angles (head-pose), and large occlusion. Frontal and near-frontal faces have the best results. • Output files are deleted after 24 hours.

    *
    */
    faceDetectionAndTrackingPost(queryParams, headerParams) {
        const queryParamsMapped = {};
        const headerParamsMapped = {};
        const pathParamsMapped = {};
        Object.assign(queryParamsMapped, convertParamsToRealParams(queryParams, FaceDetectionAndTrackingPostQueryParametersNameMap));
        Object.assign(headerParamsMapped, convertParamsToRealParams(headerParams, FaceDetectionAndTrackingPostHeaderParametersNameMap));
        return this.makeRequest('/trackface', 'post', queryParamsMapped, headerParamsMapped, pathParamsMapped);
    }
    /**
    * Detects motion in a video, and returns the frame and duration of the motion that was captured. • The supported input video formats include MP4, MOV, and WMV. Video file size should be no larger than 100MB. • User can input detection zones to set up as areas to detect motion. • User can specify motion sensitivity: high, medium, and low. Higher sensitivity means more motions will be detected at a cost that more false alarms will be reported.• Motion Detection is optimized for stationary background videos. • User can specify whether light change events should be detected. A light change refers to a change in the frame that was caused by a light turning off and on. Some developers do not want to detect this, as they consider it a false alarm. Other developers want to make sure they capture any change, light changes included.• User can specify whether successive motions should be merged together by passing in a parameter (mergeTimeThreshold) For example, if a motion happens from 1 to 4 seconds and the next motion happens from 5 to 10 seconds, some developers will want to count that as one instance of motion.• User can specify which frames to be detected by passing in a parameter (frameSamplingValue).• Some motion may not be detected due to technical challenges; e.g. semi-transparent objects, and some small objects. • Output files are deleted after 24 hours.

    *
    */
    motionDetectionPost(queryParams, headerParams) {
        const queryParamsMapped = {};
        const headerParamsMapped = {};
        const pathParamsMapped = {};
        Object.assign(queryParamsMapped, convertParamsToRealParams(queryParams, MotionDetectionPostQueryParametersNameMap));
        Object.assign(headerParamsMapped, convertParamsToRealParams(headerParams, MotionDetectionPostHeaderParametersNameMap));
        return this.makeRequest('/detectmotion', 'post', queryParamsMapped, headerParamsMapped, pathParamsMapped);
    }
    /**
    * This interface is used for getting result video content. Currently only Stabilization outputs video content as result. The URL to this interface should be retrieved from resourceLocation field of JSON returned from Get Operation Result interface.
    *
    */
    getResultVideoGet(queryParams, headerParams, pathParams) {
        const queryParamsMapped = {};
        const headerParamsMapped = {};
        const pathParamsMapped = {};
        Object.assign(queryParamsMapped, convertParamsToRealParams(queryParams, GetResultVideoGetQueryParametersNameMap));
        Object.assign(headerParamsMapped, convertParamsToRealParams(headerParams, GetResultVideoGetHeaderParametersNameMap));
        Object.assign(pathParamsMapped, convertParamsToRealParams(pathParams, GetResultVideoGetPathParametersNameMap));
        return this.makeRequest('/operations/{oid}/content', 'get', queryParamsMapped, headerParamsMapped, pathParamsMapped);
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
    thumbnailPost(queryParams, headerParams) {
        const queryParamsMapped = {};
        const headerParamsMapped = {};
        const pathParamsMapped = {};
        Object.assign(queryParamsMapped, convertParamsToRealParams(queryParams, ThumbnailPostQueryParametersNameMap));
        Object.assign(headerParamsMapped, convertParamsToRealParams(headerParams, ThumbnailPostHeaderParametersNameMap));
        return this.makeRequest('/generatethumbnail', 'post', queryParamsMapped, headerParamsMapped, pathParamsMapped);
    }
}
exports.VideoAPI = VideoAPI;
//# sourceMappingURL=video.js.map