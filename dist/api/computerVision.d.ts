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
export interface ListDomainSpecificModelsGetQueryParameters {
    /**
    * subscription key in url
    * Real name : subscription-key
    */
    subscriptionKey?: string;
}
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
export interface TagImagePostQueryParameters {
    /**
    * subscription key in url
    * Real name : subscription-key
    */
    subscriptionKey?: string;
}
export interface RecognizeDomainSpecificContentPostQueryParameters {
    /**
    * subscription key in url
    * Real name : subscription-key
    */
    subscriptionKey?: string;
}
export interface AnalyzeImagePostHeaderParameters {
    /**
    * subscription key in header
    * Real name : Ocp-Apim-Subscription-Key
    */
    ocpApimSubscriptionKey?: string;
}
export interface GetThumbnailPostHeaderParameters {
    /**
    * subscription key in header
    * Real name : Ocp-Apim-Subscription-Key
    */
    ocpApimSubscriptionKey?: string;
}
export interface OCRPostHeaderParameters {
    /**
    * subscription key in header
    * Real name : Ocp-Apim-Subscription-Key
    */
    ocpApimSubscriptionKey?: string;
}
export interface ListDomainSpecificModelsGetHeaderParameters {
    /**
    * subscription key in header
    * Real name : Ocp-Apim-Subscription-Key
    */
    ocpApimSubscriptionKey?: string;
}
export interface DescribeImagePostHeaderParameters {
    /**
    * subscription key in header
    * Real name : Ocp-Apim-Subscription-Key
    */
    ocpApimSubscriptionKey?: string;
}
export interface TagImagePostHeaderParameters {
    /**
    * subscription key in header
    * Real name : Ocp-Apim-Subscription-Key
    */
    ocpApimSubscriptionKey?: string;
}
export interface RecognizeDomainSpecificContentPostHeaderParameters {
    /**
    * subscription key in header
    * Real name : Ocp-Apim-Subscription-Key
    */
    ocpApimSubscriptionKey?: string;
}
export interface RecognizeDomainSpecificContentPostPathParameters {
    /**
    * The domain-specific content to recognize.
    * Real name : model
    */
    model: string;
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
export declare type AnalyzeImagePostResult = {
    "categories": ({
        "name": string;
        "score": number;
    } | {
        "name": string;
        "score": number;
        "detail": {
            "celebrities": {
                "name": string;
                "faceRectangle": {
                    "left": number;
                    "top": number;
                    "width": number;
                    "height": number;
                };
                "confidence": number;
            }[];
        };
    })[];
    "adult": {
        "isAdultContent": boolean;
        "isRacyContent": boolean;
        "adultScore": number;
        "racyScore": number;
    };
    "tags": {
        "name": string;
        "confidence": number;
    }[];
    "description": {
        "tags": string[];
        "captions": {
            "text": string;
            "confidence": number;
        }[];
    };
    "requestId": string;
    "metadata": {
        "width": number;
        "height": number;
        "format": string;
    };
    "faces": {
        "age": number;
        "gender": string;
        "faceRectangle": {
            "left": number;
            "top": number;
            "width": number;
            "height": number;
        };
    }[];
    "color": {
        "dominantColorForeground": string;
        "dominantColorBackground": string;
        "dominantColors": string[];
        "accentColor": string;
        "isBWImg": boolean;
    };
    "imageType": {
        "clipArtType": number;
        "lineDrawingType": number;
    };
};
export declare type GetThumbnailPostResult = {};
export declare type OCRPostResult = {
    "language": string;
    "textAngle": number;
    "orientation": string;
    "regions": {
        "boundingBox": string;
        "lines": {
            "boundingBox": string;
            "words": {
                "boundingBox": string;
                "text": string;
            }[];
        }[];
    }[];
};
export declare type ListDomainSpecificModelsGetResult = {
    "models": {
        "name": string;
        "categories": string[];
    }[];
};
export declare type DescribeImagePostResult = {
    "description": {
        "tags": string[];
        "captions": {
            "text": string;
            "confidence": number;
        }[];
    };
    "requestId": string;
    "metadata": {
        "width": number;
        "height": number;
        "format": string;
    };
};
export declare type TagImagePostResult = {
    "tags": {
        "name": string;
        "confidence": number;
    }[];
    "requestId": string;
    "metadata": {
        "width": number;
        "height": number;
        "format": string;
    };
};
export declare type RecognizeDomainSpecificContentPostResult = {
    "requestId": string;
    "metadata": {
        "width": number;
        "height": number;
        "format": string;
    };
    "result": {
        "celebrities": {
            "name": string;
            "faceRectangle": {
                "left": number;
                "top": number;
                "width": number;
                "height": number;
            };
            "confidence": number;
        }[];
    };
};
export declare type MethodType = 'post' | 'get' | 'put' | 'delete' | 'patch';
export declare class ComputerVisionAPI {
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
    * This operation extracts a rich set of visual features based on the image content.
        
        
        Two input methods are supported -- (1) Uploading an image or (2) specifying an image URL.  Within your request, there is an optional parameter to allow you to choose which features to return.  By default, image categories are returned in the response.
        
        
        A successful response will be returned in JSON.  If the request failed, the response will contain an error code and a message to help understand what went wrong.

Http Method
POST
    *
    */
    analyzeImagePost(queryParams: AnalyzeImagePostQueryParameters, headerParams: AnalyzeImagePostHeaderParameters): Request<AnalyzeImagePostResult>;
    /**
    * This operation generates a thumbnail image with the user-specified width and height.  By default, the service analyzes the image, identifies the region of interest (ROI), and generates smart cropping coordinates based on the ROI.  Smart cropping helps when you specify an aspect ratio that differs from that of the input image

A successful response contains the thumbnail image binary.  If the request failed, the response contains an error code and a message to help determine what went wrong.


Upon failure, the error code and an error message are returned. The error code could be one of InvalidImageUrl, InvalidImageFormat, InvalidImageSize, InvalidThumbnailSize, NotSupportedImage, FailedToProcess, Timeout, or InternalServerError.

Http Method
POST

    *
    */
    getThumbnailPost(queryParams: GetThumbnailPostQueryParameters, headerParams: GetThumbnailPostHeaderParameters): Request<GetThumbnailPostResult>;
    /**
    * Optical Character Recognition (OCR) detects text in an image and extracts the recognized characters into a machine-usable character stream.


Upon success, the OCR results will be returned.

Upon failure, the error code together with an error message will be returned. The error code can be one of InvalidImageUrl, InvalidImageFormat, InvalidImageSize, NotSupportedImage,  NotSupportedLanguage, or InternalServerError.

Http Method
POST
    *
    */
    oCRPost(queryParams: OCRPostQueryParameters, headerParams: OCRPostHeaderParameters): Request<OCRPostResult>;
    /**
    * This operation returns the list of domain-specific models that are supported by the Computer Vision API.  Currently, the API only supports one domain-specific model: a celebrity recognizer.
        
        
        A successful response will be returned in JSON.  If the request failed, the response will contain an error code and a message to help understand what went wrong.

Http Method
GET
    *
    */
    listDomainSpecificModelsGet(queryParams: ListDomainSpecificModelsGetQueryParameters, headerParams: ListDomainSpecificModelsGetHeaderParameters): Request<ListDomainSpecificModelsGetResult>;
    /**
    * This operation generates a description of an image in human readable language with complete sentences.  The description is based on a collection of content tags, which are also returned by the operation. More than one description can be generated for each image.  Descriptions are ordered by their confidence score. All descriptions are in English.
        
        
        Two input methods are supported -- (1) Uploading an image or (2) specifying an image URL.
        
        
        A successful response will be returned in JSON.  If the request failed, the response will contain an error code and a message to help understand what went wrong.

Http Method
POST
    *
    */
    describeImagePost(queryParams: DescribeImagePostQueryParameters, headerParams: DescribeImagePostHeaderParameters): Request<DescribeImagePostResult>;
    /**
    * This operation generates a list of words, or tags, that are relevant to the content of the supplied image. The Computer Vision API can return tags based on objects, living beings, scenery or actions found in images. Unlike categories, tags are not organized according to a hierarchical classification system, but correspond to image content. Tags may contain hints to avoid ambiguity or provide context, for example the tag â€œcelloâ€ may be accompanied by the hint â€œmusical instrumentâ€. All tags are in English.
        
        
        Two input methods are supported -- (1) Uploading an image or (2) specifying an image URL.
        
        
        A successful response will be returned in JSON.  If the request failed, the response will contain an error code and a message to help understand what went wrong.

Http Method
POST
    *
    */
    tagImagePost(queryParams: TagImagePostQueryParameters, headerParams: TagImagePostHeaderParameters): Request<TagImagePostResult>;
    /**
    * This operation recognizes content within an image by applying a domain-specific model.  The list of domain-specific models that are supported by the Computer Vision API can be retrieved using the /models GET request.  Currently, the API only provides a single domain-specific model: celebrities.
        
        
        Two input methods are supported -- (1) Uploading an image or (2) specifying an image URL.
        
        
        A successful response will be returned in JSON.  If the request failed, the response will contain an error code and a message to help understand what went wrong.

Http Method
POST
    *
    */
    recognizeDomainSpecificContentPost(queryParams: RecognizeDomainSpecificContentPostQueryParameters, headerParams: RecognizeDomainSpecificContentPostHeaderParameters, pathParams: RecognizeDomainSpecificContentPostPathParameters): Request<RecognizeDomainSpecificContentPostResult>;
}
