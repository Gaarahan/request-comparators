import ComponentWithStore from '../common/ComponentWithStore.js';
import requestComparatorsService
from '../../service/requestComparators.service.js';

export default class InputFormComponent extends ComponentWithStore {
  onInit () {
    this.initUrlSelect();
    this.initToggleBtn();
    this.initClearBtn();
  }

  renderUrlOptions (urlOptionList) {
    if (urlOptionList.length === 0) {
      this.urlSelectEle.innerHTML =
        '<option value="">Select the url which you want to watch </option>';
    } else {
      const newUrl = urlOptionList[urlOptionList.length - 1];
      const urlOption = document.createElement('option');

      urlOption.value = newUrl;
      urlOption.innerText = newUrl;
      this.urlSelectEle.appendChild(urlOption);
    }
  }

  initUrlSelect () {
    this.urlSelectEle = document.querySelector('#url-select');

    this.urlSelectEle.addEventListener('change', () => {
      this.store.setState('url', this.urlSelectEle.value.trim());
    });

    this.store.watchState('urlOptionList', this.renderUrlOptions.bind(this));
  }

  initClearBtn () {
    this.clearBtnEle = document.querySelector('#clear-btn');

    this.clearBtnEle.addEventListener('click', () => {
      requestComparatorsService.clearRecords();
    });
  }

  initToggleBtn () {
    this.toggleBtnEle = document.querySelector('#toggle-btn');
    this.toggleBtnEle.addEventListener('click', () => {
      requestComparatorsService.toggleParamDisplayMode();
    });
  }
}
