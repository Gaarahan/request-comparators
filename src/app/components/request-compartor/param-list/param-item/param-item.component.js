import { Component } from '../../../common/Component.js';

export class ParamItemComponent extends Component {
  constructor() {
    super();

    this.plantParamStr = 'init plantParamStr';
    this.timeStr = 'init time str';
  }

  static selector() {
    return 'app-param-item';
  }

  template() {
    return `
      <li>
        <div class="param-container"></div>
        <p class="plant-param">${this.plantParamStr}</p>
        <span class="time-str">${this.timeStr}</span>
      </li>
    `;
  }

  style() {
    return `
       <link rel="stylesheet" type="text/css" href="/src/assets/lib/jsonview/jsonview.bundle.css"> 
    `;
  }

  logicHandler(component) {
    const param = JSON.parse(this.dataset.param);
    const paramContainer = component.querySelector('.param-container');
    JsonView.renderJSON(param, paramContainer);

    this.plantParamStr = JSON.stringify(param);

    const date = new Date();
    const timeStr = {
      hour: date.getHours().toString().padStart(2, '0'),
      minute: date.getMinutes().toString().padStart(2, '0'),
      second: date.getSeconds().toString().padStart(2, '0'),
    };
    this.timeStr = `${timeStr.hour}:${timeStr.minute}:${timeStr.second}`;
  }
}
