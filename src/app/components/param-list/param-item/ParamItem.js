import ElementCreator from '../../common/ElementCreator.js';

export default class ParamItem extends ElementCreator {
  constructor (param) {
    super();

    this.renderElement(param);
  }

  renderElement (param) {
    this.element = document.createElement('li');

    const paramContainer = document.createElement('div');
    paramContainer.classList.add('param-container');

    JsonView.renderJSON(param, paramContainer);

    const plantParam = document.createElement('p');
    plantParam.classList.add('plant-param');
    plantParam.innerText = JSON.stringify(param);
    paramContainer.appendChild(plantParam);

    const suffixEle = document.createElement('span');
    suffixEle.classList.add('time-str');
    const date = new Date();
    const timeStr = {
      hour: date.getHours().toString().padStart(2, '0'),
      minute: date.getMinutes().toString().padStart(2, '0'),
      second: date.getSeconds().toString().padStart(2, '0')
    };
    suffixEle.innerText = `${timeStr.hour}:${timeStr.minute}:${timeStr.second}`;

    this.element.insertAdjacentElement('afterbegin', paramContainer);
    this.element.insertAdjacentElement('beforeend', suffixEle);
  }
}
