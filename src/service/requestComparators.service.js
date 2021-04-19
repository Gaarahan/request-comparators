import State from '../store/index.state.js';
import { getOriginUrl } from '../common/utils/utils.js';
import { DISPLAY_MODE } from '../common/constant/constant.js';

class RequestComparatorsService {
  constructor () {
    this.store = new State();
  }

  startWatchingRequest () {
    chrome.devtools.network.onRequestFinished.addListener(
      ({ request, _resourceType }) => {
        if (this.isRequestNeedBeRecord(_resourceType)) {
          this.store.addUrlOption(getOriginUrl(request.url));
        }
        this.recordingHandle(request, _resourceType);
      });
  }

  clearRecords () {
    this.store.setState('paramsList', []);
  }

  recordingHandle (request, _resourceType) {
    if (!this.isRequestNeedBeRecord(_resourceType)) {
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

  resolveParams (request) {
    // TODO 除了GET， POST
    if (request.method === 'GET') {
      return request.queryString;
    } else if (request.method === 'POST') {
      const mimeType = request.postData.mimeType;
      if (request.postData.mimeType.startsWith('application/json')) {
        return JSON.parse(request.postData.text);
      } else if (mimeType.startsWith('application/x-www-form-urlencoded')) {
        return JSON.parse(request.postData.params);
      } else {
        return 'Cannot get correct params';
      }
    }
  }

  isRequestNeedBeRecord (resourceType) {
    const resourceTypeNeedBeRecord = ['xhr', 'fetch'];
    return resourceTypeNeedBeRecord.includes(resourceType.toLowerCase());
  }

  toggleParamDisplayMode () {
    const displayMode = this.store.getState('displayMode');
    this.store.setState('displayMode', displayMode === DISPLAY_MODE.TREE ? DISPLAY_MODE.STRING : DISPLAY_MODE.TREE);
  }
}

export default new RequestComparatorsService();
