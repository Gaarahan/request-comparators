import { Component } from '../common/Component.js';

export class TabListComponent extends Component {
  static selector() {
    return 'app-tab-list';
  }

  template() {
    const tabItems = Array.from(this.querySelectorAll('app-tab-item'));

    const headerTemplate = `
    <header class='tab-list'>
      ${tabItems
        .map((itm, index) => {
          const tabName = itm.getAttribute('name');
          return `
            <span 
                class='tab ${index === 0 ? 'active' : ''}'
            >${tabName}</span>`;
        })
        .join('\n')}
    </header>
    `;
    const contentTemplate = `
      <section class='tab-content'>
        ${tabItems
          .map(
            (itm, index) =>
              `
              <div class='content-item ${index === 0 ? 'active' : ''}'>
                ${itm.innerHTML}
              </div>
            `
          )
          .join('\n')} 
      </section>
    `;

    return `
        ${headerTemplate}
        ${contentTemplate}
    `;
  }

  style() {
    return `
      <style>
        header.tab-list {
            padding: 0 20px;
            margin: 0 0 10px;
            display: flex;
            justify-content: center;
        }
        header.tab-list .tab {
            cursor: pointer;
            user-select: none;
            margin-right: 10px;
            padding: 5px 0;
            border-bottom: 2px solid transparent;
        }
        header.tab-list .tab.active {
            color: #1890ff;
            border-bottom: 2px solid #1890ff;
        }
        section.tab-content .content-item {
            display: none;
        }
        section.tab-content .content-item.active {
            display: block;
        }
      </style>
    `;
  }

  logicHandler(component) {
    this.tabEles = component.querySelectorAll('.tab-list .tab');
    this.tabContentEles = component.querySelectorAll(
      '.tab-content .content-item'
    );

    this.tabEles.forEach((tabEle, index) => {
      tabEle.dataset.tabId = tabEle.innerText;
      this.tabContentEles[index].dataset.tabId = tabEle.innerText;
      tabEle.addEventListener('click', this.toggleTab.bind(this));
    });
  }

  toggleTab($event) {
    const tabId = $event.target.dataset.tabId;
    const setActive = (ele) => {
      if (ele.dataset.tabId === tabId) {
        ele.classList.add('active');
      } else {
        ele.classList.remove('active');
      }
    };

    Array.from(this.tabEles).forEach(setActive);
    Array.from(this.tabContentEles).forEach(setActive);
  }
}
