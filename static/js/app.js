function buildCharts(column){

d3.json("/regions").then(function(data) {
                console.log(data['Region'])
    var bar = [
      {
      x: Object.values(data["Region"]),
      y: Object.values(data[column]),
      type: 'bar'
      }
      ];
             
      Plotly.newPlot('bar', bar);
})
}
buildCharts("Streams")
d3.json("/regions").then(function(data) {
var selector = d3.select("#selDataset");
tNames = Object.keys(data)
console.log(tNames)
tNames.forEach((tName) => {
  selector
    .append("option")
    .text(tName)
    .property("value", tName)
            })

            console.log(data['Region'])
})
// var bar = [
//   {
//   x: Object.values(data["Region"]),
//   y: Object.values(data["Streams"]),
//   type: 'bar'
//   }
//   ];
         
//   Plotly.newPlot('bar', bar);
    
function optionChanged(newSample) {
  // Fetch new data each time a new sample is selected
  buildCharts(newSample);
}

  console.log(data)

// d3.json("/regions").then(function(regions) {
// var selector = d3.select("#selDataset");

// var filterArray = charts.filter(chartsObject => chartsObject.id == charts)
// var result = filterArray[0]
// var regions_values = result.regions_values
// var regions_ids = result.regions_ids
// var regions_labels = result.regions_labels; 

// Bubble Chart
var bubbleLayout = {
  title: "Top Music Genre",
  margin: { t:0 },
  hovermode: "closest",
  xaxis: { title: "Regions"},
  margin: {t:30}
};

var bubbleData = [
  {
    x: Object.values(data["Regions"]),
    y: Object.values(data["Top Genre"]),
    text: regions_labels,
    mode: "markers",
    marker : {
      size: Object.values(data["Top Genre"]),
      color: Object.values(data["Regions"]),
      colorscale: "Earth"
    }

  }
];

Plotly.newPlot("bubble", bubbleData, bubbleLayout)

Plotly.newPlot('myDiv', data);





    


