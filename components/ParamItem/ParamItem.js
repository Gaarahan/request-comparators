class ParamItem {
  constructor(param) {
    this.curPrefix = new ParamPrefix();

    this.paramItem = document.createElement('li');
    this.paramItem.insertAdjacentElement('afterbegin', this.curPrefix.getElement())
    this.paramItem.insertAdjacentText('beforeend', `${JSON.stringify(param)}`)
  }

  getElement() {
    return this.paramItem;
  }
}