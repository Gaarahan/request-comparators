import ElementCreator from '../../common/ElementCreator.js';

export default class ParamItem extends ElementCreator {
  constructor(param) {
    super();

    this.renderElement(param);
  }

  renderElement(param) {
    this.element = document.createElement('li');

    const paramContainer = document.createElement('div');
    paramContainer.classList.add('param-container');

    JsonView.renderJSON(param, paramContainer);

    const plantParam = document.createElement('p');
    plantParam.classList.add('plant-param');
    plantParam.innerText = JSON.stringify(param);
    paramContainer.appendChild(plantParam);

    const suffixEle = document.createElement('span');
    suffixEle.innerText = new Date().toTimeString();


    this.element.insertAdjacentElement('afterbegin', paramContainer);
    this.element.insertAdjacentElement('beforeend', suffixEle);
  }
}
