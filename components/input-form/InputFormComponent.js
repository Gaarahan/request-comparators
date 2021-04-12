import requestComparatorsService
  from '../../service/requestComparators.service.js';
import ComponentWithStore from "../common/ComponentWithStore.js";

export default class InputFormComponent extends ComponentWithStore{
  constructor() {
    super();

    this.urlInput = document.querySelector('#url-input');
    this.startBtn = document.querySelector('#start-btn');
  }

  onInit() {
    this.startBtn.addEventListener('click', () => {
      let value = this.urlInput.value.trim();
      if (!value) {
        return this.setErrorStyle();
      }

      const isRecording = this.store.getState('isRecording');

      if (isRecording) {
        this.startBtn.innerText = 'Start';
        requestComparatorsService.stopRecording();
        this.urlInput.removeAttribute('disabled');
      } else {
        this.startBtn.innerText = 'Stop';
        this.store.setState('url', this.urlInput.value);
        requestComparatorsService.startRecording();
        this.urlInput.setAttribute('disabled', 'disabled')
      }
    })

    this.urlInput.addEventListener('input', () => {
      this.removeErrorStyle();
    })

    this.urlInput.addEventListener('change', () => {
      this.store.setState('url', this.urlInput.value);
    });
  }

  setErrorStyle() {
    this.urlInput.focus();
    this.urlInput.classList.add('error')
  }

  removeErrorStyle() {
    this.urlInput.classList.remove('error')
  }
}
