import ComponentWithStore from "../common/ComponentWithStore.js";

export default class InputFormComponent extends ComponentWithStore{
  onInit() {
    this.urlInput = document.querySelector('#url-input');

    this.store.setState('isRecording', false)

    this.urlInput.addEventListener('change', () => {
      this.store.setState('url', this.urlInput.value.trim());
    });
  }
}
