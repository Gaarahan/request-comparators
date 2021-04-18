import State from "../../store/index.state.js";

// TODO 该类应该是个抽象类，以保证init方法一定会被实现
export default class ComponentWithStore {
  constructor() {
    this.store = new State()
    this.onInit()
  }

  onInit() { }
}
