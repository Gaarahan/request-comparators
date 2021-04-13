import ComponentWithStore from "../common/ComponentWithStore.js";

export default class InputFormComponent extends ComponentWithStore{
  onInit() {
    this.urlInput = document.querySelector('#url-input');
    this.urlListEle = document.querySelector('#url-list');

    this.store.setState('isRecording', false)

    this.urlInput.addEventListener('change', () => {
      this.store.setState('url', this.urlInput.value.trim());
    });

    this.store.watchState('urlOptionList', this.renderUrlOptions.bind(this));
  }

  renderUrlOptions(urlOptionList) {
    this.urlListEle.innerHTML = '';

    urlOptionList.forEach(url => {
      const urlOption = document.createElement('option');
      urlOption.value = url;
      this.urlListEle.appendChild(urlOption);
    })
  }

}
