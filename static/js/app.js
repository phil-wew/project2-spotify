d3.json("/regions").then(function(data) {
var selector = d3.select("#selDataset");
tNames = data["Region"]
Object.values(tNames).forEach((tName) => {
  selector
    .append("option")
    .text(tName)
    .property("value", tName)
            })

  region_df = px.data.genres_wide()
  fig = px.bar(region_df, x="Region", y=["gold", "silver", "bronze"], title="Wide-Form Input")
  fig.show()

// d3.json("/regions").then(function(data) {
// var selector = d3.select("#selDataset");
// var samples = data.samples
// var filterArray = samples.filter(sampleObject => sampleObject.id == sample)
// var result = filterArray[0]
// var sample_values = result.sample_values
// var regions_ids = result.regions_ids
// var regions_labels = result.regions_labels; 

//     // Bubble Chart
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

 console.log(data)
})
    
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