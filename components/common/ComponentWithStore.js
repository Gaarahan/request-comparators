import State from "../../store/index.state.js";

export default class ComponentWithStore {
  constructor() {
    this.store = new State()
    this.onInit()
  }

  onInit() { }
}
