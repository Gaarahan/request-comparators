import { Component } from '../../common/Component.js';
import requestComparatorsService from '../../../service/request-comparator.service.js';
import State from '../../../store/index.state.js';

export class InputFormComponent extends Component {
  static selector() {
    return 'app-input-form';
  }

  template() {
    return `
      <div class="input-container">
        <label for="url-select">Url: </label>
        <select
            name="url-select"
            id="url-select"
        >
          <option value="">Select the url which you want to watch </option>
        </select>
        <button id="toggle-btn">Tree/String</button>
        <button id="clear-btn">Clear</button>
      </div>
    `;
  }

  logicHandler(component) {
    this.store = new State();

    this.initUrlSelect(component);
    this.initToggleBtn(component);
    this.initClearBtn(component);
  }

  style() {
    return `
    <style>
      .input-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;
      }
      .input-container label[for='url-select'] {
        margin-right: 10px;
      }
      .input-container * {
        font-size: 16px;
      }
      #url-select {
        flex-grow: 1;
        margin-right: 10px;
      }
      #toggle-btn {
        margin-right: 10px;
      }
    </style>
    `;
  }

  renderUrlOptions(urlOptionList) {
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

  initUrlSelect(component) {
    this.urlSelectEle = component.querySelector('#url-select');

    this.urlSelectEle.addEventListener('change', () => {
      this.store.setState('url', this.urlSelectEle.value.trim());
    });

    this.store.watchState('urlOptionList', this.renderUrlOptions.bind(this));
  }

  initClearBtn(component) {
    this.clearBtnEle = component.querySelector('#clear-btn');

    this.clearBtnEle.addEventListener('click', () => {
      requestComparatorsService.clearRecords();
    });
  }

  initToggleBtn(component) {
    this.toggleBtnEle = component.querySelector('#toggle-btn');
    this.toggleBtnEle.addEventListener('click', () => {
      requestComparatorsService.toggleParamDisplayMode();
    });
  }
}
