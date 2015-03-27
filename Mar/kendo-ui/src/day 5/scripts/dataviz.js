$(function(){

   // $("#chart").kendoChart();
   //local data, renders column chart by def
    $("#chart").kendoChart({
        title: {
            text: "Sales History" //caption
        },
        series: [
        { name: "Sales", data: [200, 450, 300, 125] } //data binding
        ],

        //step -2 applies label across category axis
        /*categoryAxis:{
             categories: [ 2000, 2001, 2002, 2003 ]
           }*/
    });

  //step 3 - bounding category names to a data item
  /*var salesData = [ {
      "country": "United States",
      "year": "2005",
      "value": 67.96
      }, {
      "country": "United States",
      "year": "2006",
      "value": 68.93
  }];

  $("#chart").kendoChart({
      dataSource: {
          data: salesData
      },
      series: [{
          field: "value",
          name: "United States"
      }],
      categoryAxis: {
          field: "year"
      }
    });*/

  //step - 4 - multiple value axis, must have unique names
  /*$("#chart").kendoChart({
      title: {
          text: "Average temperature and humidity"
      },
      legend: {
          position: "bottom"
      },
      series: [{
              name: "Temperature",
              data: [20, 25, 32],
              axis: "temperature"
          }, {
              name: "Humidity",
              data: [45, 50, 80],
              axis: "humidity"
      }],
      categoryAxis: {
          categories: ["Aug", "Sep", "Oct"],
          //step -5 - controls the arrangement of category axis
          //axisCrossingValue: [0, 3]
      },
      valueAxis: [{
          name: "temperature",
          labels: {
              format: "{0}C"
          }
      }, {
          name: "humidity",
          labels: {
              format: "{0}%"
          }
      }]
    });*/

  //scatter charts
  //step 1
  $("#scatterChart").kendoChart({
    series: [{
      type: "scatter",
      name: "Pentium D 915",
      data: [[120, 102], [685, 200], [485, 300]]
    }],
    xAxis: {
      max: 1000
    },
    yAxis: {
      min: 80
    }
  });


//step 2
// can define more x and Y axis in addition to primary ones
// must have unique name, first series is assciated with def y axis 
//Do not specify a name for the primary X and Y axes
/*$("#scatterChart").kendoChart({
  title: {
    text: "Dyno run results"
  },
  legend: {
    position: "bottom"
  },
  seriesDefaults: {
    type: "scatterLine"
  },
  series: [{
    name: "Power",
    data: [[1000,  10], [1500, 19], [2000, 30]]
  }, {
    name: "Torque",
    data: [[1000,  50], [1500, 65], [2000, 80]],
    yAxis: "torque"
  }],
  xAxis: {
    title: "Engine rpm",
    // axisCrossingValue: [0, 2500]
  },
  yAxis: [{
    labels: {
      format: "{0} bhp"
    }
  }, {
    name: "torque",
    labels: {
      format: "{0} Nm"
    }
  }]
});*/

//linear guage
//step 1
//create a horizontal guage with value 20 and min value 10
$("#linearGuage").kendoLinearGauge({
  pointer: {
    value: 20
  },
  scale: {
    min: 10,
    vertical: false
           //step 2
           //vertical :true
         }
       });

 $("#map").kendoMap({
                center: [30.268107, -97.744821],
                zoom: 3,
                layers: [{
                    type: "tile",
                    urlTemplate: "http://#= subdomain #.tile.openstreetmap.org/#= zoom #/#= x #/#= y #.png",
                    subdomains: ["a", "b", "c"],
                    attribution: "&copy; <a href='http://osm.org/copyright'>OpenStreetMap contributors</a>"
                }],
                markers: [{
                    location: [30.268107, -97.744821],
                    shape: "pinTarget",
                    tooltip: {
                        content: "Austin, TX"
                    }
                }]
        });

 $("#QRCode").kendoQRCode({
    value: "http://www.telerik.com/",
    errorCorrection: "M", 
    size: 120 // the overall size of the side of the Barcode in pixels
});

 $("#BarCode").kendoBarcode({
     value: "1234567",
     type: "ean8"
 });

 $("#radialGuage").kendoRadialGauge({
    scale: {
                            minorUnit: 5,
                            startAngle: -30,
                            endAngle: 210,
                            max: 180
                        }
});

createChart();
createPiChart();
createDonoutChart();
$(document).bind("kendo:skinChange", createChart);
var window = $("#dvWindow");
$("#liChart").bind("click", function(){ShowWindow("chartWrapper") ;} );
$("#liScatterChart").bind("click", function(){ShowWindow("scatterChartWrapper") ;}   );
$("#liLinearGuage").bind("click", function(){ShowWindow("linearGuageWrapper") ;} );
$("#liMap").bind("click", function () { $("#QRWrapper").hide(); $("#BarCodeWrapper").hide(); $("#mapWrapper").show(); });
$("#liQRCode").bind("click", function () { $("#mapWrapper").hide(); $("#BarCodeWrapper").hide(); $("#QRWrapper").show();; });
$("#liBarCode").bind("click", function () { $("#mapWrapper").hide();  $("#QRWrapper").hide(); $("#BarCodeWrapper").show();; });
$("#liRadialGuage").bind("click", function(){ShowWindow("radialGuageWrapper") ;} );
$("#liStockChart").bind("click", function(){ShowWindow("stockChartWrapper") ;} );
$("#liPiChart").bind("click", function(){ShowWindow("piChartWrapper") ;} );
$("#liDonutChart").bind("click", function(){ShowWindow("donutChartWrapper") ;} );
if (!window.data("kendoWindow")) {

  window.kendoWindow({
    width: "600px",
    title: "",
    visible:false,
    actions: [
    "Pin",
    "Minimize",
    "Maximize",
    "Close"
    ]
          //close: onClose
  });
}
$("#chartWrapper").hide();
$("#scatterChartWrapper").hide();
$("#linearGuageWrapper").hide();
$("#mapWrapper").hide();
$("#QRWrapper").hide();
$("#BarCodeWrapper").hide();
$("#radialGuageWrapper").hide();
$("#stockChartWrapper").hide();

$("#piChartWrapper").hide();
$("#donutChartWrapper").hide();
});

function ShowWindow(divC) {

  debugger;
  $("#QRWrapper").hide();
  $("#BarCodeWrapper").hide();
  var wnd = $("#dvWindow");
  if(wnd.data("kendoWindow"))
  {
    wnd.data("kendoWindow").open();
    wnd.data("kendoWindow").content($("#" + divC ).html());
    wnd.data("kendoWindow").refresh();
  }
}

function createChart()
{

  $("#stockChart").kendoStockChart({
                dataSource: data,
                    schema: {
                        model: {
                            fields: {
                                Date: { type: "date" }
                            }
                        }
                         },
                title: {
                    text: "The Boeing Company\nNYSE:BA"
                },
                dateField: "Date",
                series: [{
                    type: "candlestick",
                    openField: "Open",
                    highField: "High",
                    lowField: "Low",
                    closeField: "Close"
                }],
                navigator: {
                    series: {
                        type: "area",
                        field: "Close"
                    },
                    select: {
                        from: "2009/02/05",
                        to: "2011/10/07"
                    }
                }
            });
}


 function createPiChart() {
            $("#piChart").kendoChart({
                title: {
                    position: "bottom",
                    text: "Share of Internet Population Growth, 2007 - 2012"
                },
                legend: {
                    visible: false
                },
                chartArea: {
                    background: ""
                },
                seriesDefaults: {
                    labels: {
                        visible: true,
                        background: "transparent",
                        template: "#= category #: \n #= value#%"
                    }
                },
                series: [{
                    type: "pie",
                    startAngle: 150,
                    data: [{
                        category: "Asia",
                        value: 53.8,
                        color: "#9de219"
                    },{
                        category: "Europe",
                        value: 16.1,
                        color: "#90cc38"
                    },{
                        category: "Latin America",
                        value: 11.3,
                        color: "#068c35"
                    },{
                        category: "Africa",
                        value: 9.6,
                        color: "#006634"
                    },{
                        category: "Middle East",
                        value: 5.2,
                        color: "#004d38"
                    },{
                        category: "North America",
                        value: 3.6,
                        color: "#033939"
                    }]
                }],
                tooltip: {
                    visible: true,
                    format: "{0}%"
                }
            });
        }


function createDonoutChart() {
  $("#donutChart").kendoChart({
      title: {
          position: "bottom",
          text: "Share of Internet Population Growth"
      },
      legend: {
          visible: false
      },
      chartArea: {
          background: ""
      },
      seriesDefaults: {
          type: "donut",
          startAngle: 150
      },
      series: [{
          name: "2011",
          data: [{
              category: "Asia",
              value: 30.8,
              color: "#9de219"
          },{
              category: "Europe",
              value: 21.1,
              color: "#90cc38"
          },{
              category: "Latin America",
              value: 16.3,
              color: "#068c35"
          },{
              category: "Africa",
              value: 17.6,
              color: "#006634"
          },{
              category: "Middle East",
              value: 9.2,
              color: "#004d38"
          },{
              category: "North America",
              value: 4.6,
              color: "#033939"
          }]
      }, {
          name: "2012",
          data: [{
              category: "Asia",
              value: 53.8,
              color: "#9de219"
          },{
              category: "Europe",
              value: 16.1,
              color: "#90cc38"
          },{
              category: "Latin America",
              value: 11.3,
              color: "#068c35"
          },{
              category: "Africa",
              value: 9.6,
              color: "#006634"
          },{
              category: "Middle East",
              value: 5.2,
              color: "#004d38"
          },{
              category: "North America",
              value: 3.6,
              color: "#033939"
          }],
          labels: {
              visible: true,
              background: "transparent",
              position: "outsideEnd",
              template: "#= category #: \n #= value#%"
          }
      }],
      tooltip: {
          visible: true,
          template: "#= category # (#= series.name #): #= value #%"
      }
  });
}