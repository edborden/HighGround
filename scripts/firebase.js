/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 function Firebase() {
  this.project = 'https://currenttruck.firebaseio.com/';
}

Firebase.prototype.callGet = function(endpoint) {
  
  var request = {
    
    url: this.project + endpoint + ".json",
    headers: {
      "Content-Type": "application/json"
    },
    method: "GET"
  };
  
  var http = require("http");
  return http.request(request);
};

Firebase.prototype.callPut = function(endpoint, body) {
  
  var request = {
    
    url: this.project + endpoint + ".json",
    headers: {
      "Content-Type": "application/json"
    },
    method: "PUT",
    bodyString: JSON.stringify(body)
  };
  
  var http = require("http");
  return http.request(request);
};			