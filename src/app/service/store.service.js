export default class StoreService {
  constructor (initialStore) {
    this.store = initialStore;
    chrome.storage.sync.get((storage) => {
      this.store.currentTabId = storage.currentTabId;
    });
  }

  setValue (key, value) {
    this.store[key] = value;
  };

  getValue (key) {
    return this.store[key];
  }
}
