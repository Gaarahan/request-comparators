import { ElementCreator } from '../ElementCreator';
import ParamPrefix from "./ParamPrefix";

export default class ParamItem extends ElementCreator {
  constructor(param) {
    super();
    this.curPrefix = new ParamPrefix().getElement();

    this.element = document.createElement('li');
    this.element.insertAdjacentElement('afterbegin', this.curPrefix)
    this.element.insertAdjacentText('beforeend', `${JSON.stringify(param)}`)
  }
}