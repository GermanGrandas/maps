"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var userLocation = function userLocation(callback) {
    var _this = this;

    _classCallCheck(this, userLocation);

    if (navigator.geolocation) {
        //si hay geolocalización
        navigator.geolocation.getCurrentPosition(function (localizacion) {
            //retorna la longitud y latitud del usuario
            //console.log("longitud: "+localizacion.coords.longitude);
            //console.log("latitud: "+localizacion.coords.latitude);
            _this.latitude = localizacion.coords.latitude;
            _this.longitude = localizacion.coords.longitude;
            callback();
        });
    } else {
        alert("no geolocalización");
    }
};
