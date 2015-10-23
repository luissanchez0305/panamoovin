var initLoc = {lat: 9.056912, lng: -79.511179};

var map;
var originMarker;
var originStop;
var destinationMarker;
var destinationStop;

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
				icon: "http://maps.google.com/mapfiles/markerO.png"
			  });
				
			var closestIndex = NearestCity(startPos.coords.latitude,startPos.coords.longitude);
			//markerBounds.extend(new google.maps.LatLng(parseFloat(DATA_STOPS[closestIndex].lat), parseFloat(DATA_STOPS[closestIndex].lon)));
			  originStop = new google.maps.Marker({
				position: {lat: parseFloat(DATA_STOPS[closestIndex].lat), lng: parseFloat(DATA_STOPS[closestIndex].lon)},
				map: map,
				title: DATA_STOPS[closestIndex].name,
				icon: 'http://www.google.com/mapfiles/dd-start.png'
			  });
				 //map.fitBounds(markerBounds);
				 ResetBounds();
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
							icon: "http://maps.google.com/mapfiles/markerD.png"
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
							icon: 'http://www.google.com/mapfiles/dd-end.png'
						  });
					}
					
					ResetBounds();
	
				});
	}