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
export interface VerificationProfileCreateProfilePostQueryParameters {
    /**
    * subscription key in url
    * Real name : subscription-key
    */
    subscriptionKey?: string;
}
export interface VerificationProfileGetAllProfilesGetQueryParameters {
    /**
    * subscription key in url
    * Real name : subscription-key
    */
    subscriptionKey?: string;
}
export interface VerificationProfileDeleteProfileDeleteQueryParameters {
    /**
    * subscription key in url
    * Real name : subscription-key
    */
    subscriptionKey?: string;
}
export interface VerificationProfileGetProfileGetQueryParameters {
    /**
    * subscription key in url
    * Real name : subscription-key
    */
    subscriptionKey?: string;
}
export interface VerificationProfileResetEnrollmentsPostQueryParameters {
    /**
    * subscription key in url
    * Real name : subscription-key
    */
    subscriptionKey?: string;
}
export interface VerificationProfileCreateEnrollmentPostQueryParameters {
    /**
    * subscription key in url
    * Real name : subscription-key
    */
    subscriptionKey?: string;
}
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
export interface IdentificationProfileCreateProfilePostQueryParameters {
    /**
    * subscription key in url
    * Real name : subscription-key
    */
    subscriptionKey?: string;
}
export interface IdentificationProfileGetAllProfilesGetQueryParameters {
    /**
    * subscription key in url
    * Real name : subscription-key
    */
    subscriptionKey?: string;
}
export interface IdentificationProfileGetProfileGetQueryParameters {
    /**
    * subscription key in url
    * Real name : subscription-key
    */
    subscriptionKey?: string;
}
export interface IdentificationProfileDeleteProfileDeleteQueryParameters {
    /**
    * subscription key in url
    * Real name : subscription-key
    */
    subscriptionKey?: string;
}
export interface IdentificationProfileResetEnrollmentsPostQueryParameters {
    /**
    * subscription key in url
    * Real name : subscription-key
    */
    subscriptionKey?: string;
}
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
export interface SpeakerRecognitionGetOperationStatusGetQueryParameters {
    /**
    * subscription key in url
    * Real name : subscription-key
    */
    subscriptionKey?: string;
}
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
export interface VerificationProfileCreateProfilePostHeaderParameters {
    /**
    * subscription key in header
    * Real name : Ocp-Apim-Subscription-Key
    */
    ocpApimSubscriptionKey?: string;
}
export interface VerificationProfileGetAllProfilesGetHeaderParameters {
    /**
    * subscription key in header
    * Real name : Ocp-Apim-Subscription-Key
    */
    ocpApimSubscriptionKey?: string;
}
export interface VerificationProfileDeleteProfileDeleteHeaderParameters {
    /**
    * subscription key in header
    * Real name : Ocp-Apim-Subscription-Key
    */
    ocpApimSubscriptionKey?: string;
}
export interface VerificationProfileGetProfileGetHeaderParameters {
    /**
    * subscription key in header
    * Real name : Ocp-Apim-Subscription-Key
    */
    ocpApimSubscriptionKey?: string;
}
export interface VerificationProfileResetEnrollmentsPostHeaderParameters {
    /**
    * subscription key in header
    * Real name : Ocp-Apim-Subscription-Key
    */
    ocpApimSubscriptionKey?: string;
}
export interface VerificationProfileCreateEnrollmentPostHeaderParameters {
    /**
    * subscription key in header
    * Real name : Ocp-Apim-Subscription-Key
    */
    ocpApimSubscriptionKey?: string;
}
export interface SpeakerRecognitionVerificationPostHeaderParameters {
    /**
    * subscription key in header
    * Real name : Ocp-Apim-Subscription-Key
    */
    ocpApimSubscriptionKey?: string;
}
export interface IdentificationProfileCreateProfilePostHeaderParameters {
    /**
    * subscription key in header
    * Real name : Ocp-Apim-Subscription-Key
    */
    ocpApimSubscriptionKey?: string;
}
export interface IdentificationProfileGetAllProfilesGetHeaderParameters {
    /**
    * subscription key in header
    * Real name : Ocp-Apim-Subscription-Key
    */
    ocpApimSubscriptionKey?: string;
}
export interface IdentificationProfileGetProfileGetHeaderParameters {
    /**
    * subscription key in header
    * Real name : Ocp-Apim-Subscription-Key
    */
    ocpApimSubscriptionKey?: string;
}
export interface IdentificationProfileDeleteProfileDeleteHeaderParameters {
    /**
    * subscription key in header
    * Real name : Ocp-Apim-Subscription-Key
    */
    ocpApimSubscriptionKey?: string;
}
export interface IdentificationProfileResetEnrollmentsPostHeaderParameters {
    /**
    * subscription key in header
    * Real name : Ocp-Apim-Subscription-Key
    */
    ocpApimSubscriptionKey?: string;
}
export interface IdentificationProfileCreateEnrollmentPostHeaderParameters {
    /**
    * subscription key in header
    * Real name : Ocp-Apim-Subscription-Key
    */
    ocpApimSubscriptionKey?: string;
}
export interface SpeakerRecognitionIdentificationPostHeaderParameters {
    /**
    * subscription key in header
    * Real name : Ocp-Apim-Subscription-Key
    */
    ocpApimSubscriptionKey?: string;
}
export interface SpeakerRecognitionGetOperationStatusGetHeaderParameters {
    /**
    * subscription key in header
    * Real name : Ocp-Apim-Subscription-Key
    */
    ocpApimSubscriptionKey?: string;
}
export interface VerificationPhraseListAllSupportedVerificationPhrasesGetHeaderParameters {
    /**
    * subscription key in header
    * Real name : Ocp-Apim-Subscription-Key
    */
    ocpApimSubscriptionKey?: string;
}
export interface VerificationProfileDeleteProfileDeletePathParameters {
    /**
    * ID of speaker verification profile. It should be a GUID.
    * Real name : verificationProfileId
    */
    verificationProfileId: string;
}
export interface VerificationProfileGetProfileGetPathParameters {
    /**
    * ID of speaker verification profile. It should be a GUID.
    * Real name : verificationProfileId
    */
    verificationProfileId: string;
}
export interface VerificationProfileResetEnrollmentsPostPathParameters {
    /**
    * ID of speaker verification profile. It should be a GUID.
    * Real name : verificationProfileId
    */
    verificationProfileId: string;
}
export interface VerificationProfileCreateEnrollmentPostPathParameters {
    /**
    * ID of speaker verification profile. GUID returned from &lt;a href&#x3D;&quot;https://dev.projectoxford.ai/docs/services/563309b6778daf02acc0a508/operations/563309b7778daf06340c9652&quot;&gt;Verification Profile - Create Profile&lt;/a&gt; API
    * Real name : verificationProfileId
    */
    verificationProfileId: string;
}
export interface IdentificationProfileGetProfileGetPathParameters {
    /**
    * ID of speaker identification profile. GUID returned from &lt;a href&#x3D;&quot;https://dev.projectoxford.ai/docs/services/563309b6778daf02acc0a508/operations/5645c068e597ed22ec38f42e&quot;&gt;Identification Profile - Create Profile&lt;/a&gt; API
    * Real name : identificationProfileId
    */
    identificationProfileId: string;
}
export interface IdentificationProfileDeleteProfileDeletePathParameters {
    /**
    * ID of speaker identification profile. GUID returned from &lt;a href&#x3D;&quot;https://dev.projectoxford.ai/docs/services/563309b6778daf02acc0a508/operations/5645c068e597ed22ec38f42e&quot;&gt;Identification Profile - Create Profile&lt;/a&gt; API
    * Real name : identificationProfileId
    */
    identificationProfileId: string;
}
export interface IdentificationProfileResetEnrollmentsPostPathParameters {
    /**
    * ID of speaker identification profile. GUID returned from &lt;a href&#x3D;&quot;https://dev.projectoxford.ai/docs/services/563309b6778daf02acc0a508/operations/5645c068e597ed22ec38f42e&quot;&gt;Identification Profile - Create Profile&lt;/a&gt; API
    * Real name : identificationProfileId
    */
    identificationProfileId: string;
}
export interface IdentificationProfileCreateEnrollmentPostPathParameters {
    /**
    * ID of speaker identification profile. GUID returned from &lt;a href&#x3D;&quot;https://dev.projectoxford.ai/docs/services/563309b6778daf02acc0a508/operations/5645c068e597ed22ec38f42e&quot;&gt;Identification Profile - Create Profile&lt;/a&gt; API
    * Real name : identificationProfileId
    */
    identificationProfileId: string;
}
export interface SpeakerRecognitionGetOperationStatusGetPathParameters {
    /**
    * The operation Id, created by &lt;a href&#x3D;&quot;https://dev.projectoxford.ai/docs/services/563309b6778daf02acc0a508/operations/5645c523778daf217c292592&quot;&gt; Speaker Recognition - Identification&lt;/a&gt; or &lt;a href&#x3D;&quot;https://dev.projectoxford.ai/docs/services/563309b6778daf02acc0a508/operations/5645c3271984551c84ec6797&quot;&gt; Identification Profile - Create Enrollment&lt;/a&gt;.
    * Real name : operationId
    */
    operationId: string;
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
export declare type VerificationProfileCreateProfilePostResult = {
    "verificationProfileId": string;
};
export declare type VerificationProfileGetAllProfilesGetResult = {
    "verificationProfileId": string;
    "locale": string;
    "enrollmentsCount": number;
    "remainingEnrollmentsCount": number;
    "createdDateTime": string;
    "lastActionDateTime": string;
    "enrollmentStatus": string;
}[];
export declare type VerificationProfileDeleteProfileDeleteResult = {};
export declare type VerificationProfileGetProfileGetResult = {
    "verificationProfileId": string;
    "locale": string;
    "enrollmentsCount": number;
    "remainingEnrollmentsCount": number;
    "createdDateTime": string;
    "lastActionDateTime": string;
    "enrollmentStatus": string;
};
export declare type VerificationProfileResetEnrollmentsPostResult = {};
export declare type VerificationProfileCreateEnrollmentPostResult = {
    "enrollmentStatus": string;
    "enrollmentsCount": number;
    "remainingEnrollments": number;
    "phrase": string;
};
export declare type SpeakerRecognitionVerificationPostResult = {
    "result": string;
    "confidence": string;
    "phrase": string;
};
export declare type IdentificationProfileCreateProfilePostResult = {
    "identificationProfileId": string;
};
export declare type IdentificationProfileGetAllProfilesGetResult = {
    "identificationProfileId": string;
    "locale": string;
    "enrollmentSpeechTime": any;
    0.0: any;
    "createdDateTime": string;
    "lastActionDateTime": string;
    "enrollmentStatus": string;
}[];
export declare type IdentificationProfileGetProfileGetResult = {
    "identificationProfileId": string;
    "locale": string;
    "enrollmentSpeechTime": any;
    0.0: any;
    "createdDateTime": string;
    "lastActionDateTime": string;
    "enrollmentStatus": string;
};
export declare type IdentificationProfileDeleteProfileDeleteResult = {};
export declare type IdentificationProfileResetEnrollmentsPostResult = {};
export declare type IdentificationProfileCreateEnrollmentPostResult = {};
export declare type SpeakerRecognitionIdentificationPostResult = {};
export declare type SpeakerRecognitionGetOperationStatusGetResult = {};
export declare type VerificationPhraseListAllSupportedVerificationPhrasesGetResult = any[];
export declare type MethodType = 'post' | 'get' | 'put' | 'delete' | 'patch';
export declare class SpeakerRecognitionAPI {
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
    * Create a new speaker verification profile with specific locale.
One subscription can only create 1000 speaker verification/identification profiles at most.
    *
    */
    verificationProfileCreateProfilePost(queryParams: VerificationProfileCreateProfilePostQueryParameters, headerParams: VerificationProfileCreateProfilePostHeaderParameters): Request<VerificationProfileCreateProfilePostResult>;
    /**
    * Get all speaker verification profiles within the subscription.
    *
    */
    verificationProfileGetAllProfilesGet(queryParams: VerificationProfileGetAllProfilesGetQueryParameters, headerParams: VerificationProfileGetAllProfilesGetHeaderParameters): Request<{
        "verificationProfileId": string;
        "locale": string;
        "enrollmentsCount": number;
        "remainingEnrollmentsCount": number;
        "createdDateTime": string;
        "lastActionDateTime": string;
        "enrollmentStatus": string;
    }[]>;
    /**
    * Deletes both speaker verification profile and all associated enrollments permanently from the service.
    *
    */
    verificationProfileDeleteProfileDelete(queryParams: VerificationProfileDeleteProfileDeleteQueryParameters, headerParams: VerificationProfileDeleteProfileDeleteHeaderParameters, pathParams: VerificationProfileDeleteProfileDeletePathParameters): Request<VerificationProfileDeleteProfileDeleteResult>;
    /**
    * Get a speaker verification profile by verificationProfileId
    *
    */
    verificationProfileGetProfileGet(queryParams: VerificationProfileGetProfileGetQueryParameters, headerParams: VerificationProfileGetProfileGetHeaderParameters, pathParams: VerificationProfileGetProfileGetPathParameters): Request<VerificationProfileGetProfileGetResult>;
    /**
    * Deletes all enrollments associated with the given speaker’s verification profile permanently from the service.
    *
    */
    verificationProfileResetEnrollmentsPost(queryParams: VerificationProfileResetEnrollmentsPostQueryParameters, headerParams: VerificationProfileResetEnrollmentsPostHeaderParameters, pathParams: VerificationProfileResetEnrollmentsPostPathParameters): Request<VerificationProfileResetEnrollmentsPostResult>;
    /**
    * Enrollment for speaker verification is text-dependent, which means speaker need to choose a specific phrase to use in both enrollment and verification. List of supported phrases can be found in Verification Phrase - List All Supported Verification Phrases.
The service requires at least 3 enrollments for each speaker before the profile can be used in verification scenarios. It is recommended to use the same device (mic) in both enrollment and verification.
    *
    */
    verificationProfileCreateEnrollmentPost(queryParams: VerificationProfileCreateEnrollmentPostQueryParameters, headerParams: VerificationProfileCreateEnrollmentPostHeaderParameters, pathParams: VerificationProfileCreateEnrollmentPostPathParameters): Request<VerificationProfileCreateEnrollmentPostResult>;
    /**
    * To automatically verify and authenticate users using their voice or speech.
    *
    */
    speakerRecognitionVerificationPost(queryParams: SpeakerRecognitionVerificationPostQueryParameters, headerParams: SpeakerRecognitionVerificationPostHeaderParameters): Request<SpeakerRecognitionVerificationPostResult>;
    /**
    * Create a new speaker identification profile with specified locale.
One subscription can only create 1000 speaker verification/identification profiles at most.
    *
    */
    identificationProfileCreateProfilePost(queryParams: IdentificationProfileCreateProfilePostQueryParameters, headerParams: IdentificationProfileCreateProfilePostHeaderParameters): Request<IdentificationProfileCreateProfilePostResult>;
    /**
    * Get all speaker identification profiles within the subscription.
    *
    */
    identificationProfileGetAllProfilesGet(queryParams: IdentificationProfileGetAllProfilesGetQueryParameters, headerParams: IdentificationProfileGetAllProfilesGetHeaderParameters): Request<{
        "identificationProfileId": string;
        "locale": string;
        "enrollmentSpeechTime": any;
        0.0: any;
        "createdDateTime": string;
        "lastActionDateTime": string;
        "enrollmentStatus": string;
    }[]>;
    /**
    * Get a speaker identification profile by identificationProfileId.
    *
    */
    identificationProfileGetProfileGet(queryParams: IdentificationProfileGetProfileGetQueryParameters, headerParams: IdentificationProfileGetProfileGetHeaderParameters, pathParams: IdentificationProfileGetProfileGetPathParameters): Request<IdentificationProfileGetProfileGetResult>;
    /**
    * Deletes both speaker identification profile and all associated enrollments permanently from the service.
    *
    */
    identificationProfileDeleteProfileDelete(queryParams: IdentificationProfileDeleteProfileDeleteQueryParameters, headerParams: IdentificationProfileDeleteProfileDeleteHeaderParameters, pathParams: IdentificationProfileDeleteProfileDeletePathParameters): Request<IdentificationProfileDeleteProfileDeleteResult>;
    /**
    * Deletes all enrollments associated with the given speaker identification profile permanently from the service.
    *
    */
    identificationProfileResetEnrollmentsPost(queryParams: IdentificationProfileResetEnrollmentsPostQueryParameters, headerParams: IdentificationProfileResetEnrollmentsPostHeaderParameters, pathParams: IdentificationProfileResetEnrollmentsPostPathParameters): Request<IdentificationProfileResetEnrollmentsPostResult>;
    /**
    * Enrollment for speaker identification is text-independent, which means that there are no restrictions on what the speaker says in the audio. The speaker's voice is recorded, and a number of features are extracted to form a unique voiceprint.
    *
    */
    identificationProfileCreateEnrollmentPost(queryParams: IdentificationProfileCreateEnrollmentPostQueryParameters, headerParams: IdentificationProfileCreateEnrollmentPostHeaderParameters, pathParams: IdentificationProfileCreateEnrollmentPostPathParameters): Request<IdentificationProfileCreateEnrollmentPostResult>;
    /**
    * To automatically identify who is speaking given a group of speakers.
    *
    */
    speakerRecognitionIdentificationPost(queryParams: SpeakerRecognitionIdentificationPostQueryParameters, headerParams: SpeakerRecognitionIdentificationPostHeaderParameters): Request<SpeakerRecognitionIdentificationPostResult>;
    /**
    * Get operation status or result. The operation should be created by  Speaker Recognition - Identification or  Identification Profile - Create Enrollment. And the URL should be retrieved from Operation-Location header of initial POST 202 response
    *
    */
    speakerRecognitionGetOperationStatusGet(queryParams: SpeakerRecognitionGetOperationStatusGetQueryParameters, headerParams: SpeakerRecognitionGetOperationStatusGetHeaderParameters, pathParams: SpeakerRecognitionGetOperationStatusGetPathParameters): Request<SpeakerRecognitionGetOperationStatusGetResult>;
    /**
    * Returns the list of supported verification phrases that can be used for Verification Profile - Create Enrollment and Speaker Recognition - Verification.
    *
    */
    verificationPhraseListAllSupportedVerificationPhrasesGet(queryParams: VerificationPhraseListAllSupportedVerificationPhrasesGetQueryParameters, headerParams: VerificationPhraseListAllSupportedVerificationPhrasesGetHeaderParameters): Request<any[]>;
}
