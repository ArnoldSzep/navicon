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

siteObj.stars.addStar(10);
siteObj.form = (function () {

    function send(formName, phpName) {
        var formElem = document.forms[formName],
            errorElem = formElem.getElementsByClassName('error')[0],
            error = '';

        for (let i = 0; i < formElem.length; i++) {
            formElem[i].classList.remove('error');

            if (formElem[i].value == '' && formElem[i].tagName != 'BUTTON') {
                formElem[i].classList.add('error');
                error = 'Kérjük adjon meg minden adatot!';
            }
        }

        if (error == '') {
            var formData = new FormData(formElem);

            fetch('/php/' + phpName, {
                method: 'POST',
                body: formData
            }).then(function (response) {
                return response.json();
            }).then(function (response) {
                var resError = false;
                console.log(response);
                if (response) {
                    var resError = JSON.parse(response);
                }
                
                if (resError == true) {
                    errorElem.classList.add('active');
                    errorElem.innerHTML = 'Valami nem stimmel!';
                } else {
                    formElem.innerHTML = '<div class="success">Sikeres művelet!</div>';
                    setTimeout(() => {
                        window.location = "/";
                    }, 1000);
                }

            }).catch(function (error) {
                console.log(error);
            });
        } else {
            errorElem.classList.add('active');
            errorElem.innerHTML = error;
        }
    }

    return {
        send: send
    }
}());
/* Google Map */
var mapElem = document.getElementById("map");

if (mapElem) {
    function initMap() {
        var latlng = new google.maps.LatLng(47.487621, 19.075416);

        var options = {
            zoom: 17,
            //scrollwheel: false,
            center: latlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            disableDefaultUI: true,
            zoomControl: true,
            styles: [{ "featureType": "all", "elementType": "all", "stylers": [{ "saturation": -100 }] }]
        };

        var map = new google.maps.Map(document.getElementById("map"), options);

        marker = new google.maps.Marker({
            position: new google.maps.LatLng(47.487621, 19.075416),
            map: map,
            title: "FIKTÍV cég Kft."
        });

        var contentString = "<center><b>FIKTÍV cég Kft.</b> <br> 081 Budapest, Példa utca 1. </center>";

        var infowindow = new google.maps.InfoWindow({
            content: contentString
        });

        google.maps.event.addListener(marker, "click", function () {
            infowindow.open(map, marker);
        });
    }

    function loadGoogleMap() {
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src = "https://maps.googleapis.com/maps/api/js?" + "callback=initMap";
        //script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyBkciKapbZ1bhQW6y5XmiCUx81z_INtDzw&" + "callback=initMap";
        document.body.appendChild(script);
    }

    loadGoogleMap();
}
var loginButton = document.getElementById('login_button');

if (loginButton) {
    loginButton.addEventListener('click', function (ev) {
        ev.preventDefault();

        siteObj.form.send('login_form', 'login.php');
    });
}

var regButton = document.getElementById('register_button');

if (regButton) {
    regButton.addEventListener('click', function (ev) {
        ev.preventDefault();
        
        siteObj.form.send('register_form', 'register.php');
    });

}