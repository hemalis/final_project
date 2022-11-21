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

// Chart ============================================================================================================================
function updateChart(ticker) {
  console.log("Called");
  d3.json(`http://127.0.0.1:5000/stock/prediction/${ticker}`,function(err, rows){
    var selection = d3.select("#daily-prediction");
    selection.html(`$${Math.round(rows[rows.length-1].close_prediction).toLocaleString()}`)

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
      x: unpack(rows, "date").map(x => { 
        console.log(new Date(x).toISOString().slice(0, 10));
        return new Date(x).toISOString().slice(0, 10); 
      }),
      y: unpack(rows, "close_prediction"),
      line: {color: "#ea335d"},
    };

    var trace3 = {
      x: unpack(rows, "date").map(x => new Date(x).toISOString().slice(0, 10)), 
      y: unpack(rows, "lower"), 
      fill: "tonexty", 
      //fillcolor: "rgba(68, 68, 68, 0.3)", 
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
      fillcolor: "rgba(111, 231, 219, 0.3)", 
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

  d3.json(`http://127.0.0.1:5000/stock/${ticker}/average/weekly`,function(err, rows){
    var selection = d3.select("#weekly-prediction");
    selection.html(`$${Math.round(rows[0]).toLocaleString()}`)
  });

  d3.json(`http://127.0.0.1:5000/stock/${ticker}/average/monthly`,function(err, rows){
    var selection = d3.select("#monthly-prediction");
    selection.html(`$${Math.round(rows[0]).toLocaleString()}`)
  });

  Plotly.newPlot('stockChart', data, layout);
  });
}
