import StoreService from "../service/store.service.js";
import EventEmitter from "../utils/EventEmitter.js";

const initialState = {
  isRecording: false,
  url: null,
  paramsList: [],
  urlOptionList: []
}

const state = new StoreService(initialState);
const eventEmitter = new EventEmitter();

export default class State {
  getState(key) {
    return state.getValue(key);
  }

  setState (key, value) {
    state.setValue(key, value)
    eventEmitter.emit(this.getStateUpdateEvent(key), value)
  }

  watchState(key, callback) {
    eventEmitter.subscribe(this.getStateUpdateEvent(key), callback);
  }

  getStateUpdateEvent(key) {
    return `state-${key}:update`
  }

  storeUrlOption(url) {
    const urlOptionList = state.getValue('urlOptionList');
    if (urlOptionList.indexOf(url) < 0) {
      urlOptionList.push(url);
      this.setState('urlOptionList', urlOptionList);
    }
  }
}