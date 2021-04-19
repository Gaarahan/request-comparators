import StoreService from '../service/store.service.js';
import EventEmitter from '../common/utils/EventEmitter.js';
import { DISPLAY_MODE } from '../common/constant/index.js';

const initialState = {
  displayMode: DISPLAY_MODE.STRING,
  url: null,
  paramsList: [],
  urlOptionList: []
};

const state = new StoreService(initialState);
const eventEmitter = new EventEmitter();

export default class State {
  getState (key) {
    return state.getValue(key);
  }

  setState (key, value) {
    state.setValue(key, value);
    eventEmitter.emit(this.getStateUpdateEvent(key), value);
  }

  watchState (key, callback) {
    eventEmitter.subscribe(this.getStateUpdateEvent(key), callback);
  }

  getStateUpdateEvent (key) {
    return `state-${key}:update`;
  }

  addUrlOption (url) {
    const urlOptionList = state.getValue('urlOptionList');
    if (urlOptionList.indexOf(url) < 0) {
      urlOptionList.push(url);
      this.setState('urlOptionList', urlOptionList);
    }
  }
}
