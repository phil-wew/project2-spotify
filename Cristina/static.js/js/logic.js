/// Create a map object
var myMap = L.map("map", {
    center: [37.09, -95.71],
    zoom: 5
  });
  
  L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "mapbox/streets-v11",
    accessToken: API_Key
  }).addTo(myMap);

  // Country Data
var countries = [
    {
        name: "Africa",
        location: [11.5024, 17.7578],
      },
      {
        name: "Argentina",
        location: [-34.9964, -64.9673],
      },
      {
        name: "Australia",
        location: [-24.7761, 134.7550],
      },
      {
        name: "Belgium",
        location: [50.6402, 4.6667],
      },
      {
        name: "Bolivia",
        location: [-17.0568, -64.9912],
      },
      {
        name: "Brazil",
        location: [14.2350, 51.9253],
      },
      {
        name: "Canada",
        location: [56.1304, -106.3468],
      },
    {
      name: "Chile",
      location: [35.6751, 71.5430],
    },
    {
      name: "Colombia",
      location: [4.5709, 74.2973],
    },
    {
      name: "France",
      location: [46.2276, 2.2137],
    },
    {
      name: "Germany",
      location: [51.1657, 10.4515],
    },
    {
        name: "India",
        location: [20.5937, 78.9629],
      },
      {
        name: "Indonesia",
        location: [0.7893, 113.9213],
      },
      {
        name: "Israel",
        location: [31.0461, 34.8516],
      },
      {
        name: "Italy",
        location: [41.8719, 12.5674],
      },
      {
        name: "Malaysia",
        location: [4.2105, 101.9758],
      },
    {
      name: "Spain",
      location: [40.4637, 3.7492],
    }
  ];
  
// Loop thru Countries and Create different markers for each song genre

// Set markerSize function

var littleton = L.marker([39.61, -105.02]).bindPopup('This is Littleton, CO.'),
    denver    = L.marker([39.74, -104.99]).bindPopup('This is Denver, CO.'),
    aurora    = L.marker([39.73, -104.8]).bindPopup('This is Aurora, CO.'),
    golden    = L.marker([39.77, -105.23]).bindPopup('This is Golden, CO.');


    var cities = L.layerGroup([littleton, denver, aurora, golden]);

    var grayscale = L.tileLayer(mapboxUrl, {id: 'MapID', tileSize: 512, zoomOffset: -1, attribution: mapboxAttribution}),
    streets   = L.tileLayer(mapboxUrl, {id: 'MapID', tileSize: 512, zoomOffset: -1, attribution: mapboxAttribution});

var map = L.map('map', {
    center: [39.73, -104.99],
    zoom: 10,
    layers: [grayscale, cities]
});

var baseMaps = {
  "Grayscale": grayscale,
  "Streets": streets
};

var overlayMaps = {
  "Cities": cities
};

L.control.layers(baseMaps, overlayMaps).addTo(map);

var baseMaps = {
  "<span style='color: gray'>Grayscale</span>": grayscale,
  "Streets": streets
};


