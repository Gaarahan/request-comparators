let instance = null;

export default class EventEmitter {
    constructor() {
        if (!instance) {
            this.events = {}
            instance = this;
        }
        return instance;
    }

    subscribe(eventName, callback) {
        if (!this.events[eventName]) {
            this.events[eventName] = [];
        }
        this.events[eventName].push(callback);

        return () => {
            this.events[eventName] = this.events[eventName].filter(fn => fn !== callback);
        }
    }

    emit(eventName, payload) {
        const callbacks = this.events[eventName] || [];

        callbacks.forEach(fn => {
            fn(payload);
        })
    }
}
