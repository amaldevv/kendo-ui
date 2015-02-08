$(function(){
	$("#pnlBarSearch").kendoPanelBar().data("kendoPanelBar");;

	var panelBar = $("#pnlBarSearch").kendoPanelBar().data("kendoPanelBar");

	panelBar.expand($("li", panelBar.element));
	
	$("#drpCategory").kendoDropDownList({
		optionLabel : "Select Category",
		dataTextField : "CategoryName",
		dataValueField :"CategoryID",
		dataSource : {
			type : "odata",
			serverFiltering : true,
			transport : {
				async : true,
				read : "http://demos.telerik.com/kendo-ui/service/Northwind.svc/Categories"
			}
		}
	}).data("kendoDatePicker");

	$("#drpProducts").kendoDropDownList({
		autobind : false,

		optionLabel : "Select Product",
		cascadeFrom : "drpCategory",
		dataTextField : "ProductName",
		dataValueField :"ProductID",
		dataSource : {
			type : "odata",
			serverFiltering : true,
			transport : {
				async : true,
				read : "http://demos.telerik.com/kendo-ui/service/Northwind.svc/Products"
			}
		}
	}).data("kendoDatePicker");

	var today = new Date();
	var fromDate = moment().subtract('30','days');
	$("#dtOrderFrom").kendoDatePicker({
		//value : new Date().getDate() -30,
		format : "dd-MMM-yyyy"

	});

	$("#dtOrderTo").kendoDatePicker({
		//value : new Date();,
		format : "dd-MMM-yyyy"

	});

	$("#dtOrderFrom").data("kendoDatePicker").value(moment(fromDate).format("DD-MMM-YYYY"));
	$("#dtOrderTo").data("kendoDatePicker").value(moment(today).format("DD-MMM-YYYY"));
	
	$("#ntPriceFrom").kendoNumericTextBox({
		min: 0,
		max:1000,
		step :1,
		format:"n0",
		decimals: 0
	});

	$("#ntPriceTo").kendoNumericTextBox({
		min: 0,
		max:1000,
		step :1,
		format:"n0",
		decimals: 0
	});

	


});