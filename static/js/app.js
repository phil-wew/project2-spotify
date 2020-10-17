function init() {
    var selector = d3.select("#selDataset");
    
      d3.json("data/").then((data) => {
        var songIds = data.names;
        songIds.forEach((id) => {
          selector
          .append("option")
          .text(id)
          .property("value", id);
        });
      
      const firstSong = songIds[0];
      updateCharts(firstSong);
      updateMetadata(firstSong);
    });
  }
  
  
  function updateMetadata(sample) {
    d3.json("data/").then((data) => {
        var metadata = data.metadata;
        var filterArray = metadata.filter(sampleObject => sampleObject.id == sample);
        var result = filterArray[0];
        var samplePanel = d3.select("#sample-metadata");
        samplePanel.html("");
        Object.entries(result).forEach(([key, value]) => {
            samplePanel.append("h6").text(`${key.toUpperCase()}: ${value}`)
        })
    
    // Data for Gauge Chart 
    var data = [
      {
        domain: { x: [0, 1], y: [0, 1] },
        marker: {size: 28, color:'850000'},
        value: result.wfreq,
        title: 'Most popular music genres in countries around the world',
        titlefont: {family: '"Palatino Linotype", "Book Antiqua", Palatino, serif'},
        type: "indicator",
        mode: "gauge+number"
      }
    ];
  
   // Layout for Gauge Chart
    var layout = {
      width: 450,
       height: 400,
       margin: { t: 25, r: 25, l: 25, b: 25 },
       line: {
       color: '600000'
       },
       paper_bgcolor: "#a5bdc6",
       font: { color: "#85541d", family: "Serif" }
     };
  
    
    Plotly.newPlot("gauge", data, layout);
    });
  }
  
  
  function updateCharts(sample) {    
    d3.json("data/").then((data) => {
    var samples = data.samples;
    var filterArray = samples.filter(sampleObject => sampleObject.id == sample);
    var result = filterArray[0];
    var sample_values = result.sample_values;
    var otu_ids = result.otu_ids;
    var otu_labels = result.otu_labels;   
    
    // Bubble Chart
    var song1 = {
        x: otu_ids,
        y: sample_values,
        text: otu_labels,
        mode: 'markers',
        marker: {
        size: sample_values,
        color: otu_ids,
        colorscale:"Electric"
        }
    };
    var data = [song1];
    var layout = {
        title: 'Most streamed songs in 2019',
        showlegend: false,
        hovermode: 'closest',
        xaxis: {title:"Number of streams " +sample},
        margin: {t:30}
    };
    Plotly.newPlot('bubble', data, layout); 
    // Bar Chart
    var trace1 = {
        x: sample_values.slice(0,10).reverse(),
        y: stream_ids.slice(0,10).map(streamID => `Streams ${streamID}`).reverse(),
        text: stream_labels.slice(0,10).reverse(),
        name: "Streams",
        type: "bar",
        orientation: "h"
    };
    var data = [song1];
    var layout = {
        title: "Top Stream Songs " +sample,
        margin: {l: 100, r: 100, t: 100, b: 100}
    };
    Plotly.newPlot("bar", data, layout);  
    });
  }
  
  
  function optionChanged(newSample) {
    updateCharts(newSample);
    updateMetadata(newSample);
  }
  
  init();