/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 trucks = [
  {
    id: 0,
    phone_number: 2014869434,
    type: "ice_cream"
  },
  {
    id: 1,
    phone_number: 2310956563,
    type: "food"
  }
];
storage.global.trucks = JSON.stringify(trucks);

firebase = require('firebase');
firebase = new firebase.Firebase();
firebase.callPut("locations", {
  x: {
    lat: 40.8643221,
    lng: -73.843382,
    pedestrians_count: 0,
    spots_count: 0
  },
  y: {
    lat: 40.7643221,
    lng: -73.743382,
    pedestrians_count: 0,
    spots_count: 0
  },
  z: {
    lat: 40.9643221,
    lng: -73.943382,
    pedestrians_count: 0,
    spots_count: 0
  }
});

return storage.global;			