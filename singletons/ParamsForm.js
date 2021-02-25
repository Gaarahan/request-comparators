import ParamItem from "../components/ParamItem/ParamItem.js";

let paramsForm;
(() => {
  class ParamsList {
    constructor() {
      this.paramsList = document.querySelector('#params-list');

      // TODO for test
      this.paramsList.addEventListener('click', this.setParam.bind(this))
    }

    setParam(param) {
      const paramItem = new ParamItem(param);

      this.paramsList.appendChild(paramItem.getElement());
    }
  }

  paramsForm = new ParamsList();
})()


export default paramsForm;
