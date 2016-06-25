/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 
 function PitneyBowes() {
  this.accountId = '1bmBhO85Hbvb1pAJ6zfu7KHuLh2IKRB3';
  this.secret = 'hGOTnkGAVgxVttPo';
  this.token = 'VXnDAAEoOJFY1R58DgvkW67q5pDx';
}

var http = require('http');

PitneyBowes.prototype.getDemos = function(lat, long){
  var lat = lat || '32.707003';
  var long = long || '-117.155778';
  var url = 'https://api.pitneybowes.com'
    + '/location-intelligence/geolife/v1/demographics/bylocation'
    + '?latitude=' + lat + '&longitude=' + long;
  var options = {
    url: url,
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ' + this.token
    }
  };

  return http.request(options);
}

PitneyBowes.prototype.getLatLong = function(address){
  var address = address || '1640 Tenth Ave, San Diego, CA 92101';
  var url = 'https://api.pitneybowes.com' +
    + 'location-intelligence/'
    + 'geocode-service/b1/transient/premium/geocode'
    + '?mainAddress=' + address + '&matchMode=Standard&fallbackGeo=true'
    + '&fallbackPostal=true&maxCands=1&streetOffset=7&streetOffsetUnits=METERS'
    + '&cornerOffset=7&cornerOffsetUnits=METERS';
  var options = {
    url: url,
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ' + this.token
    }
  };

  return http.request(options);
}

PitneyBowes.prototype.getAddress = function(lat, long){
  var lat = lat || '32.707003';
  var long = long || '-117.155778';
  var url = 'https://api.pitneybowes.com' +
    + '/location-intelligence/geocode-service/b1/transient/premium/'
    + 'reverseGeocode?x=' + long + '&y=' + lat + '&coordSysName=EPSG:4326' +
    '&distance=150&distanceUnits=METERS';
  var options = {
    url: url,
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ' + this.token
    }
  };

  return http.request(options);
}			