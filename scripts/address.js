/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 var lat = request.parameters.lat;
var lng = request.parameters.lng;

var url = 'https://api.pitneybowes.com/location-intelligence/geocode-service/b1/transient/premium/reverseGeocode?x=' + lng + '&y=' + lat + '&coordSysName=EPSG:4326&distance=150&distanceUnits=METERS';

var options = {
  url: url,
  method: 'GET',
  headers: {
    'Authorization': 'Bearer jlAM63FXqkkuiC5uhfMfPCmYtHhc6xmg'
  }
}

var http = require('http');
var result = http.request(options);
console.log(url);
console.log(JSON.stringify(result));			