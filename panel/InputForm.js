let inputForm;
(() => {
    class InputForm {
        constructor() {
            this.urlInput = document.querySelector('#url-input');
            this.startBtn = document.querySelector('#start-btn');
        }

        initEvent() {
            this.startBtn.addEventListener('click', () => {
                let value = this.urlInput.value.trim();
                if (!value) {
                    return this.setErrorStyle();
                }

                const isRecording = stateService.getState('isRecording');

                stateService.setState('isRecording', !isRecording);
                this.startBtn.innerText = isRecording ? 'Start' : 'Stop';

                if (!isRecording) {
                    stateService.setState('url', this.urlInput.value);
                    requestComparatorsService.startRecording();
                }
            })

            this.urlInput.addEventListener('input', () => {
                this.removeErrorStyle();
            })
        }

        setErrorStyle() {
            this.urlInput.focus();
            this.urlInput.classList.add('error')
        }

        removeErrorStyle() {
            this.urlInput.classList.remove('error')
        }

        get url() {
            return this.url;
        }
    }

    inputForm = new InputForm();
})()


