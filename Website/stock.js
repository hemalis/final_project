d3.csv("https://raw.githubusercontent.com/plotly/datasets/master/finance-charts-apple.csv", function(err, rows){

  function unpack(rows, key) {
  return rows.map(function(row) { return row[key]; });
}

var trace1 = {
  type: "scatter",
  mode: "lines",
  name: "AAPL Actual",
  x: unpack(rows, "Date"),
  y: unpack(rows, "AAPL.High"),
  line: {color: "#ea335d"},
};

var trace2 = {
  type: "scatter",
  mode: "lines",
  name: "AAPL Predict",
  x: unpack(rows, "Date"),
  y: unpack(rows, "AAPL.Low"),
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
  title: 'Prediction Graph',
  xaxis: {
    range: ['2015-02-17', '2017-02-16'],
    type: 'date'
  },
  yaxis: {
    autorange: true,
    type: 'linear'
  }
};

Plotly.newPlot('AAPL', data, layout);
})