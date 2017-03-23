"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const request = require("superagent");
const SpellCheckPostQueryParametersNameMap = {
    mode: "mode",
    mkt: "mkt",
    subscriptionKey: "subscription-key"
};
const SpellCheckGetQueryParametersNameMap = {
    mode: "mode",
    text: "text",
    preContextText: "preContextText",
    postContextText: "postContextText",
    mkt: "mkt",
    subscriptionKey: "subscription-key"
};
const SpellCheckPostHeaderParametersNameMap = {
    ocpApimSubscriptionKey: "Ocp-Apim-Subscription-Key"
};
const SpellCheckGetHeaderParametersNameMap = {
    ocpApimSubscriptionKey: "Ocp-Apim-Subscription-Key"
};
const GlobalQueryParametersNameMap = {
    mode: "mode",
    mkt: "mkt",
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
class SpellCheckAPI {
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
        const url = `https://api.cognitive.microsoft.com/bing/v5.0/spellcheck${path}`;
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
    *
    *
    */
    spellCheckPost(queryParams, headerParams) {
        const queryParamsMapped = {};
        const headerParamsMapped = {};
        const pathParamsMapped = {};
        Object.assign(queryParamsMapped, convertParamsToRealParams(queryParams, SpellCheckPostQueryParametersNameMap));
        Object.assign(headerParamsMapped, convertParamsToRealParams(headerParams, SpellCheckPostHeaderParametersNameMap));
        return this.makeRequest('/', 'post', queryParamsMapped, headerParamsMapped, pathParamsMapped);
    }
    /**
    *
    *
    */
    spellCheckGet(queryParams, headerParams) {
        const queryParamsMapped = {};
        const headerParamsMapped = {};
        const pathParamsMapped = {};
        Object.assign(queryParamsMapped, convertParamsToRealParams(queryParams, SpellCheckGetQueryParametersNameMap));
        Object.assign(headerParamsMapped, convertParamsToRealParams(headerParams, SpellCheckGetHeaderParametersNameMap));
        return this.makeRequest('/', 'get', queryParamsMapped, headerParamsMapped, pathParamsMapped);
    }
}
exports.SpellCheckAPI = SpellCheckAPI;
//# sourceMappingURL=spellCheck.js.map