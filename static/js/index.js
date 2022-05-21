if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    var tiltElements = document.querySelectorAll(`[data-tilt]`);
    var mq = window.matchMedia("(max-width: 1025px)");
    if (mq.matches) {
        for (var i = 0, len = tiltElements.length; i < len; i++) {
            tiltElements[i].vanillaTilt.destroy();
        }
    }
} 