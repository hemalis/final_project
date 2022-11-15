function updateChart(ticker){
  if(ticker == "BTC"){
    update_BTC_chart();
  }
  if(ticker == "ETH"){
    update_ETH_chart();
  }
  if(ticker == "SOL"){
    update_SOL_chart();
  }
  if(ticker == "XRP"){
    update_XRP_chart();
  }
  if(ticker == "BNB"){
    update_BNB_chart();
  }
}

// Default ============================================================================================================================
d3.csv("https://raw.githubusercontent.com/hemalis/final_project/taiqin_wu/Website/data/Data/BTC.csv", function(err, rows){
    function unpack(rows, key) {
    return rows.map(function(row) { return row[key]; });
  }

  var trace1 = {
      type: "scatter",
      mode: "lines",
      name: "BTC Actual",
      x: unpack(rows, "date"),
      y: unpack(rows, "close"),
      line: {color: "#03dcee"},
    };
    
    var trace2 = {
      type: "scatter",
      mode: "lines",
      name: "BTC Predict",
      x: unpack(rows, "date"),
      y: unpack(rows, "close_prediction"),
      line: {color: "#ea335d"},
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
      title: 'Prediction Graph for Bitcoin',
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

  Plotly.newPlot('cryptoChart', data, layout);
  })

var btc = document.getElementById("BTC");
var eth = document.getElementById("ETH");
var sol = document.getElementById("SOL");
var xrp = document.getElementById("XRP");
var bnb = document.getElementById("BNB");

var liveprice = {
  "async": true,
  "scroosDomain": true,
  "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Csolana%2Cripple%2Cbinancecoin&vs_currencies=usd",
  "method": "GET",
  "headers": {}
}
  
$.ajax(liveprice).done(function (response){
  btc.innerHTML = response.bitcoin.usd;
  eth.innerHTML = response.ethereum.usd;
  sol.innerHTML = response.solana.usd;
  xrp.innerHTML = response.ripple.usd;
  bnb.innerHTML = response.binancecoin.usd;
});


// Bitcon ============================================================================================================================
function update_BTC_chart(){
  d3.csv("https://raw.githubusercontent.com/hemalis/final_project/taiqin_wu/Website/data/Data/BTC.csv", function(err, rows){
    function unpack(rows, key) {
    return rows.map(function(row) { return row[key]; });
  }

  var trace1 = {
      type: "scatter",
      mode: "lines",
      name: "BTC Actual",
      x: unpack(rows, "date"),
      y: unpack(rows, "close"),
      line: {color: "#03dcee"},
    };
    
    var trace2 = {
      type: "scatter",
      mode: "lines",
      name: "BTC Predict",
      x: unpack(rows, "date"),
      y: unpack(rows, "close_prediction"),
      line: {color: "#ea335d"},
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
      title: 'Prediction Graph for Bitcoin',
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

  Plotly.newPlot('cryptoChart', data, layout);
  })
}

// ETH ============================================================================================================================
function update_ETH_chart(){
  d3.csv("https://raw.githubusercontent.com/hemalis/final_project/taiqin_wu/Website/data/Data/ETH.csv", function(err, rows){
    function unpack(rows, key) {
    return rows.map(function(row) { return row[key]; });
  }

  var trace1 = {
      type: "scatter",
      mode: "lines",
      name: "ETH Actual",
      x: unpack(rows, "date"),
      y: unpack(rows, "close"),
      line: {color: "#03dcee"},
    };
    
    var trace2 = {
      type: "scatter",
      mode: "lines",
      name: "ETH Predict",
      x: unpack(rows, "date"),
      y: unpack(rows, "close_prediction"),
      line: {color: "#ea335d"},
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
      title: 'Prediction Graph for ETH',
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

  Plotly.newPlot('cryptoChart', data, layout);
  })
}

// SOL ============================================================================================================================
function update_SOL_chart(){
  d3.csv("https://raw.githubusercontent.com/hemalis/final_project/taiqin_wu/Website/data/Data/SOL.csv", function(err, rows){
    function unpack(rows, key) {
    return rows.map(function(row) { return row[key]; });
  }

  var trace1 = {
      type: "scatter",
      mode: "lines",
      name: "SOL Actual",
      x: unpack(rows, "date"),
      y: unpack(rows, "close"),
      line: {color: "#03dcee"},
    };
    
    var trace2 = {
      type: "scatter",
      mode: "lines",
      name: "SOL Predict",
      x: unpack(rows, "date"),
      y: unpack(rows, "close_prediction"),
      line: {color: "#ea335d"},
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
      title: 'Prediction Graph for SOL',
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

  Plotly.newPlot('cryptoChart', data, layout);
  })
}

// Google ============================================================================================================================
function update_XRP_chart(){
  d3.csv("https://raw.githubusercontent.com/hemalis/final_project/taiqin_wu/Website/data/Data/XRP.csv", function(err, rows){
    function unpack(rows, key) {
    return rows.map(function(row) { return row[key]; });
  }

  var trace1 = {
      type: "scatter",
      mode: "lines",
      name: "XRP Actual",
      x: unpack(rows, "date"),
      y: unpack(rows, "close"),
      line: {color: "#03dcee"},
    };
    
    var trace2 = {
      type: "scatter",
      mode: "lines",
      name: "XRP Predict",
      x: unpack(rows, "date"),
      y: unpack(rows, "close_prediciton"),
      line: {color: "#ea335d"},
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
      title: 'Prediction Graph for XRP',
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

  Plotly.newPlot('cryptoChart', data, layout);
  })
}

// AMZN ============================================================================================================================
function update_BNB_chart(){
  d3.csv("https://raw.githubusercontent.com/hemalis/final_project/taiqin_wu/Website/data/Data/BNB.csv", function(err, rows){
    function unpack(rows, key) {
    return rows.map(function(row) { return row[key]; });
  }

  var trace1 = {
      type: "scatter",
      mode: "lines",
      name: "BNB Actual",
      x: unpack(rows, "date"),
      y: unpack(rows, "close"),
      line: {color: "#03dcee"},
    };
    
    var trace2 = {
      type: "scatter",
      mode: "lines",
      name: "BNB Predict",
      x: unpack(rows, "date"),
      y: unpack(rows, "close_prediction"),
      line: {color: "#ea335d"},
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
      title: 'Prediction Graph for BNB',
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

  Plotly.newPlot('cryptoChart', data, layout);
  })
}