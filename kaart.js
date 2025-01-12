// Set up the map and center it on specific coordinates
const map = L.map("map").setView([51.02884270593729, 4.355329104017556], 7) // Latitude, Longitude, Zoom level

// Add OpenStreetMap tiles
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution: "© OpenStreetMap contributors",
}).addTo(map)

// HDG
gevangenisantwerpen = L.marker([51.213222371225605, 4.40109329539191]).addTo(
  map,
)
gevangenisantwerpen.bindPopup(
  "<b>Gevangenis Antwerpen</b><br><br>Begijnenstraat 42, 2000 Antwerpen<br><a href='mailto: zegervangarsse@gmail.com'>zegervangarsse@gmail.com</a>",
)

Circle = L.circle([5.508, -0.11], {
  color: "red",
  fillColor: "#f03",
  fillOpacity: 0.5,
  radius: 200,
}).addTo(map)
circle2.bindPopup(
  "Justitiehuis Dendermonde<br><a href='mailto: zegervangarsse@gmail.com'>Test</a>",
)
