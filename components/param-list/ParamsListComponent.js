import ParamItem from './param-item/ParamItem.js';
import stateService from '../../service/state.service.js';

export default class ParamsListComponent {
  constructor() {
    this.paramsListEle = document.querySelector('#params-list');

    stateService.watchState('paramsList', this.renderParams.bind(this));
  }

  renderParams() {
    const paramsList = stateService.getState('paramsList');

    // TODO 重新渲染的目的只是为了添加一条新数据,没有必要重新加载整个列表
    this.paramsListEle.innerHTML = '';
    paramsList.forEach(param => {
      const paramItem = new ParamItem(param);

      this.paramsListEle.appendChild(paramItem.getElement());
    });
  }
}
