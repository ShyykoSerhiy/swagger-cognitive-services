"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const request = require("superagent");
const FaceDetectPostQueryParametersNameMap = {
    returnFaceId: "returnFaceId",
    returnFaceLandmarks: "returnFaceLandmarks",
    returnFaceAttributes: "returnFaceAttributes",
    subscriptionKey: "subscription-key"
};
const FaceFindSimilarPostQueryParametersNameMap = {
    subscriptionKey: "subscription-key"
};
const FaceGroupPostQueryParametersNameMap = {
    subscriptionKey: "subscription-key"
};
const FaceIdentifyPostQueryParametersNameMap = {
    subscriptionKey: "subscription-key"
};
const FaceVerifyPostQueryParametersNameMap = {
    subscriptionKey: "subscription-key"
};
const PersonAddAPersonFacePostQueryParametersNameMap = {
    userData: "userData",
    targetFace: "targetFace",
    subscriptionKey: "subscription-key"
};
const PersonCreateAPersonPostQueryParametersNameMap = {
    subscriptionKey: "subscription-key"
};
const PersonListPersonsInAPersonGroupGetQueryParametersNameMap = {
    subscriptionKey: "subscription-key"
};
const PersonDeleteAPersonDeleteQueryParametersNameMap = {
    subscriptionKey: "subscription-key"
};
const PersonGetAPersonGetQueryParametersNameMap = {
    subscriptionKey: "subscription-key"
};
const PersonUpdateAPersonPatchQueryParametersNameMap = {
    subscriptionKey: "subscription-key"
};
const PersonDeleteAPersonFaceDeleteQueryParametersNameMap = {
    subscriptionKey: "subscription-key"
};
const PersonGetAPersonFaceGetQueryParametersNameMap = {
    subscriptionKey: "subscription-key"
};
const PersonUpdateAPersonFacePatchQueryParametersNameMap = {
    subscriptionKey: "subscription-key"
};
const PersonGroupCreateAPersonGroupPutQueryParametersNameMap = {
    subscriptionKey: "subscription-key"
};
const PersonGroupDeleteAPersonGroupDeleteQueryParametersNameMap = {
    subscriptionKey: "subscription-key"
};
const PersonGroupGetAPersonGroupGetQueryParametersNameMap = {
    subscriptionKey: "subscription-key"
};
const PersonGroupUpdateAPersonGroupPatchQueryParametersNameMap = {
    subscriptionKey: "subscription-key"
};
const PersonGroupGetPersonGroupTrainingStatusGetQueryParametersNameMap = {
    subscriptionKey: "subscription-key"
};
const PersonGroupListPersonGroupsGetQueryParametersNameMap = {
    start: "start",
    top: "top",
    subscriptionKey: "subscription-key"
};
const PersonGroupTrainPersonGroupPostQueryParametersNameMap = {
    subscriptionKey: "subscription-key"
};
const FaceListCreateAFaceListPutQueryParametersNameMap = {
    subscriptionKey: "subscription-key"
};
const FaceListGetAFaceListGetQueryParametersNameMap = {
    subscriptionKey: "subscription-key"
};
const FaceListUpdateAFaceListPatchQueryParametersNameMap = {
    subscriptionKey: "subscription-key"
};
const FaceListDeleteAFaceListDeleteQueryParametersNameMap = {
    subscriptionKey: "subscription-key"
};
const FaceListListFaceListsGetQueryParametersNameMap = {
    subscriptionKey: "subscription-key"
};
const FaceListAddAFaceToAFaceListPostQueryParametersNameMap = {
    userData: "userData",
    targetFace: "targetFace",
    subscriptionKey: "subscription-key"
};
const FaceListDeleteAFaceFromAFaceListDeleteQueryParametersNameMap = {
    subscriptionKey: "subscription-key"
};
const FaceDetectPostHeaderParametersNameMap = {
    ocpApimSubscriptionKey: "Ocp-Apim-Subscription-Key"
};
const FaceFindSimilarPostHeaderParametersNameMap = {
    ocpApimSubscriptionKey: "Ocp-Apim-Subscription-Key"
};
const FaceGroupPostHeaderParametersNameMap = {
    ocpApimSubscriptionKey: "Ocp-Apim-Subscription-Key"
};
const FaceIdentifyPostHeaderParametersNameMap = {
    ocpApimSubscriptionKey: "Ocp-Apim-Subscription-Key"
};
const FaceVerifyPostHeaderParametersNameMap = {
    ocpApimSubscriptionKey: "Ocp-Apim-Subscription-Key"
};
const PersonAddAPersonFacePostHeaderParametersNameMap = {
    ocpApimSubscriptionKey: "Ocp-Apim-Subscription-Key"
};
const PersonCreateAPersonPostHeaderParametersNameMap = {
    ocpApimSubscriptionKey: "Ocp-Apim-Subscription-Key"
};
const PersonListPersonsInAPersonGroupGetHeaderParametersNameMap = {
    ocpApimSubscriptionKey: "Ocp-Apim-Subscription-Key"
};
const PersonDeleteAPersonDeleteHeaderParametersNameMap = {
    ocpApimSubscriptionKey: "Ocp-Apim-Subscription-Key"
};
const PersonGetAPersonGetHeaderParametersNameMap = {
    ocpApimSubscriptionKey: "Ocp-Apim-Subscription-Key"
};
const PersonUpdateAPersonPatchHeaderParametersNameMap = {
    ocpApimSubscriptionKey: "Ocp-Apim-Subscription-Key"
};
const PersonDeleteAPersonFaceDeleteHeaderParametersNameMap = {
    ocpApimSubscriptionKey: "Ocp-Apim-Subscription-Key"
};
const PersonGetAPersonFaceGetHeaderParametersNameMap = {
    ocpApimSubscriptionKey: "Ocp-Apim-Subscription-Key"
};
const PersonUpdateAPersonFacePatchHeaderParametersNameMap = {
    ocpApimSubscriptionKey: "Ocp-Apim-Subscription-Key"
};
const PersonGroupCreateAPersonGroupPutHeaderParametersNameMap = {
    ocpApimSubscriptionKey: "Ocp-Apim-Subscription-Key"
};
const PersonGroupDeleteAPersonGroupDeleteHeaderParametersNameMap = {
    ocpApimSubscriptionKey: "Ocp-Apim-Subscription-Key"
};
const PersonGroupGetAPersonGroupGetHeaderParametersNameMap = {
    ocpApimSubscriptionKey: "Ocp-Apim-Subscription-Key"
};
const PersonGroupUpdateAPersonGroupPatchHeaderParametersNameMap = {
    ocpApimSubscriptionKey: "Ocp-Apim-Subscription-Key"
};
const PersonGroupGetPersonGroupTrainingStatusGetHeaderParametersNameMap = {
    ocpApimSubscriptionKey: "Ocp-Apim-Subscription-Key"
};
const PersonGroupListPersonGroupsGetHeaderParametersNameMap = {
    ocpApimSubscriptionKey: "Ocp-Apim-Subscription-Key"
};
const PersonGroupTrainPersonGroupPostHeaderParametersNameMap = {
    ocpApimSubscriptionKey: "Ocp-Apim-Subscription-Key"
};
const FaceListCreateAFaceListPutHeaderParametersNameMap = {
    ocpApimSubscriptionKey: "Ocp-Apim-Subscription-Key"
};
const FaceListGetAFaceListGetHeaderParametersNameMap = {
    ocpApimSubscriptionKey: "Ocp-Apim-Subscription-Key"
};
const FaceListUpdateAFaceListPatchHeaderParametersNameMap = {
    ocpApimSubscriptionKey: "Ocp-Apim-Subscription-Key"
};
const FaceListDeleteAFaceListDeleteHeaderParametersNameMap = {
    ocpApimSubscriptionKey: "Ocp-Apim-Subscription-Key"
};
const FaceListListFaceListsGetHeaderParametersNameMap = {
    ocpApimSubscriptionKey: "Ocp-Apim-Subscription-Key"
};
const FaceListAddAFaceToAFaceListPostHeaderParametersNameMap = {
    ocpApimSubscriptionKey: "Ocp-Apim-Subscription-Key"
};
const FaceListDeleteAFaceFromAFaceListDeleteHeaderParametersNameMap = {
    ocpApimSubscriptionKey: "Ocp-Apim-Subscription-Key"
};
const PersonAddAPersonFacePostPathParametersNameMap = {
    personGroupId: "personGroupId",
    personId: "personId"
};
const PersonCreateAPersonPostPathParametersNameMap = {
    personGroupId: "personGroupId"
};
const PersonListPersonsInAPersonGroupGetPathParametersNameMap = {
    personGroupId: "personGroupId"
};
const PersonDeleteAPersonDeletePathParametersNameMap = {
    personGroupId: "personGroupId",
    personId: "personId"
};
const PersonGetAPersonGetPathParametersNameMap = {
    personGroupId: "personGroupId",
    personId: "personId"
};
const PersonUpdateAPersonPatchPathParametersNameMap = {
    personGroupId: "personGroupId",
    personId: "personId"
};
const PersonDeleteAPersonFaceDeletePathParametersNameMap = {
    personGroupId: "personGroupId",
    personId: "personId",
    persistedFaceId: "persistedFaceId"
};
const PersonGetAPersonFaceGetPathParametersNameMap = {
    personGroupId: "personGroupId",
    personId: "personId",
    persistedFaceId: "persistedFaceId"
};
const PersonUpdateAPersonFacePatchPathParametersNameMap = {
    personGroupId: "personGroupId",
    personId: "personId",
    persistedFaceId: "persistedFaceId"
};
const PersonGroupCreateAPersonGroupPutPathParametersNameMap = {
    personGroupId: "personGroupId"
};
const PersonGroupDeleteAPersonGroupDeletePathParametersNameMap = {
    personGroupId: "personGroupId"
};
const PersonGroupGetAPersonGroupGetPathParametersNameMap = {
    personGroupId: "personGroupId"
};
const PersonGroupUpdateAPersonGroupPatchPathParametersNameMap = {
    personGroupId: "personGroupId"
};
const PersonGroupGetPersonGroupTrainingStatusGetPathParametersNameMap = {
    personGroupId: "personGroupId"
};
const PersonGroupTrainPersonGroupPostPathParametersNameMap = {
    personGroupId: "personGroupId"
};
const FaceListCreateAFaceListPutPathParametersNameMap = {
    faceListId: "faceListId"
};
const FaceListGetAFaceListGetPathParametersNameMap = {
    faceListId: "faceListId"
};
const FaceListUpdateAFaceListPatchPathParametersNameMap = {
    faceListId: "faceListId"
};
const FaceListDeleteAFaceListDeletePathParametersNameMap = {
    faceListId: "faceListId"
};
const FaceListAddAFaceToAFaceListPostPathParametersNameMap = {
    faceListId: "faceListId"
};
const FaceListDeleteAFaceFromAFaceListDeletePathParametersNameMap = {
    faceListId: "faceListId",
    persistedFaceId: "persistedFaceId"
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
class FaceAPI {
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
        const url = `https://westus.api.cognitive.microsoft.com/face/v1.0${path}`;
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
    faceDetectPost(queryParams, headerParams) {
        const queryParamsMapped = {};
        const headerParamsMapped = {};
        const pathParamsMapped = {};
        Object.assign(queryParamsMapped, convertParamsToRealParams(queryParams, FaceDetectPostQueryParametersNameMap));
        Object.assign(headerParamsMapped, convertParamsToRealParams(headerParams, FaceDetectPostHeaderParametersNameMap));
        return this.makeRequest('/detect', 'post', queryParamsMapped, headerParamsMapped, pathParamsMapped);
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
    faceFindSimilarPost(queryParams, headerParams) {
        const queryParamsMapped = {};
        const headerParamsMapped = {};
        const pathParamsMapped = {};
        Object.assign(queryParamsMapped, convertParamsToRealParams(queryParams, FaceFindSimilarPostQueryParametersNameMap));
        Object.assign(headerParamsMapped, convertParamsToRealParams(headerParams, FaceFindSimilarPostHeaderParametersNameMap));
        return this.makeRequest('/findsimilars', 'post', queryParamsMapped, headerParamsMapped, pathParamsMapped);
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
    faceGroupPost(queryParams, headerParams) {
        const queryParamsMapped = {};
        const headerParamsMapped = {};
        const pathParamsMapped = {};
        Object.assign(queryParamsMapped, convertParamsToRealParams(queryParams, FaceGroupPostQueryParametersNameMap));
        Object.assign(headerParamsMapped, convertParamsToRealParams(headerParams, FaceGroupPostHeaderParametersNameMap));
        return this.makeRequest('/group', 'post', queryParamsMapped, headerParamsMapped, pathParamsMapped);
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
    faceIdentifyPost(queryParams, headerParams) {
        const queryParamsMapped = {};
        const headerParamsMapped = {};
        const pathParamsMapped = {};
        Object.assign(queryParamsMapped, convertParamsToRealParams(queryParams, FaceIdentifyPostQueryParametersNameMap));
        Object.assign(headerParamsMapped, convertParamsToRealParams(headerParams, FaceIdentifyPostHeaderParametersNameMap));
        return this.makeRequest('/identify', 'post', queryParamsMapped, headerParamsMapped, pathParamsMapped);
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
    faceVerifyPost(queryParams, headerParams) {
        const queryParamsMapped = {};
        const headerParamsMapped = {};
        const pathParamsMapped = {};
        Object.assign(queryParamsMapped, convertParamsToRealParams(queryParams, FaceVerifyPostQueryParametersNameMap));
        Object.assign(headerParamsMapped, convertParamsToRealParams(headerParams, FaceVerifyPostHeaderParametersNameMap));
        return this.makeRequest('/verify', 'post', queryParamsMapped, headerParamsMapped, pathParamsMapped);
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
    personAddAPersonFacePost(queryParams, headerParams, pathParams) {
        const queryParamsMapped = {};
        const headerParamsMapped = {};
        const pathParamsMapped = {};
        Object.assign(queryParamsMapped, convertParamsToRealParams(queryParams, PersonAddAPersonFacePostQueryParametersNameMap));
        Object.assign(headerParamsMapped, convertParamsToRealParams(headerParams, PersonAddAPersonFacePostHeaderParametersNameMap));
        Object.assign(pathParamsMapped, convertParamsToRealParams(pathParams, PersonAddAPersonFacePostPathParametersNameMap));
        return this.makeRequest('/persongroups/{personGroupId}/persons/{personId}/persistedFaces', 'post', queryParamsMapped, headerParamsMapped, pathParamsMapped);
    }
    /**
    *
Create a new person in a specified person group. A newly created person have no registered face, you can call Person - Add a Person Face API to add faces to the person.

The number of persons has a subscription level limit and person group level limit. Person group level limit is 1000 for both free and paid tier subscriptions. Subscription level limit is 1000 for free tier subscription and can be greater in paid tier subscriptions.
Http Method
POST
  


    *
    */
    personCreateAPersonPost(queryParams, headerParams, pathParams) {
        const queryParamsMapped = {};
        const headerParamsMapped = {};
        const pathParamsMapped = {};
        Object.assign(queryParamsMapped, convertParamsToRealParams(queryParams, PersonCreateAPersonPostQueryParametersNameMap));
        Object.assign(headerParamsMapped, convertParamsToRealParams(headerParams, PersonCreateAPersonPostHeaderParametersNameMap));
        Object.assign(pathParamsMapped, convertParamsToRealParams(pathParams, PersonCreateAPersonPostPathParametersNameMap));
        return this.makeRequest('/persongroups/{personGroupId}/persons', 'post', queryParamsMapped, headerParamsMapped, pathParamsMapped);
    }
    /**
    *
List all persons in a person group, and retrieve person information (including personId, name, userData and persistedFaceIds of registered faces of the person).
Http Method
GET
  
    *
    */
    personListPersonsInAPersonGroupGet(queryParams, headerParams, pathParams) {
        const queryParamsMapped = {};
        const headerParamsMapped = {};
        const pathParamsMapped = {};
        Object.assign(queryParamsMapped, convertParamsToRealParams(queryParams, PersonListPersonsInAPersonGroupGetQueryParametersNameMap));
        Object.assign(headerParamsMapped, convertParamsToRealParams(headerParams, PersonListPersonsInAPersonGroupGetHeaderParametersNameMap));
        Object.assign(pathParamsMapped, convertParamsToRealParams(pathParams, PersonListPersonsInAPersonGroupGetPathParametersNameMap));
        return this.makeRequest('/persongroups/{personGroupId}/persons', 'get', queryParamsMapped, headerParamsMapped, pathParamsMapped);
    }
    /**
    *
Delete an existing person from a person group. Persisted face images of the person will also be deleted.
Http Method
DELETE
  
    *
    */
    personDeleteAPersonDelete(queryParams, headerParams, pathParams) {
        const queryParamsMapped = {};
        const headerParamsMapped = {};
        const pathParamsMapped = {};
        Object.assign(queryParamsMapped, convertParamsToRealParams(queryParams, PersonDeleteAPersonDeleteQueryParametersNameMap));
        Object.assign(headerParamsMapped, convertParamsToRealParams(headerParams, PersonDeleteAPersonDeleteHeaderParametersNameMap));
        Object.assign(pathParamsMapped, convertParamsToRealParams(pathParams, PersonDeleteAPersonDeletePathParametersNameMap));
        return this.makeRequest('/persongroups/{personGroupId}/persons/{personId}', 'delete', queryParamsMapped, headerParamsMapped, pathParamsMapped);
    }
    /**
    *
Retrieve a person's information, including registered persisted faces, name and userData.
Http Method
GET
  
    *
    */
    personGetAPersonGet(queryParams, headerParams, pathParams) {
        const queryParamsMapped = {};
        const headerParamsMapped = {};
        const pathParamsMapped = {};
        Object.assign(queryParamsMapped, convertParamsToRealParams(queryParams, PersonGetAPersonGetQueryParametersNameMap));
        Object.assign(headerParamsMapped, convertParamsToRealParams(headerParams, PersonGetAPersonGetHeaderParametersNameMap));
        Object.assign(pathParamsMapped, convertParamsToRealParams(pathParams, PersonGetAPersonGetPathParametersNameMap));
        return this.makeRequest('/persongroups/{personGroupId}/persons/{personId}', 'get', queryParamsMapped, headerParamsMapped, pathParamsMapped);
    }
    /**
    *
Update name or userData of a person.
Http Method
PATCH
  
    *
    */
    personUpdateAPersonPatch(queryParams, headerParams, pathParams) {
        const queryParamsMapped = {};
        const headerParamsMapped = {};
        const pathParamsMapped = {};
        Object.assign(queryParamsMapped, convertParamsToRealParams(queryParams, PersonUpdateAPersonPatchQueryParametersNameMap));
        Object.assign(headerParamsMapped, convertParamsToRealParams(headerParams, PersonUpdateAPersonPatchHeaderParametersNameMap));
        Object.assign(pathParamsMapped, convertParamsToRealParams(pathParams, PersonUpdateAPersonPatchPathParametersNameMap));
        return this.makeRequest('/persongroups/{personGroupId}/persons/{personId}', 'patch', queryParamsMapped, headerParamsMapped, pathParamsMapped);
    }
    /**
    *
Delete a face from a person. Relative image for the persisted face will also be deleted.
Http Method
DELETE
  
    *
    */
    personDeleteAPersonFaceDelete(queryParams, headerParams, pathParams) {
        const queryParamsMapped = {};
        const headerParamsMapped = {};
        const pathParamsMapped = {};
        Object.assign(queryParamsMapped, convertParamsToRealParams(queryParams, PersonDeleteAPersonFaceDeleteQueryParametersNameMap));
        Object.assign(headerParamsMapped, convertParamsToRealParams(headerParams, PersonDeleteAPersonFaceDeleteHeaderParametersNameMap));
        Object.assign(pathParamsMapped, convertParamsToRealParams(pathParams, PersonDeleteAPersonFaceDeletePathParametersNameMap));
        return this.makeRequest('/persongroups/{personGroupId}/persons/{personId}/persistedFaces/{persistedFaceId}', 'delete', queryParamsMapped, headerParamsMapped, pathParamsMapped);
    }
    /**
    *
Retrieve information about a persisted face (specified by persistedFaceId, personId and its belonging personGroupId).
Http Method
GET
  
    *
    */
    personGetAPersonFaceGet(queryParams, headerParams, pathParams) {
        const queryParamsMapped = {};
        const headerParamsMapped = {};
        const pathParamsMapped = {};
        Object.assign(queryParamsMapped, convertParamsToRealParams(queryParams, PersonGetAPersonFaceGetQueryParametersNameMap));
        Object.assign(headerParamsMapped, convertParamsToRealParams(headerParams, PersonGetAPersonFaceGetHeaderParametersNameMap));
        Object.assign(pathParamsMapped, convertParamsToRealParams(pathParams, PersonGetAPersonFaceGetPathParametersNameMap));
        return this.makeRequest('/persongroups/{personGroupId}/persons/{personId}/persistedFaces/{persistedFaceId}', 'get', queryParamsMapped, headerParamsMapped, pathParamsMapped);
    }
    /**
    *
Update a person persisted face's userData field.
Http Method
PATCH
  
    *
    */
    personUpdateAPersonFacePatch(queryParams, headerParams, pathParams) {
        const queryParamsMapped = {};
        const headerParamsMapped = {};
        const pathParamsMapped = {};
        Object.assign(queryParamsMapped, convertParamsToRealParams(queryParams, PersonUpdateAPersonFacePatchQueryParametersNameMap));
        Object.assign(headerParamsMapped, convertParamsToRealParams(headerParams, PersonUpdateAPersonFacePatchHeaderParametersNameMap));
        Object.assign(pathParamsMapped, convertParamsToRealParams(pathParams, PersonUpdateAPersonFacePatchPathParametersNameMap));
        return this.makeRequest('/persongroups/{personGroupId}/persons/{personId}/persistedFaces/{persistedFaceId}', 'patch', queryParamsMapped, headerParamsMapped, pathParamsMapped);
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
    personGroupCreateAPersonGroupPut(queryParams, headerParams, pathParams) {
        const queryParamsMapped = {};
        const headerParamsMapped = {};
        const pathParamsMapped = {};
        Object.assign(queryParamsMapped, convertParamsToRealParams(queryParams, PersonGroupCreateAPersonGroupPutQueryParametersNameMap));
        Object.assign(headerParamsMapped, convertParamsToRealParams(headerParams, PersonGroupCreateAPersonGroupPutHeaderParametersNameMap));
        Object.assign(pathParamsMapped, convertParamsToRealParams(pathParams, PersonGroupCreateAPersonGroupPutPathParametersNameMap));
        return this.makeRequest('/persongroups/{personGroupId}', 'put', queryParamsMapped, headerParamsMapped, pathParamsMapped);
    }
    /**
    *
Delete an existing person group. Persisted face images of all people in the person group will also be deleted.
Http Method
DELETE
  
    *
    */
    personGroupDeleteAPersonGroupDelete(queryParams, headerParams, pathParams) {
        const queryParamsMapped = {};
        const headerParamsMapped = {};
        const pathParamsMapped = {};
        Object.assign(queryParamsMapped, convertParamsToRealParams(queryParams, PersonGroupDeleteAPersonGroupDeleteQueryParametersNameMap));
        Object.assign(headerParamsMapped, convertParamsToRealParams(headerParams, PersonGroupDeleteAPersonGroupDeleteHeaderParametersNameMap));
        Object.assign(pathParamsMapped, convertParamsToRealParams(pathParams, PersonGroupDeleteAPersonGroupDeletePathParametersNameMap));
        return this.makeRequest('/persongroups/{personGroupId}', 'delete', queryParamsMapped, headerParamsMapped, pathParamsMapped);
    }
    /**
    *
Retrieve the information of a person group, including its name and userData. This API returns person group information only, use Person - List Persons in a Person Group instead to retrieve person information under the person group.
Http Method
GET
  
    *
    */
    personGroupGetAPersonGroupGet(queryParams, headerParams, pathParams) {
        const queryParamsMapped = {};
        const headerParamsMapped = {};
        const pathParamsMapped = {};
        Object.assign(queryParamsMapped, convertParamsToRealParams(queryParams, PersonGroupGetAPersonGroupGetQueryParametersNameMap));
        Object.assign(headerParamsMapped, convertParamsToRealParams(headerParams, PersonGroupGetAPersonGroupGetHeaderParametersNameMap));
        Object.assign(pathParamsMapped, convertParamsToRealParams(pathParams, PersonGroupGetAPersonGroupGetPathParametersNameMap));
        return this.makeRequest('/persongroups/{personGroupId}', 'get', queryParamsMapped, headerParamsMapped, pathParamsMapped);
    }
    /**
    *
Update an existing person group's display name and userData. The properties which does not appear in request body will not be updated.
Http Method
PATCH
  
    *
    */
    personGroupUpdateAPersonGroupPatch(queryParams, headerParams, pathParams) {
        const queryParamsMapped = {};
        const headerParamsMapped = {};
        const pathParamsMapped = {};
        Object.assign(queryParamsMapped, convertParamsToRealParams(queryParams, PersonGroupUpdateAPersonGroupPatchQueryParametersNameMap));
        Object.assign(headerParamsMapped, convertParamsToRealParams(headerParams, PersonGroupUpdateAPersonGroupPatchHeaderParametersNameMap));
        Object.assign(pathParamsMapped, convertParamsToRealParams(pathParams, PersonGroupUpdateAPersonGroupPatchPathParametersNameMap));
        return this.makeRequest('/persongroups/{personGroupId}', 'patch', queryParamsMapped, headerParamsMapped, pathParamsMapped);
    }
    /**
    *
Retrieve the training status of a person group (completed or ongoing). Training can be triggered by the Person Group - Train Person Group API. The training will process for a while on the server side..
Http Method
GET
  
    *
    */
    personGroupGetPersonGroupTrainingStatusGet(queryParams, headerParams, pathParams) {
        const queryParamsMapped = {};
        const headerParamsMapped = {};
        const pathParamsMapped = {};
        Object.assign(queryParamsMapped, convertParamsToRealParams(queryParams, PersonGroupGetPersonGroupTrainingStatusGetQueryParametersNameMap));
        Object.assign(headerParamsMapped, convertParamsToRealParams(headerParams, PersonGroupGetPersonGroupTrainingStatusGetHeaderParametersNameMap));
        Object.assign(pathParamsMapped, convertParamsToRealParams(pathParams, PersonGroupGetPersonGroupTrainingStatusGetPathParametersNameMap));
        return this.makeRequest('/persongroups/{personGroupId}/training', 'get', queryParamsMapped, headerParamsMapped, pathParamsMapped);
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
    personGroupListPersonGroupsGet(queryParams, headerParams) {
        const queryParamsMapped = {};
        const headerParamsMapped = {};
        const pathParamsMapped = {};
        Object.assign(queryParamsMapped, convertParamsToRealParams(queryParams, PersonGroupListPersonGroupsGetQueryParametersNameMap));
        Object.assign(headerParamsMapped, convertParamsToRealParams(headerParams, PersonGroupListPersonGroupsGetHeaderParametersNameMap));
        return this.makeRequest('/persongroups', 'get', queryParamsMapped, headerParamsMapped, pathParamsMapped);
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
    personGroupTrainPersonGroupPost(queryParams, headerParams, pathParams) {
        const queryParamsMapped = {};
        const headerParamsMapped = {};
        const pathParamsMapped = {};
        Object.assign(queryParamsMapped, convertParamsToRealParams(queryParams, PersonGroupTrainPersonGroupPostQueryParametersNameMap));
        Object.assign(headerParamsMapped, convertParamsToRealParams(headerParams, PersonGroupTrainPersonGroupPostHeaderParametersNameMap));
        Object.assign(pathParamsMapped, convertParamsToRealParams(pathParams, PersonGroupTrainPersonGroupPostPathParametersNameMap));
        return this.makeRequest('/persongroups/{personGroupId}/train', 'post', queryParamsMapped, headerParamsMapped, pathParamsMapped);
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
    faceListCreateAFaceListPut(queryParams, headerParams, pathParams) {
        const queryParamsMapped = {};
        const headerParamsMapped = {};
        const pathParamsMapped = {};
        Object.assign(queryParamsMapped, convertParamsToRealParams(queryParams, FaceListCreateAFaceListPutQueryParametersNameMap));
        Object.assign(headerParamsMapped, convertParamsToRealParams(headerParams, FaceListCreateAFaceListPutHeaderParametersNameMap));
        Object.assign(pathParamsMapped, convertParamsToRealParams(pathParams, FaceListCreateAFaceListPutPathParametersNameMap));
        return this.makeRequest('/facelists/{faceListId}', 'put', queryParamsMapped, headerParamsMapped, pathParamsMapped);
    }
    /**
    *
Retrieve a face list's information, including faceListId, name, userData and faces in the face list. Face list simply represents a list of faces, and could be treated as a searchable data source in
Face - Find Similar.
Http Method
GET
  
    *
    */
    faceListGetAFaceListGet(queryParams, headerParams, pathParams) {
        const queryParamsMapped = {};
        const headerParamsMapped = {};
        const pathParamsMapped = {};
        Object.assign(queryParamsMapped, convertParamsToRealParams(queryParams, FaceListGetAFaceListGetQueryParametersNameMap));
        Object.assign(headerParamsMapped, convertParamsToRealParams(headerParams, FaceListGetAFaceListGetHeaderParametersNameMap));
        Object.assign(pathParamsMapped, convertParamsToRealParams(pathParams, FaceListGetAFaceListGetPathParametersNameMap));
        return this.makeRequest('/facelists/{faceListId}', 'get', queryParamsMapped, headerParamsMapped, pathParamsMapped);
    }
    /**
    *
Update information of a face list, including name and userData. Face List simply represents a list of persisted faces, and could be treated as a searchable data source in
Face - Find Similar.
Http Method
PATCH
  
    *
    */
    faceListUpdateAFaceListPatch(queryParams, headerParams, pathParams) {
        const queryParamsMapped = {};
        const headerParamsMapped = {};
        const pathParamsMapped = {};
        Object.assign(queryParamsMapped, convertParamsToRealParams(queryParams, FaceListUpdateAFaceListPatchQueryParametersNameMap));
        Object.assign(headerParamsMapped, convertParamsToRealParams(headerParams, FaceListUpdateAFaceListPatchHeaderParametersNameMap));
        Object.assign(pathParamsMapped, convertParamsToRealParams(pathParams, FaceListUpdateAFaceListPatchPathParametersNameMap));
        return this.makeRequest('/facelists/{faceListId}', 'patch', queryParamsMapped, headerParamsMapped, pathParamsMapped);
    }
    /**
    *
Delete an existing face list according to faceListId. Persisted face images in the face list will also be deleted.
Http Method
DELETE
  
    *
    */
    faceListDeleteAFaceListDelete(queryParams, headerParams, pathParams) {
        const queryParamsMapped = {};
        const headerParamsMapped = {};
        const pathParamsMapped = {};
        Object.assign(queryParamsMapped, convertParamsToRealParams(queryParams, FaceListDeleteAFaceListDeleteQueryParametersNameMap));
        Object.assign(headerParamsMapped, convertParamsToRealParams(headerParams, FaceListDeleteAFaceListDeleteHeaderParametersNameMap));
        Object.assign(pathParamsMapped, convertParamsToRealParams(pathParams, FaceListDeleteAFaceListDeletePathParametersNameMap));
        return this.makeRequest('/facelists/{faceListId}', 'delete', queryParamsMapped, headerParamsMapped, pathParamsMapped);
    }
    /**
    *
Retrieve information about all existing face lists. Only faceListId, name and userData will be returned. Try Face List - Get a Face List to retrieve face information inside faceList.
Http Method
GET
  
    *
    */
    faceListListFaceListsGet(queryParams, headerParams) {
        const queryParamsMapped = {};
        const headerParamsMapped = {};
        const pathParamsMapped = {};
        Object.assign(queryParamsMapped, convertParamsToRealParams(queryParams, FaceListListFaceListsGetQueryParametersNameMap));
        Object.assign(headerParamsMapped, convertParamsToRealParams(headerParams, FaceListListFaceListsGetHeaderParametersNameMap));
        return this.makeRequest('/facelists', 'get', queryParamsMapped, headerParamsMapped, pathParamsMapped);
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
    faceListAddAFaceToAFaceListPost(queryParams, headerParams, pathParams) {
        const queryParamsMapped = {};
        const headerParamsMapped = {};
        const pathParamsMapped = {};
        Object.assign(queryParamsMapped, convertParamsToRealParams(queryParams, FaceListAddAFaceToAFaceListPostQueryParametersNameMap));
        Object.assign(headerParamsMapped, convertParamsToRealParams(headerParams, FaceListAddAFaceToAFaceListPostHeaderParametersNameMap));
        Object.assign(pathParamsMapped, convertParamsToRealParams(pathParams, FaceListAddAFaceToAFaceListPostPathParametersNameMap));
        return this.makeRequest('/facelists/{faceListId}/persistedFaces', 'post', queryParamsMapped, headerParamsMapped, pathParamsMapped);
    }
    /**
    *
Delete an existing face from a face list (given by a persisitedFaceId and a faceListId). Persisted image related to the face will also be deleted.
Http Method
DELETE
  
    *
    */
    faceListDeleteAFaceFromAFaceListDelete(queryParams, headerParams, pathParams) {
        const queryParamsMapped = {};
        const headerParamsMapped = {};
        const pathParamsMapped = {};
        Object.assign(queryParamsMapped, convertParamsToRealParams(queryParams, FaceListDeleteAFaceFromAFaceListDeleteQueryParametersNameMap));
        Object.assign(headerParamsMapped, convertParamsToRealParams(headerParams, FaceListDeleteAFaceFromAFaceListDeleteHeaderParametersNameMap));
        Object.assign(pathParamsMapped, convertParamsToRealParams(pathParams, FaceListDeleteAFaceFromAFaceListDeletePathParametersNameMap));
        return this.makeRequest('/facelists/{faceListId}/persistedFaces/{persistedFaceId}', 'delete', queryParamsMapped, headerParamsMapped, pathParamsMapped);
    }
}
exports.FaceAPI = FaceAPI;
//# sourceMappingURL=face.js.map