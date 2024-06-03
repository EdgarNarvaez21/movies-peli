function playPause() {
    var iframes = document.querySelectorAll('.video-container iframe');
    iframes.forEach(function(iframe) {
        var video = iframe.contentWindow.document.querySelector('video');
        if (video) {
            if (video.paused) {
                video.play();
            } else {
                video.pause();
            }
        }
    });
}

function navigateBack() {
    window.history.back();
}

function navigateForward() {
    window.history.forward();
}

function zoomIn() {
    var videoContainers = document.querySelectorAll('.video-container');
    videoContainers.forEach(function(container) {
        container.style.transform = "scale(1.2)";
        container.style.transition = "transform 0.3s ease";
    });
}

function zoomOut() {
    var videoContainers = document.querySelectorAll('.video-container');
    videoContainers.forEach(function(container) {
        container.style.transform = "scale(1)";
        container.style.transition = "transform 0.3s ease";
    });
}
