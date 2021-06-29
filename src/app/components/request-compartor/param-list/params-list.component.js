import { Component } from '../../common/Component.js';
import State from '../../../store/index.state.js';

export class ParamsListComponent extends Component {
  static selector() {
    return 'app-params-list';
  }

  template() {
    return `
      <div class="params-container">
        <p class="desc-tip">The params of watch request will display here :</p>
        <ul id="params-list" class="display-as-string"></ul>
      </div>
    `;
  }

  logicHandler(component) {
    this.store = new State();

    this.paramsListEle = component.querySelector('#params-list');

    this.store.watchState('paramsList', this.renderParams.bind(this));
    this.store.watchState('displayMode', this.toggleDisplayMode.bind(this));
  }

  style() {
    return `
      <style>
        /*params list*/
        .desc-tip {
          color: gray;
          user-select: none;
          font-size: small;
        }

        #params-list {
          padding-inline-start: 20px;
        }
        #params-list li {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin: 2px 0;
          border: 1px solid gray;
        }
        #params-list li span.time-str {
          line-height: 30px;
          padding: 0 2px;
        }
        #params-list li div.param-container .json-container {
          display: block;
        }
        #params-list li div.param-container .plant-param {
          font-family: monospace;
          display: none;
        }
        #params-list.display-as-string li div.param-container .json-container {
          display: none;
        }
        #params-list.display-as-string li div.param-container .plant-param {
          display: block;
        }
      </style>
    `;
  }

  renderParams(paramsList) {
    if (paramsList.length === 0) {
      this.paramsListEle.innerHTML = '';
    } else {
      // const paramItem = new ParamItemComponent(paramsList[paramsList.length - 1]);
      const paramItem = document.createElement('app-param-item');
      this.paramsListEle.appendChild(paramItem);
    }
  }

  toggleDisplayMode() {
    this.paramsListEle.classList.toggle('display-as-string');
  }
}
