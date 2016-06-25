/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=anonymous 
  **/ 
 var package = request.body;
id = package.id;
endpoint = "locations/" + id;

firebase = require('firebase');
firebase = new firebase.Firebase();
fireStore = JSON.parse(firebase.callGet(endpoint).body);

if (fireStore === undefined || fireStore === null) {
  fireStore = {
    lat: package.lat,
    lng: package.lng,
    pedestrians_count: 0,
    spots_count: 0
  };
  firebase.callPut(endpoint, fireStore);
}

fireStore.lat = package.lat;
fireStore.lng = package.lng;
fireStore.pedestrians_count += package.pedestrians_increment_count;
fireStore.pedestrians_count -= package.pedestrians_decrement_count;
fireStore.spots_count += package.spots_increment_count;
fireStore.spots_count -= package.spots_decrement_count;

firebase.callPut(endpoint, fireStore);
return fireStore;			