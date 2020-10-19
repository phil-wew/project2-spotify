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
    
function optionChanged(newSample) {
  // Fetch new data each time a new sample is selected
  buildCharts(newSample);
}

  console.log(data)

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
    x: Object.values(data["Region"]),
    y: Object.values(data["Top Genre"]),
    text: regions_labels,
    mode: "markers",
    marker : {
      size: Object.values(data["Top Genre"]),
      color: Object.values(data["Region"]),
      colorscale: "Earth"
    }

  }
];

Plotly.newPlot("bubble", bubbleData, bubbleLayout);

Plotly.newPlot('bubble', bubbleData);

// function buildCharts(column){

//   d3.json("/regions").then(function(data) {
//                   console.log(data['Region'])
//       var scatter = [
//         {
//         x: Object.values(data["Region"]),
//         y: Object.values(data[column]),
//         type: 'scatter'
//         }
//         ];
               
//         Plotly.newPlot('scatter', scatter);
//   })
//   }
//   buildCharts("Streams")
//   d3.json("/regions").then(function(data) {
//   var selector = d3.select("#selDataset");
//   tNames = Object.keys(data)
//   console.log(tNames)
//   tNames.forEach((tName) => {
//     selector
//       .append("option")
//       .text(tName)
//       .property("value", tName)
//               })
  
//               console.log(data['Region'])
//   })

//   function optionChanged(newSample) {
//     // Fetch new data each time a new sample is selected
//     buildCharts(newSample);
//   }
  
    console.log(data)

    


