var siteObj = {};

siteObj.stars = (function () {
    var mnHeader = document.getElementById('mn_header');

    function getRandom(min, max) {
        return Math.floor(Math.random() * (Math.floor(max) - Math.floor(min)) + Math.floor(min));
    }

    function stars() {
        var starElem = document.createElement('div');
        starElem.classList.add('header_star');
        starElem.style.top = getRandom(1, 90) + '%';
        starElem.style.left = getRandom(1, 98) + '%';
        starElem.style.width = getRandom(10, 20) + 'px';

        return starElem;
    }

    function addStar(count) {
        for (var i = 0; i < count; i++) {
            mnHeader.appendChild(stars());
        }
    }

    return {
        addStar: addStar 
    } 
})();

siteObj.stars.addStar(40);

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