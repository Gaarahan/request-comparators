export class Component extends HTMLElement {
  constructor() {
    super();

    const templateEle = document.createElement('template');
    templateEle.innerHTML = this.style() + this.template();

    const shadowRoot = this.attachShadow({ mode: 'closed' });
    shadowRoot.appendChild(templateEle.content.cloneNode(true));

    this.logicHandler(shadowRoot);
  }

  template() {
    return '';
  }

  style() {
    return '';
  }

  logicHandler(component) {}

  static selector() {
    return '';
  }
}

export const componentRegister = (componentList) => {
  componentList.forEach((component) => {
    customElements.define(component.selector(), component);
  });
};
