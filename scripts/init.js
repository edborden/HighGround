/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 firebase = require('modules/firebase/firebaseclient');
firebase = new firebase.Firebase();

spots = [
  {
    lat: 40.679319,
    lng: -74.004157
  },
  {
    lat: 40.679271,
    lng: -74.004119
  },
  {
    lat: 40.679232,
    lng: -74.004079
  }
];

for (i = 0; i < spots.length; i++) {
  firebase.postData("spots", spots[i]);
}
                    
spots = JSON.stringify(spots);
return spots;			