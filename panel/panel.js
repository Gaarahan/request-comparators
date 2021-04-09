import InputFormComponent from "../components/input-form/InputFormComponent.js";
import stateService from "../service/state.service.js";
import ParamsListComponent from '../components/param-list/ParamsListComponent.js'

function initPage() {
  stateService.setState('isRecording', false)
  new InputFormComponent();
  new ParamsListComponent()
}

initPage();
