import ComponentWithStore from "../common/ComponentWithStore.js";

export default class InputFormComponent extends ComponentWithStore{
  onInit() {
    this.urlSelectEle = document.querySelector('#url-select');

    this.store.setState('isRecording', false)

    this.urlSelectEle.addEventListener('change', () => {
      this.store.setState('url', this.urlSelectEle.value.trim());
    });

    this.store.watchState('urlOptionList', this.renderUrlOptions.bind(this));
  }

  renderUrlOptions(urlOptionList) {
    this.urlSelectEle.innerHTML = '';

    urlOptionList.forEach(url => {
      const urlOption = document.createElement('option');
      urlOption.value = url;
      urlOption.innerText = url;
      this.urlSelectEle.appendChild(urlOption);
    })
  }

}
