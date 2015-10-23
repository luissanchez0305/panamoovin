// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints,
// and then run "window.location.reload()" in the JavaScript Console.
(function () {
    "use strict";

    document.addEventListener( 'deviceready', onDeviceReady.bind( this ), false );

    function onDeviceReady() {
        // Handle the Cordova pause and resume events
        document.addEventListener( 'pause', onPause.bind( this ), false );
        document.addEventListener( 'resume', onResume.bind( this ), false );

        // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.
		//Get current position
		 navigator.geolocation.getCurrentPosition(onSuccessGPS, onErrorGPS);
    };

    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    };

    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
    };
	
	function onSuccessGPS(position) {
		var lat = position.coords.latitude;
		var lng = position.coords.longitude;
        var acu = position.coords.accuracy;
        
		var closestIndex = NearestCity(lat,lng);
			  var marker = new google.maps.Marker({
				position: {lat: parseFloat(DATA_STOPS[closestIndex].lat), lng: parseFloat(DATA_STOPS[closestIndex].lon)},
				map: map,
				title: DATA_STOPS[closestIndex].name
			  });
	};
	
	function onErrorGPS(err) {
		alert('No se pudo obtener la posicion. ERROR(' + err.code + '): ' + err.message);
	};
	
	function calculateClosestStop(lat,lng) {
		
	};
	
} )();