const { runMain } = require("module");

function download() {
    const xhr = new XMLHttpRequest();
    xhr.open("get", "http://127.0.0.1.:5501/fetch.mp4")
    xhr.onprogress = function ({ Loaded }) {
        const max = (+xhr.getResponseHeader('content-length') / 1000000.toFixed(0);
        const current = (Loaded / 1000000).toFixed;
        data.innerText = `${current} / ${max}`
    }
    xhr.send();
}

run.onclick = download;