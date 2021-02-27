import EventEmitter from "../utils/EventEmitter.js";

let stateService;

// TODO split state and store, store just control data, state knows which data need be store and set event for some data
(() => {
  class StateService {
    constructor() {
      this.state = {
        isRecording: false,
        paramsList: []
      }
      this.eventEmitter = new EventEmitter();
    }

    setState(key, value) {
      this.state[key] = value;
      this.eventEmitter.emit(this.getStateUpdateEvent(key), value)
    };

    watchState(key, callback) {
      this.eventEmitter.subscribe(this.getStateUpdateEvent(key), callback);
    }

    getState(key) {
      return this.state[key];
    }

    getStateUpdateEvent(key) {
      return `state-${key}:update`
    }
  }

  stateService = new StateService();
})()

export default stateService;
