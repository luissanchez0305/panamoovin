var initLoc = {lat: 9.056912, lng: -79.511179};

var map;
var originMarker;
var originStop;
var originStopId;
var destinationMarker;
var destinationStop;
var destinationStopId;

var directionsService;
var directionsService2;
var directionsDisplay;
var directionsDisplay2;

Array.prototype.where = function (filter) {
            switch (typeof filter) {
                case 'function':
                    return $.grep(that, filter);

                case 'object':
                    var filtered = this;
                    for (var prop in filter) {
                        if (!filter.hasOwnProperty(prop)) {
                            continue; // ignore inherited properties
                        }
                        filtered = $.grep(filtered, function (item) {
                            return item[prop] === filter[prop];
                        });
                    }
                    return filtered.slice(0); // copy the array
                    // (in case of empty object filter)

                default:
                    throw new TypeError('func must be either a' +
                        'function or an object of properties and values to filter by');
            }
        };

        Array.prototype.firstOrDefault = function (func) {
            return this.where(func)[0] || null;
        };

        function unique(array) {
            return array.filter(function (el, index, arr) {
                return index == arr.indexOf(el);
            });
        }

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
			originStopId = parseFloat(DATA_STOPS[closestIndex].id);
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
					destinationStopId = parseFloat(DATA_STOPS[closestIndex].id);
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
					//CalculateRoutes(originStopId, destinationStopId);
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

function CalculateRoutes()
{
	if(!originStopId)
	{
		alert('Estamos calculando si posición actual, por favor espere...');
		return;
	}

	if(!destinationStopId)
	{
		alert('Por favor indique su destino. Puede marcar el destino presionando la ubicación directamente en el mapa.');
		return;
	}
	
	from = originStopId;
	to = destinationStopId;
	
	$.getJSON("http://54.152.23.23/main/?from="+ from +"&to="+to, function( data ) {
	  if(data)
	  {
		var scope = angular.element('#routeOptions').scope();
		scope.$apply(function() {
		//scope.object.data = value;
		scope.groups = [];
		console.log(data.length);
		for(i=0; i < data.length; i++){
			name = '';
			for(j = 0; j < data[i].route_names.length; j++){
				name += data[i].route_names[j] + ' ';
			}
			scope.groups[0] = {
				name: 'Ruta ('+name +')',
				total: data[i].total,
				transfer: data[i].transfer > 1 ? "Trasbordo" : "Directo",
				items: []
			};
		}
		  for (var i = 0; i < data.length; i++) {			
			  scope.groups[0].items.push(data[i].stop.name);
			}
		  });
		}
	});
	
	menu.setMainPage('steptwo.html', {closeMenu: true})
}

function GetWeatherData(lat,lng)
{
	$.getJSON("http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lng+"&APPID=8892bcb548e278178e35042773e08922", function( data ) {
	  console.log('El clima en el destino se ve ' + data.weather[0].id + ' '+ data.weather[0].main + ' ' + data.weather[0].description);
	});
}

function GetNodes()
{
	$.getJSON("http://test-panatrans.herokuapp.com/v1/trips/1", function( data ) {
	  if(data.status == 'success')
	  {
	  console.log(data);
		var nodes = '';//a:{b:3,c:1}
		$.each(data.data.stop_sequences, function (index, ele) {
            nodes = nodes + ele.stop.id + ':' + 1 + ','   
        });
		nodes = nodes.substring(0, nodes.length - 1);
		var route = data.data.route.id + ':{'+ nodes +'}';
		
		console.log(route);
	  }
	});
	
}

function GetTripDetails(trip,from,to)
{
	//http://54.152.23.23/main/trip.php?trip=73&from=147&to=145
	$.getJSON("http://54.152.23.23/main/trip.php?trip=73&from=147&to=145", function( data ) {
	  if(data)
	  {
		var scope = angular.element('#routeDetails').scope();
		scope.$apply(function() {
		//scope.object.data = value;
		scope.groups = [];
		scope.groups[0] = {
			  name: 'Ruta ('+data.length +')',
			  items: []
			};
		  for (var i = 0; i < data.length; i++) {			
			  scope.groups[0].items.push(data[i].stop.name);
			}
		  });
		}
	});
}

function UpdateRouteList()
{
	var scope = angular.element('#routeDetails').scope();
	//wrap changes in an apply call to make sure view and model are consistent
	scope.$apply(function() {
		//scope.object.data = value;
		scope.groups = [];
		  for (var i = 0; i < 2; i++) {
			scope.groups[i] = {
			  name: i,
			  items: []
			};
			for (var j = 0; j < 2; j++) {
			  scope.groups[i].items.push(i + '-' + j);
			}
		  }
	});
}