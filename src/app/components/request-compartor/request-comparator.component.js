import { Component } from '../common/Component.js';
import requestComparatorsService from '../../service/request-comparator.service.js';

export class RequestComparatorComponent extends Component {
  static selector() {
    return 'app-request-comparator';
  }

  template() {
    return `
        <app-input-form></app-input-form>
        <app-params-list></app-params-list>
    `;
  }

  logicHandler() {
    requestComparatorsService.startWatchingRequest();
  }

  style() {
    return super.style();
  }
}
