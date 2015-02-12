$(function(){


   
$("#liChart").bind("click", function(){ShowWindow("step01/product-search.html") ;} );
$("#liScatterChart").bind("click", function(){ShowWindow("scatterChartWrapper") ;}   );
$("#liLinearGuage").bind("click", function(){ShowWindow("linearGuageWrapper") ;} );
$("#liMap").bind("click", function(){ShowWindow("mapWrapper") ;} );
$("#liQRCode").bind("click", function(){$("#QRWrapper").show(); ;} );
$("#liRadialGuage").bind("click", function(){ShowWindow("radialGuageWrapper") ;} );
$("#liStockChart").bind("click", function(){ShowWindow("stockChartWrapper") ;} );
$("#liPiChart").bind("click", function(){ShowWindow("piChartWrapper") ;} );
$("#liDonutChart").bind("click", function(){ShowWindow("donutChartWrapper") ;} );

});

function ShowWindow(divC) {

  debugger;
   window.open(divC, 'name'); 
  }


