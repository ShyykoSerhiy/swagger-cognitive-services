"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const request = require("superagent");
const AnalyzeImagePostQueryParametersNameMap = {
    visualFeatures: "visualFeatures",
    details: "details",
    language: "language",
    subscriptionKey: "subscription-key"
};
const GetThumbnailPostQueryParametersNameMap = {
    smartCropping: "smartCropping",
    width: "width",
    height: "height",
    subscriptionKey: "subscription-key"
};
const OCRPostQueryParametersNameMap = {
    language: "language",
    detectOrientation: "detectOrientation ",
    subscriptionKey: "subscription-key"
};
const ListDomainSpecificModelsGetQueryParametersNameMap = {
    subscriptionKey: "subscription-key"
};
const DescribeImagePostQueryParametersNameMap = {
    maxCandidates: "maxCandidates",
    subscriptionKey: "subscription-key"
};
const TagImagePostQueryParametersNameMap = {
    subscriptionKey: "subscription-key"
};
const RecognizeDomainSpecificContentPostQueryParametersNameMap = {
    subscriptionKey: "subscription-key"
};
const AnalyzeImagePostHeaderParametersNameMap = {
    ocpApimSubscriptionKey: "Ocp-Apim-Subscription-Key"
};
const GetThumbnailPostHeaderParametersNameMap = {
    ocpApimSubscriptionKey: "Ocp-Apim-Subscription-Key"
};
const OCRPostHeaderParametersNameMap = {
    ocpApimSubscriptionKey: "Ocp-Apim-Subscription-Key"
};
const ListDomainSpecificModelsGetHeaderParametersNameMap = {
    ocpApimSubscriptionKey: "Ocp-Apim-Subscription-Key"
};
const DescribeImagePostHeaderParametersNameMap = {
    ocpApimSubscriptionKey: "Ocp-Apim-Subscription-Key"
};
const TagImagePostHeaderParametersNameMap = {
    ocpApimSubscriptionKey: "Ocp-Apim-Subscription-Key"
};
const RecognizeDomainSpecificContentPostHeaderParametersNameMap = {
    ocpApimSubscriptionKey: "Ocp-Apim-Subscription-Key"
};
const RecognizeDomainSpecificContentPostPathParametersNameMap = {
    model: "model"
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
class ComputerVisionAPI {
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
        const url = `http://westus.api.cognitive.microsoft.com/vision/v1.0${path}`;
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
    * This operation extracts a rich set of visual features based on the image content.
        
        
        Two input methods are supported -- (1) Uploading an image or (2) specifying an image URL.  Within your request, there is an optional parameter to allow you to choose which features to return.  By default, image categories are returned in the response.
        
        
        A successful response will be returned in JSON.  If the request failed, the response will contain an error code and a message to help understand what went wrong.

Http Method
POST
    *
    */
    analyzeImagePost(queryParams, headerParams) {
        const queryParamsMapped = {};
        const headerParamsMapped = {};
        const pathParamsMapped = {};
        Object.assign(queryParamsMapped, convertParamsToRealParams(queryParams, AnalyzeImagePostQueryParametersNameMap));
        Object.assign(headerParamsMapped, convertParamsToRealParams(headerParams, AnalyzeImagePostHeaderParametersNameMap));
        return this.makeRequest('/analyze', 'post', queryParamsMapped, headerParamsMapped, pathParamsMapped);
    }
    /**
    * This operation generates a thumbnail image with the user-specified width and height.  By default, the service analyzes the image, identifies the region of interest (ROI), and generates smart cropping coordinates based on the ROI.  Smart cropping helps when you specify an aspect ratio that differs from that of the input image

A successful response contains the thumbnail image binary.  If the request failed, the response contains an error code and a message to help determine what went wrong.


Upon failure, the error code and an error message are returned. The error code could be one of InvalidImageUrl, InvalidImageFormat, InvalidImageSize, InvalidThumbnailSize, NotSupportedImage, FailedToProcess, Timeout, or InternalServerError.

Http Method
POST

    *
    */
    getThumbnailPost(queryParams, headerParams) {
        const queryParamsMapped = {};
        const headerParamsMapped = {};
        const pathParamsMapped = {};
        Object.assign(queryParamsMapped, convertParamsToRealParams(queryParams, GetThumbnailPostQueryParametersNameMap));
        Object.assign(headerParamsMapped, convertParamsToRealParams(headerParams, GetThumbnailPostHeaderParametersNameMap));
        return this.makeRequest('/generateThumbnail', 'post', queryParamsMapped, headerParamsMapped, pathParamsMapped);
    }
    /**
    * Optical Character Recognition (OCR) detects text in an image and extracts the recognized characters into a machine-usable character stream.


Upon success, the OCR results will be returned.

Upon failure, the error code together with an error message will be returned. The error code can be one of InvalidImageUrl, InvalidImageFormat, InvalidImageSize, NotSupportedImage,  NotSupportedLanguage, or InternalServerError.

Http Method
POST
    *
    */
    oCRPost(queryParams, headerParams) {
        const queryParamsMapped = {};
        const headerParamsMapped = {};
        const pathParamsMapped = {};
        Object.assign(queryParamsMapped, convertParamsToRealParams(queryParams, OCRPostQueryParametersNameMap));
        Object.assign(headerParamsMapped, convertParamsToRealParams(headerParams, OCRPostHeaderParametersNameMap));
        return this.makeRequest('/ocr', 'post', queryParamsMapped, headerParamsMapped, pathParamsMapped);
    }
    /**
    * This operation returns the list of domain-specific models that are supported by the Computer Vision API.  Currently, the API only supports one domain-specific model: a celebrity recognizer.
        
        
        A successful response will be returned in JSON.  If the request failed, the response will contain an error code and a message to help understand what went wrong.

Http Method
GET
    *
    */
    listDomainSpecificModelsGet(queryParams, headerParams) {
        const queryParamsMapped = {};
        const headerParamsMapped = {};
        const pathParamsMapped = {};
        Object.assign(queryParamsMapped, convertParamsToRealParams(queryParams, ListDomainSpecificModelsGetQueryParametersNameMap));
        Object.assign(headerParamsMapped, convertParamsToRealParams(headerParams, ListDomainSpecificModelsGetHeaderParametersNameMap));
        return this.makeRequest('/models', 'get', queryParamsMapped, headerParamsMapped, pathParamsMapped);
    }
    /**
    * This operation generates a description of an image in human readable language with complete sentences.  The description is based on a collection of content tags, which are also returned by the operation. More than one description can be generated for each image.  Descriptions are ordered by their confidence score. All descriptions are in English.
        
        
        Two input methods are supported -- (1) Uploading an image or (2) specifying an image URL.
        
        
        A successful response will be returned in JSON.  If the request failed, the response will contain an error code and a message to help understand what went wrong.

Http Method
POST
    *
    */
    describeImagePost(queryParams, headerParams) {
        const queryParamsMapped = {};
        const headerParamsMapped = {};
        const pathParamsMapped = {};
        Object.assign(queryParamsMapped, convertParamsToRealParams(queryParams, DescribeImagePostQueryParametersNameMap));
        Object.assign(headerParamsMapped, convertParamsToRealParams(headerParams, DescribeImagePostHeaderParametersNameMap));
        return this.makeRequest('/describe', 'post', queryParamsMapped, headerParamsMapped, pathParamsMapped);
    }
    /**
    * This operation generates a list of words, or tags, that are relevant to the content of the supplied image. The Computer Vision API can return tags based on objects, living beings, scenery or actions found in images. Unlike categories, tags are not organized according to a hierarchical classification system, but correspond to image content. Tags may contain hints to avoid ambiguity or provide context, for example the tag â€œcelloâ€ may be accompanied by the hint â€œmusical instrumentâ€. All tags are in English.
        
        
        Two input methods are supported -- (1) Uploading an image or (2) specifying an image URL.
        
        
        A successful response will be returned in JSON.  If the request failed, the response will contain an error code and a message to help understand what went wrong.

Http Method
POST
    *
    */
    tagImagePost(queryParams, headerParams) {
        const queryParamsMapped = {};
        const headerParamsMapped = {};
        const pathParamsMapped = {};
        Object.assign(queryParamsMapped, convertParamsToRealParams(queryParams, TagImagePostQueryParametersNameMap));
        Object.assign(headerParamsMapped, convertParamsToRealParams(headerParams, TagImagePostHeaderParametersNameMap));
        return this.makeRequest('/tag', 'post', queryParamsMapped, headerParamsMapped, pathParamsMapped);
    }
    /**
    * This operation recognizes content within an image by applying a domain-specific model.  The list of domain-specific models that are supported by the Computer Vision API can be retrieved using the /models GET request.  Currently, the API only provides a single domain-specific model: celebrities.
        
        
        Two input methods are supported -- (1) Uploading an image or (2) specifying an image URL.
        
        
        A successful response will be returned in JSON.  If the request failed, the response will contain an error code and a message to help understand what went wrong.

Http Method
POST
    *
    */
    recognizeDomainSpecificContentPost(queryParams, headerParams, pathParams) {
        const queryParamsMapped = {};
        const headerParamsMapped = {};
        const pathParamsMapped = {};
        Object.assign(queryParamsMapped, convertParamsToRealParams(queryParams, RecognizeDomainSpecificContentPostQueryParametersNameMap));
        Object.assign(headerParamsMapped, convertParamsToRealParams(headerParams, RecognizeDomainSpecificContentPostHeaderParametersNameMap));
        Object.assign(pathParamsMapped, convertParamsToRealParams(pathParams, RecognizeDomainSpecificContentPostPathParametersNameMap));
        return this.makeRequest('/models/{model}/analyze', 'post', queryParamsMapped, headerParamsMapped, pathParamsMapped);
    }
}
exports.ComputerVisionAPI = ComputerVisionAPI;
//# sourceMappingURL=computerVision.js.map