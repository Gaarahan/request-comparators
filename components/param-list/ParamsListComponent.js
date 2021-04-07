import ParamItem from './param-item/ParamItem.js';
import stateService from '../../service/state.service.js';

export default class ParamsListComponent {
  constructor() {
    this.paramsListEle = document.querySelector('#params-list');

    stateService.watchState('paramsList', this.renderParams.bind(this));
  }

  renderParams() {
    const paramsList = stateService.getState('paramsList');

    const paramItem = new ParamItem(paramsList[paramsList.length -1]);

    this.paramsListEle.appendChild(paramItem.getElement());
  }
}
