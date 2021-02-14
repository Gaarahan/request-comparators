const paramsList = document.querySelector('#params-list');

function initPage() {
    stateService.setState('isRecording', false)
    inputForm.initEvent();
}

initPage();
