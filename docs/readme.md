This past weekend I had the pleasure of participating in one of the most well-run, well-equipped, and well-intentioned hackathons that I've ever been a part of, <a href="https://pioneerworks.org/hack-red-hook/">Hack Red Hook</a> in Brooklyn, NYC. This was a civic hack aimed at bringing together local stakeholders in the community of Red Hook with technologists and designers from outside the neighborhood. Hosted by <a href="https://pioneerworks.org/about/">Pioneer Works</a>, an organization in support of collaboration, art, and education for the community, about 100 hackers descended on the waterfront to tackle topics such as flood emergency response, lighting infrastructure, crime, and citizen outreach. Using scriptr.io as a backbone, my team (<a href="https://twitter.com/edborden">Ed Borden</a> and <a href="https://twitter.com/AAAndy_An">Andy An</a>, in conjunction with <a href="http://portsidenewyork.org/">PortSide New York</a>) was able to bring home the "Best in Transportation" prize for <a href="http://highground.nyc">HighGround.nyc</a>, a system that manages vehicle evacuation during emergency flooding situations. Read on for more!

<img class="aligncenter size-full wp-image-2552" src="https://blog.scriptr.io/wp-content/uploads/2016/06/c33a726c-c768-45b7-891d-54ac3e741d35.jpg" alt="c33a726c-c768-45b7-891d-54ac3e741d35" width="972" height="547" />

<!--more-->
<h3>Hurricane Sandy Aftermath</h3>
<a href="https://en.wikipedia.org/wiki/Hurricane_Sandy">Hurricane Sandy</a>, the Category 3 hurricane that caused $75B worth of damage in 2012, claimed 230K vehicles during its run at the Eastern seaboard. Most of those vehicles were total losses due to surges of corrosive, sandy saltwater, and according to the New York DMV, 150K of those losses happened in New York. Moreover, the New York Times <a href="http://www.nytimes.com/2013/01/13/nyregion/cars-flooded-by-hurricane-sandy-lure-unwitting-buyers.html">reported</a> that Insurance Auto Auction, a company that delivered 40% of the post-Sandy wrecked vehicles to the salvage market, dispatched 400 tow trucks to NYC before Sandy hit. They also leased huge holding facilities, including one airport tarmac on Long Island shown below post-storm filled with vehicles. Obviously, this points to damage to parked vehicles as a result of flooding as being a <i>known issue</i>.

<img class="aligncenter size-full wp-image-2540" src="https://blog.scriptr.io/wp-content/uploads/2016/06/Capture.jpg" alt="Capture" width="798" height="532" />

For the neighborhood of Red Hook, there's no ambiguity to how storm surges will affect residents. Sandy's effects were <a href="http://portsidenewyork.org/portsidetanke/2013/02/red-hook-sandy-surge-map.html">thoroughly mapped</a> (below) by Jim McMahon, a Red Hook local. FEMA's post-Sandy updated flood risk maps <a href="https://www.dnainfo.com/new-york/20130312/red-hook/fema-shows-expanded-flood-risk-zones-for-red-hook-gowanus">show Red Hook as a big splotch of red</a>. Very little of Red Hook didn't end up underwater, and so residents look to the city not just an evacuation plan for its people, but <i>one for its vehicles as well</i>. This was our goal.

<img class="aligncenter size-full wp-image-2542" src="https://blog.scriptr.io/wp-content/uploads/2016/06/download.jpg" alt="Red Hook surge (F) map" width="750" height="817" />

We spent quite a lot of time understanding this problem and devising a solution in conjunction with Carolina Salguero of <a href="http://portsidenewyork.org">PortSide NewYork</a>, an educational non-profit based on board a historic tanker berthed right across the street from Pioneer Works. PortSide NewYork was <a href="http://portsidenewyork.org/sandy-portside-role/">integral to the area's recovery</a> during the aftermath of the storm and had first-hand experience with this problem set.

See [interview on vimeo](https://vimeo.com/172295342)

<h3>Designing a solution: HighGround.NYC</h3>
<b>Part 1: Designated Emergency Flood Parking areas</b>
The obvious first step is carving out areas of the city that can be co-opted in an emergency for vehicles to park from at-risk areas. This is a step that really requires close collaboration with the city government, but for the purposes of imagining a prototype we thought about "high ground" nearby like the BQE (this highway borders the entire length of Red Hook), side streets in Carroll Gardens and Park Slope, and the biking/walking paths the run through Prospect Park. Lots of space will be needed, so getting creative with placement will be necessary.

<b>Part 2: Notification System</b>
Residents need a way to know when Emergency Flood Parking protocols are in effect. NYC has channels for this type of communication already (NYC 311, etc), but we built in both SMS and on-street notifications for this prototype. Our disco LCD sign (complete with 3D printed enclosure designed and produced by my teammate <a href="http://www.aaandyan.com/">Andy An</a>) was pretty fun to build.

The notification system for our prototype was controlled by a scriptr.io endpoint, which I manually ran during the demo but could also be connected to a button in an administration UI somewhere. This endpoint, the "<a href="https://github.com/edborden/HighGround/blob/master/scripts/switch.js">switch</a>", toggles a value in a Firebase instance (which is <a href="https://github.com/edborden/HighGround/blob/master/scripts/init.js">initialized by another scriptr.io script</a>) which lets all the connected mobile clients know to change over to "flood mode", as well as issues the SMS alerts via Twilio.

See [demo on vimeo](https://vimeo.com/172903901)

<b>Part 3: Real-time sensing of parking availability</b>

When an emergency hits and thousands of people are scrambling to move their vehicle out of harm's way, there will undoubtedly be a major risk of congestion. This is where we envisioned connecting to GE's Current Lamps, one potential way of sensing parking availability in a very flexible way in real-time. These lamps use image processing on feeds coming from embedded cameras inside the lights to sense cars, which would be a great option for providing sensor coverage on a highway or semi-remote bike path. Scriptr.io just released a <a href="https://blog.scriptr.io/implement-smart-cities-applications/">connector library</a> for GE's Predix platform, making an integration into the HighGround.nyc prototype easy.

<b>Part 4: A smart "traffic cop" AI in the cloud</b>
Absolutely critical will be the management of directing vehicles to available spots in an efficient way based on availability, distance of vehicles, vehicles' relationships to each other, and traffic and other hazards. This will require a reactive system, which could be based on scriptr.io's ability to <a href="https://blog.scriptr.io/january-2016-updates/">subscribe microservices</a> to each other or our <a href="https://blog.scriptr.io/using-finite-state-machines-to-build-iot-applications/">Finite State Machines</a>.

<b>Part 5: Mobile application</b>
The end result of all of the infrastructure and backend logic is to ultimately get the right information to the driver. To do that, we built a full-fledged EmberJS application that allows for subscription to the service during a non-emergency state and access to the parking guidance during a flood. Driven by real-time Firebase data (see our blog on s<a href="https://blog.scriptr.io/connect-to-firebase-real-time-storage-from-scriptr/">criptr.io -&gt; Firebase integration</a>) and the group of scriptr.io endpoints that constituted our "API", we were able to demo a live flood scenario to the audience at the end of the event where they were able to view the available parking spaces (which changed in real-time as I manipulated the database) and see their recommended destination.

<img class="aligncenter size-full wp-image-2567" src="https://blog.scriptr.io/wp-content/uploads/2016/06/Untitled.jpg" alt="Untitled" width="796" height="419" />

This was a <i>mass of work</i> for two people to accomplish in just a part of a weekend! This was really only possible due to the pre-baked integrations between scriptr.io and the various services we used, and the ability to instantly spin up and debug Javascript endpoints in the scriptr.io IDE. Deployment and orchestration between the various parts was cake. All of the code is available in our <a href="https://github.com/edborden/HighGround">Github repository</a> and some other info and assets are on our <a href="http://devpost.com/software/highground-nyc">devpost page</a>.

We really hope this project starts the conversation around a real solution for Red Hook! Please contact <a href="mailto:portsidenewyork@gmail.com">PortSide NewYork</a> if you are interested in collaborating further!

<img class="aligncenter size-large wp-image-2574" src="https://blog.scriptr.io/wp-content/uploads/2016/06/IMG_20160626_165519029-1024x576.jpg" alt="IMG_20160626_165519029" width="772" height="434" />

<img class="aligncenter size-large wp-image-2575" src="https://blog.scriptr.io/wp-content/uploads/2016/06/DSC06428-1024x683.jpg" alt="DSC06428" width="772" height="515" />

<img class="aligncenter size-large wp-image-2576" src="https://blog.scriptr.io/wp-content/uploads/2016/06/DSC06429-1024x683.jpg" alt="DSC06429" width="772" height="515" />

<img class="aligncenter size-large wp-image-2577" src="https://blog.scriptr.io/wp-content/uploads/2016/06/DSC06431-1024x683.jpg" alt="DSC06431" width="772" height="515" />

<img class="aligncenter size-large wp-image-2570" src="https://blog.scriptr.io/wp-content/uploads/2016/06/Cl6JA7GWkAAAQpa-887x1024.jpg" alt="Cl6JA7GWkAAAQpa" width="772" height="891" />
