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

	$("#btnSearch").click(function(){
		var category = $("#drpCategory").val();
		var product = $("#drpProducts").val();
		var OrderFromOrderFrom = $("#dtOrderFrom").val();
		var OrderTo = $("#dtOrderTo").val();
		var PriceFrom = $("#ntPriceFrom").val();
		var PriceTo = $("#ntPriceTo").val();

		var url = "http://services.odata.org/V4/Northwind/Northwind.svc/Orders?expand=Order_Details";
		var searchString = "&$filter ";
		if(category !=== undefined & category !== "")
			searchString += " CategoryID eq " + category;
		if(product !=== undefined & product !== "")
			searchString += " and ProductID eq " + product;
		if(OrderFrom !=== undefined & OrderFrom !== "")
			searchString += " and OrderDate ge DateTime'" + OrderFrom + "'";
		if(OrderTo !=== undefined & OrderFrom !== "")
			searchString += " and OrderDate le DateTime'" + OrderTo + "'";

		if(PriceFrom !=== undefined & PriceFrom !== "")
			searchString += " and round(Freight) ge " + PriceFrom ;
		if(PriceTo !=== undefined & PriceTo !== "")
			searchString += " and round(Freight) le " + PriceTo ;		
	});


});