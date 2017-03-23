"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const request = require("superagent");
const ReviewGetGetQueryParametersNameMap = {
    subscriptionKey: "subscription-key"
};
const JobGetGetQueryParametersNameMap = {
    subscriptionKey: "subscription-key"
};
const ReviewCreatePostQueryParametersNameMap = {
    subTeam: "subTeam",
    subscriptionKey: "subscription-key"
};
const JobCreatePostQueryParametersNameMap = {
    contentType: "ContentType",
    contentId: "ContentId",
    workflowName: "WorkflowName",
    callBackEndpoint: "CallBackEndpoint",
    subscriptionKey: "subscription-key"
};
const WorkflowGetAllGetQueryParametersNameMap = {
    subscriptionKey: "subscription-key"
};
const WorkflowGetGetQueryParametersNameMap = {
    subscriptionKey: "subscription-key"
};
const WorkflowCreateOrUpdatePutQueryParametersNameMap = {
    subscriptionKey: "subscription-key"
};
const ReviewGetGetHeaderParametersNameMap = {
    ocpApimSubscriptionKey: "Ocp-Apim-Subscription-Key"
};
const JobGetGetHeaderParametersNameMap = {
    ocpApimSubscriptionKey: "Ocp-Apim-Subscription-Key"
};
const ReviewCreatePostHeaderParametersNameMap = {
    ocpApimSubscriptionKey: "Ocp-Apim-Subscription-Key"
};
const JobCreatePostHeaderParametersNameMap = {
    ocpApimSubscriptionKey: "Ocp-Apim-Subscription-Key"
};
const WorkflowGetAllGetHeaderParametersNameMap = {
    ocpApimSubscriptionKey: "Ocp-Apim-Subscription-Key"
};
const WorkflowGetGetHeaderParametersNameMap = {
    ocpApimSubscriptionKey: "Ocp-Apim-Subscription-Key"
};
const WorkflowCreateOrUpdatePutHeaderParametersNameMap = {
    ocpApimSubscriptionKey: "Ocp-Apim-Subscription-Key"
};
const ReviewGetGetPathParametersNameMap = {
    teamName: "teamName",
    reviewId: "reviewId"
};
const JobGetGetPathParametersNameMap = {
    teamName: "teamName",
    jobId: "JobId"
};
const ReviewCreatePostPathParametersNameMap = {
    teamName: "teamName"
};
const JobCreatePostPathParametersNameMap = {
    teamName: "teamName"
};
const WorkflowGetAllGetPathParametersNameMap = {
    team: "team"
};
const WorkflowGetGetPathParametersNameMap = {
    team: "team",
    workflowname: "workflowname"
};
const WorkflowCreateOrUpdatePutPathParametersNameMap = {
    team: "team",
    workflowname: "workflowname"
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
class ContentModeratorReviewAPI {
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
        const url = `https://westus.api.cognitive.microsoft.com/contentmoderator/review/v1.0${path}`;
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
    * Returns review details for the review Id passed.
    *
    */
    reviewGetGet(queryParams, headerParams, pathParams) {
        const queryParamsMapped = {};
        const headerParamsMapped = {};
        const pathParamsMapped = {};
        Object.assign(queryParamsMapped, convertParamsToRealParams(queryParams, ReviewGetGetQueryParametersNameMap));
        Object.assign(headerParamsMapped, convertParamsToRealParams(headerParams, ReviewGetGetHeaderParametersNameMap));
        Object.assign(pathParamsMapped, convertParamsToRealParams(pathParams, ReviewGetGetPathParametersNameMap));
        return this.makeRequest('/teams/{teamName}/reviews/{reviewId}', 'get', queryParamsMapped, headerParamsMapped, pathParamsMapped);
    }
    /**
    * Get the Job Details for a Job Id.
    *
    */
    jobGetGet(queryParams, headerParams, pathParams) {
        const queryParamsMapped = {};
        const headerParamsMapped = {};
        const pathParamsMapped = {};
        Object.assign(queryParamsMapped, convertParamsToRealParams(queryParams, JobGetGetQueryParametersNameMap));
        Object.assign(headerParamsMapped, convertParamsToRealParams(headerParams, JobGetGetHeaderParametersNameMap));
        Object.assign(pathParamsMapped, convertParamsToRealParams(pathParams, JobGetGetPathParametersNameMap));
        return this.makeRequest('/teams/{teamName}/jobs/{JobId}', 'get', queryParamsMapped, headerParamsMapped, pathParamsMapped);
    }
    /**
    * The reviews created would show up for Reviewers on your team. As Reviewers complete reviewing, results of the Review would be POSTED (i.e. HTTP POST) on the specified CallBackEndpoint.

CallBack Schemas
Review Completion CallBack Sample

{
  "ReviewId": "",
  "ModifiedOn": "2016-10-11T22:36:32.9934851Z",
  "ModifiedBy": "",
  "CallBackType": "Review",
  "ContentId": "",
  "Metadata": {
    "adultscore": "0.xxx",
    "a": "False",
    "racyscore": "0.xxx",
    "r": "True"
  },
  "ReviewerResultTags": {
    "a": "False",
    "r": "True"
  }
}


    *
    */
    reviewCreatePost(queryParams, headerParams, pathParams) {
        const queryParamsMapped = {};
        const headerParamsMapped = {};
        const pathParamsMapped = {};
        Object.assign(queryParamsMapped, convertParamsToRealParams(queryParams, ReviewCreatePostQueryParametersNameMap));
        Object.assign(headerParamsMapped, convertParamsToRealParams(headerParams, ReviewCreatePostHeaderParametersNameMap));
        Object.assign(pathParamsMapped, convertParamsToRealParams(pathParams, ReviewCreatePostPathParametersNameMap));
        return this.makeRequest('/teams/{teamName}/reviews', 'post', queryParamsMapped, headerParamsMapped, pathParamsMapped);
    }
    /**
    * A job Id will be returned for the Image content posted on this endpoint.

Once the content is evaluated against the Workflow provided the review will be created or ignored based on the workflow expression.

CallBack Schemas


Job Completion CallBack Sample

{
  "JobId": ",
  "ReviewId": "",
  "WorkFlowId": "default",
  "Status": "",
  "ContentType": "Image",
  "ContentId": "",
  "CallBackType": "Job",
  "Metadata": {
    "adultscore": "0.xxx",
    "a": "False",
    "racyscore": "0.xxx",
    "r": "True"
  }
}



Review Completion CallBack Sample

{
  "ReviewId": "",
  "ModifiedOn": "2016-10-11T22:36:32.9934851Z",
  "ModifiedBy": "",
  "CallBackType": "Review",
  "ContentId": "",
  "Metadata": {
    "adultscore": "0.xxx",
    "a": "False",
    "racyscore": "0.xxx",
    "r": "True"
  },
  "ReviewerResultTags": {
    "a": "False",
    "r": "True"
  }
}


    *
    */
    jobCreatePost(queryParams, headerParams, pathParams) {
        const queryParamsMapped = {};
        const headerParamsMapped = {};
        const pathParamsMapped = {};
        Object.assign(queryParamsMapped, convertParamsToRealParams(queryParams, JobCreatePostQueryParametersNameMap));
        Object.assign(headerParamsMapped, convertParamsToRealParams(headerParams, JobCreatePostHeaderParametersNameMap));
        Object.assign(pathParamsMapped, convertParamsToRealParams(pathParams, JobCreatePostPathParametersNameMap));
        return this.makeRequest('/teams/{teamName}/jobs', 'post', queryParamsMapped, headerParamsMapped, pathParamsMapped);
    }
    /**
    * Get all the Workflows available for you Team
    *
    */
    workflowGetAllGet(queryParams, headerParams, pathParams) {
        const queryParamsMapped = {};
        const headerParamsMapped = {};
        const pathParamsMapped = {};
        Object.assign(queryParamsMapped, convertParamsToRealParams(queryParams, WorkflowGetAllGetQueryParametersNameMap));
        Object.assign(headerParamsMapped, convertParamsToRealParams(headerParams, WorkflowGetAllGetHeaderParametersNameMap));
        Object.assign(pathParamsMapped, convertParamsToRealParams(pathParams, WorkflowGetAllGetPathParametersNameMap));
        return this.makeRequest('/teams/{team}/workflows', 'get', queryParamsMapped, headerParamsMapped, pathParamsMapped);
    }
    /**
    * Get the details of a specific Workflow on your Team
    *
    */
    workflowGetGet(queryParams, headerParams, pathParams) {
        const queryParamsMapped = {};
        const headerParamsMapped = {};
        const pathParamsMapped = {};
        Object.assign(queryParamsMapped, convertParamsToRealParams(queryParams, WorkflowGetGetQueryParametersNameMap));
        Object.assign(headerParamsMapped, convertParamsToRealParams(headerParams, WorkflowGetGetHeaderParametersNameMap));
        Object.assign(pathParamsMapped, convertParamsToRealParams(pathParams, WorkflowGetGetPathParametersNameMap));
        return this.makeRequest('/teams/{team}/workflows/{workflowname}', 'get', queryParamsMapped, headerParamsMapped, pathParamsMapped);
    }
    /**
    * Create a new workflow or update an existing one.
    *
    */
    workflowCreateOrUpdatePut(queryParams, headerParams, pathParams) {
        const queryParamsMapped = {};
        const headerParamsMapped = {};
        const pathParamsMapped = {};
        Object.assign(queryParamsMapped, convertParamsToRealParams(queryParams, WorkflowCreateOrUpdatePutQueryParametersNameMap));
        Object.assign(headerParamsMapped, convertParamsToRealParams(headerParams, WorkflowCreateOrUpdatePutHeaderParametersNameMap));
        Object.assign(pathParamsMapped, convertParamsToRealParams(pathParams, WorkflowCreateOrUpdatePutPathParametersNameMap));
        return this.makeRequest('/teams/{team}/workflows/{workflowname}', 'put', queryParamsMapped, headerParamsMapped, pathParamsMapped);
    }
}
exports.ContentModeratorReviewAPI = ContentModeratorReviewAPI;
//# sourceMappingURL=contentModeratorReview.js.map