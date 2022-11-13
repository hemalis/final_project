function updateChart(ticker){
  if(ticker == "AAPL"){
    update_AAPL_chart();
  }
  if(ticker == "TSLA"){
    update_TSLA_chart();
  }
  if(ticker == "META"){
    update_META_chart();
  }
  if(ticker == "GOOGL"){
    update_GOOGL_chart();
  }
  if(ticker == "AMZN"){
    update_AMZN_chart();
  }
}

// Default ============================================================================================================================
d3.csv("https://raw.githubusercontent.com/hemalis/final_project/main/data/AAPL.csv", function(err, rows){
    function unpack(rows, key) {
    return rows.map(function(row) { return row[key]; });
  }

  var trace1 = {
      type: "scatter",
      mode: "lines",
      name: "AAPL Actual",
      x: unpack(rows, "date"),
      y: unpack(rows, "open"),
      line: {color: "#ea335d"},
    };
    
    var trace2 = {
      type: "scatter",
      mode: "lines",
      name: "AAPL Predict",
      x: unpack(rows, "date"),
      y: unpack(rows, "close"),
      line: {color: "#03dcee"},
    };

  var data = [trace1,trace2];

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
      title: 'Prediction Graph for Apple',
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
      range: [86.8700008333, 100],
      type: 'linear'
    }
  };

  Plotly.newPlot('stockChart', data, layout);
  })

// AAPL ============================================================================================================================
function update_AAPL_chart(){
  d3.csv("https://raw.githubusercontent.com/hemalis/final_project/main/data/AAPL.csv", function(err, rows){
    function unpack(rows, key) {
    return rows.map(function(row) { return row[key]; });
  }

  var trace1 = {
      type: "scatter",
      mode: "lines",
      name: "AAPL Actual",
      x: unpack(rows, "date"),
      y: unpack(rows, "open"),
      line: {color: "#ea335d"},
    };
    
    var trace2 = {
      type: "scatter",
      mode: "lines",
      name: "AAPL Predict",
      x: unpack(rows, "date"),
      y: unpack(rows, "close"),
      line: {color: "#03dcee"},
    };

  var data = [trace1,trace2];

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
      title: 'Prediction Graph for Apple',
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
      range: [86.8700008333, 100],
      type: 'linear'
    }
  };

  Plotly.newPlot('stockChart', data, layout);
  })
}

// TSLA ============================================================================================================================
function update_TSLA_chart(){
  d3.csv("https://raw.githubusercontent.com/hemalis/final_project/main/data/TSLA.csv", function(err, rows){
    function unpack(rows, key) {
    return rows.map(function(row) { return row[key]; });
  }

  var trace1 = {
      type: "scatter",
      mode: "lines",
      name: "TSLA Actual",
      x: unpack(rows, "date"),
      y: unpack(rows, "open"),
      line: {color: "#ea335d"},
    };
    
    var trace2 = {
      type: "scatter",
      mode: "lines",
      name: "TSLA Predict",
      x: unpack(rows, "date"),
      y: unpack(rows, "close"),
      line: {color: "#03dcee"},
    };

  var data = [trace1,trace2];

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
      title: 'Prediction Graph for Tesla',
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
      range: [86.8700008333, 100],
      type: 'linear'
    }
  };

  Plotly.newPlot('stockChart', data, layout);
  })
}

// META ============================================================================================================================
function update_META_chart(){
  d3.csv("https://raw.githubusercontent.com/hemalis/final_project/main/data/META.csv", function(err, rows){
    function unpack(rows, key) {
    return rows.map(function(row) { return row[key]; });
  }

  var trace1 = {
      type: "scatter",
      mode: "lines",
      name: "Meta Actual",
      x: unpack(rows, "date"),
      y: unpack(rows, "open"),
      line: {color: "#ea335d"},
    };
    
    var trace2 = {
      type: "scatter",
      mode: "lines",
      name: "Meta Predict",
      x: unpack(rows, "date"),
      y: unpack(rows, "close"),
      line: {color: "#03dcee"},
    };

  var data = [trace1,trace2];

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
      title: 'Prediction Graph for Meta',
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
      range: [86.8700008333, 100],
      type: 'linear'
    }
  };

  Plotly.newPlot('stockChart', data, layout);
  })
}

// Google ============================================================================================================================
function update_GOOGL_chart(){
  d3.csv("https://raw.githubusercontent.com/hemalis/final_project/main/data/GOOGL.csv", function(err, rows){
    function unpack(rows, key) {
    return rows.map(function(row) { return row[key]; });
  }

  var trace1 = {
      type: "scatter",
      mode: "lines",
      name: "Google Actual",
      x: unpack(rows, "date"),
      y: unpack(rows, "open"),
      line: {color: "#ea335d"},
    };
    
    var trace2 = {
      type: "scatter",
      mode: "lines",
      name: "Google Predict",
      x: unpack(rows, "date"),
      y: unpack(rows, "close"),
      line: {color: "#03dcee"},
    };

  var data = [trace1,trace2];

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
      title: 'Prediction Graph for Google',
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
      range: [86.8700008333, 100],
      type: 'linear'
    }
  };

  Plotly.newPlot('stockChart', data, layout);
  })
}

// AMZN ============================================================================================================================
function update_AMZN_chart(){
  d3.csv("https://raw.githubusercontent.com/hemalis/final_project/main/data/AMZN.csv", function(err, rows){
    function unpack(rows, key) {
    return rows.map(function(row) { return row[key]; });
  }

  var trace1 = {
      type: "scatter",
      mode: "lines",
      name: "Amazon Actual",
      x: unpack(rows, "date"),
      y: unpack(rows, "open"),
      line: {color: "#ea335d"},
    };
    
    var trace2 = {
      type: "scatter",
      mode: "lines",
      name: "Amazon Predict",
      x: unpack(rows, "date"),
      y: unpack(rows, "close"),
      line: {color: "#03dcee"},
    };

  var data = [trace1,trace2];

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
      title: 'Prediction Graph for Amazon',
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
      range: [86.8700008333, 100],
      type: 'linear'
    }
  };

  Plotly.newPlot('stockChart', data, layout);
  })
}