// import InputFormComponent
//   from '../../components/input-form/InputFormComponent.js';
// import ParamsListComponent
//   from '../../components/param-list/ParamsListComponent.js';
// import requestComparatorsService
//   from '../../service/requestComparators.service.js';
// import TabListComponent from '../../components/tab-list/TabListComponent.js';
import { TestComponent } from '../../components/common/TestComponent.js';
import { componentRegister } from '../../components/common/Component.js';
import { TabListComponent } from '../../components/tab-list/TabListComponent.js';

// function initPage() {
//   requestComparatorsService.startWatchingRequest();
//   // eslint-disable-next-line no-new
//   new TabListComponent();
//   // eslint-disable-next-line no-new
//   new InputFormComponent();
//   // eslint-disable-next-line no-new
//   new ParamsListComponent();
// }

// initPage();

componentRegister([TestComponent, TabListComponent]);

document.body.innerHTML = `
<app-tab-list>
  <app-tab-item
    name='Compare Request'
  >
    <app-test></app-test>
    <app-request-compartor></app-request-compartor>
  </app-tab-item>
  <app-tab-item
    name='Inject Response'
  >
    <app-response-injector></app-response-injector>
  </app-tab-item>
</app-tab-list>
`;
