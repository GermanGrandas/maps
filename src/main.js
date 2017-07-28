"use strict";

var styles = [{
    featureType: "poi",
    elementType: "labels",
    stylers: [{ visibility: "off" }]
}, {
    featureType: "poi.medical",
    elementType: "labels",
    stylers: [{ visibility: "on", color: '#adc9b8' }]
}, {
    featureType: 'poi.medical',
    elementType: 'geometry',
    stylers: [{ color: 'red' }]
}];

google.maps.event.addDomListener(window, "load", function () {

    var styledMap = new google.maps.StyledMapType(styles, { name: "Styled Map" });
    var userL = new userLocation(function () {
        var mapOptions = {
            zoom: 15,
            center: { lat: userL.latitude, lng: userL.longitude },
            mapTypeId: 'Styled', //tipo de mapa
            disableDefaultUI: true, //deshabilitar controles al mapa,
            zoomControl: true
        };
        var mapaElement = document.getElementById('map');
        var map = new google.maps.Map(mapaElement, mapOptions);
        map.mapTypes.set('map_style', styledMap);
        map.setMapTypeId('map_style');
    });
});
