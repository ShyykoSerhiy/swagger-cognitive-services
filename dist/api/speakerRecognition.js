"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const request = require("superagent");
const VerificationProfileCreateProfilePostQueryParametersNameMap = {
    subscriptionKey: "subscription-key"
};
const VerificationProfileGetAllProfilesGetQueryParametersNameMap = {
    subscriptionKey: "subscription-key"
};
const VerificationProfileDeleteProfileDeleteQueryParametersNameMap = {
    subscriptionKey: "subscription-key"
};
const VerificationProfileGetProfileGetQueryParametersNameMap = {
    subscriptionKey: "subscription-key"
};
const VerificationProfileResetEnrollmentsPostQueryParametersNameMap = {
    subscriptionKey: "subscription-key"
};
const VerificationProfileCreateEnrollmentPostQueryParametersNameMap = {
    subscriptionKey: "subscription-key"
};
const SpeakerRecognitionVerificationPostQueryParametersNameMap = {
    verificationProfileId: "verificationProfileId",
    subscriptionKey: "subscription-key"
};
const IdentificationProfileCreateProfilePostQueryParametersNameMap = {
    subscriptionKey: "subscription-key"
};
const IdentificationProfileGetAllProfilesGetQueryParametersNameMap = {
    subscriptionKey: "subscription-key"
};
const IdentificationProfileGetProfileGetQueryParametersNameMap = {
    subscriptionKey: "subscription-key"
};
const IdentificationProfileDeleteProfileDeleteQueryParametersNameMap = {
    subscriptionKey: "subscription-key"
};
const IdentificationProfileResetEnrollmentsPostQueryParametersNameMap = {
    subscriptionKey: "subscription-key"
};
const IdentificationProfileCreateEnrollmentPostQueryParametersNameMap = {
    shortAudio: "shortAudio",
    subscriptionKey: "subscription-key"
};
const SpeakerRecognitionIdentificationPostQueryParametersNameMap = {
    identificationProfileIds: "identificationProfileIds",
    shortAudio: "shortAudio",
    subscriptionKey: "subscription-key"
};
const SpeakerRecognitionGetOperationStatusGetQueryParametersNameMap = {
    subscriptionKey: "subscription-key"
};
const VerificationPhraseListAllSupportedVerificationPhrasesGetQueryParametersNameMap = {
    locale: "locale",
    subscriptionKey: "subscription-key"
};
const VerificationProfileCreateProfilePostHeaderParametersNameMap = {
    ocpApimSubscriptionKey: "Ocp-Apim-Subscription-Key"
};
const VerificationProfileGetAllProfilesGetHeaderParametersNameMap = {
    ocpApimSubscriptionKey: "Ocp-Apim-Subscription-Key"
};
const VerificationProfileDeleteProfileDeleteHeaderParametersNameMap = {
    ocpApimSubscriptionKey: "Ocp-Apim-Subscription-Key"
};
const VerificationProfileGetProfileGetHeaderParametersNameMap = {
    ocpApimSubscriptionKey: "Ocp-Apim-Subscription-Key"
};
const VerificationProfileResetEnrollmentsPostHeaderParametersNameMap = {
    ocpApimSubscriptionKey: "Ocp-Apim-Subscription-Key"
};
const VerificationProfileCreateEnrollmentPostHeaderParametersNameMap = {
    ocpApimSubscriptionKey: "Ocp-Apim-Subscription-Key"
};
const SpeakerRecognitionVerificationPostHeaderParametersNameMap = {
    ocpApimSubscriptionKey: "Ocp-Apim-Subscription-Key"
};
const IdentificationProfileCreateProfilePostHeaderParametersNameMap = {
    ocpApimSubscriptionKey: "Ocp-Apim-Subscription-Key"
};
const IdentificationProfileGetAllProfilesGetHeaderParametersNameMap = {
    ocpApimSubscriptionKey: "Ocp-Apim-Subscription-Key"
};
const IdentificationProfileGetProfileGetHeaderParametersNameMap = {
    ocpApimSubscriptionKey: "Ocp-Apim-Subscription-Key"
};
const IdentificationProfileDeleteProfileDeleteHeaderParametersNameMap = {
    ocpApimSubscriptionKey: "Ocp-Apim-Subscription-Key"
};
const IdentificationProfileResetEnrollmentsPostHeaderParametersNameMap = {
    ocpApimSubscriptionKey: "Ocp-Apim-Subscription-Key"
};
const IdentificationProfileCreateEnrollmentPostHeaderParametersNameMap = {
    ocpApimSubscriptionKey: "Ocp-Apim-Subscription-Key"
};
const SpeakerRecognitionIdentificationPostHeaderParametersNameMap = {
    ocpApimSubscriptionKey: "Ocp-Apim-Subscription-Key"
};
const SpeakerRecognitionGetOperationStatusGetHeaderParametersNameMap = {
    ocpApimSubscriptionKey: "Ocp-Apim-Subscription-Key"
};
const VerificationPhraseListAllSupportedVerificationPhrasesGetHeaderParametersNameMap = {
    ocpApimSubscriptionKey: "Ocp-Apim-Subscription-Key"
};
const VerificationProfileDeleteProfileDeletePathParametersNameMap = {
    verificationProfileId: "verificationProfileId"
};
const VerificationProfileGetProfileGetPathParametersNameMap = {
    verificationProfileId: "verificationProfileId"
};
const VerificationProfileResetEnrollmentsPostPathParametersNameMap = {
    verificationProfileId: "verificationProfileId"
};
const VerificationProfileCreateEnrollmentPostPathParametersNameMap = {
    verificationProfileId: "verificationProfileId"
};
const IdentificationProfileGetProfileGetPathParametersNameMap = {
    identificationProfileId: "identificationProfileId"
};
const IdentificationProfileDeleteProfileDeletePathParametersNameMap = {
    identificationProfileId: "identificationProfileId"
};
const IdentificationProfileResetEnrollmentsPostPathParametersNameMap = {
    identificationProfileId: "identificationProfileId"
};
const IdentificationProfileCreateEnrollmentPostPathParametersNameMap = {
    identificationProfileId: "identificationProfileId"
};
const SpeakerRecognitionGetOperationStatusGetPathParametersNameMap = {
    operationId: "operationId"
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
class SpeakerRecognitionAPI {
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
        const url = `https://westus.api.cognitive.microsoft.com/spid/v1.0${path}`;
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
    * Create a new speaker verification profile with specific locale.
One subscription can only create 1000 speaker verification/identification profiles at most.
    *
    */
    verificationProfileCreateProfilePost(queryParams, headerParams) {
        const queryParamsMapped = {};
        const headerParamsMapped = {};
        const pathParamsMapped = {};
        Object.assign(queryParamsMapped, convertParamsToRealParams(queryParams, VerificationProfileCreateProfilePostQueryParametersNameMap));
        Object.assign(headerParamsMapped, convertParamsToRealParams(headerParams, VerificationProfileCreateProfilePostHeaderParametersNameMap));
        return this.makeRequest('/verificationProfiles', 'post', queryParamsMapped, headerParamsMapped, pathParamsMapped);
    }
    /**
    * Get all speaker verification profiles within the subscription.
    *
    */
    verificationProfileGetAllProfilesGet(queryParams, headerParams) {
        const queryParamsMapped = {};
        const headerParamsMapped = {};
        const pathParamsMapped = {};
        Object.assign(queryParamsMapped, convertParamsToRealParams(queryParams, VerificationProfileGetAllProfilesGetQueryParametersNameMap));
        Object.assign(headerParamsMapped, convertParamsToRealParams(headerParams, VerificationProfileGetAllProfilesGetHeaderParametersNameMap));
        return this.makeRequest('/verificationProfiles', 'get', queryParamsMapped, headerParamsMapped, pathParamsMapped);
    }
    /**
    * Deletes both speaker verification profile and all associated enrollments permanently from the service.
    *
    */
    verificationProfileDeleteProfileDelete(queryParams, headerParams, pathParams) {
        const queryParamsMapped = {};
        const headerParamsMapped = {};
        const pathParamsMapped = {};
        Object.assign(queryParamsMapped, convertParamsToRealParams(queryParams, VerificationProfileDeleteProfileDeleteQueryParametersNameMap));
        Object.assign(headerParamsMapped, convertParamsToRealParams(headerParams, VerificationProfileDeleteProfileDeleteHeaderParametersNameMap));
        Object.assign(pathParamsMapped, convertParamsToRealParams(pathParams, VerificationProfileDeleteProfileDeletePathParametersNameMap));
        return this.makeRequest('/verificationProfiles/{verificationProfileId}', 'delete', queryParamsMapped, headerParamsMapped, pathParamsMapped);
    }
    /**
    * Get a speaker verification profile by verificationProfileId
    *
    */
    verificationProfileGetProfileGet(queryParams, headerParams, pathParams) {
        const queryParamsMapped = {};
        const headerParamsMapped = {};
        const pathParamsMapped = {};
        Object.assign(queryParamsMapped, convertParamsToRealParams(queryParams, VerificationProfileGetProfileGetQueryParametersNameMap));
        Object.assign(headerParamsMapped, convertParamsToRealParams(headerParams, VerificationProfileGetProfileGetHeaderParametersNameMap));
        Object.assign(pathParamsMapped, convertParamsToRealParams(pathParams, VerificationProfileGetProfileGetPathParametersNameMap));
        return this.makeRequest('/verificationProfiles/{verificationProfileId}', 'get', queryParamsMapped, headerParamsMapped, pathParamsMapped);
    }
    /**
    * Deletes all enrollments associated with the given speaker’s verification profile permanently from the service.
    *
    */
    verificationProfileResetEnrollmentsPost(queryParams, headerParams, pathParams) {
        const queryParamsMapped = {};
        const headerParamsMapped = {};
        const pathParamsMapped = {};
        Object.assign(queryParamsMapped, convertParamsToRealParams(queryParams, VerificationProfileResetEnrollmentsPostQueryParametersNameMap));
        Object.assign(headerParamsMapped, convertParamsToRealParams(headerParams, VerificationProfileResetEnrollmentsPostHeaderParametersNameMap));
        Object.assign(pathParamsMapped, convertParamsToRealParams(pathParams, VerificationProfileResetEnrollmentsPostPathParametersNameMap));
        return this.makeRequest('/verificationProfiles/{verificationProfileId}/reset', 'post', queryParamsMapped, headerParamsMapped, pathParamsMapped);
    }
    /**
    * Enrollment for speaker verification is text-dependent, which means speaker need to choose a specific phrase to use in both enrollment and verification. List of supported phrases can be found in Verification Phrase - List All Supported Verification Phrases.
The service requires at least 3 enrollments for each speaker before the profile can be used in verification scenarios. It is recommended to use the same device (mic) in both enrollment and verification.
    *
    */
    verificationProfileCreateEnrollmentPost(queryParams, headerParams, pathParams) {
        const queryParamsMapped = {};
        const headerParamsMapped = {};
        const pathParamsMapped = {};
        Object.assign(queryParamsMapped, convertParamsToRealParams(queryParams, VerificationProfileCreateEnrollmentPostQueryParametersNameMap));
        Object.assign(headerParamsMapped, convertParamsToRealParams(headerParams, VerificationProfileCreateEnrollmentPostHeaderParametersNameMap));
        Object.assign(pathParamsMapped, convertParamsToRealParams(pathParams, VerificationProfileCreateEnrollmentPostPathParametersNameMap));
        return this.makeRequest('/verificationProfiles/{verificationProfileId}/enroll', 'post', queryParamsMapped, headerParamsMapped, pathParamsMapped);
    }
    /**
    * To automatically verify and authenticate users using their voice or speech.
    *
    */
    speakerRecognitionVerificationPost(queryParams, headerParams) {
        const queryParamsMapped = {};
        const headerParamsMapped = {};
        const pathParamsMapped = {};
        Object.assign(queryParamsMapped, convertParamsToRealParams(queryParams, SpeakerRecognitionVerificationPostQueryParametersNameMap));
        Object.assign(headerParamsMapped, convertParamsToRealParams(headerParams, SpeakerRecognitionVerificationPostHeaderParametersNameMap));
        return this.makeRequest('/verify', 'post', queryParamsMapped, headerParamsMapped, pathParamsMapped);
    }
    /**
    * Create a new speaker identification profile with specified locale.
One subscription can only create 1000 speaker verification/identification profiles at most.
    *
    */
    identificationProfileCreateProfilePost(queryParams, headerParams) {
        const queryParamsMapped = {};
        const headerParamsMapped = {};
        const pathParamsMapped = {};
        Object.assign(queryParamsMapped, convertParamsToRealParams(queryParams, IdentificationProfileCreateProfilePostQueryParametersNameMap));
        Object.assign(headerParamsMapped, convertParamsToRealParams(headerParams, IdentificationProfileCreateProfilePostHeaderParametersNameMap));
        return this.makeRequest('/identificationProfiles', 'post', queryParamsMapped, headerParamsMapped, pathParamsMapped);
    }
    /**
    * Get all speaker identification profiles within the subscription.
    *
    */
    identificationProfileGetAllProfilesGet(queryParams, headerParams) {
        const queryParamsMapped = {};
        const headerParamsMapped = {};
        const pathParamsMapped = {};
        Object.assign(queryParamsMapped, convertParamsToRealParams(queryParams, IdentificationProfileGetAllProfilesGetQueryParametersNameMap));
        Object.assign(headerParamsMapped, convertParamsToRealParams(headerParams, IdentificationProfileGetAllProfilesGetHeaderParametersNameMap));
        return this.makeRequest('/identificationProfiles', 'get', queryParamsMapped, headerParamsMapped, pathParamsMapped);
    }
    /**
    * Get a speaker identification profile by identificationProfileId.
    *
    */
    identificationProfileGetProfileGet(queryParams, headerParams, pathParams) {
        const queryParamsMapped = {};
        const headerParamsMapped = {};
        const pathParamsMapped = {};
        Object.assign(queryParamsMapped, convertParamsToRealParams(queryParams, IdentificationProfileGetProfileGetQueryParametersNameMap));
        Object.assign(headerParamsMapped, convertParamsToRealParams(headerParams, IdentificationProfileGetProfileGetHeaderParametersNameMap));
        Object.assign(pathParamsMapped, convertParamsToRealParams(pathParams, IdentificationProfileGetProfileGetPathParametersNameMap));
        return this.makeRequest('/identificationProfiles/{identificationProfileId}', 'get', queryParamsMapped, headerParamsMapped, pathParamsMapped);
    }
    /**
    * Deletes both speaker identification profile and all associated enrollments permanently from the service.
    *
    */
    identificationProfileDeleteProfileDelete(queryParams, headerParams, pathParams) {
        const queryParamsMapped = {};
        const headerParamsMapped = {};
        const pathParamsMapped = {};
        Object.assign(queryParamsMapped, convertParamsToRealParams(queryParams, IdentificationProfileDeleteProfileDeleteQueryParametersNameMap));
        Object.assign(headerParamsMapped, convertParamsToRealParams(headerParams, IdentificationProfileDeleteProfileDeleteHeaderParametersNameMap));
        Object.assign(pathParamsMapped, convertParamsToRealParams(pathParams, IdentificationProfileDeleteProfileDeletePathParametersNameMap));
        return this.makeRequest('/identificationProfiles/{identificationProfileId}', 'delete', queryParamsMapped, headerParamsMapped, pathParamsMapped);
    }
    /**
    * Deletes all enrollments associated with the given speaker identification profile permanently from the service.
    *
    */
    identificationProfileResetEnrollmentsPost(queryParams, headerParams, pathParams) {
        const queryParamsMapped = {};
        const headerParamsMapped = {};
        const pathParamsMapped = {};
        Object.assign(queryParamsMapped, convertParamsToRealParams(queryParams, IdentificationProfileResetEnrollmentsPostQueryParametersNameMap));
        Object.assign(headerParamsMapped, convertParamsToRealParams(headerParams, IdentificationProfileResetEnrollmentsPostHeaderParametersNameMap));
        Object.assign(pathParamsMapped, convertParamsToRealParams(pathParams, IdentificationProfileResetEnrollmentsPostPathParametersNameMap));
        return this.makeRequest('/identificationProfiles/{identificationProfileId}/reset', 'post', queryParamsMapped, headerParamsMapped, pathParamsMapped);
    }
    /**
    * Enrollment for speaker identification is text-independent, which means that there are no restrictions on what the speaker says in the audio. The speaker's voice is recorded, and a number of features are extracted to form a unique voiceprint.
    *
    */
    identificationProfileCreateEnrollmentPost(queryParams, headerParams, pathParams) {
        const queryParamsMapped = {};
        const headerParamsMapped = {};
        const pathParamsMapped = {};
        Object.assign(queryParamsMapped, convertParamsToRealParams(queryParams, IdentificationProfileCreateEnrollmentPostQueryParametersNameMap));
        Object.assign(headerParamsMapped, convertParamsToRealParams(headerParams, IdentificationProfileCreateEnrollmentPostHeaderParametersNameMap));
        Object.assign(pathParamsMapped, convertParamsToRealParams(pathParams, IdentificationProfileCreateEnrollmentPostPathParametersNameMap));
        return this.makeRequest('/identificationProfiles/{identificationProfileId}/enroll', 'post', queryParamsMapped, headerParamsMapped, pathParamsMapped);
    }
    /**
    * To automatically identify who is speaking given a group of speakers.
    *
    */
    speakerRecognitionIdentificationPost(queryParams, headerParams) {
        const queryParamsMapped = {};
        const headerParamsMapped = {};
        const pathParamsMapped = {};
        Object.assign(queryParamsMapped, convertParamsToRealParams(queryParams, SpeakerRecognitionIdentificationPostQueryParametersNameMap));
        Object.assign(headerParamsMapped, convertParamsToRealParams(headerParams, SpeakerRecognitionIdentificationPostHeaderParametersNameMap));
        return this.makeRequest('/identify', 'post', queryParamsMapped, headerParamsMapped, pathParamsMapped);
    }
    /**
    * Get operation status or result. The operation should be created by  Speaker Recognition - Identification or  Identification Profile - Create Enrollment. And the URL should be retrieved from Operation-Location header of initial POST 202 response
    *
    */
    speakerRecognitionGetOperationStatusGet(queryParams, headerParams, pathParams) {
        const queryParamsMapped = {};
        const headerParamsMapped = {};
        const pathParamsMapped = {};
        Object.assign(queryParamsMapped, convertParamsToRealParams(queryParams, SpeakerRecognitionGetOperationStatusGetQueryParametersNameMap));
        Object.assign(headerParamsMapped, convertParamsToRealParams(headerParams, SpeakerRecognitionGetOperationStatusGetHeaderParametersNameMap));
        Object.assign(pathParamsMapped, convertParamsToRealParams(pathParams, SpeakerRecognitionGetOperationStatusGetPathParametersNameMap));
        return this.makeRequest('/operations/{operationId}', 'get', queryParamsMapped, headerParamsMapped, pathParamsMapped);
    }
    /**
    * Returns the list of supported verification phrases that can be used for Verification Profile - Create Enrollment and Speaker Recognition - Verification.
    *
    */
    verificationPhraseListAllSupportedVerificationPhrasesGet(queryParams, headerParams) {
        const queryParamsMapped = {};
        const headerParamsMapped = {};
        const pathParamsMapped = {};
        Object.assign(queryParamsMapped, convertParamsToRealParams(queryParams, VerificationPhraseListAllSupportedVerificationPhrasesGetQueryParametersNameMap));
        Object.assign(headerParamsMapped, convertParamsToRealParams(headerParams, VerificationPhraseListAllSupportedVerificationPhrasesGetHeaderParametersNameMap));
        return this.makeRequest('/verificationPhrases', 'get', queryParamsMapped, headerParamsMapped, pathParamsMapped);
    }
}
exports.SpeakerRecognitionAPI = SpeakerRecognitionAPI;
//# sourceMappingURL=speakerRecognition.js.map