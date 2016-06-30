/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 // init firebase
var firebase = require('modules/firebase/firebaseclient');
firebase = new firebase.Firebase();

var statuses = firebase.getData('statuses');
var keys = Object.keys(statuses);
var key = keys[0];
var status = statuses[key];
var flood = status.flood;
var twilio = require('./twilio');
twilio = new twilio.Twilio();

if ( flood ) {
  firebase.putData('statuses/' + key + '/flood', false);
  twilio.send("off", "+19739356353");
} else {
  twilio.send("on", "+19739356353");
  var phones = storage.global.phones.split(',');
  for (i = 0; i < phones.length; i++) {
  	twilio.send("Emergency Flood Parking in effect. Visit http://highground.nyc now for real-time parking guidance.", phones[i]);
  }
  firebase.putData('statuses/' + key + '/flood', true);
}			