import ElementCreator from '../ElementCreator.js';

export default class ParamPrefix extends ElementCreator{
  constructor() {
    super();

    this.element = document.createElement('span')
    this.element.innerHTML = `<object 
      class="params_item--svg"
      data="icons/arrows-down.svg" 
      type="image/svg+xml"
    ></object>`;
  }
}
