const StateService = function () {
    this.state = {}
};

StateService.prototype.setState = function (key, value) {
    console.log(this)
    this.state[key] = value;
};

StateService.prototype.getState = function (key) {
    return this.state[key];
}
