import State from "../store/index.state.js";
import {getOriginUrl} from '../utils/utils.js';

let requestComparatorsService = null;

(() => {

  class RequestComparatorsService {
    constructor() {
      this.store = new State();
    }

    startWatchingRequest() {
      chrome.devtools.network.onRequestFinished.addListener(({request, _resourceType}) => {
        if (_resourceType === 'xhr') {
          this.store.storeUrlOption(getOriginUrl(request.url))
        }
      })
      chrome.devtools.network.onRequestFinished.addListener(this.recordingHandle.bind(this))
    }

    clearRecords() {
      this.store.setState('paramsList', []);
    }

    recordingHandle({request, _resourceType}) {
      if (_resourceType !== 'xhr') {
        return false;
      }

      const url = getOriginUrl(request.url);

      if (url === this.store.getState('url')) {
        const params = this.resolveParams(request);
        const paramsList = this.store.getState('paramsList');
        paramsList.push(params);

        this.store.setState('paramsList', paramsList);
      }
    }

    resolveParams(request) {
      // TODO 除了GET， POST
      if (request.method === 'GET') {
        return request.queryString;
      } else if (request.method === 'POST') {
        // TODO 处理 application/json 之外的类型
        if (request.postData.mimeType.startsWith('application/json')) {
          return JSON.parse(request.postData.text);
        }
      }
    }
  }

  requestComparatorsService = new RequestComparatorsService();
})()

export default requestComparatorsService;

