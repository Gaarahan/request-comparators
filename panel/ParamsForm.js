let paramsForm;
(() => {
    class ParamsList {
        constructor() {
            this.paramsList = document.querySelector('#params-list');
        }

        setParam(params) {
            const newParam = document.createElement('li');
            newParam.innerText = `${JSON.stringify(params)}`;
            this.paramsList.appendChild(newParam);
        }
    }

    paramsForm = new ParamsList();
})()


