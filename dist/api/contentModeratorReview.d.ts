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
export interface ReviewGetGetQueryParameters {
    /**
    * subscription key in url
    * Real name : subscription-key
    */
    subscriptionKey?: string;
}
export interface JobGetGetQueryParameters {
    /**
    * subscription key in url
    * Real name : subscription-key
    */
    subscriptionKey?: string;
}
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
export interface WorkflowGetAllGetQueryParameters {
    /**
    * subscription key in url
    * Real name : subscription-key
    */
    subscriptionKey?: string;
}
export interface WorkflowGetGetQueryParameters {
    /**
    * subscription key in url
    * Real name : subscription-key
    */
    subscriptionKey?: string;
}
export interface WorkflowCreateOrUpdatePutQueryParameters {
    /**
    * subscription key in url
    * Real name : subscription-key
    */
    subscriptionKey?: string;
}
export interface ReviewGetGetHeaderParameters {
    /**
    * subscription key in header
    * Real name : Ocp-Apim-Subscription-Key
    */
    ocpApimSubscriptionKey?: string;
}
export interface JobGetGetHeaderParameters {
    /**
    * subscription key in header
    * Real name : Ocp-Apim-Subscription-Key
    */
    ocpApimSubscriptionKey?: string;
}
export interface ReviewCreatePostHeaderParameters {
    /**
    * subscription key in header
    * Real name : Ocp-Apim-Subscription-Key
    */
    ocpApimSubscriptionKey?: string;
}
export interface JobCreatePostHeaderParameters {
    /**
    * subscription key in header
    * Real name : Ocp-Apim-Subscription-Key
    */
    ocpApimSubscriptionKey?: string;
}
export interface WorkflowGetAllGetHeaderParameters {
    /**
    * subscription key in header
    * Real name : Ocp-Apim-Subscription-Key
    */
    ocpApimSubscriptionKey?: string;
}
export interface WorkflowGetGetHeaderParameters {
    /**
    * subscription key in header
    * Real name : Ocp-Apim-Subscription-Key
    */
    ocpApimSubscriptionKey?: string;
}
export interface WorkflowCreateOrUpdatePutHeaderParameters {
    /**
    * subscription key in header
    * Real name : Ocp-Apim-Subscription-Key
    */
    ocpApimSubscriptionKey?: string;
}
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
export interface ReviewCreatePostPathParameters {
    /**
    * Your Team Name
    * Real name : teamName
    */
    teamName: string;
}
export interface JobCreatePostPathParameters {
    /**
    * Your team name
    * Real name : teamName
    */
    teamName: string;
}
export interface WorkflowGetAllGetPathParameters {
    /**
    * Your Team name
    * Real name : team
    */
    team: string;
}
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
export declare type ReviewGetGetResult = boolean;
export declare type JobGetGetResult = {
    "Id": string;
    "TeamName": string;
    "Status": string;
    "WorkflowId": string;
    "CallBackEndpoint": string;
    "ReviewId": any;
    if: any;
    is: boolean;
    "ResultMetaData": any[];
    with: any;
    from: boolean;
};
export declare type ReviewCreatePostResult = string[];
export declare type JobCreatePostResult = {
    "JobId": string;
};
export declare type WorkflowGetAllGetResult = {
    "Description": string;
    "Expression": {
        "Left": {
            "ConnectorName": string;
            "OutputName": string;
            "Operator": string;
            "Value": string;
            "Type": string;
        };
        "Right": {
            "ConnectorName": string;
            "OutputName": string;
            "Operator": string;
            "Value": string;
            "Type": string;
        };
        "Combine": string;
        "Type": string;
    };
}[];
export declare type WorkflowGetGetResult = {};
export declare type WorkflowCreateOrUpdatePutResult = {};
export declare type MethodType = 'post' | 'get' | 'put' | 'delete' | 'patch';
export declare class ContentModeratorReviewAPI {
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
    * Returns review details for the review Id passed.
    *
    */
    reviewGetGet(queryParams: ReviewGetGetQueryParameters, headerParams: ReviewGetGetHeaderParameters, pathParams: ReviewGetGetPathParameters): Request<boolean>;
    /**
    * Get the Job Details for a Job Id.
    *
    */
    jobGetGet(queryParams: JobGetGetQueryParameters, headerParams: JobGetGetHeaderParameters, pathParams: JobGetGetPathParameters): Request<JobGetGetResult>;
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
    reviewCreatePost(queryParams: ReviewCreatePostQueryParameters, headerParams: ReviewCreatePostHeaderParameters, pathParams: ReviewCreatePostPathParameters): Request<string[]>;
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
    jobCreatePost(queryParams: JobCreatePostQueryParameters, headerParams: JobCreatePostHeaderParameters, pathParams: JobCreatePostPathParameters): Request<JobCreatePostResult>;
    /**
    * Get all the Workflows available for you Team
    *
    */
    workflowGetAllGet(queryParams: WorkflowGetAllGetQueryParameters, headerParams: WorkflowGetAllGetHeaderParameters, pathParams: WorkflowGetAllGetPathParameters): Request<{
        "Description": string;
        "Expression": {
            "Left": {
                "ConnectorName": string;
                "OutputName": string;
                "Operator": string;
                "Value": string;
                "Type": string;
            };
            "Right": {
                "ConnectorName": string;
                "OutputName": string;
                "Operator": string;
                "Value": string;
                "Type": string;
            };
            "Combine": string;
            "Type": string;
        };
    }[]>;
    /**
    * Get the details of a specific Workflow on your Team
    *
    */
    workflowGetGet(queryParams: WorkflowGetGetQueryParameters, headerParams: WorkflowGetGetHeaderParameters, pathParams: WorkflowGetGetPathParameters): Request<WorkflowGetGetResult>;
    /**
    * Create a new workflow or update an existing one.
    *
    */
    workflowCreateOrUpdatePut(queryParams: WorkflowCreateOrUpdatePutQueryParameters, headerParams: WorkflowCreateOrUpdatePutHeaderParameters, pathParams: WorkflowCreateOrUpdatePutPathParameters): Request<WorkflowCreateOrUpdatePutResult>;
}
