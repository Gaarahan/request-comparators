import ComponentWithStore from '../common/ComponentWithStore.js';

export default class TabListComponent extends ComponentWithStore {
  onInit () {
    this.tabEles = document.querySelectorAll('.tab-list .tab');
    this.tabContentEles = document.querySelectorAll('.tab-content .content-item');

    this.tabEles.forEach((tabEle, index) => {
      tabEle.dataset.tabId = tabEle.innerText;
      this.tabContentEles[index].dataset.tabId = tabEle.innerText;
      tabEle.addEventListener('click', this.toggleTab.bind(this));
    });
  }

  toggleTab ($event) {
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
