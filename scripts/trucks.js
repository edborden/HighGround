/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 
 var package = request.body;
id = package.id;

firebase = require('firebase');
firebase = new firebase.Firebase();
test = firebase.callGet("locations");

if (storage.global.locations[id] === undefined) {
  storage.global.locations[id] = {
    pedestrians_count: 0,
    spots_count: 0
  };
}

storage.global.locations[id].pedestrians_count = storage.global.locations[id].pedestrians_count + package.pedestrians_increment_count;
storage.global.locations[id].pedestrians_count -= package.pedestrians_decrement_count;
storage.global.locations[id].spots_count += package.spots_increment_count;
storage.global.locations[id].spots_count -= package.spots_decrement_count;

return storage.global.locations[id];			