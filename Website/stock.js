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
d3.csv("https://raw.githubusercontent.com/hemalis/final_project/taiqin_wu/Website/data/Data/AAPL.csv", function(err, rows){
    function unpack(rows, key) {
    return rows.map(function(row) { return row[key]; });
  }

  var trace1 = {
      type: "scatter",
      mode: "lines",
      name: "AAPL Actual",
      x: unpack(rows, "date"),
      y: unpack(rows, "close"),
      line: {color: "#03dcee"},
    };
    
    var trace2 = {
      type: "scatter",
      mode: "lines",
      name: "AAPL Predict",
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

// Get Daily Price
const AAPL_url = 'https://api.twelvedata.com/price?symbol=AAPL&apikey=72d1836457504b678dca9c82302f0d1e';
async function getdailyprice_AAPL(){
  const response_AAPL = await fetch(AAPL_url);
  const data_AAPL = await response_AAPL.json();
  console.log(data_AAPL.price);
  document.getElementById('AAPL-daily-price').textContent=data_AAPL.price;
}

const TSLA_url = 'https://api.twelvedata.com/price?symbol=TSLA&apikey=72d1836457504b678dca9c82302f0d1e';
async function getdailyprice_TSLA(){
  const response_TSLA = await fetch(TSLA_url);
  const data_TSLA = await response_TSLA.json();
  // console.log(data.price);
  document.getElementById('TSLA-daily-price').textContent=data_TSLA.price;
}

const META_url = 'https://api.twelvedata.com/price?symbol=META&apikey=72d1836457504b678dca9c82302f0d1e';
async function getdailyprice_META(){
  const response_META = await fetch(META_url);
  const data_META = await response_META.json();
  // console.log(data.price);
  document.getElementById('META-daily-price').textContent=data_META.price;
}

const GOOGL_url = 'https://api.twelvedata.com/price?symbol=GOOGL&apikey=72d1836457504b678dca9c82302f0d1e';
async function getdailyprice_GOOGL(){
  const response_GOOGL = await fetch(GOOGL_url);
  const data_GOOGL = await response_GOOGL.json();
  // console.log(data.price);
  document.getElementById('GOOGL-daily-price').textContent=data_GOOGL.price;
}

const AMZN_url = 'https://api.twelvedata.com/price?symbol=AMZN&apikey=72d1836457504b678dca9c82302f0d1e';
async function getdailyprice_AMZN(){
  const response_AMZN = await fetch(AMZN_url);
  const data_AMZN = await response_AMZN.json();
  // console.log(data.price);
  document.getElementById('AMZN-daily-price').textContent=data_AMZN.price;
}

getdailyprice_AAPL();
getdailyprice_TSLA();
getdailyprice_META();
getdailyprice_GOOGL();
getdailyprice_AMZN();

// AAPL ============================================================================================================================
function update_AAPL_chart(){
  d3.csv("https://raw.githubusercontent.com/hemalis/final_project/taiqin_wu/Website/data/Data/AAPL.csv", function(err, rows){
    function unpack(rows, key) {
    return rows.map(function(row) { return row[key]; });
  }

  var trace1 = {
      type: "scatter",
      mode: "lines",
      name: "AAPL Actual",
      x: unpack(rows, "date"),
      y: unpack(rows, "close"),
      line: {color: "#03dcee"},
    };
    
    var trace2 = {
      type: "scatter",
      mode: "lines",
      name: "AAPL Predict",
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
      // rangeslider: {range: ['2019-11-07', '2022-11-10']},
      type: 'date'
      },
      yaxis: {
        autorange: true,
        // range: [86.8700008333, 100],
        type: 'linear'
      }
  };

  Plotly.newPlot('stockChart', data, layout);
  })
}

// TSLA ============================================================================================================================
function update_TSLA_chart(){
  d3.csv("https://raw.githubusercontent.com/hemalis/final_project/taiqin_wu/Website/data/Data/TSLA.csv", function(err, rows){
    function unpack(rows, key) {
    return rows.map(function(row) { return row[key]; });
  }

  var trace1 = {
      type: "scatter",
      mode: "lines",
      name: "TSLA Actual",
      x: unpack(rows, "date"),
      y: unpack(rows, "open"),
      line: {color: "#03dcee"},
    };
    
    var trace2 = {
      type: "scatter",
      mode: "lines",
      name: "TSLA Predict",
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
  d3.csv("https://raw.githubusercontent.com/hemalis/final_project/taiqin_wu/Website/data/Data/META.csv", function(err, rows){
    function unpack(rows, key) {
    return rows.map(function(row) { return row[key]; });
  }

  var trace1 = {
      type: "scatter",
      mode: "lines",
      name: "Meta Actual",
      x: unpack(rows, "date"),
      y: unpack(rows, "open"),
      line: {color: "#03dcee"},
    };
    
    var trace2 = {
      type: "scatter",
      mode: "lines",
      name: "Meta Predict",
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
  d3.csv("https://raw.githubusercontent.com/hemalis/final_project/taiqin_wu/Website/data/Data/META.csv", function(err, rows){
    function unpack(rows, key) {
    return rows.map(function(row) { return row[key]; });
  }

  var trace1 = {
      type: "scatter",
      mode: "lines",
      name: "Google Actual",
      x: unpack(rows, "date"),
      y: unpack(rows, "open"),
      line: {color: "#03dcee"},
    };
    
    var trace2 = {
      type: "scatter",
      mode: "lines",
      name: "Google Predict",
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
  d3.csv("https://raw.githubusercontent.com/hemalis/final_project/taiqin_wu/Website/data/Data/AMZN.csv", function(err, rows){
    function unpack(rows, key) {
    return rows.map(function(row) { return row[key]; });
  }

  var trace1 = {
      type: "scatter",
      mode: "lines",
      name: "Amazon Actual",
      x: unpack(rows, "date"),
      y: unpack(rows, "open"),
      line: {color: "#03dcee"},
    };
    
    var trace2 = {
      type: "scatter",
      mode: "lines",
      name: "Amazon Predict",
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

// Get daily price
// function get_daily_price(ticker) {
  // const url = "https://api.twelvedata.com/price?symbol=" + ticker.toString() + "&apikey=6e1155c7ff724f1daf91647f1664883e";
  //   console.log(url);
// }