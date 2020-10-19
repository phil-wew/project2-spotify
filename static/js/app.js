function buildCharts(column){
  d3.json("/regions").then(function(data) {
                  console.log(data['Region'])
      var bar = [
        {
        x: Object.values(data["Region"]),
        y: Object.values(data[column]),
        type: 'bar'
        }
        ];
               
        Plotly.newPlot('bar', bar); 
  })
  }
  buildCharts("Streams")
  d3.json("/regions").then(function(data) {
  var selector = d3.select("#selDataset");
  tNames = Object.keys(data)
  console.log(tNames)
  tNames.forEach((tName) => {
    selector
      .append("option")
      .text(tName)
      .property("value", tName)
              })
              console.log(data['Region'])
  })
  // var bar = [
  //   {
  //   x: Object.values(data["Region"]),
  //   y: Object.values(data["Streams"]),
  //   type: 'bar'
  //   }
  //   ];
           
  //   Plotly.newPlot('bar', bar);
      
  function optionChanged(newSample) {
    // Fetch new data each time a new sample is selected
    buildCharts(newSample);
  }
  
  d3.json("/regions").then(function(data) {
    console.log(data)
  // var selector = d3.select("#selDataset");
  // var filterArray = charts.filter(chartsObject => chartsObject.id == charts)
  // var result = filterArray[0]
  // var regions_values = result.regions_values
  // var regions_ids = result.regions_ids
  // var regions_labels = result.regions_labels
  // Bubble Chart
  var bubbleLayout = {
    title: "Top Music Genre",
    margin: { t:0 },
    hovermode: "closest",
    xaxis: { title: "Regions"},
    margin: {t:30}
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
        colorscale: "Earth"
      }
    }
  ];
  Plotly.newPlot("bubble", bubbleData, bubbleLayout)
  });
  
  // var trace1 = {
  //   x: ["Regions"],
  //   y: ["Top Genre"],
  //   mode: 'markers',
  //   marker: {
  //     color: ['rgb(93, 164, 214)', 'rgb(255, 144, 14)',  'rgb(44, 160, 101)', 'rgb(255, 65, 54)'],
  //     opacity: [1, 0.8, 0.6, 0.4],
  //     size: [40, 60, 80, 100]
  //   }
  // };
  // var data = [trace1];
  // var layout = {
  //   title: 'Top Genre',
  //   showlegend: false,
  //   height: 600,
  //   width: 600
  // };
  // Plotly.newPlot('myDiv', data);
  
