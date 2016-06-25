/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 
 function Twilio() {
  this.accountId = 'AC62cde07c9dde0afe4c44938fcef89f14';
  this.secret = '14b1651bb14408b378095c32f529f691';
}

var http = require('http');

Twilio.prototype.send = function(location, type, hilo, percent, toNumber){
  var location = location || 'Rainbow Park';
  var type = type || 'ice cream';
  var hilo = hilo || 'lower';
  var percent = percent || '10';
  var toNumber = toNumber || '+12014869434';
  var post_data = {
    To: '+12014869434',
    From: '+19712701550',
    Body: 'Go to ' + location + 'with your ' + type + ' and ' + hilo + ' the price by '+ percent + '%'
  };
  var options = {
    url: 'https://api.twilio.com/2010-04-01/Accounts/AC62cde07c9dde0afe4c44938fcef89f14/Messages.json',
    authCreds: [this.accountId, this.secret],
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    params: post_data
  };

  return http.request(options);
}			