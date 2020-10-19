// Creating map object
var myMap = L.map("map", {
    center: [15.5994, 10.6731],
    zoom: 2.25
  });
  
  // Adding tile layer
  L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "mapbox/streets-v11",
    accessToken: API_KEY
  }).addTo(myMap);
  

  var countries = [{
    location: [37.0902, -95.7129],
    name: "United States",
    population: "8,550,405"
  },
  {
    location: [55.3781, -3.4360],
    name: "United Kingdom",
    population: "2,720,546"
  },
  {
    location: [42.5063, -1.5218],
    name: "Andorra",
    population: "2,296,224"
  },
  {
    location: [-38.4161, -63.6167],
    name: "Argentina",
    population: "3,971,883"
  },
  {
    location: [47.5162, 14.5501],
    name: "Austria",
    population: "446,599"
  },
  {
    location: [-25.2744, 133.7751],
    name: "Austrailia",
    population: "446,599"
  },
  {
    location: [50.5039, 4.4699],
    name: "Belgium",
    population: "446,599"
  },
  {
    location: [42.7339, 25.4858],
    name: "Bulgaria",
    population: "446,599"
  },
  {
    location: [-16.2902, -63.5887],
    name: "Bolivia",
    population: "446,599"
  },
  {
    location: [-14.2350, -51.9253],
    name: "Brzail",
    population: "446,599"
  },
  {
    location: [56.1304, -106.3468],
    name: "Canada",
    population: "446,599"
  },
  {
    location: [46.8182, 8.2275],
    name: "Switzerland",
    population: "446,599"
  },
  {
    location: [-35.6751, -71.5430],
    name: "Chile",
    population: "446,599"
  },
  {
    location: [4.5709, -74.2973],
    name: "Colombia",
    population: "446,599"
  },
  {
    location: [9.7489, -83.7534],
    name: "Costa Rica ",
    population: "446,599"
  },
  {
    location: [35.1264, 33.4299],
    name: "Cyprus",
    population: "446,599"
  },
  {
    location: [49.8175, 15.4730],
    name: "Czech Repbulic",
    population: "446,599"
  },
  {
    location: [51.1657, 10.4515],
    name: "Germany",
    population: "446,599"
  },
  {
    location: [56.2639, 9.5018],
    name: "Denmark",
    population: "446,599"
  },
  {
    location: [18.7357, -70.1627],
    name: "Dominican Republic",
    population: "446,599"
  },
  {
    location: [-1.8312, -78.1834],
    name: "Ecuador",
    population: "446,599"
  },
  {
    location: [58.5953, 25.0136],
    name: "Estonia",
    population: "446,599"
  },
  {
    location: [40.4637, -3.7492],
    name: "Spain",
    population: "446,599"
  },
  {
    location: [61.9241, 25.7482],
    name: "Finland",
    population: "446,599"
  },
  {
    location: [46.2276, 2.2137],
    name: "France",
    population: "446,599"
  },
  {
    location: [39.0742, 21.8243],
    name: "Greece",
    population: "446,599"
  },
  {
    location: [15.7835, -90.2308],
    name: "Guatemala",
    population: "446,599"
  },
  {
    location: [22.3193, 114.1694],
    name: "Hong Kong",
    population: "446,599"
  },
  {
    location: [15.2000, -86.2419],
    name: "Honduras",
    population: "446,599"
  },
  {
    location: [47.1625, 19.5033],
    name: "Hungary",
    population: "446,599"
  },
  {
    location: [0.7938, 113.9213],
    name: "Indonesia",
    population: "446,599"
  },
  {
    location: [53.1424, -7.6921],
    name: "Ireland",
    population: "446,599"
  },
  {
    location: [31.0461, 34.8516],
    name: "Isreal",
    population: "446,599"
  },
  {
    location: [20.5937, 78.9629],
    name: "India",
    population: "446,599"
  },
  {
    location: [41.8719, 12.5674],
    name: "Italy",
    population: "446,599"
  },
  {
    location: [64.9631, -19.0208],
    name: "Iceland",
    population: "446,599"
  },
  {
    location: [36.2048, 138.2529],
    name: "Japan",
    population: "446,599"
  },
  {
    location: [55.1694, 23.8813],
    name: "Lithuaniua",
    population: "446,599"
  },
  {
    location: [49.8153, -6.1296],
    name: "Luxembourg",
    population: "446,599"
  },
  {
    location: [56.8796, 24.6032],
    name: "Latvia",
    population: "446,599"
  },
  {
    location: [23.6345, -102.5528],
    name: "Mexico",
    population: "446,599"
  },
  {
    location: [4.2105, 101.9758],
    name: "Malaysia",
    population: "446,599"
  },
  {
    location: [12.8654, -85.2072],
    name: "Nicaragua",
    population: "446,599"
  },
  {
    location: [52.1326, 5.2913],
    name: "Netherlands",
    population: "446,599"
  },
  {
    location: [60.4720, 8.4689],
    name: "Norway",
    population: "446,599"
  },
  {
    location: [-40.9006, 174.8860],
    name: "New Zealand",
    population: "446,599"
  },
  {
    location: [8.5380, -80.7821],
    name: "Panama",
    population: "446,599"
  },
  {
    location: [-9.1900, -75.0152],
    name: "Peru",
    population: "446,599"
  },
  {
    location: [12.8797, 121.7740],
    name: "Philippines",
    population: "446,599"
  },
  {
    location: [51.9194, 19.1451],
    name: "Poland",
    population: "446,599"
  },
  {
    location: [39.3999, -8.2245],
    name: "Portugal",
    population: "446,599"
  },
  {
    location: [-23.4425, -58.4438],
    name: "Paraguay",
    population: "446,599"
  },
  {
    location: [45.9432, 24.9668],
    name: "Romania",
    population: "446,599"
  },
  {
    location: [61.5240, 105.3188],
    name: "Russian Federation",
    population: "446,599"
  },
  {
    location: [60.1282, 16.6435],
    name: "Sweden",
    population: "446,599"
  },
  {
    location: [1.3521, 103.8198],
    name: "Singapore",
    population: "446,599"
  },
  {
    location: [48.6690, 19.6990],
    name: "Slovakia",
    population: "446,599"
  },
  {
    location: [13.7942, -88.8965],
    name: "El Salvador",
    population: "446,599"
  },
  {
    location: [15.8700, 100.9925],
    name: "Thailand",
    population: "446,599"
  },
  {
    location: [38.9637, 35.2433],
    name: "Turkey",
    population: "446,599"
  },
  {
    location: [23.6978, 120.9605],
    name: "Taiwan",
    population: "446,599"
  },
  {
    location: [48.3794, 31.1656],
    name: "Ukraine",
    population: "446,599"
  },
  {
    location: [-32.5228, -55.7658],
    name: "Uruguay",
    population: "446,599"
  },
  {
    location: [14.0583, 108.2772],
    name: "Vietnam",
    population: "446,599"
  },
  {
    location: [-30.5595, 22.9375],
    name: "South Africa",
    population: "446,599"
  }
  ];
//   // Use this link to get the geojson data.
//   var link = "static/data/nyc.geojson";
  
//   // Grabbing our GeoJSON data..
//   d3.json(link, function(data) {
//     // Creating a GeoJSON layer with the retrieved data
//     L.geoJson(data).addTo(myMap);
//   });
  for (var i = 0; i < countries.length; i++) {
    var country = countries[i];
    L.marker(country.location)
  
      //.bindPopup("<h1>" + city.name + "</h1> <hr> <h3>Population " + city.population + "</h3>")
      .bindPopup(`<h1>${country.name}</h1><hr><h3>Population ${country.population}</h3>`)
      .addTo(myMap);
  }
