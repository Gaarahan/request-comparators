let paramsForm;
(() => {
  class ParamsList {
    constructor() {
      this.paramsList = document.querySelector('#params-list');
    }

    setParam(param) {
      const paramItem = this.buildParamItem(param);

      this.paramsList.appendChild(paramItem);
    }

    buildParamItem(param) {
      const newParam = document.createElement('li');
      newParam.innerText = `${JSON.stringify(param)}`;

      return newParam;
    }
  }

  paramsForm = new ParamsList();
})()


