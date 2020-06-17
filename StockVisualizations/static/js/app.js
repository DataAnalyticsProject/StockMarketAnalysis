// dropdown event
function optionChanged(id) {
    d3.json('../../Create APIs for Data/data.json').then(function(data) {
        const filteredArr = data.filter(sample => sample.Stock === Stock);
    })
    plotData(id)
}
function initializeData() {
    d3.json("../../Create APIs for Data/data.json").then(data => {
        // populate dropdown
        console.log(data);

        var selectData = d3.select("#selDataset");

        var myObject = {}

        data.forEach(function(x) {

            var stock = x.Stock
            myObject(stock)
            if (myObject.includes(stock)) {
                selectData.append("option")
                .text(stock)
                .property("value")

                myObject[stock] = null;
            }
        });
    });
}



    //     var stocks = data.map(function(x) {
    //         return x.Stock;
    //     });

    //     stocks.forEach(function(name) {
    //         d3.select("#selDataset")
    //             .append("option")
    //             .text(name)
    //             .property("value");
    //     });
    // });

// function plotData(id) {
//     // read json
//     d3.json("../data.json")
//         .then(function(data) {
//             // get data from OTU's
//             var Data = data.filter(sample => sample.Stock);
//             var StockName = Data[0].Stock;
//             var StockDate = Data[0].Date;
//             var StockClose = Data[0].Name;

//             // append OTU and whitespace to ids

//             var trace1 = {
//                 type: "scatter",
//                 mode: "lines",
//                 name: name,
//                 x: StockClose,
//                 y: StockDate,
//                 line: {
//                   color: "#17BECF"
//                 }
//               };
          
//               var data = [trace1];
          
//               var layout = {
//                 title: `${stock} closing prices`,
//                 xaxis: {
//                   range: [startDate, endDate],
//                   type: "date"
//                 },
//                 yaxis: {
//                   autorange: true,
//                   type: "linear"
//                 }
//               };
          
//               Plotly.newPlot("plot", data, layout);
          
//             });
// }
initializeData()