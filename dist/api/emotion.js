"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const request = require("superagent");
const EmotionRecognitionPostQueryParametersNameMap = {
    subscriptionKey: "subscription-key"
};
const EmotionRecognitionInVideoPostQueryParametersNameMap = {
    outputStyle: "outputStyle",
    subscriptionKey: "subscription-key"
};
const GetRecognitionInVideoOperationResultGetQueryParametersNameMap = {
    subscriptionKey: "subscription-key"
};
const EmotionRecognitionPostHeaderParametersNameMap = {
    ocpApimSubscriptionKey: "Ocp-Apim-Subscription-Key"
};
const EmotionRecognitionInVideoPostHeaderParametersNameMap = {
    ocpApimSubscriptionKey: "Ocp-Apim-Subscription-Key"
};
const GetRecognitionInVideoOperationResultGetHeaderParametersNameMap = {
    ocpApimSubscriptionKey: "Ocp-Apim-Subscription-Key"
};
const GetRecognitionInVideoOperationResultGetPathParametersNameMap = {
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
class EmotionAPI {
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
        const url = `https://westus.api.cognitive.microsoft.com/emotion/v1.0${path}`;
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
    * Recognizes the emotions expressed by one or more people in an image, as well as returns a bounding box for the face. The emotions detected are happiness, sadness, surprise, anger, fear, contempt, and disgust or neutral. • The supported input image formats includes JPEG, PNG, GIF(the first frame), BMP. Image file size should be no larger than 4MB. • If a user has already called the Face API, they can submit the face rectangles as an optional input. Otherwise, Emotion API will first compute the rectangles. • The detectable face size range is 36x36 to 4096x4096 pixels. Faces out of this range will not be detected. • For each image, the maximum number of faces detected is 64 and the faces are ranked by face rectangle size in descending order. If no face is detected, an empty array will be returned. • Some faces may not be detected due to technical challenges, e.g. very large face angles (head-pose), large occlusion. Frontal and near-frontal faces have the best results. • The emotions contempt and disgust are experimental.
    *
    */
    emotionRecognitionPost(queryParams, headerParams) {
        const queryParamsMapped = {};
        const headerParamsMapped = {};
        const pathParamsMapped = {};
        Object.assign(queryParamsMapped, convertParamsToRealParams(queryParams, EmotionRecognitionPostQueryParametersNameMap));
        Object.assign(headerParamsMapped, convertParamsToRealParams(headerParams, EmotionRecognitionPostHeaderParametersNameMap));
        return this.makeRequest('/recognize', 'post', queryParamsMapped, headerParamsMapped, pathParamsMapped);
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
    emotionRecognitionInVideoPost(queryParams, headerParams) {
        const queryParamsMapped = {};
        const headerParamsMapped = {};
        const pathParamsMapped = {};
        Object.assign(queryParamsMapped, convertParamsToRealParams(queryParams, EmotionRecognitionInVideoPostQueryParametersNameMap));
        Object.assign(headerParamsMapped, convertParamsToRealParams(headerParams, EmotionRecognitionInVideoPostHeaderParametersNameMap));
        return this.makeRequest('/recognizeinvideo', 'post', queryParamsMapped, headerParamsMapped, pathParamsMapped);
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
    getRecognitionInVideoOperationResultGet(queryParams, headerParams, pathParams) {
        const queryParamsMapped = {};
        const headerParamsMapped = {};
        const pathParamsMapped = {};
        Object.assign(queryParamsMapped, convertParamsToRealParams(queryParams, GetRecognitionInVideoOperationResultGetQueryParametersNameMap));
        Object.assign(headerParamsMapped, convertParamsToRealParams(headerParams, GetRecognitionInVideoOperationResultGetHeaderParametersNameMap));
        Object.assign(pathParamsMapped, convertParamsToRealParams(pathParams, GetRecognitionInVideoOperationResultGetPathParametersNameMap));
        return this.makeRequest('/operations/{oid}', 'get', queryParamsMapped, headerParamsMapped, pathParamsMapped);
    }
}
exports.EmotionAPI = EmotionAPI;
//# sourceMappingURL=emotion.js.map