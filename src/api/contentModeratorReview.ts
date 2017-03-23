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

export interface ReviewGetGetQueryParameters {
    /**
    * subscription key in url
    * Real name : subscription-key
    */    
    subscriptionKey?: string;
}
const ReviewGetGetQueryParametersNameMap = {
    subscriptionKey: "subscription-key"
};
export interface JobGetGetQueryParameters {
    /**
    * subscription key in url
    * Real name : subscription-key
    */    
    subscriptionKey?: string;
}
const JobGetGetQueryParametersNameMap = {
    subscriptionKey: "subscription-key"
};
export interface ReviewCreatePostQueryParameters {
    /**
    * Optional paramter used to specify the Sub Team for this review
    * Real name : subTeam
    */    
    subTeam?: string;
    /**
    * subscription key in url
    * Real name : subscription-key
    */    
    subscriptionKey?: string;
}
const ReviewCreatePostQueryParametersNameMap = {
    subTeam: "subTeam",
    subscriptionKey: "subscription-key"
};
export interface JobCreatePostQueryParameters {
    /**
    * Image, Text or Video
    * Real name : ContentType
    */    
    contentType: string;
    /**
    * Content Id/Name
    * Real name : ContentId
    */    
    contentId: string;
    /**
    * Workflow Name, if left empty your teams default workflow would be used
    * Real name : WorkflowName
    */    
    workflowName: string;
    /**
    * Callback endpoint for posting the reviews result.
    * Real name : CallBackEndpoint
    */    
    callBackEndpoint?: string;
    /**
    * subscription key in url
    * Real name : subscription-key
    */    
    subscriptionKey?: string;
}
const JobCreatePostQueryParametersNameMap = {
    contentType: "ContentType",
    contentId: "ContentId",
    workflowName: "WorkflowName",
    callBackEndpoint: "CallBackEndpoint",
    subscriptionKey: "subscription-key"
};
export interface WorkflowGetAllGetQueryParameters {
    /**
    * subscription key in url
    * Real name : subscription-key
    */    
    subscriptionKey?: string;
}
const WorkflowGetAllGetQueryParametersNameMap = {
    subscriptionKey: "subscription-key"
};
export interface WorkflowGetGetQueryParameters {
    /**
    * subscription key in url
    * Real name : subscription-key
    */    
    subscriptionKey?: string;
}
const WorkflowGetGetQueryParametersNameMap = {
    subscriptionKey: "subscription-key"
};
export interface WorkflowCreateOrUpdatePutQueryParameters {
    /**
    * subscription key in url
    * Real name : subscription-key
    */    
    subscriptionKey?: string;
}
const WorkflowCreateOrUpdatePutQueryParametersNameMap = {
    subscriptionKey: "subscription-key"
};
//Interfaces for headerParameters of the methods

export interface ReviewGetGetHeaderParameters {
    /**
    * subscription key in header
    * Real name : Ocp-Apim-Subscription-Key
    */    
    ocpApimSubscriptionKey?: string;
}
const ReviewGetGetHeaderParametersNameMap = {
    ocpApimSubscriptionKey: "Ocp-Apim-Subscription-Key"
};
export interface JobGetGetHeaderParameters {
    /**
    * subscription key in header
    * Real name : Ocp-Apim-Subscription-Key
    */    
    ocpApimSubscriptionKey?: string;
}
const JobGetGetHeaderParametersNameMap = {
    ocpApimSubscriptionKey: "Ocp-Apim-Subscription-Key"
};
export interface ReviewCreatePostHeaderParameters {
    /**
    * subscription key in header
    * Real name : Ocp-Apim-Subscription-Key
    */    
    ocpApimSubscriptionKey?: string;
}
const ReviewCreatePostHeaderParametersNameMap = {
    ocpApimSubscriptionKey: "Ocp-Apim-Subscription-Key"
};
export interface JobCreatePostHeaderParameters {
    /**
    * subscription key in header
    * Real name : Ocp-Apim-Subscription-Key
    */    
    ocpApimSubscriptionKey?: string;
}
const JobCreatePostHeaderParametersNameMap = {
    ocpApimSubscriptionKey: "Ocp-Apim-Subscription-Key"
};
export interface WorkflowGetAllGetHeaderParameters {
    /**
    * subscription key in header
    * Real name : Ocp-Apim-Subscription-Key
    */    
    ocpApimSubscriptionKey?: string;
}
const WorkflowGetAllGetHeaderParametersNameMap = {
    ocpApimSubscriptionKey: "Ocp-Apim-Subscription-Key"
};
export interface WorkflowGetGetHeaderParameters {
    /**
    * subscription key in header
    * Real name : Ocp-Apim-Subscription-Key
    */    
    ocpApimSubscriptionKey?: string;
}
const WorkflowGetGetHeaderParametersNameMap = {
    ocpApimSubscriptionKey: "Ocp-Apim-Subscription-Key"
};
export interface WorkflowCreateOrUpdatePutHeaderParameters {
    /**
    * subscription key in header
    * Real name : Ocp-Apim-Subscription-Key
    */    
    ocpApimSubscriptionKey?: string;
}
const WorkflowCreateOrUpdatePutHeaderParametersNameMap = {
    ocpApimSubscriptionKey: "Ocp-Apim-Subscription-Key"
};
//Interfaces for pathParameters of the methods

export interface ReviewGetGetPathParameters {
    /**
    * 
    * Real name : teamName
    */    
    teamName: string;
    /**
    * 
    * Real name : reviewId
    */    
    reviewId: string;
}
const ReviewGetGetPathParametersNameMap = {
    teamName: "teamName",
    reviewId: "reviewId"
};
export interface JobGetGetPathParameters {
    /**
    * 
    * Real name : teamName
    */    
    teamName: string;
    /**
    * 
    * Real name : JobId
    */    
    jobId: string;
}
const JobGetGetPathParametersNameMap = {
    teamName: "teamName",
    jobId: "JobId"
};
export interface ReviewCreatePostPathParameters {
    /**
    * Your Team Name
    * Real name : teamName
    */    
    teamName: string;
}
const ReviewCreatePostPathParametersNameMap = {
    teamName: "teamName"
};
export interface JobCreatePostPathParameters {
    /**
    * Your team name
    * Real name : teamName
    */    
    teamName: string;
}
const JobCreatePostPathParametersNameMap = {
    teamName: "teamName"
};
export interface WorkflowGetAllGetPathParameters {
    /**
    * Your Team name
    * Real name : team
    */    
    team: string;
}
const WorkflowGetAllGetPathParametersNameMap = {
    team: "team"
};
export interface WorkflowGetGetPathParameters {
    /**
    * Your Team name
    * Real name : team
    */    
    team: string;
    /**
    * Provide a name for this workflow
    * Real name : workflowname
    */    
    workflowname: string;
}
const WorkflowGetGetPathParametersNameMap = {
    team: "team",
    workflowname: "workflowname"
};
export interface WorkflowCreateOrUpdatePutPathParameters {
    /**
    * Your Team name
    * Real name : team
    */    
    team: string;
    /**
    * Provide a name for this workflow
    * Real name : workflowname
    */    
    workflowname: string;
}
const WorkflowCreateOrUpdatePutPathParametersNameMap = {
    team: "team",
    workflowname: "workflowname"
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
export type ReviewGetGetResult = boolean;
export type JobGetGetResult = { "Id": string; "TeamName": string; "Status": string; "WorkflowId": string; "CallBackEndpoint": string; "ReviewId": any; if: any; is: boolean; "ResultMetaData": any[]; with: any; from: boolean; };
export type ReviewCreatePostResult = string[];
export type JobCreatePostResult = { "JobId": string; };
export type WorkflowGetAllGetResult = { "Description": string; "Expression": { "Left": { "ConnectorName": string; "OutputName": string; "Operator": string; "Value": string; "Type": string; }; "Right": { "ConnectorName": string; "OutputName": string; "Operator": string; "Value": string; "Type": string; }; "Combine": string; "Type": string; }; }[];
export type WorkflowGetGetResult = {};
export type WorkflowCreateOrUpdatePutResult = {};

export type MethodType = 'post' | 'get' | 'put' | 'delete' | 'patch';
interface Params {
    [key: string]: string
}

const convertParamsToRealParams = (params: Params, paramsNameMap: Params) => {
    return Object.keys(params).reduce((prev, key) => {
        return Object.assign(prev, { [paramsNameMap[key]]: params[key] });
    }, {}) as Params;
}

export class ContentModeratorReviewAPI {   
    /**
    * Global Query parameters. If defined this parameters will be used for every request.
    */
    public globalQueryParameters: GlobalQueryParameters = {};    
    /**
    * Global Header parameters. If defined this parameters will be used for every request.
    */
    public globalHeaderParameters: GlobalHeaderParameters = {};    

    private makeRequest(path: string, method: MethodType, queryParams: Params = {}, headerParams: Params = {}, pathParams: Params = {}) {        
        const url = `https://westus.api.cognitive.microsoft.com/contentmoderator/review/v1.0${path}`;
        
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
    * Returns review details for the review Id passed.
    *
    */
    public reviewGetGet(queryParams: ReviewGetGetQueryParameters, headerParams: ReviewGetGetHeaderParameters, pathParams: ReviewGetGetPathParameters) {
        const queryParamsMapped = {} as Params;
        const headerParamsMapped = {} as Params;
        const pathParamsMapped = {} as Params;
        Object.assign(queryParamsMapped, convertParamsToRealParams(queryParams as any as Params, ReviewGetGetQueryParametersNameMap));
        Object.assign(headerParamsMapped, convertParamsToRealParams(headerParams as any as Params, ReviewGetGetHeaderParametersNameMap));
        Object.assign(pathParamsMapped, convertParamsToRealParams(pathParams as any as Params, ReviewGetGetPathParametersNameMap));
        return this.makeRequest('/teams/{teamName}/reviews/{reviewId}', 'get', queryParamsMapped, headerParamsMapped, pathParamsMapped) as Request<ReviewGetGetResult>;
    }
    /**
    * Get the Job Details for a Job Id.
    *
    */
    public jobGetGet(queryParams: JobGetGetQueryParameters, headerParams: JobGetGetHeaderParameters, pathParams: JobGetGetPathParameters) {
        const queryParamsMapped = {} as Params;
        const headerParamsMapped = {} as Params;
        const pathParamsMapped = {} as Params;
        Object.assign(queryParamsMapped, convertParamsToRealParams(queryParams as any as Params, JobGetGetQueryParametersNameMap));
        Object.assign(headerParamsMapped, convertParamsToRealParams(headerParams as any as Params, JobGetGetHeaderParametersNameMap));
        Object.assign(pathParamsMapped, convertParamsToRealParams(pathParams as any as Params, JobGetGetPathParametersNameMap));
        return this.makeRequest('/teams/{teamName}/jobs/{JobId}', 'get', queryParamsMapped, headerParamsMapped, pathParamsMapped) as Request<JobGetGetResult>;
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
    public reviewCreatePost(queryParams: ReviewCreatePostQueryParameters, headerParams: ReviewCreatePostHeaderParameters, pathParams: ReviewCreatePostPathParameters) {
        const queryParamsMapped = {} as Params;
        const headerParamsMapped = {} as Params;
        const pathParamsMapped = {} as Params;
        Object.assign(queryParamsMapped, convertParamsToRealParams(queryParams as any as Params, ReviewCreatePostQueryParametersNameMap));
        Object.assign(headerParamsMapped, convertParamsToRealParams(headerParams as any as Params, ReviewCreatePostHeaderParametersNameMap));
        Object.assign(pathParamsMapped, convertParamsToRealParams(pathParams as any as Params, ReviewCreatePostPathParametersNameMap));
        return this.makeRequest('/teams/{teamName}/reviews', 'post', queryParamsMapped, headerParamsMapped, pathParamsMapped) as Request<ReviewCreatePostResult>;
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
    public jobCreatePost(queryParams: JobCreatePostQueryParameters, headerParams: JobCreatePostHeaderParameters, pathParams: JobCreatePostPathParameters) {
        const queryParamsMapped = {} as Params;
        const headerParamsMapped = {} as Params;
        const pathParamsMapped = {} as Params;
        Object.assign(queryParamsMapped, convertParamsToRealParams(queryParams as any as Params, JobCreatePostQueryParametersNameMap));
        Object.assign(headerParamsMapped, convertParamsToRealParams(headerParams as any as Params, JobCreatePostHeaderParametersNameMap));
        Object.assign(pathParamsMapped, convertParamsToRealParams(pathParams as any as Params, JobCreatePostPathParametersNameMap));
        return this.makeRequest('/teams/{teamName}/jobs', 'post', queryParamsMapped, headerParamsMapped, pathParamsMapped) as Request<JobCreatePostResult>;
    }
    /**
    * Get all the Workflows available for you Team
    *
    */
    public workflowGetAllGet(queryParams: WorkflowGetAllGetQueryParameters, headerParams: WorkflowGetAllGetHeaderParameters, pathParams: WorkflowGetAllGetPathParameters) {
        const queryParamsMapped = {} as Params;
        const headerParamsMapped = {} as Params;
        const pathParamsMapped = {} as Params;
        Object.assign(queryParamsMapped, convertParamsToRealParams(queryParams as any as Params, WorkflowGetAllGetQueryParametersNameMap));
        Object.assign(headerParamsMapped, convertParamsToRealParams(headerParams as any as Params, WorkflowGetAllGetHeaderParametersNameMap));
        Object.assign(pathParamsMapped, convertParamsToRealParams(pathParams as any as Params, WorkflowGetAllGetPathParametersNameMap));
        return this.makeRequest('/teams/{team}/workflows', 'get', queryParamsMapped, headerParamsMapped, pathParamsMapped) as Request<WorkflowGetAllGetResult>;
    }
    /**
    * Get the details of a specific Workflow on your Team
    *
    */
    public workflowGetGet(queryParams: WorkflowGetGetQueryParameters, headerParams: WorkflowGetGetHeaderParameters, pathParams: WorkflowGetGetPathParameters) {
        const queryParamsMapped = {} as Params;
        const headerParamsMapped = {} as Params;
        const pathParamsMapped = {} as Params;
        Object.assign(queryParamsMapped, convertParamsToRealParams(queryParams as any as Params, WorkflowGetGetQueryParametersNameMap));
        Object.assign(headerParamsMapped, convertParamsToRealParams(headerParams as any as Params, WorkflowGetGetHeaderParametersNameMap));
        Object.assign(pathParamsMapped, convertParamsToRealParams(pathParams as any as Params, WorkflowGetGetPathParametersNameMap));
        return this.makeRequest('/teams/{team}/workflows/{workflowname}', 'get', queryParamsMapped, headerParamsMapped, pathParamsMapped) as Request<WorkflowGetGetResult>;
    }
    /**
    * Create a new workflow or update an existing one.
    *
    */
    public workflowCreateOrUpdatePut(queryParams: WorkflowCreateOrUpdatePutQueryParameters, headerParams: WorkflowCreateOrUpdatePutHeaderParameters, pathParams: WorkflowCreateOrUpdatePutPathParameters) {
        const queryParamsMapped = {} as Params;
        const headerParamsMapped = {} as Params;
        const pathParamsMapped = {} as Params;
        Object.assign(queryParamsMapped, convertParamsToRealParams(queryParams as any as Params, WorkflowCreateOrUpdatePutQueryParametersNameMap));
        Object.assign(headerParamsMapped, convertParamsToRealParams(headerParams as any as Params, WorkflowCreateOrUpdatePutHeaderParametersNameMap));
        Object.assign(pathParamsMapped, convertParamsToRealParams(pathParams as any as Params, WorkflowCreateOrUpdatePutPathParametersNameMap));
        return this.makeRequest('/teams/{team}/workflows/{workflowname}', 'put', queryParamsMapped, headerParamsMapped, pathParamsMapped) as Request<WorkflowCreateOrUpdatePutResult>;
    }
}