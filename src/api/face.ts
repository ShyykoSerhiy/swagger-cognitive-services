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

export interface FaceDetectPostQueryParameters {
    /**
    * Return faceIds of the detected faces or not. The default value is true. 
    * Real name : returnFaceId
    */    
    returnFaceId?: boolean;
    /**
    * Return face landmarks of the detected faces or not. The default value is false. 
    * Real name : returnFaceLandmarks
    */    
    returnFaceLandmarks?: boolean;
    /**
    * Analyze and return the one or more specified face attributes in the comma-separated string like &quot;returnFaceAttributes&#x3D;age,gender&quot;. Supported face attributes include age, gender, headPose, smile, facialHair, and glasses. Note that each face attribute analysis has additional computational and time cost.
    * Real name : returnFaceAttributes
    */    
    returnFaceAttributes?: string;
    /**
    * subscription key in url
    * Real name : subscription-key
    */    
    subscriptionKey?: string;
}
const FaceDetectPostQueryParametersNameMap = {
    returnFaceId: "returnFaceId",
    returnFaceLandmarks: "returnFaceLandmarks",
    returnFaceAttributes: "returnFaceAttributes",
    subscriptionKey: "subscription-key"
};
export interface FaceFindSimilarPostQueryParameters {
    /**
    * subscription key in url
    * Real name : subscription-key
    */    
    subscriptionKey?: string;
}
const FaceFindSimilarPostQueryParametersNameMap = {
    subscriptionKey: "subscription-key"
};
export interface FaceGroupPostQueryParameters {
    /**
    * subscription key in url
    * Real name : subscription-key
    */    
    subscriptionKey?: string;
}
const FaceGroupPostQueryParametersNameMap = {
    subscriptionKey: "subscription-key"
};
export interface FaceIdentifyPostQueryParameters {
    /**
    * subscription key in url
    * Real name : subscription-key
    */    
    subscriptionKey?: string;
}
const FaceIdentifyPostQueryParametersNameMap = {
    subscriptionKey: "subscription-key"
};
export interface FaceVerifyPostQueryParameters {
    /**
    * subscription key in url
    * Real name : subscription-key
    */    
    subscriptionKey?: string;
}
const FaceVerifyPostQueryParametersNameMap = {
    subscriptionKey: "subscription-key"
};
export interface PersonAddAPersonFacePostQueryParameters {
    /**
    * User-specified data about the target face to add for any purpose. The maximum length is 1KB. 
    * Real name : userData
    */    
    userData?: string;
    /**
    * A face rectangle to specify the target face to be added to a person, in the format of &quot;targetFace&#x3D;left,top,width,height&quot;. E.g. &quot;targetFace&#x3D;10,10,100,100&quot;. If there is more than one face in the image, targetFace is required to specify which face to add. No targetFace means there is only one face detected in the entire image. 
    * Real name : targetFace
    */    
    targetFace?: string;
    /**
    * subscription key in url
    * Real name : subscription-key
    */    
    subscriptionKey?: string;
}
const PersonAddAPersonFacePostQueryParametersNameMap = {
    userData: "userData",
    targetFace: "targetFace",
    subscriptionKey: "subscription-key"
};
export interface PersonCreateAPersonPostQueryParameters {
    /**
    * subscription key in url
    * Real name : subscription-key
    */    
    subscriptionKey?: string;
}
const PersonCreateAPersonPostQueryParametersNameMap = {
    subscriptionKey: "subscription-key"
};
export interface PersonListPersonsInAPersonGroupGetQueryParameters {
    /**
    * subscription key in url
    * Real name : subscription-key
    */    
    subscriptionKey?: string;
}
const PersonListPersonsInAPersonGroupGetQueryParametersNameMap = {
    subscriptionKey: "subscription-key"
};
export interface PersonDeleteAPersonDeleteQueryParameters {
    /**
    * subscription key in url
    * Real name : subscription-key
    */    
    subscriptionKey?: string;
}
const PersonDeleteAPersonDeleteQueryParametersNameMap = {
    subscriptionKey: "subscription-key"
};
export interface PersonGetAPersonGetQueryParameters {
    /**
    * subscription key in url
    * Real name : subscription-key
    */    
    subscriptionKey?: string;
}
const PersonGetAPersonGetQueryParametersNameMap = {
    subscriptionKey: "subscription-key"
};
export interface PersonUpdateAPersonPatchQueryParameters {
    /**
    * subscription key in url
    * Real name : subscription-key
    */    
    subscriptionKey?: string;
}
const PersonUpdateAPersonPatchQueryParametersNameMap = {
    subscriptionKey: "subscription-key"
};
export interface PersonDeleteAPersonFaceDeleteQueryParameters {
    /**
    * subscription key in url
    * Real name : subscription-key
    */    
    subscriptionKey?: string;
}
const PersonDeleteAPersonFaceDeleteQueryParametersNameMap = {
    subscriptionKey: "subscription-key"
};
export interface PersonGetAPersonFaceGetQueryParameters {
    /**
    * subscription key in url
    * Real name : subscription-key
    */    
    subscriptionKey?: string;
}
const PersonGetAPersonFaceGetQueryParametersNameMap = {
    subscriptionKey: "subscription-key"
};
export interface PersonUpdateAPersonFacePatchQueryParameters {
    /**
    * subscription key in url
    * Real name : subscription-key
    */    
    subscriptionKey?: string;
}
const PersonUpdateAPersonFacePatchQueryParametersNameMap = {
    subscriptionKey: "subscription-key"
};
export interface PersonGroupCreateAPersonGroupPutQueryParameters {
    /**
    * subscription key in url
    * Real name : subscription-key
    */    
    subscriptionKey?: string;
}
const PersonGroupCreateAPersonGroupPutQueryParametersNameMap = {
    subscriptionKey: "subscription-key"
};
export interface PersonGroupDeleteAPersonGroupDeleteQueryParameters {
    /**
    * subscription key in url
    * Real name : subscription-key
    */    
    subscriptionKey?: string;
}
const PersonGroupDeleteAPersonGroupDeleteQueryParametersNameMap = {
    subscriptionKey: "subscription-key"
};
export interface PersonGroupGetAPersonGroupGetQueryParameters {
    /**
    * subscription key in url
    * Real name : subscription-key
    */    
    subscriptionKey?: string;
}
const PersonGroupGetAPersonGroupGetQueryParametersNameMap = {
    subscriptionKey: "subscription-key"
};
export interface PersonGroupUpdateAPersonGroupPatchQueryParameters {
    /**
    * subscription key in url
    * Real name : subscription-key
    */    
    subscriptionKey?: string;
}
const PersonGroupUpdateAPersonGroupPatchQueryParametersNameMap = {
    subscriptionKey: "subscription-key"
};
export interface PersonGroupGetPersonGroupTrainingStatusGetQueryParameters {
    /**
    * subscription key in url
    * Real name : subscription-key
    */    
    subscriptionKey?: string;
}
const PersonGroupGetPersonGroupTrainingStatusGetQueryParametersNameMap = {
    subscriptionKey: "subscription-key"
};
export interface PersonGroupListPersonGroupsGetQueryParameters {
    /**
    * List person groups from the least personGroupId greater than the &quot;start&quot;. It contains no more than 64 characters. Default is empty. 
    * Real name : start
    */    
    start?: string;
    /**
    * The number of person groups to list, ranging in [1, 1000]. Default is 1000. 
    * Real name : top
    */    
    top?: number;
    /**
    * subscription key in url
    * Real name : subscription-key
    */    
    subscriptionKey?: string;
}
const PersonGroupListPersonGroupsGetQueryParametersNameMap = {
    start: "start",
    top: "top",
    subscriptionKey: "subscription-key"
};
export interface PersonGroupTrainPersonGroupPostQueryParameters {
    /**
    * subscription key in url
    * Real name : subscription-key
    */    
    subscriptionKey?: string;
}
const PersonGroupTrainPersonGroupPostQueryParametersNameMap = {
    subscriptionKey: "subscription-key"
};
export interface FaceListCreateAFaceListPutQueryParameters {
    /**
    * subscription key in url
    * Real name : subscription-key
    */    
    subscriptionKey?: string;
}
const FaceListCreateAFaceListPutQueryParametersNameMap = {
    subscriptionKey: "subscription-key"
};
export interface FaceListGetAFaceListGetQueryParameters {
    /**
    * subscription key in url
    * Real name : subscription-key
    */    
    subscriptionKey?: string;
}
const FaceListGetAFaceListGetQueryParametersNameMap = {
    subscriptionKey: "subscription-key"
};
export interface FaceListUpdateAFaceListPatchQueryParameters {
    /**
    * subscription key in url
    * Real name : subscription-key
    */    
    subscriptionKey?: string;
}
const FaceListUpdateAFaceListPatchQueryParametersNameMap = {
    subscriptionKey: "subscription-key"
};
export interface FaceListDeleteAFaceListDeleteQueryParameters {
    /**
    * subscription key in url
    * Real name : subscription-key
    */    
    subscriptionKey?: string;
}
const FaceListDeleteAFaceListDeleteQueryParametersNameMap = {
    subscriptionKey: "subscription-key"
};
export interface FaceListListFaceListsGetQueryParameters {
    /**
    * subscription key in url
    * Real name : subscription-key
    */    
    subscriptionKey?: string;
}
const FaceListListFaceListsGetQueryParametersNameMap = {
    subscriptionKey: "subscription-key"
};
export interface FaceListAddAFaceToAFaceListPostQueryParameters {
    /**
    * User-specified data about the face list for any purpose. The  maximum length is 1KB.
    * Real name : userData
    */    
    userData?: string;
    /**
    * A face rectangle to specify the target face to be added into the face list, in the format of &quot;targetFace&#x3D;left,top,width,height&quot;. E.g. &quot;targetFace&#x3D;10,10,100,100&quot;. If there is more than one face in the image, targetFace is required to specify which face to add. No targetFace means there is only one face detected in the entire image.
    * Real name : targetFace
    */    
    targetFace?: string;
    /**
    * subscription key in url
    * Real name : subscription-key
    */    
    subscriptionKey?: string;
}
const FaceListAddAFaceToAFaceListPostQueryParametersNameMap = {
    userData: "userData",
    targetFace: "targetFace",
    subscriptionKey: "subscription-key"
};
export interface FaceListDeleteAFaceFromAFaceListDeleteQueryParameters {
    /**
    * subscription key in url
    * Real name : subscription-key
    */    
    subscriptionKey?: string;
}
const FaceListDeleteAFaceFromAFaceListDeleteQueryParametersNameMap = {
    subscriptionKey: "subscription-key"
};
//Interfaces for headerParameters of the methods

export interface FaceDetectPostHeaderParameters {
    /**
    * subscription key in header
    * Real name : Ocp-Apim-Subscription-Key
    */    
    ocpApimSubscriptionKey?: string;
}
const FaceDetectPostHeaderParametersNameMap = {
    ocpApimSubscriptionKey: "Ocp-Apim-Subscription-Key"
};
export interface FaceFindSimilarPostHeaderParameters {
    /**
    * subscription key in header
    * Real name : Ocp-Apim-Subscription-Key
    */    
    ocpApimSubscriptionKey?: string;
}
const FaceFindSimilarPostHeaderParametersNameMap = {
    ocpApimSubscriptionKey: "Ocp-Apim-Subscription-Key"
};
export interface FaceGroupPostHeaderParameters {
    /**
    * subscription key in header
    * Real name : Ocp-Apim-Subscription-Key
    */    
    ocpApimSubscriptionKey?: string;
}
const FaceGroupPostHeaderParametersNameMap = {
    ocpApimSubscriptionKey: "Ocp-Apim-Subscription-Key"
};
export interface FaceIdentifyPostHeaderParameters {
    /**
    * subscription key in header
    * Real name : Ocp-Apim-Subscription-Key
    */    
    ocpApimSubscriptionKey?: string;
}
const FaceIdentifyPostHeaderParametersNameMap = {
    ocpApimSubscriptionKey: "Ocp-Apim-Subscription-Key"
};
export interface FaceVerifyPostHeaderParameters {
    /**
    * subscription key in header
    * Real name : Ocp-Apim-Subscription-Key
    */    
    ocpApimSubscriptionKey?: string;
}
const FaceVerifyPostHeaderParametersNameMap = {
    ocpApimSubscriptionKey: "Ocp-Apim-Subscription-Key"
};
export interface PersonAddAPersonFacePostHeaderParameters {
    /**
    * subscription key in header
    * Real name : Ocp-Apim-Subscription-Key
    */    
    ocpApimSubscriptionKey?: string;
}
const PersonAddAPersonFacePostHeaderParametersNameMap = {
    ocpApimSubscriptionKey: "Ocp-Apim-Subscription-Key"
};
export interface PersonCreateAPersonPostHeaderParameters {
    /**
    * subscription key in header
    * Real name : Ocp-Apim-Subscription-Key
    */    
    ocpApimSubscriptionKey?: string;
}
const PersonCreateAPersonPostHeaderParametersNameMap = {
    ocpApimSubscriptionKey: "Ocp-Apim-Subscription-Key"
};
export interface PersonListPersonsInAPersonGroupGetHeaderParameters {
    /**
    * subscription key in header
    * Real name : Ocp-Apim-Subscription-Key
    */    
    ocpApimSubscriptionKey?: string;
}
const PersonListPersonsInAPersonGroupGetHeaderParametersNameMap = {
    ocpApimSubscriptionKey: "Ocp-Apim-Subscription-Key"
};
export interface PersonDeleteAPersonDeleteHeaderParameters {
    /**
    * subscription key in header
    * Real name : Ocp-Apim-Subscription-Key
    */    
    ocpApimSubscriptionKey?: string;
}
const PersonDeleteAPersonDeleteHeaderParametersNameMap = {
    ocpApimSubscriptionKey: "Ocp-Apim-Subscription-Key"
};
export interface PersonGetAPersonGetHeaderParameters {
    /**
    * subscription key in header
    * Real name : Ocp-Apim-Subscription-Key
    */    
    ocpApimSubscriptionKey?: string;
}
const PersonGetAPersonGetHeaderParametersNameMap = {
    ocpApimSubscriptionKey: "Ocp-Apim-Subscription-Key"
};
export interface PersonUpdateAPersonPatchHeaderParameters {
    /**
    * subscription key in header
    * Real name : Ocp-Apim-Subscription-Key
    */    
    ocpApimSubscriptionKey?: string;
}
const PersonUpdateAPersonPatchHeaderParametersNameMap = {
    ocpApimSubscriptionKey: "Ocp-Apim-Subscription-Key"
};
export interface PersonDeleteAPersonFaceDeleteHeaderParameters {
    /**
    * subscription key in header
    * Real name : Ocp-Apim-Subscription-Key
    */    
    ocpApimSubscriptionKey?: string;
}
const PersonDeleteAPersonFaceDeleteHeaderParametersNameMap = {
    ocpApimSubscriptionKey: "Ocp-Apim-Subscription-Key"
};
export interface PersonGetAPersonFaceGetHeaderParameters {
    /**
    * subscription key in header
    * Real name : Ocp-Apim-Subscription-Key
    */    
    ocpApimSubscriptionKey?: string;
}
const PersonGetAPersonFaceGetHeaderParametersNameMap = {
    ocpApimSubscriptionKey: "Ocp-Apim-Subscription-Key"
};
export interface PersonUpdateAPersonFacePatchHeaderParameters {
    /**
    * subscription key in header
    * Real name : Ocp-Apim-Subscription-Key
    */    
    ocpApimSubscriptionKey?: string;
}
const PersonUpdateAPersonFacePatchHeaderParametersNameMap = {
    ocpApimSubscriptionKey: "Ocp-Apim-Subscription-Key"
};
export interface PersonGroupCreateAPersonGroupPutHeaderParameters {
    /**
    * subscription key in header
    * Real name : Ocp-Apim-Subscription-Key
    */    
    ocpApimSubscriptionKey?: string;
}
const PersonGroupCreateAPersonGroupPutHeaderParametersNameMap = {
    ocpApimSubscriptionKey: "Ocp-Apim-Subscription-Key"
};
export interface PersonGroupDeleteAPersonGroupDeleteHeaderParameters {
    /**
    * subscription key in header
    * Real name : Ocp-Apim-Subscription-Key
    */    
    ocpApimSubscriptionKey?: string;
}
const PersonGroupDeleteAPersonGroupDeleteHeaderParametersNameMap = {
    ocpApimSubscriptionKey: "Ocp-Apim-Subscription-Key"
};
export interface PersonGroupGetAPersonGroupGetHeaderParameters {
    /**
    * subscription key in header
    * Real name : Ocp-Apim-Subscription-Key
    */    
    ocpApimSubscriptionKey?: string;
}
const PersonGroupGetAPersonGroupGetHeaderParametersNameMap = {
    ocpApimSubscriptionKey: "Ocp-Apim-Subscription-Key"
};
export interface PersonGroupUpdateAPersonGroupPatchHeaderParameters {
    /**
    * subscription key in header
    * Real name : Ocp-Apim-Subscription-Key
    */    
    ocpApimSubscriptionKey?: string;
}
const PersonGroupUpdateAPersonGroupPatchHeaderParametersNameMap = {
    ocpApimSubscriptionKey: "Ocp-Apim-Subscription-Key"
};
export interface PersonGroupGetPersonGroupTrainingStatusGetHeaderParameters {
    /**
    * subscription key in header
    * Real name : Ocp-Apim-Subscription-Key
    */    
    ocpApimSubscriptionKey?: string;
}
const PersonGroupGetPersonGroupTrainingStatusGetHeaderParametersNameMap = {
    ocpApimSubscriptionKey: "Ocp-Apim-Subscription-Key"
};
export interface PersonGroupListPersonGroupsGetHeaderParameters {
    /**
    * subscription key in header
    * Real name : Ocp-Apim-Subscription-Key
    */    
    ocpApimSubscriptionKey?: string;
}
const PersonGroupListPersonGroupsGetHeaderParametersNameMap = {
    ocpApimSubscriptionKey: "Ocp-Apim-Subscription-Key"
};
export interface PersonGroupTrainPersonGroupPostHeaderParameters {
    /**
    * subscription key in header
    * Real name : Ocp-Apim-Subscription-Key
    */    
    ocpApimSubscriptionKey?: string;
}
const PersonGroupTrainPersonGroupPostHeaderParametersNameMap = {
    ocpApimSubscriptionKey: "Ocp-Apim-Subscription-Key"
};
export interface FaceListCreateAFaceListPutHeaderParameters {
    /**
    * subscription key in header
    * Real name : Ocp-Apim-Subscription-Key
    */    
    ocpApimSubscriptionKey?: string;
}
const FaceListCreateAFaceListPutHeaderParametersNameMap = {
    ocpApimSubscriptionKey: "Ocp-Apim-Subscription-Key"
};
export interface FaceListGetAFaceListGetHeaderParameters {
    /**
    * subscription key in header
    * Real name : Ocp-Apim-Subscription-Key
    */    
    ocpApimSubscriptionKey?: string;
}
const FaceListGetAFaceListGetHeaderParametersNameMap = {
    ocpApimSubscriptionKey: "Ocp-Apim-Subscription-Key"
};
export interface FaceListUpdateAFaceListPatchHeaderParameters {
    /**
    * subscription key in header
    * Real name : Ocp-Apim-Subscription-Key
    */    
    ocpApimSubscriptionKey?: string;
}
const FaceListUpdateAFaceListPatchHeaderParametersNameMap = {
    ocpApimSubscriptionKey: "Ocp-Apim-Subscription-Key"
};
export interface FaceListDeleteAFaceListDeleteHeaderParameters {
    /**
    * subscription key in header
    * Real name : Ocp-Apim-Subscription-Key
    */    
    ocpApimSubscriptionKey?: string;
}
const FaceListDeleteAFaceListDeleteHeaderParametersNameMap = {
    ocpApimSubscriptionKey: "Ocp-Apim-Subscription-Key"
};
export interface FaceListListFaceListsGetHeaderParameters {
    /**
    * subscription key in header
    * Real name : Ocp-Apim-Subscription-Key
    */    
    ocpApimSubscriptionKey?: string;
}
const FaceListListFaceListsGetHeaderParametersNameMap = {
    ocpApimSubscriptionKey: "Ocp-Apim-Subscription-Key"
};
export interface FaceListAddAFaceToAFaceListPostHeaderParameters {
    /**
    * subscription key in header
    * Real name : Ocp-Apim-Subscription-Key
    */    
    ocpApimSubscriptionKey?: string;
}
const FaceListAddAFaceToAFaceListPostHeaderParametersNameMap = {
    ocpApimSubscriptionKey: "Ocp-Apim-Subscription-Key"
};
export interface FaceListDeleteAFaceFromAFaceListDeleteHeaderParameters {
    /**
    * subscription key in header
    * Real name : Ocp-Apim-Subscription-Key
    */    
    ocpApimSubscriptionKey?: string;
}
const FaceListDeleteAFaceFromAFaceListDeleteHeaderParametersNameMap = {
    ocpApimSubscriptionKey: "Ocp-Apim-Subscription-Key"
};
//Interfaces for pathParameters of the methods

export interface PersonAddAPersonFacePostPathParameters {
    /**
    * Specifying the person group containing the target person.
    * Real name : personGroupId
    */    
    personGroupId: string;
    /**
    * Target person that the face is added to.
    * Real name : personId
    */    
    personId: string;
}
const PersonAddAPersonFacePostPathParametersNameMap = {
    personGroupId: "personGroupId",
    personId: "personId"
};
export interface PersonCreateAPersonPostPathParameters {
    /**
    * Specifying the target person group to create the person.
    * Real name : personGroupId
    */    
    personGroupId: string;
}
const PersonCreateAPersonPostPathParametersNameMap = {
    personGroupId: "personGroupId"
};
export interface PersonListPersonsInAPersonGroupGetPathParameters {
    /**
    * personGroupId of the target person group.
    * Real name : personGroupId
    */    
    personGroupId: string;
}
const PersonListPersonsInAPersonGroupGetPathParametersNameMap = {
    personGroupId: "personGroupId"
};
export interface PersonDeleteAPersonDeletePathParameters {
    /**
    * Specifying the person group containing the person.
    * Real name : personGroupId
    */    
    personGroupId: string;
    /**
    * The target personId to delete.
    * Real name : personId
    */    
    personId: string;
}
const PersonDeleteAPersonDeletePathParametersNameMap = {
    personGroupId: "personGroupId",
    personId: "personId"
};
export interface PersonGetAPersonGetPathParameters {
    /**
    * Specifying the person group containing the target person.
    * Real name : personGroupId
    */    
    personGroupId: string;
    /**
    * Specifying the target person.
    * Real name : personId
    */    
    personId: string;
}
const PersonGetAPersonGetPathParametersNameMap = {
    personGroupId: "personGroupId",
    personId: "personId"
};
export interface PersonUpdateAPersonPatchPathParameters {
    /**
    * Specifying the person group containing the target person.
    * Real name : personGroupId
    */    
    personGroupId: string;
    /**
    * personId of the target person.
    * Real name : personId
    */    
    personId: string;
}
const PersonUpdateAPersonPatchPathParametersNameMap = {
    personGroupId: "personGroupId",
    personId: "personId"
};
export interface PersonDeleteAPersonFaceDeletePathParameters {
    /**
    * Specifying the person group containing the target person.
    * Real name : personGroupId
    */    
    personGroupId: string;
    /**
    * Specifying the person that the target persisted face belong to.
    * Real name : personId
    */    
    personId: string;
    /**
    * The persisted face to remove. This persistedFaceId is returned from &lt;a href&#x3D;&quot;/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f3039523b&quot;&gt;Person - Add a Person Face&lt;/a&gt;.
    * Real name : persistedFaceId
    */    
    persistedFaceId: string;
}
const PersonDeleteAPersonFaceDeletePathParametersNameMap = {
    personGroupId: "personGroupId",
    personId: "personId",
    persistedFaceId: "persistedFaceId"
};
export interface PersonGetAPersonFaceGetPathParameters {
    /**
    * Specifying the person group containing the target person.
    * Real name : personGroupId
    */    
    personGroupId: string;
    /**
    * Specifying the target person that the face belongs to.
    * Real name : personId
    */    
    personId: string;
    /**
    * The persistedFaceId of the target persisted face of the person.
    * Real name : persistedFaceId
    */    
    persistedFaceId: string;
}
const PersonGetAPersonFaceGetPathParametersNameMap = {
    personGroupId: "personGroupId",
    personId: "personId",
    persistedFaceId: "persistedFaceId"
};
export interface PersonUpdateAPersonFacePatchPathParameters {
    /**
    * Specifying the person group containing the target person.
    * Real name : personGroupId
    */    
    personGroupId: string;
    /**
    * personId of the target person.
    * Real name : personId
    */    
    personId: string;
    /**
    * persistedFaceId of target face, which is persisted and will not expire.
    * Real name : persistedFaceId
    */    
    persistedFaceId: string;
}
const PersonUpdateAPersonFacePatchPathParametersNameMap = {
    personGroupId: "personGroupId",
    personId: "personId",
    persistedFaceId: "persistedFaceId"
};
export interface PersonGroupCreateAPersonGroupPutPathParameters {
    /**
    * User-provided personGroupId as a string. The valid characters include numbers, English letters in lower case, &#x27;-&#x27; and &#x27;_&#x27;. The maximum length of the personGroupId is 64.
        
    * Real name : personGroupId
    */    
    personGroupId: string;
}
const PersonGroupCreateAPersonGroupPutPathParametersNameMap = {
    personGroupId: "personGroupId"
};
export interface PersonGroupDeleteAPersonGroupDeletePathParameters {
    /**
    * The personGroupId of the person group to be deleted.
    * Real name : personGroupId
    */    
    personGroupId: string;
}
const PersonGroupDeleteAPersonGroupDeletePathParametersNameMap = {
    personGroupId: "personGroupId"
};
export interface PersonGroupGetAPersonGroupGetPathParameters {
    /**
    * personGroupId of the target person group.
    * Real name : personGroupId
    */    
    personGroupId: string;
}
const PersonGroupGetAPersonGroupGetPathParametersNameMap = {
    personGroupId: "personGroupId"
};
export interface PersonGroupUpdateAPersonGroupPatchPathParameters {
    /**
    * personGroupId of the person group to be updated.
    * Real name : personGroupId
    */    
    personGroupId: string;
}
const PersonGroupUpdateAPersonGroupPatchPathParametersNameMap = {
    personGroupId: "personGroupId"
};
export interface PersonGroupGetPersonGroupTrainingStatusGetPathParameters {
    /**
    * personGroupId of target person group.
    * Real name : personGroupId
    */    
    personGroupId: string;
}
const PersonGroupGetPersonGroupTrainingStatusGetPathParametersNameMap = {
    personGroupId: "personGroupId"
};
export interface PersonGroupTrainPersonGroupPostPathParameters {
    /**
    * Target person group to be trained.
    * Real name : personGroupId
    */    
    personGroupId: string;
}
const PersonGroupTrainPersonGroupPostPathParametersNameMap = {
    personGroupId: "personGroupId"
};
export interface FaceListCreateAFaceListPutPathParameters {
    /**
    * Valid character is letter in lower case or digit or &#x27;-&#x27; or &#x27;_&#x27;, maximum length is 64.
        
    * Real name : faceListId
    */    
    faceListId: string;
}
const FaceListCreateAFaceListPutPathParametersNameMap = {
    faceListId: "faceListId"
};
export interface FaceListGetAFaceListGetPathParameters {
    /**
    * Valid character is letter in lower case or digit or &#x27;-&#x27; or &#x27;_&#x27;, maximum length is 64.
    * Real name : faceListId
    */    
    faceListId: string;
}
const FaceListGetAFaceListGetPathParametersNameMap = {
    faceListId: "faceListId"
};
export interface FaceListUpdateAFaceListPatchPathParameters {
    /**
    * Valid character is letter in lower case or digit or &#x27;-&#x27; or &#x27;_&#x27;, maximum length is 64.
    * Real name : faceListId
    */    
    faceListId: string;
}
const FaceListUpdateAFaceListPatchPathParametersNameMap = {
    faceListId: "faceListId"
};
export interface FaceListDeleteAFaceListDeletePathParameters {
    /**
    * Valid character is letter in lower case or digit or &#x27;-&#x27; or &#x27;_&#x27;, maximum length is 64.
    * Real name : faceListId
    */    
    faceListId: string;
}
const FaceListDeleteAFaceListDeletePathParametersNameMap = {
    faceListId: "faceListId"
};
export interface FaceListAddAFaceToAFaceListPostPathParameters {
    /**
    * Valid character is letter in lower case or digit or &#x27;-&#x27; or &#x27;_&#x27;, maximum length is 64.
    * Real name : faceListId
    */    
    faceListId: string;
}
const FaceListAddAFaceToAFaceListPostPathParametersNameMap = {
    faceListId: "faceListId"
};
export interface FaceListDeleteAFaceFromAFaceListDeletePathParameters {
    /**
    * faceListId of an existing face list. Valid character is letter in lower case or digit or &#x27;-&#x27; or &#x27;_&#x27;, maximum length is 64.
    * Real name : faceListId
    */    
    faceListId: string;
    /**
    * persistedFaceId of an existing face. Valid character is letter in lower case or digit or &#x27;-&#x27; or &#x27;_&#x27;, maximum length is 64.
    * Real name : persistedFaceId
    */    
    persistedFaceId: string;
}
const FaceListDeleteAFaceFromAFaceListDeletePathParametersNameMap = {
    faceListId: "faceListId",
    persistedFaceId: "persistedFaceId"
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
export type FaceDetectPostResult = { "faceId": string; "faceRectangle": { "width": number; "height": number; "left": number; "top": number; }; "faceLandmarks": { "pupilLeft": { "x": number; "y": number; }; "pupilRight": { "x": number; "y": number; }; "noseTip": { "x": number; "y": number; }; "mouthLeft": { "x": number; "y": number; }; "mouthRight": { "x": number; "y": number; }; "eyebrowLeftOuter": { "x": number; "y": number; }; "eyebrowLeftInner": { "x": number; "y": number; }; "eyeLeftOuter": { "x": number; "y": number; }; "eyeLeftTop": { "x": number; "y": number; }; "eyeLeftBottom": { "x": number; "y": number; }; "eyeLeftInner": { "x": number; "y": number; }; "eyebrowRightInner": { "x": number; "y": number; }; "eyebrowRightOuter": { "x": number; "y": number; }; "eyeRightInner": { "x": number; "y": number; }; "eyeRightTop": { "x": number; "y": number; }; "eyeRightBottom": { "x": number; "y": number; }; "eyeRightOuter": { "x": number; "y": number; }; "noseRootLeft": { "x": number; "y": number; }; "noseRootRight": { "x": number; "y": number; }; "noseLeftAlarTop": { "x": number; "y": number; }; "noseRightAlarTop": { "x": number; "y": number; }; "noseLeftAlarOutTip": { "x": number; "y": number; }; "noseRightAlarOutTip": { "x": number; "y": number; }; "upperLipTop": { "x": number; "y": number; }; "upperLipBottom": { "x": number; "y": number; }; "underLipTop": { "x": number; "y": number; }; "underLipBottom": { "x": number; "y": number; }; }; "faceAttributes": { "age": number; "gender": string; "smile": number; "facialHair": { "mustache": number; "beard": number; "sideburns": number; }; }; "glasses": string; "headPose": { "roll": number; "yaw": number; "pitch": number; }; }[];
export type FaceFindSimilarPostResult = any[];
export type FaceGroupPostResult = { "groups": string[][]; "messyGroup": string[]; };
export type FaceIdentifyPostResult = { [x: string]: any; };
export type FaceVerifyPostResult = { "isIdentical": boolean; "confidence": number; };
export type PersonAddAPersonFacePostResult = { "persistedFaceId": string; };
export type PersonCreateAPersonPostResult = { "personId": string; };
export type PersonListPersonsInAPersonGroupGetResult = { "personId": string; "name": string; "userData": string; "persistedFaceIds": string[]; }[];
export type PersonDeleteAPersonDeleteResult = {};
export type PersonGetAPersonGetResult = { "personId": string; "persistedFaceIds": string[]; "name": string; "userData": string; };
export type PersonUpdateAPersonPatchResult = {};
export type PersonDeleteAPersonFaceDeleteResult = {};
export type PersonGetAPersonFaceGetResult = { "persistedFaceId": string; "userData": string; };
export type PersonUpdateAPersonFacePatchResult = {};
export type PersonGroupCreateAPersonGroupPutResult = {};
export type PersonGroupDeleteAPersonGroupDeleteResult = {};
export type PersonGroupGetAPersonGroupGetResult = { "personGroupId": string; "name": string; "userData": string; };
export type PersonGroupUpdateAPersonGroupPatchResult = {};
export type PersonGroupGetPersonGroupTrainingStatusGetResult = { "status": string; "createdDateTime": string; "lastActionDateTime": any; "message": any; };
export type PersonGroupListPersonGroupsGetResult = { "personGroupId": string; "name": string; "userData": string; }[];
export type PersonGroupTrainPersonGroupPostResult = {};
export type FaceListCreateAFaceListPutResult = {};
export type FaceListGetAFaceListGetResult = { "faceListId": string; "name": string; "userData": string; "persistedFaces": any[]; };
export type FaceListUpdateAFaceListPatchResult = {};
export type FaceListDeleteAFaceListDeleteResult = {};
export type FaceListListFaceListsGetResult = any[];
export type FaceListAddAFaceToAFaceListPostResult = { "persistedFaceId": string; };
export type FaceListDeleteAFaceFromAFaceListDeleteResult = {};

export type MethodType = 'post' | 'get' | 'put' | 'delete' | 'patch';
interface Params {
    [key: string]: string
}

const convertParamsToRealParams = (params: Params, paramsNameMap: Params) => {
    return Object.keys(params).reduce((prev, key) => {
        return Object.assign(prev, { [paramsNameMap[key]]: params[key] });
    }, {}) as Params;
}

export class FaceAPI {   
    /**
    * Global Query parameters. If defined this parameters will be used for every request.
    */
    public globalQueryParameters: GlobalQueryParameters = {};    
    /**
    * Global Header parameters. If defined this parameters will be used for every request.
    */
    public globalHeaderParameters: GlobalHeaderParameters = {};    

    private makeRequest(path: string, method: MethodType, queryParams: Params = {}, headerParams: Params = {}, pathParams: Params = {}) {        
        const url = `https://westus.api.cognitive.microsoft.com/face/v1.0${path}`;
        
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
    * Detect human faces in an image and returns face locations, and optionally with faceIds, landmarks, and attributes.


Optional parameters for returning faceId, landmarks, and attributes. Attributes include age, gender, smile intensity, facial hair, head pose and glasses. faceId is for other APIs use including
Face - Identify,
Face - Verify, and
Face - Find Similar.
The faceId will expire in 24 hours after detection call.

JPEG, PNG, GIF(the first frame), and BMP are supported. The image file size should be larger than or equal to 1KB but no larger than 4MB.
The detectable face size is between 36x36 to 4096x4096 pixels. The faces out of this range will not be detected.
A maximum of 64 faces could be returned for an image. The returned faces are ranked by face rectangle size in descending order.
Some faces may not be detected for technical challenges, e.g. very large face angles (head-pose) or large occlusion. Frontal and near-frontal faces have the best results.
Attributes (age, gender, headPose, smile, facialHair, and glasses) are still experimental and may not be very accurate. HeadPose's pitch value is a reserved field and will always return 0.



Http Method
POST
    *
    */
    public faceDetectPost(queryParams: FaceDetectPostQueryParameters, headerParams: FaceDetectPostHeaderParameters) {
        const queryParamsMapped = {} as Params;
        const headerParamsMapped = {} as Params;
        const pathParamsMapped = {} as Params;
        Object.assign(queryParamsMapped, convertParamsToRealParams(queryParams as any as Params, FaceDetectPostQueryParametersNameMap));
        Object.assign(headerParamsMapped, convertParamsToRealParams(headerParams as any as Params, FaceDetectPostHeaderParametersNameMap));
        return this.makeRequest('/detect', 'post', queryParamsMapped, headerParamsMapped, pathParamsMapped) as Request<FaceDetectPostResult>;
    }
    /**
    * 

Given query face's faceId, to search the similar-looking faces from a faceId array or a faceListId. faceId array contains the faces created by Face - Detect, which will expire in 24 hours after creation. While "faceListId" is created by Face List - Create a Face List containing persistedFaceIds that will not expire. Depending on the input the returned similar faces list contains faceIds or persistedFaceIds ranked by similarity.


Find similar has two working modes, "matchPerson" and "matchFace". "matchPerson" is the default mode that it tries to find faces of the same person as possible by using internal same-person thresholds. It is useful to find a known person's other photos. Note that an empty list will be returned if no faces pass the internal thresholds.
"matchFace" mode ignores same-person thresholds and returns ranked similar faces anyway, even the similarity is low. It can be used in the cases like searching celebrity-looking faces.
Http Method
POST
  
    *
    */
    public faceFindSimilarPost(queryParams: FaceFindSimilarPostQueryParameters, headerParams: FaceFindSimilarPostHeaderParameters) {
        const queryParamsMapped = {} as Params;
        const headerParamsMapped = {} as Params;
        const pathParamsMapped = {} as Params;
        Object.assign(queryParamsMapped, convertParamsToRealParams(queryParams as any as Params, FaceFindSimilarPostQueryParametersNameMap));
        Object.assign(headerParamsMapped, convertParamsToRealParams(headerParams as any as Params, FaceFindSimilarPostHeaderParametersNameMap));
        return this.makeRequest('/findsimilars', 'post', queryParamsMapped, headerParamsMapped, pathParamsMapped) as Request<FaceFindSimilarPostResult>;
    }
    /**
    * 
Divide candidate faces into groups based on face similarity.


The output is one or more disjointed face groups and a messyGroup. A face group contains faces
that have similar looking, often of the same person. Face groups are ranked by
group size, i.e. number of faces. Notice that faces belonging to a same person might be split into several groups in the result.

MessyGroup is a special face group containing faces that cannot find any similar counterpart face from original faces. The messyGroup will not appear in the result if all faces
found their counterparts.
Group API needs at least 2 candidate faces and 1000 at most. We suggest to try Face - Verify when you only have 2 candidate faces.

Http Method
POST
  
    *
    */
    public faceGroupPost(queryParams: FaceGroupPostQueryParameters, headerParams: FaceGroupPostHeaderParameters) {
        const queryParamsMapped = {} as Params;
        const headerParamsMapped = {} as Params;
        const pathParamsMapped = {} as Params;
        Object.assign(queryParamsMapped, convertParamsToRealParams(queryParams as any as Params, FaceGroupPostQueryParametersNameMap));
        Object.assign(headerParamsMapped, convertParamsToRealParams(headerParams as any as Params, FaceGroupPostHeaderParametersNameMap));
        return this.makeRequest('/group', 'post', queryParamsMapped, headerParamsMapped, pathParamsMapped) as Request<FaceGroupPostResult>;
    }
    /**
    * 
Identify unknown faces from a person group.

For each face in the faceIds array,
Face Identify will compute similarities between the query face and all the faces in the person group (given by personGroupId),
and returns candidate person(s) for that face ranked by similarity confidence.
The person group should be trained to make it ready for identification. See more in Person Group - Train Person Group.

Remarks:

The algorithm allows more than one face to be identified independently at the same request, but the no more than 10 faces.
Each person in the person group could have more than one face, but no more than 248 faces.
Identification works well for frontal faces and near-frontal faces.
Number of candidates returned is restricted by maxNumOfCandidatesReturned and confidenceThreshold. If no person is identified, the candidate returned will be an empty array.
Try Face - Find Similar when you need to identify similar faces from a face list instead of a person group.

Http Method
POST
  
    *
    */
    public faceIdentifyPost(queryParams: FaceIdentifyPostQueryParameters, headerParams: FaceIdentifyPostHeaderParameters) {
        const queryParamsMapped = {} as Params;
        const headerParamsMapped = {} as Params;
        const pathParamsMapped = {} as Params;
        Object.assign(queryParamsMapped, convertParamsToRealParams(queryParams as any as Params, FaceIdentifyPostQueryParametersNameMap));
        Object.assign(headerParamsMapped, convertParamsToRealParams(headerParams as any as Params, FaceIdentifyPostHeaderParametersNameMap));
        return this.makeRequest('/identify', 'post', queryParamsMapped, headerParamsMapped, pathParamsMapped) as Request<FaceIdentifyPostResult>;
    }
    /**
    * 
Verify whether two faces belong to a same person or whether one face belongs to a person.

Remarks:

This API works well for frontal and near-frontal faces. 
For the scenarios that are sensitive to accuracy please make your own judgment.

Http Method
POST
  
    *
    */
    public faceVerifyPost(queryParams: FaceVerifyPostQueryParameters, headerParams: FaceVerifyPostHeaderParameters) {
        const queryParamsMapped = {} as Params;
        const headerParamsMapped = {} as Params;
        const pathParamsMapped = {} as Params;
        Object.assign(queryParamsMapped, convertParamsToRealParams(queryParams as any as Params, FaceVerifyPostQueryParametersNameMap));
        Object.assign(headerParamsMapped, convertParamsToRealParams(headerParams as any as Params, FaceVerifyPostHeaderParametersNameMap));
        return this.makeRequest('/verify', 'post', queryParamsMapped, headerParamsMapped, pathParamsMapped) as Request<FaceVerifyPostResult>;
    }
    /**
    * Add a representative face to a person for identification. The input face is specified as an image with a targetFace rectangle.
It returns a persistedFaceId representing the added face and this persistedFaceId will not expire. Note persistedFaceId is different from faceId which represents the detected face by Face - Detect.

The persistedFaceId of person is used in Person - Delete a Person Face to remove a face from a person. 
Each person has a maximum of 248 faces.
JPEG, PNG, GIF(the first frame), and BMP are supported. The image file size should be larger than or equal to 1KB but no larger than 4MB.
The detectable face size is between 36x36 to 4096x4096 pixels. The faces out of this range will not be detected.
Rectangle specified by targetFace should contain exactly one face. Zero or multiple faces will be regarded as an error. Out of detectable face size, large head-pose, or very large occlusions will also result in fail to add a person face.
The given rectangle specifies both face location and face size at the same time. There is no guarantee of correct result if you are using rectangle which is not returned from Face - Detect.  

Http Method
POST
  
    *
    */
    public personAddAPersonFacePost(queryParams: PersonAddAPersonFacePostQueryParameters, headerParams: PersonAddAPersonFacePostHeaderParameters, pathParams: PersonAddAPersonFacePostPathParameters) {
        const queryParamsMapped = {} as Params;
        const headerParamsMapped = {} as Params;
        const pathParamsMapped = {} as Params;
        Object.assign(queryParamsMapped, convertParamsToRealParams(queryParams as any as Params, PersonAddAPersonFacePostQueryParametersNameMap));
        Object.assign(headerParamsMapped, convertParamsToRealParams(headerParams as any as Params, PersonAddAPersonFacePostHeaderParametersNameMap));
        Object.assign(pathParamsMapped, convertParamsToRealParams(pathParams as any as Params, PersonAddAPersonFacePostPathParametersNameMap));
        return this.makeRequest('/persongroups/{personGroupId}/persons/{personId}/persistedFaces', 'post', queryParamsMapped, headerParamsMapped, pathParamsMapped) as Request<PersonAddAPersonFacePostResult>;
    }
    /**
    * 
Create a new person in a specified person group. A newly created person have no registered face, you can call Person - Add a Person Face API to add faces to the person.

The number of persons has a subscription level limit and person group level limit. Person group level limit is 1000 for both free and paid tier subscriptions. Subscription level limit is 1000 for free tier subscription and can be greater in paid tier subscriptions.
Http Method
POST
  


    *
    */
    public personCreateAPersonPost(queryParams: PersonCreateAPersonPostQueryParameters, headerParams: PersonCreateAPersonPostHeaderParameters, pathParams: PersonCreateAPersonPostPathParameters) {
        const queryParamsMapped = {} as Params;
        const headerParamsMapped = {} as Params;
        const pathParamsMapped = {} as Params;
        Object.assign(queryParamsMapped, convertParamsToRealParams(queryParams as any as Params, PersonCreateAPersonPostQueryParametersNameMap));
        Object.assign(headerParamsMapped, convertParamsToRealParams(headerParams as any as Params, PersonCreateAPersonPostHeaderParametersNameMap));
        Object.assign(pathParamsMapped, convertParamsToRealParams(pathParams as any as Params, PersonCreateAPersonPostPathParametersNameMap));
        return this.makeRequest('/persongroups/{personGroupId}/persons', 'post', queryParamsMapped, headerParamsMapped, pathParamsMapped) as Request<PersonCreateAPersonPostResult>;
    }
    /**
    * 
List all persons in a person group, and retrieve person information (including personId, name, userData and persistedFaceIds of registered faces of the person).
Http Method
GET
  
    *
    */
    public personListPersonsInAPersonGroupGet(queryParams: PersonListPersonsInAPersonGroupGetQueryParameters, headerParams: PersonListPersonsInAPersonGroupGetHeaderParameters, pathParams: PersonListPersonsInAPersonGroupGetPathParameters) {
        const queryParamsMapped = {} as Params;
        const headerParamsMapped = {} as Params;
        const pathParamsMapped = {} as Params;
        Object.assign(queryParamsMapped, convertParamsToRealParams(queryParams as any as Params, PersonListPersonsInAPersonGroupGetQueryParametersNameMap));
        Object.assign(headerParamsMapped, convertParamsToRealParams(headerParams as any as Params, PersonListPersonsInAPersonGroupGetHeaderParametersNameMap));
        Object.assign(pathParamsMapped, convertParamsToRealParams(pathParams as any as Params, PersonListPersonsInAPersonGroupGetPathParametersNameMap));
        return this.makeRequest('/persongroups/{personGroupId}/persons', 'get', queryParamsMapped, headerParamsMapped, pathParamsMapped) as Request<PersonListPersonsInAPersonGroupGetResult>;
    }
    /**
    * 
Delete an existing person from a person group. Persisted face images of the person will also be deleted.
Http Method
DELETE
  
    *
    */
    public personDeleteAPersonDelete(queryParams: PersonDeleteAPersonDeleteQueryParameters, headerParams: PersonDeleteAPersonDeleteHeaderParameters, pathParams: PersonDeleteAPersonDeletePathParameters) {
        const queryParamsMapped = {} as Params;
        const headerParamsMapped = {} as Params;
        const pathParamsMapped = {} as Params;
        Object.assign(queryParamsMapped, convertParamsToRealParams(queryParams as any as Params, PersonDeleteAPersonDeleteQueryParametersNameMap));
        Object.assign(headerParamsMapped, convertParamsToRealParams(headerParams as any as Params, PersonDeleteAPersonDeleteHeaderParametersNameMap));
        Object.assign(pathParamsMapped, convertParamsToRealParams(pathParams as any as Params, PersonDeleteAPersonDeletePathParametersNameMap));
        return this.makeRequest('/persongroups/{personGroupId}/persons/{personId}', 'delete', queryParamsMapped, headerParamsMapped, pathParamsMapped) as Request<PersonDeleteAPersonDeleteResult>;
    }
    /**
    * 
Retrieve a person's information, including registered persisted faces, name and userData.
Http Method
GET
  
    *
    */
    public personGetAPersonGet(queryParams: PersonGetAPersonGetQueryParameters, headerParams: PersonGetAPersonGetHeaderParameters, pathParams: PersonGetAPersonGetPathParameters) {
        const queryParamsMapped = {} as Params;
        const headerParamsMapped = {} as Params;
        const pathParamsMapped = {} as Params;
        Object.assign(queryParamsMapped, convertParamsToRealParams(queryParams as any as Params, PersonGetAPersonGetQueryParametersNameMap));
        Object.assign(headerParamsMapped, convertParamsToRealParams(headerParams as any as Params, PersonGetAPersonGetHeaderParametersNameMap));
        Object.assign(pathParamsMapped, convertParamsToRealParams(pathParams as any as Params, PersonGetAPersonGetPathParametersNameMap));
        return this.makeRequest('/persongroups/{personGroupId}/persons/{personId}', 'get', queryParamsMapped, headerParamsMapped, pathParamsMapped) as Request<PersonGetAPersonGetResult>;
    }
    /**
    * 
Update name or userData of a person.
Http Method
PATCH
  
    *
    */
    public personUpdateAPersonPatch(queryParams: PersonUpdateAPersonPatchQueryParameters, headerParams: PersonUpdateAPersonPatchHeaderParameters, pathParams: PersonUpdateAPersonPatchPathParameters) {
        const queryParamsMapped = {} as Params;
        const headerParamsMapped = {} as Params;
        const pathParamsMapped = {} as Params;
        Object.assign(queryParamsMapped, convertParamsToRealParams(queryParams as any as Params, PersonUpdateAPersonPatchQueryParametersNameMap));
        Object.assign(headerParamsMapped, convertParamsToRealParams(headerParams as any as Params, PersonUpdateAPersonPatchHeaderParametersNameMap));
        Object.assign(pathParamsMapped, convertParamsToRealParams(pathParams as any as Params, PersonUpdateAPersonPatchPathParametersNameMap));
        return this.makeRequest('/persongroups/{personGroupId}/persons/{personId}', 'patch', queryParamsMapped, headerParamsMapped, pathParamsMapped) as Request<PersonUpdateAPersonPatchResult>;
    }
    /**
    * 
Delete a face from a person. Relative image for the persisted face will also be deleted.
Http Method
DELETE
  
    *
    */
    public personDeleteAPersonFaceDelete(queryParams: PersonDeleteAPersonFaceDeleteQueryParameters, headerParams: PersonDeleteAPersonFaceDeleteHeaderParameters, pathParams: PersonDeleteAPersonFaceDeletePathParameters) {
        const queryParamsMapped = {} as Params;
        const headerParamsMapped = {} as Params;
        const pathParamsMapped = {} as Params;
        Object.assign(queryParamsMapped, convertParamsToRealParams(queryParams as any as Params, PersonDeleteAPersonFaceDeleteQueryParametersNameMap));
        Object.assign(headerParamsMapped, convertParamsToRealParams(headerParams as any as Params, PersonDeleteAPersonFaceDeleteHeaderParametersNameMap));
        Object.assign(pathParamsMapped, convertParamsToRealParams(pathParams as any as Params, PersonDeleteAPersonFaceDeletePathParametersNameMap));
        return this.makeRequest('/persongroups/{personGroupId}/persons/{personId}/persistedFaces/{persistedFaceId}', 'delete', queryParamsMapped, headerParamsMapped, pathParamsMapped) as Request<PersonDeleteAPersonFaceDeleteResult>;
    }
    /**
    * 
Retrieve information about a persisted face (specified by persistedFaceId, personId and its belonging personGroupId).
Http Method
GET
  
    *
    */
    public personGetAPersonFaceGet(queryParams: PersonGetAPersonFaceGetQueryParameters, headerParams: PersonGetAPersonFaceGetHeaderParameters, pathParams: PersonGetAPersonFaceGetPathParameters) {
        const queryParamsMapped = {} as Params;
        const headerParamsMapped = {} as Params;
        const pathParamsMapped = {} as Params;
        Object.assign(queryParamsMapped, convertParamsToRealParams(queryParams as any as Params, PersonGetAPersonFaceGetQueryParametersNameMap));
        Object.assign(headerParamsMapped, convertParamsToRealParams(headerParams as any as Params, PersonGetAPersonFaceGetHeaderParametersNameMap));
        Object.assign(pathParamsMapped, convertParamsToRealParams(pathParams as any as Params, PersonGetAPersonFaceGetPathParametersNameMap));
        return this.makeRequest('/persongroups/{personGroupId}/persons/{personId}/persistedFaces/{persistedFaceId}', 'get', queryParamsMapped, headerParamsMapped, pathParamsMapped) as Request<PersonGetAPersonFaceGetResult>;
    }
    /**
    * 
Update a person persisted face's userData field.
Http Method
PATCH
  
    *
    */
    public personUpdateAPersonFacePatch(queryParams: PersonUpdateAPersonFacePatchQueryParameters, headerParams: PersonUpdateAPersonFacePatchHeaderParameters, pathParams: PersonUpdateAPersonFacePatchPathParameters) {
        const queryParamsMapped = {} as Params;
        const headerParamsMapped = {} as Params;
        const pathParamsMapped = {} as Params;
        Object.assign(queryParamsMapped, convertParamsToRealParams(queryParams as any as Params, PersonUpdateAPersonFacePatchQueryParametersNameMap));
        Object.assign(headerParamsMapped, convertParamsToRealParams(headerParams as any as Params, PersonUpdateAPersonFacePatchHeaderParametersNameMap));
        Object.assign(pathParamsMapped, convertParamsToRealParams(pathParams as any as Params, PersonUpdateAPersonFacePatchPathParametersNameMap));
        return this.makeRequest('/persongroups/{personGroupId}/persons/{personId}/persistedFaces/{persistedFaceId}', 'patch', queryParamsMapped, headerParamsMapped, pathParamsMapped) as Request<PersonUpdateAPersonFacePatchResult>;
    }
    /**
    * 
Create a new person group with specified personGroupId, name and user-provided userData.

A person group is one of the most important parameters for the Face - Identify API. The Identify
searches person faces in a specified person group.
Http Method
PUT
  
    *
    */
    public personGroupCreateAPersonGroupPut(queryParams: PersonGroupCreateAPersonGroupPutQueryParameters, headerParams: PersonGroupCreateAPersonGroupPutHeaderParameters, pathParams: PersonGroupCreateAPersonGroupPutPathParameters) {
        const queryParamsMapped = {} as Params;
        const headerParamsMapped = {} as Params;
        const pathParamsMapped = {} as Params;
        Object.assign(queryParamsMapped, convertParamsToRealParams(queryParams as any as Params, PersonGroupCreateAPersonGroupPutQueryParametersNameMap));
        Object.assign(headerParamsMapped, convertParamsToRealParams(headerParams as any as Params, PersonGroupCreateAPersonGroupPutHeaderParametersNameMap));
        Object.assign(pathParamsMapped, convertParamsToRealParams(pathParams as any as Params, PersonGroupCreateAPersonGroupPutPathParametersNameMap));
        return this.makeRequest('/persongroups/{personGroupId}', 'put', queryParamsMapped, headerParamsMapped, pathParamsMapped) as Request<PersonGroupCreateAPersonGroupPutResult>;
    }
    /**
    * 
Delete an existing person group. Persisted face images of all people in the person group will also be deleted.
Http Method
DELETE
  
    *
    */
    public personGroupDeleteAPersonGroupDelete(queryParams: PersonGroupDeleteAPersonGroupDeleteQueryParameters, headerParams: PersonGroupDeleteAPersonGroupDeleteHeaderParameters, pathParams: PersonGroupDeleteAPersonGroupDeletePathParameters) {
        const queryParamsMapped = {} as Params;
        const headerParamsMapped = {} as Params;
        const pathParamsMapped = {} as Params;
        Object.assign(queryParamsMapped, convertParamsToRealParams(queryParams as any as Params, PersonGroupDeleteAPersonGroupDeleteQueryParametersNameMap));
        Object.assign(headerParamsMapped, convertParamsToRealParams(headerParams as any as Params, PersonGroupDeleteAPersonGroupDeleteHeaderParametersNameMap));
        Object.assign(pathParamsMapped, convertParamsToRealParams(pathParams as any as Params, PersonGroupDeleteAPersonGroupDeletePathParametersNameMap));
        return this.makeRequest('/persongroups/{personGroupId}', 'delete', queryParamsMapped, headerParamsMapped, pathParamsMapped) as Request<PersonGroupDeleteAPersonGroupDeleteResult>;
    }
    /**
    * 
Retrieve the information of a person group, including its name and userData. This API returns person group information only, use Person - List Persons in a Person Group instead to retrieve person information under the person group.
Http Method
GET
  
    *
    */
    public personGroupGetAPersonGroupGet(queryParams: PersonGroupGetAPersonGroupGetQueryParameters, headerParams: PersonGroupGetAPersonGroupGetHeaderParameters, pathParams: PersonGroupGetAPersonGroupGetPathParameters) {
        const queryParamsMapped = {} as Params;
        const headerParamsMapped = {} as Params;
        const pathParamsMapped = {} as Params;
        Object.assign(queryParamsMapped, convertParamsToRealParams(queryParams as any as Params, PersonGroupGetAPersonGroupGetQueryParametersNameMap));
        Object.assign(headerParamsMapped, convertParamsToRealParams(headerParams as any as Params, PersonGroupGetAPersonGroupGetHeaderParametersNameMap));
        Object.assign(pathParamsMapped, convertParamsToRealParams(pathParams as any as Params, PersonGroupGetAPersonGroupGetPathParametersNameMap));
        return this.makeRequest('/persongroups/{personGroupId}', 'get', queryParamsMapped, headerParamsMapped, pathParamsMapped) as Request<PersonGroupGetAPersonGroupGetResult>;
    }
    /**
    * 
Update an existing person group's display name and userData. The properties which does not appear in request body will not be updated.
Http Method
PATCH
  
    *
    */
    public personGroupUpdateAPersonGroupPatch(queryParams: PersonGroupUpdateAPersonGroupPatchQueryParameters, headerParams: PersonGroupUpdateAPersonGroupPatchHeaderParameters, pathParams: PersonGroupUpdateAPersonGroupPatchPathParameters) {
        const queryParamsMapped = {} as Params;
        const headerParamsMapped = {} as Params;
        const pathParamsMapped = {} as Params;
        Object.assign(queryParamsMapped, convertParamsToRealParams(queryParams as any as Params, PersonGroupUpdateAPersonGroupPatchQueryParametersNameMap));
        Object.assign(headerParamsMapped, convertParamsToRealParams(headerParams as any as Params, PersonGroupUpdateAPersonGroupPatchHeaderParametersNameMap));
        Object.assign(pathParamsMapped, convertParamsToRealParams(pathParams as any as Params, PersonGroupUpdateAPersonGroupPatchPathParametersNameMap));
        return this.makeRequest('/persongroups/{personGroupId}', 'patch', queryParamsMapped, headerParamsMapped, pathParamsMapped) as Request<PersonGroupUpdateAPersonGroupPatchResult>;
    }
    /**
    * 
Retrieve the training status of a person group (completed or ongoing). Training can be triggered by the Person Group - Train Person Group API. The training will process for a while on the server side..
Http Method
GET
  
    *
    */
    public personGroupGetPersonGroupTrainingStatusGet(queryParams: PersonGroupGetPersonGroupTrainingStatusGetQueryParameters, headerParams: PersonGroupGetPersonGroupTrainingStatusGetHeaderParameters, pathParams: PersonGroupGetPersonGroupTrainingStatusGetPathParameters) {
        const queryParamsMapped = {} as Params;
        const headerParamsMapped = {} as Params;
        const pathParamsMapped = {} as Params;
        Object.assign(queryParamsMapped, convertParamsToRealParams(queryParams as any as Params, PersonGroupGetPersonGroupTrainingStatusGetQueryParametersNameMap));
        Object.assign(headerParamsMapped, convertParamsToRealParams(headerParams as any as Params, PersonGroupGetPersonGroupTrainingStatusGetHeaderParametersNameMap));
        Object.assign(pathParamsMapped, convertParamsToRealParams(pathParams as any as Params, PersonGroupGetPersonGroupTrainingStatusGetPathParametersNameMap));
        return this.makeRequest('/persongroups/{personGroupId}/training', 'get', queryParamsMapped, headerParamsMapped, pathParamsMapped) as Request<PersonGroupGetPersonGroupTrainingStatusGetResult>;
    }
    /**
    * 
List person groups and their information. 



Optional string parameter "start" and int parameter "top" are adopted to specify the starting point and total number of person groups to return. All of the person groups are stored in alphabetical order of personGroupId. And the list starting point is defined as the first person group whose personGroupId is greater than the "start". Beginning from this starting point, this API returns the first "top" person groups.


Defaults to return the first 1000 person groups, where the value of "start" is empty and "top" is 1000. Empty array returned indicates that there is no person group whose personGroupId is lager than the "start". E.g., given two person groups: "first_group" and "second_group", these two groups are returned with default parameter, "second_group" is returned if specify "first_group" as "start", and if specify "second_group" as "start", empty array is returned.


The last personGroupId returned by current call can be used as the "start" of the next call to continuously list the person groups.



Http Method
GET
  
    *
    */
    public personGroupListPersonGroupsGet(queryParams: PersonGroupListPersonGroupsGetQueryParameters, headerParams: PersonGroupListPersonGroupsGetHeaderParameters) {
        const queryParamsMapped = {} as Params;
        const headerParamsMapped = {} as Params;
        const pathParamsMapped = {} as Params;
        Object.assign(queryParamsMapped, convertParamsToRealParams(queryParams as any as Params, PersonGroupListPersonGroupsGetQueryParametersNameMap));
        Object.assign(headerParamsMapped, convertParamsToRealParams(headerParams as any as Params, PersonGroupListPersonGroupsGetHeaderParametersNameMap));
        return this.makeRequest('/persongroups', 'get', queryParamsMapped, headerParamsMapped, pathParamsMapped) as Request<PersonGroupListPersonGroupsGetResult>;
    }
    /**
    * 
Queue a person group training task, the training task may not be started immediately.

Any updates to person group will not take effect in Face - Identify until person group is successfully trained.
You can query the training status by calling Person Group - Get Person Group Training Status API.
Http Method
POST
  
    *
    */
    public personGroupTrainPersonGroupPost(queryParams: PersonGroupTrainPersonGroupPostQueryParameters, headerParams: PersonGroupTrainPersonGroupPostHeaderParameters, pathParams: PersonGroupTrainPersonGroupPostPathParameters) {
        const queryParamsMapped = {} as Params;
        const headerParamsMapped = {} as Params;
        const pathParamsMapped = {} as Params;
        Object.assign(queryParamsMapped, convertParamsToRealParams(queryParams as any as Params, PersonGroupTrainPersonGroupPostQueryParametersNameMap));
        Object.assign(headerParamsMapped, convertParamsToRealParams(headerParams as any as Params, PersonGroupTrainPersonGroupPostHeaderParametersNameMap));
        Object.assign(pathParamsMapped, convertParamsToRealParams(pathParams as any as Params, PersonGroupTrainPersonGroupPostPathParametersNameMap));
        return this.makeRequest('/persongroups/{personGroupId}/train', 'post', queryParamsMapped, headerParamsMapped, pathParamsMapped) as Request<PersonGroupTrainPersonGroupPostResult>;
    }
    /**
    * 
Create an empty face list with user-specified faceListId, name and an optional userData. Up to 64 face lists are allowed to exist in one subscription.

Face list is a group of faces, and these faces will not expire. Face list is used as a parameter of source faces in
Face - Find Similar.
Face List is useful when to find similar faces in a fixed face set very often, e.g. to find a similar face in a face list of celebrities, friends, or family members.

A face list can have a maximum of 1000 faces.
Http Method
PUT
  
    *
    */
    public faceListCreateAFaceListPut(queryParams: FaceListCreateAFaceListPutQueryParameters, headerParams: FaceListCreateAFaceListPutHeaderParameters, pathParams: FaceListCreateAFaceListPutPathParameters) {
        const queryParamsMapped = {} as Params;
        const headerParamsMapped = {} as Params;
        const pathParamsMapped = {} as Params;
        Object.assign(queryParamsMapped, convertParamsToRealParams(queryParams as any as Params, FaceListCreateAFaceListPutQueryParametersNameMap));
        Object.assign(headerParamsMapped, convertParamsToRealParams(headerParams as any as Params, FaceListCreateAFaceListPutHeaderParametersNameMap));
        Object.assign(pathParamsMapped, convertParamsToRealParams(pathParams as any as Params, FaceListCreateAFaceListPutPathParametersNameMap));
        return this.makeRequest('/facelists/{faceListId}', 'put', queryParamsMapped, headerParamsMapped, pathParamsMapped) as Request<FaceListCreateAFaceListPutResult>;
    }
    /**
    * 
Retrieve a face list's information, including faceListId, name, userData and faces in the face list. Face list simply represents a list of faces, and could be treated as a searchable data source in
Face - Find Similar.
Http Method
GET
  
    *
    */
    public faceListGetAFaceListGet(queryParams: FaceListGetAFaceListGetQueryParameters, headerParams: FaceListGetAFaceListGetHeaderParameters, pathParams: FaceListGetAFaceListGetPathParameters) {
        const queryParamsMapped = {} as Params;
        const headerParamsMapped = {} as Params;
        const pathParamsMapped = {} as Params;
        Object.assign(queryParamsMapped, convertParamsToRealParams(queryParams as any as Params, FaceListGetAFaceListGetQueryParametersNameMap));
        Object.assign(headerParamsMapped, convertParamsToRealParams(headerParams as any as Params, FaceListGetAFaceListGetHeaderParametersNameMap));
        Object.assign(pathParamsMapped, convertParamsToRealParams(pathParams as any as Params, FaceListGetAFaceListGetPathParametersNameMap));
        return this.makeRequest('/facelists/{faceListId}', 'get', queryParamsMapped, headerParamsMapped, pathParamsMapped) as Request<FaceListGetAFaceListGetResult>;
    }
    /**
    * 
Update information of a face list, including name and userData. Face List simply represents a list of persisted faces, and could be treated as a searchable data source in
Face - Find Similar.
Http Method
PATCH
  
    *
    */
    public faceListUpdateAFaceListPatch(queryParams: FaceListUpdateAFaceListPatchQueryParameters, headerParams: FaceListUpdateAFaceListPatchHeaderParameters, pathParams: FaceListUpdateAFaceListPatchPathParameters) {
        const queryParamsMapped = {} as Params;
        const headerParamsMapped = {} as Params;
        const pathParamsMapped = {} as Params;
        Object.assign(queryParamsMapped, convertParamsToRealParams(queryParams as any as Params, FaceListUpdateAFaceListPatchQueryParametersNameMap));
        Object.assign(headerParamsMapped, convertParamsToRealParams(headerParams as any as Params, FaceListUpdateAFaceListPatchHeaderParametersNameMap));
        Object.assign(pathParamsMapped, convertParamsToRealParams(pathParams as any as Params, FaceListUpdateAFaceListPatchPathParametersNameMap));
        return this.makeRequest('/facelists/{faceListId}', 'patch', queryParamsMapped, headerParamsMapped, pathParamsMapped) as Request<FaceListUpdateAFaceListPatchResult>;
    }
    /**
    * 
Delete an existing face list according to faceListId. Persisted face images in the face list will also be deleted.
Http Method
DELETE
  
    *
    */
    public faceListDeleteAFaceListDelete(queryParams: FaceListDeleteAFaceListDeleteQueryParameters, headerParams: FaceListDeleteAFaceListDeleteHeaderParameters, pathParams: FaceListDeleteAFaceListDeletePathParameters) {
        const queryParamsMapped = {} as Params;
        const headerParamsMapped = {} as Params;
        const pathParamsMapped = {} as Params;
        Object.assign(queryParamsMapped, convertParamsToRealParams(queryParams as any as Params, FaceListDeleteAFaceListDeleteQueryParametersNameMap));
        Object.assign(headerParamsMapped, convertParamsToRealParams(headerParams as any as Params, FaceListDeleteAFaceListDeleteHeaderParametersNameMap));
        Object.assign(pathParamsMapped, convertParamsToRealParams(pathParams as any as Params, FaceListDeleteAFaceListDeletePathParametersNameMap));
        return this.makeRequest('/facelists/{faceListId}', 'delete', queryParamsMapped, headerParamsMapped, pathParamsMapped) as Request<FaceListDeleteAFaceListDeleteResult>;
    }
    /**
    * 
Retrieve information about all existing face lists. Only faceListId, name and userData will be returned. Try Face List - Get a Face List to retrieve face information inside faceList.
Http Method
GET
  
    *
    */
    public faceListListFaceListsGet(queryParams: FaceListListFaceListsGetQueryParameters, headerParams: FaceListListFaceListsGetHeaderParameters) {
        const queryParamsMapped = {} as Params;
        const headerParamsMapped = {} as Params;
        const pathParamsMapped = {} as Params;
        Object.assign(queryParamsMapped, convertParamsToRealParams(queryParams as any as Params, FaceListListFaceListsGetQueryParametersNameMap));
        Object.assign(headerParamsMapped, convertParamsToRealParams(headerParams as any as Params, FaceListListFaceListsGetHeaderParametersNameMap));
        return this.makeRequest('/facelists', 'get', queryParamsMapped, headerParamsMapped, pathParamsMapped) as Request<FaceListListFaceListsGetResult>;
    }
    /**
    * Add a face to a face list. The input face is specified as an image with a targetFace rectangle.
It returns a persistedFaceId representing the added face, and persistedFaceId will not expire. Note persistedFaceId is different from faceId which represents the detected face by Face - Detect.

The persistedFaceId of face list is used in Face List - Delete a Face from a Face List to remove face from a face list, or the output JSON of
Face - Find Similar 

JPEG, PNG, GIF(the first frame), and BMP are supported. The image file size should be larger than or equal to 1KB but no larger than 4MB.
The detectable face size is between 36x36 to 4096x4096 pixels. The faces out of this range will not be detected.
Rectangle specified by targetFace should contain exactly one face. Zero or multiple faces will be regarded as an error. Out of detectable face size, large head-pose, or very large occlusions will also result in fail to add a person face.
The given rectangle specifies both face location and face size at the same time. There is no guarantee of correct result if you are using rectangle which are not returned from Face - Detect.  


Face list is a group of faces, and these faces will not expire. Face list is used as a parameter of source faces in
Face - Find Similar.
Face List is useful when to find similar faces in a fixed face set very often, e.g. to find a similar face in a face list of celebrities, friends, or family members.

A face list can have a maximum of 1000 faces.

Http Method
POST
    *
    */
    public faceListAddAFaceToAFaceListPost(queryParams: FaceListAddAFaceToAFaceListPostQueryParameters, headerParams: FaceListAddAFaceToAFaceListPostHeaderParameters, pathParams: FaceListAddAFaceToAFaceListPostPathParameters) {
        const queryParamsMapped = {} as Params;
        const headerParamsMapped = {} as Params;
        const pathParamsMapped = {} as Params;
        Object.assign(queryParamsMapped, convertParamsToRealParams(queryParams as any as Params, FaceListAddAFaceToAFaceListPostQueryParametersNameMap));
        Object.assign(headerParamsMapped, convertParamsToRealParams(headerParams as any as Params, FaceListAddAFaceToAFaceListPostHeaderParametersNameMap));
        Object.assign(pathParamsMapped, convertParamsToRealParams(pathParams as any as Params, FaceListAddAFaceToAFaceListPostPathParametersNameMap));
        return this.makeRequest('/facelists/{faceListId}/persistedFaces', 'post', queryParamsMapped, headerParamsMapped, pathParamsMapped) as Request<FaceListAddAFaceToAFaceListPostResult>;
    }
    /**
    * 
Delete an existing face from a face list (given by a persisitedFaceId and a faceListId). Persisted image related to the face will also be deleted.
Http Method
DELETE
  
    *
    */
    public faceListDeleteAFaceFromAFaceListDelete(queryParams: FaceListDeleteAFaceFromAFaceListDeleteQueryParameters, headerParams: FaceListDeleteAFaceFromAFaceListDeleteHeaderParameters, pathParams: FaceListDeleteAFaceFromAFaceListDeletePathParameters) {
        const queryParamsMapped = {} as Params;
        const headerParamsMapped = {} as Params;
        const pathParamsMapped = {} as Params;
        Object.assign(queryParamsMapped, convertParamsToRealParams(queryParams as any as Params, FaceListDeleteAFaceFromAFaceListDeleteQueryParametersNameMap));
        Object.assign(headerParamsMapped, convertParamsToRealParams(headerParams as any as Params, FaceListDeleteAFaceFromAFaceListDeleteHeaderParametersNameMap));
        Object.assign(pathParamsMapped, convertParamsToRealParams(pathParams as any as Params, FaceListDeleteAFaceFromAFaceListDeletePathParametersNameMap));
        return this.makeRequest('/facelists/{faceListId}/persistedFaces/{persistedFaceId}', 'delete', queryParamsMapped, headerParamsMapped, pathParamsMapped) as Request<FaceListDeleteAFaceFromAFaceListDeleteResult>;
    }
}