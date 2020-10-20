// function init() {

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
    var layout = {
      title: 'Regional Comparison',
      xaxis: {
         automargin: true
      }
     };
      
      Plotly.newPlot('bar', bar, layout);
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


function optionChanged(newSample) {
        // Fetch new data each time a new sample is selected
  buildCharts(newSample);
      }
      
     
  d3.json("/regions").then(function(data) {
    console.log(data)
  
  // Bubble Chart
  var bubbleLayout = {
    title: "Top Music Genre",
    margin: { t:0 },
    hovermode: "closest",
    xaxis: { title: "Regions"},
    yaxis: { title: "Top Genre Popularity"},
    margin: {t:30},
    xaxis: {
      automargin: true}
  };
  var bubbleData = [
    {
      x: Object.values(data["Region"]),
      y: Object.values(data["popularity"]),
      text: Object.values(data["topgenre"]),
      mode: "markers",
      marker : {
        size: Object.values(data["popularity"]),
        // size: Object.values(data["topgenre"]),
        color: Object.values(data["popularity"]),
        colorscale: "Earth",
      }
    }
  ];
  Plotly.newPlot("bubble", bubbleData, bubbleLayout)
  });
