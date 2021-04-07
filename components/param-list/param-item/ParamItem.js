import ElementCreator from '../../common/ElementCreator.js';
import ParamPrefix from "./ParamPrefix.js";

export default class ParamItem extends ElementCreator {
  constructor(param) {
    super();
    // TODO 添加全部展开与收起按钮
    // this.curPrefix = new ParamPrefix().getElement();
    this.element = document.createElement('li');
    JsonView.renderJSON(param, this.element);
    // this.element.insertAdjacentElement('afterbegin', this.curPrefix)
    // this.element.insertAdjacentText('beforeend', `${JSON.stringify(param)}`)
  }
}
