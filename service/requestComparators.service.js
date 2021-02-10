let requestComparatorsService;

(() => {
    class RequestComparatorsService {
        startRecording() {
            chrome.devtools.network
        }

        stopRecording() {

        }
    }
    requestComparatorsService = new RequestComparatorsService();
})()
