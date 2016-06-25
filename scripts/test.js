/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 pitneybowes = require('pitneybowes');
pitneybowes = new pitneybowes.PitneyBowes();
response = pitneybowes.getDemos();
return response;			