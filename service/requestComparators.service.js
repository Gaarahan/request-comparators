let requestComparatorsService;

(() => {
    class RequestComparatorsService {
        startRecording() {
            chrome.devtools.network.onRequestFinished.addListener(({ request }) => {
                const { method, url } = request;
            })
        }

        stopRecording() {

        }
    }
    requestComparatorsService = new RequestComparatorsService();
})()
