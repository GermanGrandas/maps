

var styles = [
	    {
	      featureType: "poi",
	      elementType: "labels",
	      stylers: [
	        { visibility: "off" }
	      ]
        },
        {
	      featureType: "poi.medical",
	      elementType: "labels",
	      stylers: [
	        { visibility: "on",color : '#adc9b8' }
	      ]
        } ,
        {
              featureType: 'poi.medical',
              elementType: 'geometry',
              stylers: [{color: 'red'}]
        }
	  ];

google.maps.event.addDomListener(window,"load",()=>{

    var styledMap = new google.maps.StyledMapType(styles, {name: "Styled Map"});
    const userL = new userLocation(()=>{
        const mapOptions = {
            zoom : 15,
            center: {lat :userL.latitude , lng: userL.longitude},
            mapTypeId: 'Styled', //tipo de mapa
            disableDefaultUI: true ,//deshabilitar controles al mapa,
            zoomControl: true,
        } 
        const mapaElement = document.getElementById('map');
        const map = new google.maps.Map(mapaElement,mapOptions);
        map.mapTypes.set('map_style', styledMap);
        map.setMapTypeId('map_style');
    });
});


 