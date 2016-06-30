/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=anonymous 
  **/ 
 var log = require("log");
log.setLevel("DEBUG");
log.debug(request.rawBody);
storage.global.phones += "," + request.rawBody;
return storage.global.phones;			