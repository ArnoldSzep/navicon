
siteObj.stpSlider = (function () {
    var rootElem = document.getElementById('stp_slider'),
        nextElem = rootElem.getElementsByClassName('stp_slider-next')[0],
        prevElem = rootElem.getElementsByClassName('stp_slider-prev')[0],
        slideElems = rootElem.getElementsByClassName('stp_slider-slide'),
        innerElem = rootElem.getElementsByClassName('stp_slider-inner')[0],
        max = slideElems.length,
        index = 1;

    function next() {
        if (index < max) {
            index++;
        } else {
            index = 1;
        }
        
        innerElem.style.transform = 'translateX(-' + ((index - 1) * 100) + '%)';
    }

    function prev() {
        if (index > 1) {
            index--;
        } else {
            index = max;
        }

        innerElem.style.transform = 'translateX(-' + ((index - 1) * 100) + '%)';
    }

    nextElem.addEventListener('click', function () {
        clearTimeout(autoTimer);
        next();
    });

    prevElem.addEventListener('click', function () {
        clearTimeout(autoTimer);
        prev();
    });

    var autoTimer = setInterval(function () {
        next();
    }, 3000);

})();