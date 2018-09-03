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