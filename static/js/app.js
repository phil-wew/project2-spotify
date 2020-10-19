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






  

// data.filter 
// function optionChanged
// // var charts = data.all_weekly_charts
// // var charts = all_weekly_charts 
// // var filterArray = samples.filter(sampleObj => sampleObj.id == sample)
// var result = filterArray[0]
// var sample_values = result.sample_values
// var regions_ids = result.regions_ids
// var regions_labels = result.regions_labels; 
// // Bubble Chart
//  var BubbleLayout = {
//          title: "Top Music Genre",
//          margin: { t: 0 },
//          hovermode: "closest",
//          xaxis: { title: "Region"},
//          margin: { t:30}
//   };
//   var bubbleData = [
//     {
//       x: regions_ids,
//       y: regions_values,
//       text: regions_labels,
//       mode: 'markers',
//       marker: {
//         size: sample_values,
//         color: streams_ids,
//         colorscale:"Electric"
//      }
//     }
//   ];
  // region_df = px.data.genres_wide()
  // fig = px.bar(region_df, x="Region", y=["gold", "silver", "bronze"], title="Wide-Form Input")
  // fig.show()

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
    x: result.regions_ids,
    y: sample_values,
    text: regions_labels,
    mode: "markers",
    marker : {
      size: sample_values,
      color: regions_ids,
      colorscale: "Earth"
    }

  }
];

Plotly.newPlot("bubble", bubbleData, bubbleLayout)

function optionChanged(newSample) {
  // Fetch new data each time a new sample is selected
  buildCharts(newSample);
}

  console.log(data)

// function buildCharts(regions) {
//   // @TODO: Use `d3.json` to fetch the sample data for the plots
//   var plotData = `/${regions}`;
//   d3.json(plotData).then(function (region_df) {
//     // @TODO: Build a Bubble Chart using the sample data
//     var x_axis = region_df.key, region_df.danceability, region_df.tempo, region_df.tempo, region_df.popularity, region_df.streams;
//     var y_axis = [0, 1];
//     var size = region_df.[0, 1];
//     var color = region_df.key, region_df.danceability, region_df.tempo, region_df.tempo, region_df.popularity, region_df.streams;
//     var texts = region_df.otu_labels;
//     var bubble = {
//       x: x_axis,
//       y: y_axis,
//       text: texts,
//       mode: `markers`,
//       marker: {
//         size: size,
//         color: color
//       }
//     };
//     var data = [bubble];
//     var layout = {
//       xaxis: { title: “Region” },
//       title: “Top 200 Song Features”
//     };
//     Plotly.newPlot(‘bubble’, data, layout);


    
// d3.json("/data").then(function(data) {
// var selector = d3.select("#selDataset");
// var samples = data.samples
// var filterArray = samples.filter(sampleObject => sampleObject.id == sample)
// var result = filterArray[0]
// var sample_values = result.sample_values
// var streams_ids = result.streams_ids
// var streams_labels = result.streams_labels; 

    // Bubble Chart
// var streams = {
//         x: streams_ids,
//         y: sample_values,
//         text: region_labels,
//         mode: 'markers',
//         marker: {
//         size: sample_values,
//         color: streams_ids,
//         colorscale:"Electric"
//         }
//     };

// var data = [song1];
// var layout = {
//         title: 'Most streamed songs',
//         showlegend: false,
//         hovermode: 'closest',
//         xaxis: {title:"Number of streams " +sample},
//         margin: {t:30}
//     };
//     Plotly.newPlot('bubble', data, layout); 