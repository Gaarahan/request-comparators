import ParamItem from './param-item/ParamItem.js';
import stateService from '../../service/state.service.js';
import requestComparatorsService
  from '../../service/requestComparators.service.js';

export default class ParamsListComponent {
  constructor() {
    this.paramsListEle = document.querySelector('#params-list');
    this.clearBtnEle = document.querySelector('#clear-btn');

    this.initEvent();
  }

  initEvent() {
    this.clearBtnEle.addEventListener('click', () => {
      requestComparatorsService.clearRecords();
    });

    stateService.watchState('paramsList', this.renderParams.bind(this));
  }

  renderParams() {
    const paramsList = stateService.getState('paramsList');
    if (paramsList.length === 0) {
      this.paramsListEle.innerHTML = '';
    } else {
      const paramItem = new ParamItem(paramsList[paramsList.length - 1]);
      this.paramsListEle.appendChild(paramItem.getElement());
    }
  }
}
