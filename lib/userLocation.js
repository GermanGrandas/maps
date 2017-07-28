class userLocation{
    constructor(callback){
         if(navigator.geolocation){
        //si hay geolocalización
        navigator.geolocation.getCurrentPosition((localizacion)=> {
            //retorna la longitud y latitud del usuario
            //console.log("longitud: "+localizacion.coords.longitude);
            //console.log("latitud: "+localizacion.coords.latitude);
            this.latitude = localizacion.coords.latitude;
            this.longitude = localizacion.coords.longitude;
            callback();
        });
    }else{
        alert("no geolocalización");
        }
    }
}