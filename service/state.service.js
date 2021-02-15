let stateService;

(() => {
  class StateService {
    constructor() {
      this.state = {}
    }

    setState(key, value) {
      this.state[key] = value;
    };

    getState(key) {
      return this.state[key];
    }

  }

  stateService = new StateService();
})()
