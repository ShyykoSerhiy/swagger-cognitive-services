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

export interface AnalyzeImagePostQueryParameters {
    /**
    * A string indicating what visual feature types to return. Multiple values should be comma-separated. 
&lt;br/&gt;Valid visual feature types include:
&lt;br/&gt;	
&lt;ul&gt;
&lt;li&gt;&lt;b&gt;Categories&lt;/b&gt; - categorizes image content according to a taxonomy defined in documentation. &lt;/li&gt;
&lt;li&gt;&lt;b&gt;Tags&lt;/b&gt; - tags the image with a detailed list of words related to the image content. &lt;/li&gt;
&lt;li&gt;&lt;b&gt;Description&lt;/b&gt; - describes the image content with a complete English sentence. &lt;/li&gt;
&lt;li&gt;&lt;b&gt;Faces&lt;/b&gt; - detects if faces are present. If present, generate coordinates, gender and age.&lt;/li&gt; 
&lt;li&gt;&lt;b &gt;ImageType&lt;/b&gt; - detects if image is clipart or a line drawing.&lt;/li&gt;
&lt;li&gt;&lt;b&gt; Color&lt;/b&gt; - determines the accent color, dominant color, and whether an image is black&amp;white.&lt;/li&gt;
&lt;li&gt;&lt;b&gt;Adult&lt;/b&gt; - detects if the image is pornographic in nature (depicts nudity or a sex act).  Sexually suggestive content is also detected.&lt;/li&gt;
&lt;/ul&gt;
    * Real name : visualFeatures
    */    
    visualFeatures?: string;
    /**
    * A string indicating which domain-specific details to return. Multiple values should be comma-separated. 
&lt;br/&gt;Valid visual feature types include:
&lt;br/&gt;	
&lt;ul&gt;
&lt;li&gt;&lt;b &gt;Celebrities&lt;/b&gt; - identifies celebrities if detected in the image.&lt;/li&gt;
&lt;/ul&gt;

    * Real name : details
    */    
    details?: string;
    /**
    * A string indicating which language to return. The service will return recognition results in specified language. If this parameter is not specified, the default value is &amp;quot;en&amp;quot;.&lt;br /&gt;
Supported languages:
&lt;ul&gt;
&lt;li&gt;&lt;b &gt;en&lt;/b&gt; - English, Default.&lt;/li&gt;
&lt;li&gt;&lt;b &gt;zh&lt;/b&gt; - Simplified Chinese.&lt;/li&gt;
&lt;/ul&gt;
    * Real name : language
    */    
    language?: string;
    /**
    * subscription key in url
    * Real name : subscription-key
    */    
    subscriptionKey?: string;
}
const AnalyzeImagePostQueryParametersNameMap = {
    visualFeatures: "visualFeatures",
    details: "details",
    language: "language",
    subscriptionKey: "subscription-key"
};
export interface GetThumbnailPostQueryParameters {
    /**
    * Boolean flag for enabling smart cropping.
    * Real name : smartCropping
    */    
    smartCropping?: boolean;
    /**
    * Width of the thumbnail.  It must be between 1 and 1024. Recommended minimum of 50.
    * Real name : width
    */    
    width: number;
    /**
    * Height of the thumbnail. It must be between 1 and 1024. Recommended minimum of 50.
    * Real name : height
    */    
    height: number;
    /**
    * subscription key in url
    * Real name : subscription-key
    */    
    subscriptionKey?: string;
}
const GetThumbnailPostQueryParametersNameMap = {
    smartCropping: "smartCropping",
    width: "width",
    height: "height",
    subscriptionKey: "subscription-key"
};
export interface OCRPostQueryParameters {
    /**
    * The BCP-47 language code of the text to be detected in the image.The default value is &amp;quot;unk&amp;quot;, then the service will auto detect the language of the text in the image.&lt;br /&gt;
    &lt;br /&gt;
    Supported languages:
    &lt;ul style&#x3D;&quot;margin-left:.375in;direction:ltr;unicode-bidi:embed;
 margin-top:0in;margin-bottom:0in&quot; type&#x3D;&quot;disc&quot;&gt;
        &lt;li&gt;unk (AutoDetect)&lt;/li&gt;
        &lt;li&gt;zh-Hans (ChineseSimplified)&lt;/li&gt;
        &lt;li&gt;zh-Hant (ChineseTraditional)&lt;/li&gt;
        &lt;li&gt;cs (Czech)&lt;/li&gt;
        &lt;li&gt;da (Danish)&lt;/li&gt;
        &lt;li&gt;nl (Dutch)&lt;/li&gt;
        &lt;li&gt;en (English)&lt;/li&gt;
        &lt;li&gt;fi (Finnish)&lt;/li&gt;
        &lt;li&gt;fr (French)&lt;/li&gt;
        &lt;li&gt;de (German)&lt;/li&gt;
        &lt;li&gt;el (Greek)&lt;/li&gt;
        &lt;li&gt;hu (Hungarian)&lt;/li&gt;
        &lt;li&gt;it (Italian)&lt;/li&gt;
        &lt;li&gt;Ja (Japanese)&lt;/li&gt;
        &lt;li&gt;ko (Korean)&lt;/li&gt;
        &lt;li&gt;nb (Norwegian)&lt;/li&gt;
        &lt;li&gt;pl (Polish)&lt;/li&gt;
        &lt;li&gt;pt (Portuguese,&lt;/li&gt;
        &lt;li&gt;ru (Russian)&lt;/li&gt;
        &lt;li&gt;es (Spanish)&lt;/li&gt;
        &lt;li&gt;sv (Swedish)&lt;/li&gt;
        &lt;li&gt;tr (Turkish)&lt;/li&gt;
    &lt;/ul&gt;
    * Real name : language
    */    
    language?: string;
    /**
    * Whether detect the text orientation in the image. With detectOrientation&#x3D;true the OCR service tries to detect the image orientation and correct it before further processing (e.g. if it&#x27;s upside-down). 
    * Real name : detectOrientation 
    */    
    detectOrientation?: boolean;
    /**
    * subscription key in url
    * Real name : subscription-key
    */    
    subscriptionKey?: string;
}
const OCRPostQueryParametersNameMap = {
    language: "language",
    detectOrientation: "detectOrientation ",
    subscriptionKey: "subscription-key"
};
export interface ListDomainSpecificModelsGetQueryParameters {
    /**
    * subscription key in url
    * Real name : subscription-key
    */    
    subscriptionKey?: string;
}
const ListDomainSpecificModelsGetQueryParametersNameMap = {
    subscriptionKey: "subscription-key"
};
export interface DescribeImagePostQueryParameters {
    /**
    * Maximum number of candidate descriptions to be returned.  The default is 1.
    * Real name : maxCandidates
    */    
    maxCandidates?: string;
    /**
    * subscription key in url
    * Real name : subscription-key
    */    
    subscriptionKey?: string;
}
const DescribeImagePostQueryParametersNameMap = {
    maxCandidates: "maxCandidates",
    subscriptionKey: "subscription-key"
};
export interface TagImagePostQueryParameters {
    /**
    * subscription key in url
    * Real name : subscription-key
    */    
    subscriptionKey?: string;
}
const TagImagePostQueryParametersNameMap = {
    subscriptionKey: "subscription-key"
};
export interface RecognizeDomainSpecificContentPostQueryParameters {
    /**
    * subscription key in url
    * Real name : subscription-key
    */    
    subscriptionKey?: string;
}
const RecognizeDomainSpecificContentPostQueryParametersNameMap = {
    subscriptionKey: "subscription-key"
};
//Interfaces for headerParameters of the methods

export interface AnalyzeImagePostHeaderParameters {
    /**
    * subscription key in header
    * Real name : Ocp-Apim-Subscription-Key
    */    
    ocpApimSubscriptionKey?: string;
}
const AnalyzeImagePostHeaderParametersNameMap = {
    ocpApimSubscriptionKey: "Ocp-Apim-Subscription-Key"
};
export interface GetThumbnailPostHeaderParameters {
    /**
    * subscription key in header
    * Real name : Ocp-Apim-Subscription-Key
    */    
    ocpApimSubscriptionKey?: string;
}
const GetThumbnailPostHeaderParametersNameMap = {
    ocpApimSubscriptionKey: "Ocp-Apim-Subscription-Key"
};
export interface OCRPostHeaderParameters {
    /**
    * subscription key in header
    * Real name : Ocp-Apim-Subscription-Key
    */    
    ocpApimSubscriptionKey?: string;
}
const OCRPostHeaderParametersNameMap = {
    ocpApimSubscriptionKey: "Ocp-Apim-Subscription-Key"
};
export interface ListDomainSpecificModelsGetHeaderParameters {
    /**
    * subscription key in header
    * Real name : Ocp-Apim-Subscription-Key
    */    
    ocpApimSubscriptionKey?: string;
}
const ListDomainSpecificModelsGetHeaderParametersNameMap = {
    ocpApimSubscriptionKey: "Ocp-Apim-Subscription-Key"
};
export interface DescribeImagePostHeaderParameters {
    /**
    * subscription key in header
    * Real name : Ocp-Apim-Subscription-Key
    */    
    ocpApimSubscriptionKey?: string;
}
const DescribeImagePostHeaderParametersNameMap = {
    ocpApimSubscriptionKey: "Ocp-Apim-Subscription-Key"
};
export interface TagImagePostHeaderParameters {
    /**
    * subscription key in header
    * Real name : Ocp-Apim-Subscription-Key
    */    
    ocpApimSubscriptionKey?: string;
}
const TagImagePostHeaderParametersNameMap = {
    ocpApimSubscriptionKey: "Ocp-Apim-Subscription-Key"
};
export interface RecognizeDomainSpecificContentPostHeaderParameters {
    /**
    * subscription key in header
    * Real name : Ocp-Apim-Subscription-Key
    */    
    ocpApimSubscriptionKey?: string;
}
const RecognizeDomainSpecificContentPostHeaderParametersNameMap = {
    ocpApimSubscriptionKey: "Ocp-Apim-Subscription-Key"
};
//Interfaces for pathParameters of the methods

export interface RecognizeDomainSpecificContentPostPathParameters {
    /**
    * The domain-specific content to recognize.
    * Real name : model
    */    
    model: string;
}
const RecognizeDomainSpecificContentPostPathParametersNameMap = {
    model: "model"
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
export type AnalyzeImagePostResult = { "categories": ({ "name": string; "score": number; } | { "name": string; "score": number; "detail": { "celebrities": { "name": string; "faceRectangle": { "left": number; "top": number; "width": number; "height": number; }; "confidence": number; }[]; }; })[]; "adult": { "isAdultContent": boolean; "isRacyContent": boolean; "adultScore": number; "racyScore": number; }; "tags": { "name": string; "confidence": number; }[]; "description": { "tags": string[]; "captions": { "text": string; "confidence": number; }[]; }; "requestId": string; "metadata": { "width": number; "height": number; "format": string; }; "faces": { "age": number; "gender": string; "faceRectangle": { "left": number; "top": number; "width": number; "height": number; }; }[]; "color": { "dominantColorForeground": string; "dominantColorBackground": string; "dominantColors": string[]; "accentColor": string; "isBWImg": boolean; }; "imageType": { "clipArtType": number; "lineDrawingType": number; }; };
export type GetThumbnailPostResult = {};
export type OCRPostResult = { "language": string; "textAngle": number; "orientation": string; "regions": { "boundingBox": string; "lines": { "boundingBox": string; "words": { "boundingBox": string; "text": string; }[]; }[]; }[]; };
export type ListDomainSpecificModelsGetResult = { "models": { "name": string; "categories": string[]; }[]; };
export type DescribeImagePostResult = { "description": { "tags": string[]; "captions": { "text": string; "confidence": number; }[]; }; "requestId": string; "metadata": { "width": number; "height": number; "format": string; }; };
export type TagImagePostResult = { "tags": { "name": string; "confidence": number; }[]; "requestId": string; "metadata": { "width": number; "height": number; "format": string; }; };
export type RecognizeDomainSpecificContentPostResult = { "requestId": string; "metadata": { "width": number; "height": number; "format": string; }; "result": { "celebrities": { "name": string; "faceRectangle": { "left": number; "top": number; "width": number; "height": number; }; "confidence": number; }[]; }; };

export type MethodType = 'post' | 'get' | 'put' | 'delete' | 'patch';
interface Params {
    [key: string]: string
}

const convertParamsToRealParams = (params: Params, paramsNameMap: Params) => {
    return Object.keys(params).reduce((prev, key) => {
        return Object.assign(prev, { [paramsNameMap[key]]: params[key] });
    }, {}) as Params;
}

export class ComputerVisionAPI {   
    /**
    * Global Query parameters. If defined this parameters will be used for every request.
    */
    public globalQueryParameters: GlobalQueryParameters = {};    
    /**
    * Global Header parameters. If defined this parameters will be used for every request.
    */
    public globalHeaderParameters: GlobalHeaderParameters = {};    

    private makeRequest(path: string, method: MethodType, queryParams: Params = {}, headerParams: Params = {}, pathParams: Params = {}) {        
        const url = `http://westus.api.cognitive.microsoft.com/vision/v1.0${path}`;
        
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
    * This operation extracts a rich set of visual features based on the image content. 
        
        
        Two input methods are supported -- (1) Uploading an image or (2) specifying an image URL.  Within your request, there is an optional parameter to allow you to choose which features to return.  By default, image categories are returned in the response. 
        
        
        A successful response will be returned in JSON.  If the request failed, the response will contain an error code and a message to help understand what went wrong. 

Http Method
POST
    *
    */
    public analyzeImagePost(queryParams: AnalyzeImagePostQueryParameters, headerParams: AnalyzeImagePostHeaderParameters) {
        const queryParamsMapped = {} as Params;
        const headerParamsMapped = {} as Params;
        const pathParamsMapped = {} as Params;
        Object.assign(queryParamsMapped, convertParamsToRealParams(queryParams as any as Params, AnalyzeImagePostQueryParametersNameMap));
        Object.assign(headerParamsMapped, convertParamsToRealParams(headerParams as any as Params, AnalyzeImagePostHeaderParametersNameMap));
        return this.makeRequest('/analyze', 'post', queryParamsMapped, headerParamsMapped, pathParamsMapped) as Request<AnalyzeImagePostResult>;
    }
    /**
    * This operation generates a thumbnail image with the user-specified width and height.  By default, the service analyzes the image, identifies the region of interest (ROI), and generates smart cropping coordinates based on the ROI.  Smart cropping helps when you specify an aspect ratio that differs from that of the input image

A successful response contains the thumbnail image binary.  If the request failed, the response contains an error code and a message to help determine what went wrong.


Upon failure, the error code and an error message are returned. The error code could be one of InvalidImageUrl, InvalidImageFormat, InvalidImageSize, InvalidThumbnailSize, NotSupportedImage, FailedToProcess, Timeout, or InternalServerError.

Http Method
POST

    *
    */
    public getThumbnailPost(queryParams: GetThumbnailPostQueryParameters, headerParams: GetThumbnailPostHeaderParameters) {
        const queryParamsMapped = {} as Params;
        const headerParamsMapped = {} as Params;
        const pathParamsMapped = {} as Params;
        Object.assign(queryParamsMapped, convertParamsToRealParams(queryParams as any as Params, GetThumbnailPostQueryParametersNameMap));
        Object.assign(headerParamsMapped, convertParamsToRealParams(headerParams as any as Params, GetThumbnailPostHeaderParametersNameMap));
        return this.makeRequest('/generateThumbnail', 'post', queryParamsMapped, headerParamsMapped, pathParamsMapped) as Request<GetThumbnailPostResult>;
    }
    /**
    * Optical Character Recognition (OCR) detects text in an image and extracts the recognized characters into a machine-usable character stream.   


Upon success, the OCR results will be returned. 

Upon failure, the error code together with an error message will be returned. The error code can be one of InvalidImageUrl, InvalidImageFormat, InvalidImageSize, NotSupportedImage,  NotSupportedLanguage, or InternalServerError.

Http Method
POST
    *
    */
    public oCRPost(queryParams: OCRPostQueryParameters, headerParams: OCRPostHeaderParameters) {
        const queryParamsMapped = {} as Params;
        const headerParamsMapped = {} as Params;
        const pathParamsMapped = {} as Params;
        Object.assign(queryParamsMapped, convertParamsToRealParams(queryParams as any as Params, OCRPostQueryParametersNameMap));
        Object.assign(headerParamsMapped, convertParamsToRealParams(headerParams as any as Params, OCRPostHeaderParametersNameMap));
        return this.makeRequest('/ocr', 'post', queryParamsMapped, headerParamsMapped, pathParamsMapped) as Request<OCRPostResult>;
    }
    /**
    * This operation returns the list of domain-specific models that are supported by the Computer Vision API.  Currently, the API only supports one domain-specific model: a celebrity recognizer.
        
        
        A successful response will be returned in JSON.  If the request failed, the response will contain an error code and a message to help understand what went wrong. 

Http Method
GET
    *
    */
    public listDomainSpecificModelsGet(queryParams: ListDomainSpecificModelsGetQueryParameters, headerParams: ListDomainSpecificModelsGetHeaderParameters) {
        const queryParamsMapped = {} as Params;
        const headerParamsMapped = {} as Params;
        const pathParamsMapped = {} as Params;
        Object.assign(queryParamsMapped, convertParamsToRealParams(queryParams as any as Params, ListDomainSpecificModelsGetQueryParametersNameMap));
        Object.assign(headerParamsMapped, convertParamsToRealParams(headerParams as any as Params, ListDomainSpecificModelsGetHeaderParametersNameMap));
        return this.makeRequest('/models', 'get', queryParamsMapped, headerParamsMapped, pathParamsMapped) as Request<ListDomainSpecificModelsGetResult>;
    }
    /**
    * This operation generates a description of an image in human readable language with complete sentences.  The description is based on a collection of content tags, which are also returned by the operation. More than one description can be generated for each image.  Descriptions are ordered by their confidence score. All descriptions are in English.
        
        
        Two input methods are supported -- (1) Uploading an image or (2) specifying an image URL.  
        
        
        A successful response will be returned in JSON.  If the request failed, the response will contain an error code and a message to help understand what went wrong. 

Http Method
POST
    *
    */
    public describeImagePost(queryParams: DescribeImagePostQueryParameters, headerParams: DescribeImagePostHeaderParameters) {
        const queryParamsMapped = {} as Params;
        const headerParamsMapped = {} as Params;
        const pathParamsMapped = {} as Params;
        Object.assign(queryParamsMapped, convertParamsToRealParams(queryParams as any as Params, DescribeImagePostQueryParametersNameMap));
        Object.assign(headerParamsMapped, convertParamsToRealParams(headerParams as any as Params, DescribeImagePostHeaderParametersNameMap));
        return this.makeRequest('/describe', 'post', queryParamsMapped, headerParamsMapped, pathParamsMapped) as Request<DescribeImagePostResult>;
    }
    /**
    * This operation generates a list of words, or tags, that are relevant to the content of the supplied image. The Computer Vision API can return tags based on objects, living beings, scenery or actions found in images. Unlike categories, tags are not organized according to a hierarchical classification system, but correspond to image content. Tags may contain hints to avoid ambiguity or provide context, for example the tag â€œcelloâ€ may be accompanied by the hint â€œmusical instrumentâ€. All tags are in English.
        
        
        Two input methods are supported -- (1) Uploading an image or (2) specifying an image URL.  
        
        
        A successful response will be returned in JSON.  If the request failed, the response will contain an error code and a message to help understand what went wrong. 

Http Method
POST
    *
    */
    public tagImagePost(queryParams: TagImagePostQueryParameters, headerParams: TagImagePostHeaderParameters) {
        const queryParamsMapped = {} as Params;
        const headerParamsMapped = {} as Params;
        const pathParamsMapped = {} as Params;
        Object.assign(queryParamsMapped, convertParamsToRealParams(queryParams as any as Params, TagImagePostQueryParametersNameMap));
        Object.assign(headerParamsMapped, convertParamsToRealParams(headerParams as any as Params, TagImagePostHeaderParametersNameMap));
        return this.makeRequest('/tag', 'post', queryParamsMapped, headerParamsMapped, pathParamsMapped) as Request<TagImagePostResult>;
    }
    /**
    * This operation recognizes content within an image by applying a domain-specific model.  The list of domain-specific models that are supported by the Computer Vision API can be retrieved using the /models GET request.  Currently, the API only provides a single domain-specific model: celebrities.
        
        
        Two input methods are supported -- (1) Uploading an image or (2) specifying an image URL.  
        
        
        A successful response will be returned in JSON.  If the request failed, the response will contain an error code and a message to help understand what went wrong. 

Http Method
POST
    *
    */
    public recognizeDomainSpecificContentPost(queryParams: RecognizeDomainSpecificContentPostQueryParameters, headerParams: RecognizeDomainSpecificContentPostHeaderParameters, pathParams: RecognizeDomainSpecificContentPostPathParameters) {
        const queryParamsMapped = {} as Params;
        const headerParamsMapped = {} as Params;
        const pathParamsMapped = {} as Params;
        Object.assign(queryParamsMapped, convertParamsToRealParams(queryParams as any as Params, RecognizeDomainSpecificContentPostQueryParametersNameMap));
        Object.assign(headerParamsMapped, convertParamsToRealParams(headerParams as any as Params, RecognizeDomainSpecificContentPostHeaderParametersNameMap));
        Object.assign(pathParamsMapped, convertParamsToRealParams(pathParams as any as Params, RecognizeDomainSpecificContentPostPathParametersNameMap));
        return this.makeRequest('/models/{model}/analyze', 'post', queryParamsMapped, headerParamsMapped, pathParamsMapped) as Request<RecognizeDomainSpecificContentPostResult>;
    }
}