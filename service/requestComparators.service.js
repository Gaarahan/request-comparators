import State from "../store/index.state.js";

let requestComparatorsService = null;

(() => {

  class RequestComparatorsService {
    constructor() {
      this.store = new State();
      this.startRecording();
    }

    startRecording() {
      chrome.devtools.network.onRequestFinished.addListener(this.recordingHandle.bind(this))
    }

    clearRecords() {
      this.store.setState('paramsList', []);
    }

    recordingHandle({request, _resourceType}) {
      if (_resourceType !== 'xhr') {
        return false;
      }

      let {url} = request;
      const indexOfQuery = url.indexOf('?');
      if (indexOfQuery >= 0) {
        url = url.slice(0, indexOfQuery)
      }

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

