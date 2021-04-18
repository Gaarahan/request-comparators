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
    if (urlOptionList.length === 0) {
      this.urlSelectEle.innerHTML = `<option value="">Select the url which you want to watch </option>`;
    } else {
      const newUrl = urlOptionList[urlOptionList.length - 1];
      const urlOption = document.createElement('option');

      urlOption.value = newUrl;
      urlOption.innerText = newUrl;
      this.urlSelectEle.appendChild(urlOption);
    }
  }
}
