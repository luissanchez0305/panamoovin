var initLoc = {lat: 9.056912, lng: -79.511179};

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