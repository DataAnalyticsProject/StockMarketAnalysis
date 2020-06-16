d3.json("../../Create APIs for Data/data.json")
  .then(function(data) {
    
    var dateValue = [];
    var closeValue = [];
    var highValue = [];
    var lowValue = [];
    var openValue = [];
    var stockValue = [];
    
    var ticker = data.filter(stock => stock.Stock == "DOW");
    
    for (var i=0; i < ticker.length; i++) {

      dateValue.push(ticker[i].Date);
      closeValue.push(ticker[i].Close);
      highValue.push(ticker[i].High);
      lowValue.push(ticker[i].Low);
      openValue.push(ticker[i].Open);
      stockValue.push(ticker[i].Stock)
    }
    
    var trace1 = {
      
      x: dateValue, 
      close: closeValue,
      decreasing: {line: {color: '#FF0000'}}, 
      high: highValue, 
      increasing: {line: {color: '##008000'}}, 
      line: {color: 'rgba(31,119,180,1)'}, 
      low: lowValue, 
      open: openValue, 
      
      type: 'candlestick', 
      xaxis: 'x', 
      yaxis: 'y'
    };

    var data = [trace1];

    var layout = {
      dragmode: 'zoom', 
      margin: {
        r: 10, 
        t: 25, 
        b: 40, 
        l: 60
      }, 
      showlegend: false, 
      xaxis: {
        autorange: true, 
        domain: [0, 1], 
        range: ['2010-01-01', '2020-06-09'], 
        rangeslider: {range: ['2010-01-01', '2020-06-09']}, 
        title: 'Date', 
        type: 'date'
      }, 
      yaxis: {
        autorange: true, 
        domain: [0, 1], 
        range: [114.609999778, 137.410004222], 
        type: 'linear'
      }
    };

    Plotly.newPlot('djiGraph', data, layout);

    console.log(data)
  });