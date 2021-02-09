const urlInput = document.querySelector('#url-input');
const startBtn = document.querySelector('#start-btn');
const paramsList = document.querySelector('#params-list');

const stateService = new StateService();

function initPage() {
    stateService.setState('isRecording', false)

    startBtn.addEventListener('click', () => {
        const isRecording = stateService.getState('isRecording');

        startBtn.innerText = isRecording ? 'Stop' : 'Start';
        stateService.setState('isRecording', !isRecording);
    })
}

initPage();
