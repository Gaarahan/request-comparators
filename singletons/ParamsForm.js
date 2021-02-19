let paramsForm;
(() => {
  function commonPrefixCreator() {
    const commonPrefix = document.createElement('span');
    commonPrefix.innerText = 'pre';

    return commonPrefix;
  }

  class ParamsList {
    constructor() {
      this.paramsList = document.querySelector('#params-list');
      this.commonPrefix = commonPrefixCreator();

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


