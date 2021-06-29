import { componentRegister } from '../../components/common/Component.js';
import { TabListComponent } from '../../components/tab-list/tab-list.component.js';
import { RequestComparatorComponent } from '../../components/request-compartor/request-comparator.component.js';
import { InputFormComponent } from '../../components/request-compartor/input-form/input-form.component.js';
import { ParamsListComponent } from '../../components/request-compartor/param-list/params-list.component.js';
import { ParamItemComponent } from '../../components/request-compartor/param-list/param-item/param-item.js';

componentRegister([
  RequestComparatorComponent,
  TabListComponent,
  InputFormComponent,
  ParamItemComponent, // TODO 组件的依赖应该由组件自己来维护
  ParamsListComponent,
]);

document.body.innerHTML = `
<app-tab-list>
  <app-tab-item
    name='Compare Request'
  >
    <app-request-comparator></app-request-comparator>
  </app-tab-item>
  <app-tab-item
    name='Inject Response'
  >
    <app-response-injector></app-response-injector>
  </app-tab-item>
</app-tab-list>
`;
