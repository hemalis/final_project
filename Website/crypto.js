function updateChart(ticker) {
  console.log("Called")
  d3.json(`http://127.0.0.1:5000/crypto/prediction/${ticker}`,function(err, rows){
    function unpack(rows, key) {
    return rows.map(function(row) { 
      // console.log(row[key])
      return row[key]; 
    });
  }

  var trace1 = {
      type: "scatter",
      mode: "lines",
      name: `${ticker}`,
      x: unpack(rows, "date").map(x => new Date(x).toISOString().slice(0, 10)),
      y: unpack(rows, "close"),
      line: {color: "#03dcee"},
    };
    
    var trace2 = {
      type: "scatter",
      mode: "lines",
      name: `${ticker} Predict`,
      x: unpack(rows, "date").map(x => new Date(x).toISOString().slice(0, 10)),
      y: unpack(rows, "close_prediction"),
      line: {color: "#ea335d"},
    };

    var trace3 = {
      x: unpack(rows, "date").map(x => new Date(x).toISOString().slice(0, 10)), 
      y: unpack(rows, "lower"), 
      fill: "tonexty", 
      fillcolor: "rgba(68, 68, 68, 0.3)", 
      line: {color: "transparent"}, 
      //marker: "#444",
      name: "Lower", 
      showlegend: false, 
      type: "scatter"
    }
    
    var trace4 = {
      x: unpack(rows, "date").map(x => new Date(x).toISOString().slice(0, 10)), 
      y: unpack(rows, "upper"), 
      fill: "tonexty", 
      //marker: "#444",
      fillcolor: "rgba(68, 68, 68, 0.3)", 
      line: {color: "transparent"}, 
      name: "Upper", 
      showlegend: false, 
      type: "scatter"
    }

  var data = [trace1, trace2, trace3, trace4];

  var layout = {
      paper_bgcolor: "#172042",
      plot_bgcolor: "#172042",
      showlegend: true,
      margin: {
      l: 30,
      r: 30,
      b: 30,
      t: 30,
      pad: 1,
      },
      font: {
          color: "#6b5f8a"
      },
      title: `Prediction Graph for ${ticker}`,
      xaxis: {
      autorange: true,
      range: ['2019-11-07', '2022-11-10'],
      rangeselector: {buttons: [
          {
            count: 1,
            label: '1m',
            step: 'month',
            stepmode: 'backward'
          },
          {
            count: 6,
            label: '6m',
            step: 'month',
            stepmode: 'backward'
          },
          {step: 'all'}
        ]},
      rangeslider: {range: ['2019-11-07', '2022-11-10']},
      type: 'date'
      },
      yaxis: {
        autorange: true,
        // range: [86.8700008333, 100],
        type: 'linear'
      }
  };

  Plotly.newPlot('cryptoChart', data, layout);
  });
}