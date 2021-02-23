import { ElementCreator } from '../ElementCreator';

export default class ParamPrefix extends ElementCreator{
  constructor() {
    super();

    this.element = document.createElement('span')
    this.element.innerText = 'pre';
  }
}