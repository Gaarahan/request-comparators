import InputFormComponent from "../components/input-form/InputFormComponent.js";
import stateService from "../service/state.service.js";
import ParamsListComponent from '../components/param-list/ParamsListComponent.js'

function initPage() {
  const inputForm = new InputFormComponent();
  new ParamsListComponent()
  stateService.setState('isRecording', false)
  inputForm.initEvent();
}

initPage();
