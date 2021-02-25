import inputForm from '../singletons/InputForm.js';
import paramsForm from '../singletons/ParamsForm.js';

function initPage() {
  stateService.setState('isRecording', false)
  inputForm.initEvent();
}

initPage();
