import ParamItem from './param-item/ParamItem.js';
import ComponentWithStore from '../common/ComponentWithStore.js';

export default class ParamsListComponent extends ComponentWithStore {
  onInit () {
    this.paramsListEle = document.querySelector('#params-list');

    this.store.watchState('paramsList', this.renderParams.bind(this));
    this.store.watchState('displayMode', this.toggleDisplayMode.bind(this));
  }

  renderParams (paramsList) {
    if (paramsList.length === 0) {
      this.paramsListEle.innerHTML = '';
    } else {
      const paramItem = new ParamItem(paramsList[paramsList.length - 1]);
      this.paramsListEle.appendChild(paramItem.getElement());
    }
  }

  toggleDisplayMode () {
    this.paramsListEle.classList.toggle('display-as-string');
  }
}
