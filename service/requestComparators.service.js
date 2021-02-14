let requestComparatorsService;

(() => {

    class RequestComparatorsService {
        startRecording() {
            stateService.setState('isRecording', true);
            chrome.devtools.network.onRequestFinished.addListener(this.recordingHandle)
        }

        stopRecording() {
            stateService.setState('isRecording', false);
            chrome.devtools.network.onRequestFinished.removeListener(this.recordingHandle);
        }

        recordingHandle({ request }) {
            let { url } = request;
            const indexOfQuery = url.indexOf('?');
            if (indexOfQuery >= 0) {
                url = url.slice(0, indexOfQuery)
            }

            if (url === stateService.getState('url')) {
                const params = this.resolveParams(request);
                console.log(params);
            }
        }

        resolveParams(request) {
            // TODO 除了GET， POST
            if (request.method === 'GET') {
                return request.queryString;
            } else if (request.method === 'POST') {
                // TODO 处理 application/json 之外的类型
                if (request.postData.mimeType === 'application/json; charset=UTF-8') {
                    return JSON.parse(request.postData.text);
                }
            }
        }
    }
    requestComparatorsService = new RequestComparatorsService();
})()
