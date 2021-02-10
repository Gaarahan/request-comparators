const paramsList = document.querySelector('#params-list');

function initPage() {
    requestComparatorsService.setState('isRecording', false)
    inputForm.initEvent();
}

initPage();
