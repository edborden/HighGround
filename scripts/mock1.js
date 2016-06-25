/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 body = {
  id: "x",
  pedestrians_increment_count: 1,
  pedestrians_decrement_count: 0,
  spots_increment_count: 1,
  spots_decrement_count: 0
};

bodyString = JSON.stringify(body);

headers = {
  'Authorization': 'bearer RDU0OTQ3RDJDNTpzY3JpcHRyOkVDQzBDNURGNDVCMUZGNDFCMTMxNDAwMUFBRkNFMTcx',
  'Content-Type': 'application/json'
};

request = {
  url: 'https://api.scriptrapps.io/update',
  method: 'POST',
  headers: headers,
  bodyString: bodyString
};

var http = require("http");
http.request(request);			