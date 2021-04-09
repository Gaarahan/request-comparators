import stateService from "../../service/state.service.js";
import requestComparatorsService
  from '../../service/requestComparators.service.js';

export default class InputFormComponent {
  constructor() {
    this.urlInput = document.querySelector('#url-input');
    this.startBtn = document.querySelector('#start-btn');

    this.initEvent();
  }

  initEvent() {
    this.startBtn.addEventListener('click', () => {
      let value = this.urlInput.value.trim();
      if (!value) {
        return this.setErrorStyle();
      }

      const isRecording = stateService.getState('isRecording');

      if (isRecording) {
        this.startBtn.innerText = 'Start';
        requestComparatorsService.stopRecording();
        this.urlInput.removeAttribute('disabled');
      } else {
        this.startBtn.innerText = 'Stop';
        stateService.setState('url', this.urlInput.value);
        requestComparatorsService.startRecording();
        this.urlInput.setAttribute('disabled', 'disabled')
      }
    })

    this.urlInput.addEventListener('input', () => {
      this.removeErrorStyle();
    })
  }

  setErrorStyle() {
    this.urlInput.focus();
    this.urlInput.classList.add('error')
  }

  removeErrorStyle() {
    this.urlInput.classList.remove('error')
  }
}
