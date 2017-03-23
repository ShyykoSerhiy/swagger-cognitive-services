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

export interface VerificationProfileCreateProfilePostQueryParameters {
    /**
    * subscription key in url
    * Real name : subscription-key
    */    
    subscriptionKey?: string;
}
const VerificationProfileCreateProfilePostQueryParametersNameMap = {
    subscriptionKey: "subscription-key"
};
export interface VerificationProfileGetAllProfilesGetQueryParameters {
    /**
    * subscription key in url
    * Real name : subscription-key
    */    
    subscriptionKey?: string;
}
const VerificationProfileGetAllProfilesGetQueryParametersNameMap = {
    subscriptionKey: "subscription-key"
};
export interface VerificationProfileDeleteProfileDeleteQueryParameters {
    /**
    * subscription key in url
    * Real name : subscription-key
    */    
    subscriptionKey?: string;
}
const VerificationProfileDeleteProfileDeleteQueryParametersNameMap = {
    subscriptionKey: "subscription-key"
};
export interface VerificationProfileGetProfileGetQueryParameters {
    /**
    * subscription key in url
    * Real name : subscription-key
    */    
    subscriptionKey?: string;
}
const VerificationProfileGetProfileGetQueryParametersNameMap = {
    subscriptionKey: "subscription-key"
};
export interface VerificationProfileResetEnrollmentsPostQueryParameters {
    /**
    * subscription key in url
    * Real name : subscription-key
    */    
    subscriptionKey?: string;
}
const VerificationProfileResetEnrollmentsPostQueryParametersNameMap = {
    subscriptionKey: "subscription-key"
};
export interface VerificationProfileCreateEnrollmentPostQueryParameters {
    /**
    * subscription key in url
    * Real name : subscription-key
    */    
    subscriptionKey?: string;
}
const VerificationProfileCreateEnrollmentPostQueryParametersNameMap = {
    subscriptionKey: "subscription-key"
};
export interface SpeakerRecognitionVerificationPostQueryParameters {
    /**
    * ID of speaker verification profile. It should be a GUID.
    * Real name : verificationProfileId
    */    
    verificationProfileId: string;
    /**
    * subscription key in url
    * Real name : subscription-key
    */    
    subscriptionKey?: string;
}
const SpeakerRecognitionVerificationPostQueryParametersNameMap = {
    verificationProfileId: "verificationProfileId",
    subscriptionKey: "subscription-key"
};
export interface IdentificationProfileCreateProfilePostQueryParameters {
    /**
    * subscription key in url
    * Real name : subscription-key
    */    
    subscriptionKey?: string;
}
const IdentificationProfileCreateProfilePostQueryParametersNameMap = {
    subscriptionKey: "subscription-key"
};
export interface IdentificationProfileGetAllProfilesGetQueryParameters {
    /**
    * subscription key in url
    * Real name : subscription-key
    */    
    subscriptionKey?: string;
}
const IdentificationProfileGetAllProfilesGetQueryParametersNameMap = {
    subscriptionKey: "subscription-key"
};
export interface IdentificationProfileGetProfileGetQueryParameters {
    /**
    * subscription key in url
    * Real name : subscription-key
    */    
    subscriptionKey?: string;
}
const IdentificationProfileGetProfileGetQueryParametersNameMap = {
    subscriptionKey: "subscription-key"
};
export interface IdentificationProfileDeleteProfileDeleteQueryParameters {
    /**
    * subscription key in url
    * Real name : subscription-key
    */    
    subscriptionKey?: string;
}
const IdentificationProfileDeleteProfileDeleteQueryParametersNameMap = {
    subscriptionKey: "subscription-key"
};
export interface IdentificationProfileResetEnrollmentsPostQueryParameters {
    /**
    * subscription key in url
    * Real name : subscription-key
    */    
    subscriptionKey?: string;
}
const IdentificationProfileResetEnrollmentsPostQueryParametersNameMap = {
    subscriptionKey: "subscription-key"
};
export interface IdentificationProfileCreateEnrollmentPostQueryParameters {
    /**
    * Instruct the service to waive the &lt;b&gt;recommended&lt;/b&gt; minimum audio limit needed for enrollment. Set value to “&lt;b&gt;true&lt;/b&gt;” to force enrollment using any audio length (min. 1 second).
    * Real name : shortAudio
    */    
    shortAudio?: boolean;
    /**
    * subscription key in url
    * Real name : subscription-key
    */    
    subscriptionKey?: string;
}
const IdentificationProfileCreateEnrollmentPostQueryParametersNameMap = {
    shortAudio: "shortAudio",
    subscriptionKey: "subscription-key"
};
export interface SpeakerRecognitionIdentificationPostQueryParameters {
    /**
    * Comma-delimited identificationProfileIds, the id should be Guid.&lt;br/&gt;It can only support at most 10 profiles for one identification request.
    * Real name : identificationProfileIds
    */    
    identificationProfileIds: string;
    /**
    * Instruct the service to waive the &lt;b&gt;recommended&lt;/b&gt; minimum audio limit needed for identification. Set value to “&lt;b&gt;true&lt;/b&gt;” to force identification using any audio length (min. 1 second).
    * Real name : shortAudio
    */    
    shortAudio?: boolean;
    /**
    * subscription key in url
    * Real name : subscription-key
    */    
    subscriptionKey?: string;
}
const SpeakerRecognitionIdentificationPostQueryParametersNameMap = {
    identificationProfileIds: "identificationProfileIds",
    shortAudio: "shortAudio",
    subscriptionKey: "subscription-key"
};
export interface SpeakerRecognitionGetOperationStatusGetQueryParameters {
    /**
    * subscription key in url
    * Real name : subscription-key
    */    
    subscriptionKey?: string;
}
const SpeakerRecognitionGetOperationStatusGetQueryParametersNameMap = {
    subscriptionKey: "subscription-key"
};
export interface VerificationPhraseListAllSupportedVerificationPhrasesGetQueryParameters {
    /**
    * Locale for the language when retrieving verification phrases.
    * Real name : locale
    */    
    locale: string;
    /**
    * subscription key in url
    * Real name : subscription-key
    */    
    subscriptionKey?: string;
}
const VerificationPhraseListAllSupportedVerificationPhrasesGetQueryParametersNameMap = {
    locale: "locale",
    subscriptionKey: "subscription-key"
};
//Interfaces for headerParameters of the methods

export interface VerificationProfileCreateProfilePostHeaderParameters {
    /**
    * subscription key in header
    * Real name : Ocp-Apim-Subscription-Key
    */    
    ocpApimSubscriptionKey?: string;
}
const VerificationProfileCreateProfilePostHeaderParametersNameMap = {
    ocpApimSubscriptionKey: "Ocp-Apim-Subscription-Key"
};
export interface VerificationProfileGetAllProfilesGetHeaderParameters {
    /**
    * subscription key in header
    * Real name : Ocp-Apim-Subscription-Key
    */    
    ocpApimSubscriptionKey?: string;
}
const VerificationProfileGetAllProfilesGetHeaderParametersNameMap = {
    ocpApimSubscriptionKey: "Ocp-Apim-Subscription-Key"
};
export interface VerificationProfileDeleteProfileDeleteHeaderParameters {
    /**
    * subscription key in header
    * Real name : Ocp-Apim-Subscription-Key
    */    
    ocpApimSubscriptionKey?: string;
}
const VerificationProfileDeleteProfileDeleteHeaderParametersNameMap = {
    ocpApimSubscriptionKey: "Ocp-Apim-Subscription-Key"
};
export interface VerificationProfileGetProfileGetHeaderParameters {
    /**
    * subscription key in header
    * Real name : Ocp-Apim-Subscription-Key
    */    
    ocpApimSubscriptionKey?: string;
}
const VerificationProfileGetProfileGetHeaderParametersNameMap = {
    ocpApimSubscriptionKey: "Ocp-Apim-Subscription-Key"
};
export interface VerificationProfileResetEnrollmentsPostHeaderParameters {
    /**
    * subscription key in header
    * Real name : Ocp-Apim-Subscription-Key
    */    
    ocpApimSubscriptionKey?: string;
}
const VerificationProfileResetEnrollmentsPostHeaderParametersNameMap = {
    ocpApimSubscriptionKey: "Ocp-Apim-Subscription-Key"
};
export interface VerificationProfileCreateEnrollmentPostHeaderParameters {
    /**
    * subscription key in header
    * Real name : Ocp-Apim-Subscription-Key
    */    
    ocpApimSubscriptionKey?: string;
}
const VerificationProfileCreateEnrollmentPostHeaderParametersNameMap = {
    ocpApimSubscriptionKey: "Ocp-Apim-Subscription-Key"
};
export interface SpeakerRecognitionVerificationPostHeaderParameters {
    /**
    * subscription key in header
    * Real name : Ocp-Apim-Subscription-Key
    */    
    ocpApimSubscriptionKey?: string;
}
const SpeakerRecognitionVerificationPostHeaderParametersNameMap = {
    ocpApimSubscriptionKey: "Ocp-Apim-Subscription-Key"
};
export interface IdentificationProfileCreateProfilePostHeaderParameters {
    /**
    * subscription key in header
    * Real name : Ocp-Apim-Subscription-Key
    */    
    ocpApimSubscriptionKey?: string;
}
const IdentificationProfileCreateProfilePostHeaderParametersNameMap = {
    ocpApimSubscriptionKey: "Ocp-Apim-Subscription-Key"
};
export interface IdentificationProfileGetAllProfilesGetHeaderParameters {
    /**
    * subscription key in header
    * Real name : Ocp-Apim-Subscription-Key
    */    
    ocpApimSubscriptionKey?: string;
}
const IdentificationProfileGetAllProfilesGetHeaderParametersNameMap = {
    ocpApimSubscriptionKey: "Ocp-Apim-Subscription-Key"
};
export interface IdentificationProfileGetProfileGetHeaderParameters {
    /**
    * subscription key in header
    * Real name : Ocp-Apim-Subscription-Key
    */    
    ocpApimSubscriptionKey?: string;
}
const IdentificationProfileGetProfileGetHeaderParametersNameMap = {
    ocpApimSubscriptionKey: "Ocp-Apim-Subscription-Key"
};
export interface IdentificationProfileDeleteProfileDeleteHeaderParameters {
    /**
    * subscription key in header
    * Real name : Ocp-Apim-Subscription-Key
    */    
    ocpApimSubscriptionKey?: string;
}
const IdentificationProfileDeleteProfileDeleteHeaderParametersNameMap = {
    ocpApimSubscriptionKey: "Ocp-Apim-Subscription-Key"
};
export interface IdentificationProfileResetEnrollmentsPostHeaderParameters {
    /**
    * subscription key in header
    * Real name : Ocp-Apim-Subscription-Key
    */    
    ocpApimSubscriptionKey?: string;
}
const IdentificationProfileResetEnrollmentsPostHeaderParametersNameMap = {
    ocpApimSubscriptionKey: "Ocp-Apim-Subscription-Key"
};
export interface IdentificationProfileCreateEnrollmentPostHeaderParameters {
    /**
    * subscription key in header
    * Real name : Ocp-Apim-Subscription-Key
    */    
    ocpApimSubscriptionKey?: string;
}
const IdentificationProfileCreateEnrollmentPostHeaderParametersNameMap = {
    ocpApimSubscriptionKey: "Ocp-Apim-Subscription-Key"
};
export interface SpeakerRecognitionIdentificationPostHeaderParameters {
    /**
    * subscription key in header
    * Real name : Ocp-Apim-Subscription-Key
    */    
    ocpApimSubscriptionKey?: string;
}
const SpeakerRecognitionIdentificationPostHeaderParametersNameMap = {
    ocpApimSubscriptionKey: "Ocp-Apim-Subscription-Key"
};
export interface SpeakerRecognitionGetOperationStatusGetHeaderParameters {
    /**
    * subscription key in header
    * Real name : Ocp-Apim-Subscription-Key
    */    
    ocpApimSubscriptionKey?: string;
}
const SpeakerRecognitionGetOperationStatusGetHeaderParametersNameMap = {
    ocpApimSubscriptionKey: "Ocp-Apim-Subscription-Key"
};
export interface VerificationPhraseListAllSupportedVerificationPhrasesGetHeaderParameters {
    /**
    * subscription key in header
    * Real name : Ocp-Apim-Subscription-Key
    */    
    ocpApimSubscriptionKey?: string;
}
const VerificationPhraseListAllSupportedVerificationPhrasesGetHeaderParametersNameMap = {
    ocpApimSubscriptionKey: "Ocp-Apim-Subscription-Key"
};
//Interfaces for pathParameters of the methods

export interface VerificationProfileDeleteProfileDeletePathParameters {
    /**
    * ID of speaker verification profile. It should be a GUID.
    * Real name : verificationProfileId
    */    
    verificationProfileId: string;
}
const VerificationProfileDeleteProfileDeletePathParametersNameMap = {
    verificationProfileId: "verificationProfileId"
};
export interface VerificationProfileGetProfileGetPathParameters {
    /**
    * ID of speaker verification profile. It should be a GUID.
    * Real name : verificationProfileId
    */    
    verificationProfileId: string;
}
const VerificationProfileGetProfileGetPathParametersNameMap = {
    verificationProfileId: "verificationProfileId"
};
export interface VerificationProfileResetEnrollmentsPostPathParameters {
    /**
    * ID of speaker verification profile. It should be a GUID.
    * Real name : verificationProfileId
    */    
    verificationProfileId: string;
}
const VerificationProfileResetEnrollmentsPostPathParametersNameMap = {
    verificationProfileId: "verificationProfileId"
};
export interface VerificationProfileCreateEnrollmentPostPathParameters {
    /**
    * ID of speaker verification profile. GUID returned from &lt;a href&#x3D;&quot;https://dev.projectoxford.ai/docs/services/563309b6778daf02acc0a508/operations/563309b7778daf06340c9652&quot;&gt;Verification Profile - Create Profile&lt;/a&gt; API
    * Real name : verificationProfileId
    */    
    verificationProfileId: string;
}
const VerificationProfileCreateEnrollmentPostPathParametersNameMap = {
    verificationProfileId: "verificationProfileId"
};
export interface IdentificationProfileGetProfileGetPathParameters {
    /**
    * ID of speaker identification profile. GUID returned from &lt;a href&#x3D;&quot;https://dev.projectoxford.ai/docs/services/563309b6778daf02acc0a508/operations/5645c068e597ed22ec38f42e&quot;&gt;Identification Profile - Create Profile&lt;/a&gt; API
    * Real name : identificationProfileId
    */    
    identificationProfileId: string;
}
const IdentificationProfileGetProfileGetPathParametersNameMap = {
    identificationProfileId: "identificationProfileId"
};
export interface IdentificationProfileDeleteProfileDeletePathParameters {
    /**
    * ID of speaker identification profile. GUID returned from &lt;a href&#x3D;&quot;https://dev.projectoxford.ai/docs/services/563309b6778daf02acc0a508/operations/5645c068e597ed22ec38f42e&quot;&gt;Identification Profile - Create Profile&lt;/a&gt; API
    * Real name : identificationProfileId
    */    
    identificationProfileId: string;
}
const IdentificationProfileDeleteProfileDeletePathParametersNameMap = {
    identificationProfileId: "identificationProfileId"
};
export interface IdentificationProfileResetEnrollmentsPostPathParameters {
    /**
    * ID of speaker identification profile. GUID returned from &lt;a href&#x3D;&quot;https://dev.projectoxford.ai/docs/services/563309b6778daf02acc0a508/operations/5645c068e597ed22ec38f42e&quot;&gt;Identification Profile - Create Profile&lt;/a&gt; API
    * Real name : identificationProfileId
    */    
    identificationProfileId: string;
}
const IdentificationProfileResetEnrollmentsPostPathParametersNameMap = {
    identificationProfileId: "identificationProfileId"
};
export interface IdentificationProfileCreateEnrollmentPostPathParameters {
    /**
    * ID of speaker identification profile. GUID returned from &lt;a href&#x3D;&quot;https://dev.projectoxford.ai/docs/services/563309b6778daf02acc0a508/operations/5645c068e597ed22ec38f42e&quot;&gt;Identification Profile - Create Profile&lt;/a&gt; API
    * Real name : identificationProfileId
    */    
    identificationProfileId: string;
}
const IdentificationProfileCreateEnrollmentPostPathParametersNameMap = {
    identificationProfileId: "identificationProfileId"
};
export interface SpeakerRecognitionGetOperationStatusGetPathParameters {
    /**
    * The operation Id, created by &lt;a href&#x3D;&quot;https://dev.projectoxford.ai/docs/services/563309b6778daf02acc0a508/operations/5645c523778daf217c292592&quot;&gt; Speaker Recognition - Identification&lt;/a&gt; or &lt;a href&#x3D;&quot;https://dev.projectoxford.ai/docs/services/563309b6778daf02acc0a508/operations/5645c3271984551c84ec6797&quot;&gt; Identification Profile - Create Enrollment&lt;/a&gt;. 
    * Real name : operationId
    */    
    operationId: string;
}
const SpeakerRecognitionGetOperationStatusGetPathParametersNameMap = {
    operationId: "operationId"
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
export type VerificationProfileCreateProfilePostResult = { "verificationProfileId": string; };
export type VerificationProfileGetAllProfilesGetResult = { "verificationProfileId": string; "locale": string; "enrollmentsCount": number; "remainingEnrollmentsCount": number; "createdDateTime": string; "lastActionDateTime": string; "enrollmentStatus": string; }[];
export type VerificationProfileDeleteProfileDeleteResult = {};
export type VerificationProfileGetProfileGetResult = { "verificationProfileId": string; "locale": string; "enrollmentsCount": number; "remainingEnrollmentsCount": number; "createdDateTime": string; "lastActionDateTime": string; "enrollmentStatus": string; };
export type VerificationProfileResetEnrollmentsPostResult = {};
export type VerificationProfileCreateEnrollmentPostResult = { "enrollmentStatus": string; "enrollmentsCount": number; "remainingEnrollments": number; "phrase": string; };
export type SpeakerRecognitionVerificationPostResult = { "result": string; "confidence": string; "phrase": string; };
export type IdentificationProfileCreateProfilePostResult = { "identificationProfileId": string; };
export type IdentificationProfileGetAllProfilesGetResult = { "identificationProfileId": string; "locale": string; "enrollmentSpeechTime": any; 0.0: any; "createdDateTime": string; "lastActionDateTime": string; "enrollmentStatus": string; }[];
export type IdentificationProfileGetProfileGetResult = { "identificationProfileId": string; "locale": string; "enrollmentSpeechTime": any; 0.0: any; "createdDateTime": string; "lastActionDateTime": string; "enrollmentStatus": string; };
export type IdentificationProfileDeleteProfileDeleteResult = {};
export type IdentificationProfileResetEnrollmentsPostResult = {};
export type IdentificationProfileCreateEnrollmentPostResult = {};
export type SpeakerRecognitionIdentificationPostResult = {};
export type SpeakerRecognitionGetOperationStatusGetResult = {};
export type VerificationPhraseListAllSupportedVerificationPhrasesGetResult = any[];

export type MethodType = 'post' | 'get' | 'put' | 'delete' | 'patch';
interface Params {
    [key: string]: string
}

const convertParamsToRealParams = (params: Params, paramsNameMap: Params) => {
    return Object.keys(params).reduce((prev, key) => {
        return Object.assign(prev, { [paramsNameMap[key]]: params[key] });
    }, {}) as Params;
}

export class SpeakerRecognitionAPI {   
    /**
    * Global Query parameters. If defined this parameters will be used for every request.
    */
    public globalQueryParameters: GlobalQueryParameters = {};    
    /**
    * Global Header parameters. If defined this parameters will be used for every request.
    */
    public globalHeaderParameters: GlobalHeaderParameters = {};    

    private makeRequest(path: string, method: MethodType, queryParams: Params = {}, headerParams: Params = {}, pathParams: Params = {}) {        
        const url = `https://westus.api.cognitive.microsoft.com/spid/v1.0${path}`;
        
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
    * Create a new speaker verification profile with specific locale.
One subscription can only create 1000 speaker verification/identification profiles at most.
    *
    */
    public verificationProfileCreateProfilePost(queryParams: VerificationProfileCreateProfilePostQueryParameters, headerParams: VerificationProfileCreateProfilePostHeaderParameters) {
        const queryParamsMapped = {} as Params;
        const headerParamsMapped = {} as Params;
        const pathParamsMapped = {} as Params;
        Object.assign(queryParamsMapped, convertParamsToRealParams(queryParams as any as Params, VerificationProfileCreateProfilePostQueryParametersNameMap));
        Object.assign(headerParamsMapped, convertParamsToRealParams(headerParams as any as Params, VerificationProfileCreateProfilePostHeaderParametersNameMap));
        return this.makeRequest('/verificationProfiles', 'post', queryParamsMapped, headerParamsMapped, pathParamsMapped) as Request<VerificationProfileCreateProfilePostResult>;
    }
    /**
    * Get all speaker verification profiles within the subscription.
    *
    */
    public verificationProfileGetAllProfilesGet(queryParams: VerificationProfileGetAllProfilesGetQueryParameters, headerParams: VerificationProfileGetAllProfilesGetHeaderParameters) {
        const queryParamsMapped = {} as Params;
        const headerParamsMapped = {} as Params;
        const pathParamsMapped = {} as Params;
        Object.assign(queryParamsMapped, convertParamsToRealParams(queryParams as any as Params, VerificationProfileGetAllProfilesGetQueryParametersNameMap));
        Object.assign(headerParamsMapped, convertParamsToRealParams(headerParams as any as Params, VerificationProfileGetAllProfilesGetHeaderParametersNameMap));
        return this.makeRequest('/verificationProfiles', 'get', queryParamsMapped, headerParamsMapped, pathParamsMapped) as Request<VerificationProfileGetAllProfilesGetResult>;
    }
    /**
    * Deletes both speaker verification profile and all associated enrollments permanently from the service.
    *
    */
    public verificationProfileDeleteProfileDelete(queryParams: VerificationProfileDeleteProfileDeleteQueryParameters, headerParams: VerificationProfileDeleteProfileDeleteHeaderParameters, pathParams: VerificationProfileDeleteProfileDeletePathParameters) {
        const queryParamsMapped = {} as Params;
        const headerParamsMapped = {} as Params;
        const pathParamsMapped = {} as Params;
        Object.assign(queryParamsMapped, convertParamsToRealParams(queryParams as any as Params, VerificationProfileDeleteProfileDeleteQueryParametersNameMap));
        Object.assign(headerParamsMapped, convertParamsToRealParams(headerParams as any as Params, VerificationProfileDeleteProfileDeleteHeaderParametersNameMap));
        Object.assign(pathParamsMapped, convertParamsToRealParams(pathParams as any as Params, VerificationProfileDeleteProfileDeletePathParametersNameMap));
        return this.makeRequest('/verificationProfiles/{verificationProfileId}', 'delete', queryParamsMapped, headerParamsMapped, pathParamsMapped) as Request<VerificationProfileDeleteProfileDeleteResult>;
    }
    /**
    * Get a speaker verification profile by verificationProfileId
    *
    */
    public verificationProfileGetProfileGet(queryParams: VerificationProfileGetProfileGetQueryParameters, headerParams: VerificationProfileGetProfileGetHeaderParameters, pathParams: VerificationProfileGetProfileGetPathParameters) {
        const queryParamsMapped = {} as Params;
        const headerParamsMapped = {} as Params;
        const pathParamsMapped = {} as Params;
        Object.assign(queryParamsMapped, convertParamsToRealParams(queryParams as any as Params, VerificationProfileGetProfileGetQueryParametersNameMap));
        Object.assign(headerParamsMapped, convertParamsToRealParams(headerParams as any as Params, VerificationProfileGetProfileGetHeaderParametersNameMap));
        Object.assign(pathParamsMapped, convertParamsToRealParams(pathParams as any as Params, VerificationProfileGetProfileGetPathParametersNameMap));
        return this.makeRequest('/verificationProfiles/{verificationProfileId}', 'get', queryParamsMapped, headerParamsMapped, pathParamsMapped) as Request<VerificationProfileGetProfileGetResult>;
    }
    /**
    * Deletes all enrollments associated with the given speaker’s verification profile permanently from the service.
    *
    */
    public verificationProfileResetEnrollmentsPost(queryParams: VerificationProfileResetEnrollmentsPostQueryParameters, headerParams: VerificationProfileResetEnrollmentsPostHeaderParameters, pathParams: VerificationProfileResetEnrollmentsPostPathParameters) {
        const queryParamsMapped = {} as Params;
        const headerParamsMapped = {} as Params;
        const pathParamsMapped = {} as Params;
        Object.assign(queryParamsMapped, convertParamsToRealParams(queryParams as any as Params, VerificationProfileResetEnrollmentsPostQueryParametersNameMap));
        Object.assign(headerParamsMapped, convertParamsToRealParams(headerParams as any as Params, VerificationProfileResetEnrollmentsPostHeaderParametersNameMap));
        Object.assign(pathParamsMapped, convertParamsToRealParams(pathParams as any as Params, VerificationProfileResetEnrollmentsPostPathParametersNameMap));
        return this.makeRequest('/verificationProfiles/{verificationProfileId}/reset', 'post', queryParamsMapped, headerParamsMapped, pathParamsMapped) as Request<VerificationProfileResetEnrollmentsPostResult>;
    }
    /**
    * Enrollment for speaker verification is text-dependent, which means speaker need to choose a specific phrase to use in both enrollment and verification. List of supported phrases can be found in Verification Phrase - List All Supported Verification Phrases.
The service requires at least 3 enrollments for each speaker before the profile can be used in verification scenarios. It is recommended to use the same device (mic) in both enrollment and verification.
    *
    */
    public verificationProfileCreateEnrollmentPost(queryParams: VerificationProfileCreateEnrollmentPostQueryParameters, headerParams: VerificationProfileCreateEnrollmentPostHeaderParameters, pathParams: VerificationProfileCreateEnrollmentPostPathParameters) {
        const queryParamsMapped = {} as Params;
        const headerParamsMapped = {} as Params;
        const pathParamsMapped = {} as Params;
        Object.assign(queryParamsMapped, convertParamsToRealParams(queryParams as any as Params, VerificationProfileCreateEnrollmentPostQueryParametersNameMap));
        Object.assign(headerParamsMapped, convertParamsToRealParams(headerParams as any as Params, VerificationProfileCreateEnrollmentPostHeaderParametersNameMap));
        Object.assign(pathParamsMapped, convertParamsToRealParams(pathParams as any as Params, VerificationProfileCreateEnrollmentPostPathParametersNameMap));
        return this.makeRequest('/verificationProfiles/{verificationProfileId}/enroll', 'post', queryParamsMapped, headerParamsMapped, pathParamsMapped) as Request<VerificationProfileCreateEnrollmentPostResult>;
    }
    /**
    * To automatically verify and authenticate users using their voice or speech.
    *
    */
    public speakerRecognitionVerificationPost(queryParams: SpeakerRecognitionVerificationPostQueryParameters, headerParams: SpeakerRecognitionVerificationPostHeaderParameters) {
        const queryParamsMapped = {} as Params;
        const headerParamsMapped = {} as Params;
        const pathParamsMapped = {} as Params;
        Object.assign(queryParamsMapped, convertParamsToRealParams(queryParams as any as Params, SpeakerRecognitionVerificationPostQueryParametersNameMap));
        Object.assign(headerParamsMapped, convertParamsToRealParams(headerParams as any as Params, SpeakerRecognitionVerificationPostHeaderParametersNameMap));
        return this.makeRequest('/verify', 'post', queryParamsMapped, headerParamsMapped, pathParamsMapped) as Request<SpeakerRecognitionVerificationPostResult>;
    }
    /**
    * Create a new speaker identification profile with specified locale.
One subscription can only create 1000 speaker verification/identification profiles at most.
    *
    */
    public identificationProfileCreateProfilePost(queryParams: IdentificationProfileCreateProfilePostQueryParameters, headerParams: IdentificationProfileCreateProfilePostHeaderParameters) {
        const queryParamsMapped = {} as Params;
        const headerParamsMapped = {} as Params;
        const pathParamsMapped = {} as Params;
        Object.assign(queryParamsMapped, convertParamsToRealParams(queryParams as any as Params, IdentificationProfileCreateProfilePostQueryParametersNameMap));
        Object.assign(headerParamsMapped, convertParamsToRealParams(headerParams as any as Params, IdentificationProfileCreateProfilePostHeaderParametersNameMap));
        return this.makeRequest('/identificationProfiles', 'post', queryParamsMapped, headerParamsMapped, pathParamsMapped) as Request<IdentificationProfileCreateProfilePostResult>;
    }
    /**
    * Get all speaker identification profiles within the subscription.
    *
    */
    public identificationProfileGetAllProfilesGet(queryParams: IdentificationProfileGetAllProfilesGetQueryParameters, headerParams: IdentificationProfileGetAllProfilesGetHeaderParameters) {
        const queryParamsMapped = {} as Params;
        const headerParamsMapped = {} as Params;
        const pathParamsMapped = {} as Params;
        Object.assign(queryParamsMapped, convertParamsToRealParams(queryParams as any as Params, IdentificationProfileGetAllProfilesGetQueryParametersNameMap));
        Object.assign(headerParamsMapped, convertParamsToRealParams(headerParams as any as Params, IdentificationProfileGetAllProfilesGetHeaderParametersNameMap));
        return this.makeRequest('/identificationProfiles', 'get', queryParamsMapped, headerParamsMapped, pathParamsMapped) as Request<IdentificationProfileGetAllProfilesGetResult>;
    }
    /**
    * Get a speaker identification profile by identificationProfileId.
    *
    */
    public identificationProfileGetProfileGet(queryParams: IdentificationProfileGetProfileGetQueryParameters, headerParams: IdentificationProfileGetProfileGetHeaderParameters, pathParams: IdentificationProfileGetProfileGetPathParameters) {
        const queryParamsMapped = {} as Params;
        const headerParamsMapped = {} as Params;
        const pathParamsMapped = {} as Params;
        Object.assign(queryParamsMapped, convertParamsToRealParams(queryParams as any as Params, IdentificationProfileGetProfileGetQueryParametersNameMap));
        Object.assign(headerParamsMapped, convertParamsToRealParams(headerParams as any as Params, IdentificationProfileGetProfileGetHeaderParametersNameMap));
        Object.assign(pathParamsMapped, convertParamsToRealParams(pathParams as any as Params, IdentificationProfileGetProfileGetPathParametersNameMap));
        return this.makeRequest('/identificationProfiles/{identificationProfileId}', 'get', queryParamsMapped, headerParamsMapped, pathParamsMapped) as Request<IdentificationProfileGetProfileGetResult>;
    }
    /**
    * Deletes both speaker identification profile and all associated enrollments permanently from the service.
    *
    */
    public identificationProfileDeleteProfileDelete(queryParams: IdentificationProfileDeleteProfileDeleteQueryParameters, headerParams: IdentificationProfileDeleteProfileDeleteHeaderParameters, pathParams: IdentificationProfileDeleteProfileDeletePathParameters) {
        const queryParamsMapped = {} as Params;
        const headerParamsMapped = {} as Params;
        const pathParamsMapped = {} as Params;
        Object.assign(queryParamsMapped, convertParamsToRealParams(queryParams as any as Params, IdentificationProfileDeleteProfileDeleteQueryParametersNameMap));
        Object.assign(headerParamsMapped, convertParamsToRealParams(headerParams as any as Params, IdentificationProfileDeleteProfileDeleteHeaderParametersNameMap));
        Object.assign(pathParamsMapped, convertParamsToRealParams(pathParams as any as Params, IdentificationProfileDeleteProfileDeletePathParametersNameMap));
        return this.makeRequest('/identificationProfiles/{identificationProfileId}', 'delete', queryParamsMapped, headerParamsMapped, pathParamsMapped) as Request<IdentificationProfileDeleteProfileDeleteResult>;
    }
    /**
    * Deletes all enrollments associated with the given speaker identification profile permanently from the service.
    *
    */
    public identificationProfileResetEnrollmentsPost(queryParams: IdentificationProfileResetEnrollmentsPostQueryParameters, headerParams: IdentificationProfileResetEnrollmentsPostHeaderParameters, pathParams: IdentificationProfileResetEnrollmentsPostPathParameters) {
        const queryParamsMapped = {} as Params;
        const headerParamsMapped = {} as Params;
        const pathParamsMapped = {} as Params;
        Object.assign(queryParamsMapped, convertParamsToRealParams(queryParams as any as Params, IdentificationProfileResetEnrollmentsPostQueryParametersNameMap));
        Object.assign(headerParamsMapped, convertParamsToRealParams(headerParams as any as Params, IdentificationProfileResetEnrollmentsPostHeaderParametersNameMap));
        Object.assign(pathParamsMapped, convertParamsToRealParams(pathParams as any as Params, IdentificationProfileResetEnrollmentsPostPathParametersNameMap));
        return this.makeRequest('/identificationProfiles/{identificationProfileId}/reset', 'post', queryParamsMapped, headerParamsMapped, pathParamsMapped) as Request<IdentificationProfileResetEnrollmentsPostResult>;
    }
    /**
    * Enrollment for speaker identification is text-independent, which means that there are no restrictions on what the speaker says in the audio. The speaker's voice is recorded, and a number of features are extracted to form a unique voiceprint.
    *
    */
    public identificationProfileCreateEnrollmentPost(queryParams: IdentificationProfileCreateEnrollmentPostQueryParameters, headerParams: IdentificationProfileCreateEnrollmentPostHeaderParameters, pathParams: IdentificationProfileCreateEnrollmentPostPathParameters) {
        const queryParamsMapped = {} as Params;
        const headerParamsMapped = {} as Params;
        const pathParamsMapped = {} as Params;
        Object.assign(queryParamsMapped, convertParamsToRealParams(queryParams as any as Params, IdentificationProfileCreateEnrollmentPostQueryParametersNameMap));
        Object.assign(headerParamsMapped, convertParamsToRealParams(headerParams as any as Params, IdentificationProfileCreateEnrollmentPostHeaderParametersNameMap));
        Object.assign(pathParamsMapped, convertParamsToRealParams(pathParams as any as Params, IdentificationProfileCreateEnrollmentPostPathParametersNameMap));
        return this.makeRequest('/identificationProfiles/{identificationProfileId}/enroll', 'post', queryParamsMapped, headerParamsMapped, pathParamsMapped) as Request<IdentificationProfileCreateEnrollmentPostResult>;
    }
    /**
    * To automatically identify who is speaking given a group of speakers.
    *
    */
    public speakerRecognitionIdentificationPost(queryParams: SpeakerRecognitionIdentificationPostQueryParameters, headerParams: SpeakerRecognitionIdentificationPostHeaderParameters) {
        const queryParamsMapped = {} as Params;
        const headerParamsMapped = {} as Params;
        const pathParamsMapped = {} as Params;
        Object.assign(queryParamsMapped, convertParamsToRealParams(queryParams as any as Params, SpeakerRecognitionIdentificationPostQueryParametersNameMap));
        Object.assign(headerParamsMapped, convertParamsToRealParams(headerParams as any as Params, SpeakerRecognitionIdentificationPostHeaderParametersNameMap));
        return this.makeRequest('/identify', 'post', queryParamsMapped, headerParamsMapped, pathParamsMapped) as Request<SpeakerRecognitionIdentificationPostResult>;
    }
    /**
    * Get operation status or result. The operation should be created by  Speaker Recognition - Identification or  Identification Profile - Create Enrollment. And the URL should be retrieved from Operation-Location header of initial POST 202 response
    *
    */
    public speakerRecognitionGetOperationStatusGet(queryParams: SpeakerRecognitionGetOperationStatusGetQueryParameters, headerParams: SpeakerRecognitionGetOperationStatusGetHeaderParameters, pathParams: SpeakerRecognitionGetOperationStatusGetPathParameters) {
        const queryParamsMapped = {} as Params;
        const headerParamsMapped = {} as Params;
        const pathParamsMapped = {} as Params;
        Object.assign(queryParamsMapped, convertParamsToRealParams(queryParams as any as Params, SpeakerRecognitionGetOperationStatusGetQueryParametersNameMap));
        Object.assign(headerParamsMapped, convertParamsToRealParams(headerParams as any as Params, SpeakerRecognitionGetOperationStatusGetHeaderParametersNameMap));
        Object.assign(pathParamsMapped, convertParamsToRealParams(pathParams as any as Params, SpeakerRecognitionGetOperationStatusGetPathParametersNameMap));
        return this.makeRequest('/operations/{operationId}', 'get', queryParamsMapped, headerParamsMapped, pathParamsMapped) as Request<SpeakerRecognitionGetOperationStatusGetResult>;
    }
    /**
    * Returns the list of supported verification phrases that can be used for Verification Profile - Create Enrollment and Speaker Recognition - Verification.
    *
    */
    public verificationPhraseListAllSupportedVerificationPhrasesGet(queryParams: VerificationPhraseListAllSupportedVerificationPhrasesGetQueryParameters, headerParams: VerificationPhraseListAllSupportedVerificationPhrasesGetHeaderParameters) {
        const queryParamsMapped = {} as Params;
        const headerParamsMapped = {} as Params;
        const pathParamsMapped = {} as Params;
        Object.assign(queryParamsMapped, convertParamsToRealParams(queryParams as any as Params, VerificationPhraseListAllSupportedVerificationPhrasesGetQueryParametersNameMap));
        Object.assign(headerParamsMapped, convertParamsToRealParams(headerParams as any as Params, VerificationPhraseListAllSupportedVerificationPhrasesGetHeaderParametersNameMap));
        return this.makeRequest('/verificationPhrases', 'get', queryParamsMapped, headerParamsMapped, pathParamsMapped) as Request<VerificationPhraseListAllSupportedVerificationPhrasesGetResult>;
    }
}