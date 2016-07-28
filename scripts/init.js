/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 // init phones
storage.global.phones = "2012130688";

// init firebase
firebase = require('modules/firebase/firebaseclient');
firebase = new firebase.Firebase();

// init status
var status = { flood: false };
firebase.postData('statuses', status);

// init spots
spots = [
  {
    lat: 40.679319,
    lng: -74.004157,
    available: true
  },
  {
    lat: 40.679271,
    lng: -74.004119,
    available: true
  },
  {
    lat: 40.679232,
    lng: -74.004079,
    available: true
  },
  {
  lat: 40.676751,
  lng: -74.002916,
    available: true
  },
  {
  lat: 40.677174,
  lng: -74.003720,
    available: true
  },
  {
  lat: 40.677231,
  lng: -74.003913,
    available: true
  },
  {
  lat: 40.677772,
  lng: -74.003275,
    available: true
  },
  {
  lat: 40.682694,
  lng: -74.005480,
    available: true
  },
  {
  lat: 40.682548,
  lng: -74.005383,
    available: true
  },
  {
  lat: 40.682060,
  lng: -74.005061,
    available: true
  },
  {
  lat: 40.669012,
  lng: -73.977107,
    available: true
  },
  {
  lat: 40.669289,
  lng: -73.977708,
    available: true
  },
  {
  lat: 40.669684,
  lng: -73.978475,
    available: true
  },
  {
  lat: 40.669846,
  lng: -73.978813,
    available: true
  },
  {
  lat: 40.669846,
  lng: -73.978813,
    available: true
  },
  {
  lat: 40.669692,
  lng: -73.978717,
    available: true
  },
  {
  lat: 40.669163,
  lng: -73.979189,
    available: true
  },
  {
  lat: 40.669004,
  lng: -73.978813,
    available: true
  },
  {
  lat: 40.668780,
  lng: -73.978432,
    available: true
  },
  {
  lat: 40.668605,
  lng: -73.978019,
    available: true
  },
  {
  lat: 40.668080,
  lng: -73.976963,
    available: true
  },
  {
  lat: 40.667881,
  lng: -73.976533,
    available: true
  },
  {
  lat: 40.667454,
  lng: -73.977402,
    available: true
  },
  {
  lat: 40.668548,
  lng: -73.979661,
    available: true
  },
  {
  lat: 40.670633,
  lng: -73.978926,
    available: true
  },
  {
  lat: 40.670633,
  lng: -73.978926,
    available: true
  },
  {
  lat: 40.670783,
  lng: -73.979242,
    available: true
  },
  {
  lat: 40.671273,
  lng: -73.980063,
    available: true
  },
  {
  lat: 40.671032,
  lng: -73.981270,
    available: true
  },
  {
  lat: 40.670842,
  lng: -73.980873,
    available: true
  },
  {
  lat: 40.669804,
  lng: -73.980594,
    available: true
  },
  {
  lat: 40.669576,
  lng: -73.980229,
    available: true
  },
  {
  lat: 40.668995,
  lng: -73.980546,
    available: true
  },
  {
  lat: 40.668677,
  lng: -73.981662,
    available: true
  },
  {
  lat: 40.668414,
  lng: -73.981158,
    available: true
  }
];

for (i = 0; i < spots.length; i++) {
  firebase.postData("spots", spots[i]);
}			
