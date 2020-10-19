function init() {

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
}}
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

  // function buildCharts(column){

    d3.json("/regions").then(function(data) {
        console.log(data['Region'])
    var trace1 = {
      x: Object.values(data["Region"]),
      y: Object.values(data[column]),
      text: [regions_labels],
      mode: 'markers',
      marker: {
      color: ['rgb(93, 164, 214)', 'rgb(255, 144, 14)',  'rgb(44, 160, 101)', 'rgb(255, 65, 54)'],
      size: [40, 60, 80, 100],
      colorscale: "Earth"
        }
        };

      var data = [trace1]

      var layout = {
          title: 'Top Music Genre',
          showlegend: false,
          hovermode: 'closest',
          height: 600,
          width: 600,
          xaxis: { title: "Regions"},
          margin: {t:30}
        };

    Plotly.newPlot('bubble', data, layout);
      // })
      // }
  
    console.log(data)

function optionChanged(newSample) {
        // Fetch new data each time a new sample is selected
  buildCharts(newSample);
      }
      })
    console.log(data['Region'])

init();

        // var bubbleLayout = [
        //   {
        //   x: Object.values(data["Region"]),
        //   y: Object.values(data[column]),
        //   type: 'bubble',
        //   title: "Top Music Genre",
        //   margin: { t:0 },
        //   hovermode: "closest",
        //   xaxis: { title: "Regions"},
        //   }
        //   ];
  
        // var bubbleData = [
        //     {
        //       x: Object.values(data["Region"]),
        //       y: Object.values(data["Top Genre"]),
        //       text: regions_labels,
        //       mode: "markers",
        //       marker : {
        //         size: Object.values(data["Top Genre"]),
        //         color: Object.values(data["Region"]),
        //         colorscale: "Earth"
        //       }
        //     }
        //   ];
        //      console.log(data['Region'])    
