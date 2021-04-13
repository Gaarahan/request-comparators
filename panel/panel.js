import InputFormComponent from "../components/input-form/InputFormComponent.js";
import ParamsListComponent from '../components/param-list/ParamsListComponent.js'
import requestComparatorsService
  from '../service/requestComparators.service.js';

function initPage() {
  requestComparatorsService.startWatchingRequest();
  new InputFormComponent();
  new ParamsListComponent()
}

initPage();
