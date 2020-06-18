// dropdown event
function optionChanged(optionText, component) {
    d3.json("https://dataanalyticsproject.github.io/StockMarketAnalysis/Create%20APIs%20for%20Data/data.json")
    .then(function(data) {
      console.log(component)
  
      var dateValue = [];
      var closeValue = [];
      var highValue = [];
      var lowValue = [];
      var openValue = [];
      var stockValue = [];
      
      //filter on DJI
      var ticker = data.filter(stock => stock.Stock == component);
      
      //get all values within the dow
      for (var i=0; i < ticker.length; i++) {
  
        dateValue.push(ticker[i].Date);
        closeValue.push(ticker[i].Close);
        highValue.push(ticker[i].High);
        lowValue.push(ticker[i].Low);
        openValue.push(ticker[i].Open);
        stockValue.push(ticker[i].Stock)
      }
  
      if (optionText == 'Candlestick') {
        //create candlestick
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
            type: 'date',
            rangeslider: {
              visible: false
            }
          }, 
          yaxis: {
            autorange: true, 
            domain: [0, 1], 
            type: 'linear'
          }
        };
  
        var config = {responsive: true}
  
        Plotly.newPlot('plot', data, layout, config);
      } else {
          // create line graph
          var trace1 = {
            x: dateValue,
            y: closeValue,
            type: 'scatter'
          };
          
          var data = [trace1];
      
          var layout = {};
      
          var config = {responsive: true}
          
          Plotly.newPlot('plot', data, layout, config);
        }
    });
  }