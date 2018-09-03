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