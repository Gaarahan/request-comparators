export default class StoreService {
  constructor(initialStore) {
    this.store = initialStore;
  }

  setValue(key, value) {
    this.store[key] = value;
  };

  getValue(key) {
    return this.store[key];
  }
}

