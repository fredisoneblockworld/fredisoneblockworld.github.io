window.onload = function () {
    if (navigator.appVersion.indexOf("Win") != -1) {
        document.getElementById("download-btn").innerHTML = '<i class="fab fa-windows"></i>' + 'Download for Windows';
    }

    if (navigator.appVersion.indexOf("Mac") != -1) {
        document.getElementById("download-btn").innerHTML = '<i class="fab fa-apple"></i>' + 'Download for MacOS';
    }

    if (navigator.appVersion.indexOf("Mac") != -1) {
        document.getElementById("download-btn").innerHTML = '<i class="fab fa-linux"></i>' + 'Download for Linux';
    }

    if (navigator.appVersion.indexOf("android") != -1) {
        document.getElementById("download-btn").innerHTML = '<i class="fab fa-android"></i>' + 'Download';
    }
}