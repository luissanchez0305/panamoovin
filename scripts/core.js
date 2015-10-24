var initLoc = {lat: 9.056912, lng: -79.511179};

var map;
var originMarker;
var originStop;
var destinationMarker;
var destinationStop;

var directionsService;
var directionsService2;
var directionsDisplay;
var directionsDisplay2;

 // Convert Degress to Radians
    function Deg2Rad( deg ) {
       return deg * Math.PI / 180;
    }

    function PythagorasEquirectangular( lat1, lon1, lat2, lon2 )
    {
    lat1 = Deg2Rad(lat1);
    lat2 = Deg2Rad(lat2);
    lon1 = Deg2Rad(lon1);
    lon2 = Deg2Rad(lon2);
    var R = 6371; // km
    var x = (lon2-lon1) * Math.cos((lat1+lat2)/2);
    var y = (lat2-lat1);
    var d = Math.sqrt(x*x + y*y) * R;
    return d;
    }

    //var lat=initLoc.lat; // user's latitude
    //var lon=initLoc.lng; // user's longitude
   

    function NearestCity( latitude, longitude )
    {
        var mindif=99999;
        var closest;

        for (index = 0; index < DATA_STOPS.length; ++index) {
            var dif =  PythagorasEquirectangular( latitude, longitude, DATA_STOPS[ index ].lat, DATA_STOPS[ index ].lon );
            if ( dif < mindif )
            {
                closest=index;
                mindif = dif;
            }
        }

        // echo the nearest city
        console.log('La parada mas cercana es : ' + DATA_STOPS[closest].name+ " a " + mindif.toFixed(1) +" km");
		
		return closest;
    }
	
	function ResetBounds()
	{
		var markerBounds = new google.maps.LatLngBounds();
		
		if(originMarker)
		markerBounds.extend(originMarker.position);
		
		if(originStop)
		markerBounds.extend(originStop.position);
		
		if(destinationMarker)
		markerBounds.extend(destinationMarker.position);
		
		if(destinationStop)
		markerBounds.extend(destinationStop.position);
		
		map.fitBounds(markerBounds);
	}
	
	function InitMap()
	{	
		//var markerBounds = new google.maps.LatLngBounds();
			//Start map
			  var mapOptions = {
				center: new google.maps.LatLng(9.056912, -79.511179),
				zoom: 10,
				mapTypeId: google.maps.MapTypeId.ROADMAP
			};
			map = new google.maps.Map(document.getElementById("googlemap"), mapOptions);
			
			directionsService = new google.maps.DirectionsService;
			directionsService2 = new google.maps.DirectionsService;
			directionsDisplay = new google.maps.DirectionsRenderer({suppressMarkers: true, preserveViewport : true});
			directionsDisplay2 = new google.maps.DirectionsRenderer({suppressMarkers: true, preserveViewport : true});
			directionsDisplay.setMap(map);
			directionsDisplay2.setMap(map);
			
			google.maps.event.addListenerOnce(map, 'idle', function(){
				// do something only the first time the map is loaded
				navigator.geolocation.getCurrentPosition(geoSuccess, geoError, geoOptions);
			});
			
			  var startPos;
			  var geoOptions = {
				enableHighAccuracy: true
			  }
			  
			  var geoSuccess = function(position) {
			 
				startPos = position;
				console.log(startPos.coords.latitude);
				console.log(startPos.coords.longitude);
				//markerBounds.extend(new google.maps.LatLng(startPos.coords.latitude, startPos.coords.longitude));
				
			originMarker = new google.maps.Marker({
				position: {lat: startPos.coords.latitude, lng: startPos.coords.longitude},
				map: map,
				title: 'Here',
				icon: "http://www.megacorestudio.com/icons_panamoovin/walk.png"
			  });
				
			var closestIndex = NearestCity(startPos.coords.latitude,startPos.coords.longitude);
			//markerBounds.extend(new google.maps.LatLng(parseFloat(DATA_STOPS[closestIndex].lat), parseFloat(DATA_STOPS[closestIndex].lon)));
			  originStop = new google.maps.Marker({
				position: {lat: parseFloat(DATA_STOPS[closestIndex].lat), lng: parseFloat(DATA_STOPS[closestIndex].lon)},
				map: map,
				title: DATA_STOPS[closestIndex].name,
				icon: 'http://www.megacorestudio.com/icons_panamoovin/stop.png'
			  });
				 //map.fitBounds(markerBounds);
				 ResetBounds();
				 
				 calculateAndDisplayRoute(directionsService,directionsDisplay,originMarker.position,originStop.position);
			  };
			  var geoError = function(error) {
			 
				console.log('Error occurred. Error code: ' + error.code);
				// error.code can be:
				//   0: unknown error
				//   1: permission denied
				//   2: position unavailable (error response from location provider)
				//   3: timed out
			  };
			  
			   google.maps.event.addListener(map, "click", function(event)
				{
					if(destinationMarker)
					{
						destinationMarker.setPosition(event.latLng);
					}
					else
					{
						destinationMarker = new google.maps.Marker({
							position: event.latLng,
							map: map,
							title: 'Destino',
							icon: "http://www.megacorestudio.com/icons_panamoovin/finish.png"
						  });
					}
					
					var closestIndex = NearestCity(event.latLng.lat(),event.latLng.lng());
					var LatLng = {lat: parseFloat(DATA_STOPS[closestIndex].lat), lng: parseFloat(DATA_STOPS[closestIndex].lon)};
					
					if(destinationStop)
					{
						destinationStop.setPosition(LatLng);
					}
					else
					{
						destinationStop = new google.maps.Marker({
							position: LatLng,
							map: map,
							title: DATA_STOPS[closestIndex].name,
							icon: 'http://www.megacorestudio.com/icons_panamoovin/stop.png'
						  });
					}
					
					ResetBounds();
					
					calculateAndDisplayRoute(directionsService2,directionsDisplay2,destinationStop.position,destinationMarker.position);
					GetWeatherData(LatLng.lat,LatLng.lng);
				});
	}
	
	function calculateAndDisplayRoute(ds, dd, o, f) {
		  ds.route({
			origin: o,
			destination: f,
			travelMode: google.maps.TravelMode.WALKING 
		  }, function(response, status) {
			if (status === google.maps.DirectionsStatus.OK) {
			  dd.setDirections(response);
			  computeTotalDistance(response);
			} else {
			  console.log('Directions request failed due to ' + status);
			}
		  });
}

function computeTotalDistance(result) {
  var total = 0;
  var myroute = result.routes[0];
  for (var i = 0; i < myroute.legs.length; i++) {
    total += myroute.legs[i].distance.value;
  }
  total = total / 1000;
  console.log('te tocará caminar ' + total + ' km');
}

function GetWeatherData(lat,lng)
{
	$.getJSON("http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lng+"&APPID=8892bcb548e278178e35042773e08922", function( data ) {
	  console.log('El clima en el destino se ve ' + data.weather[0].id + ' '+ data.weather[0].main + ' ' + data.weather[0].description);
	});
}