$(function(){
	$("#pnlBarSearch").kendoPanelBar();
	
	$("#cmbCategory").kendoDropDownList({
		optionLabel : "Select Category",
		dataTextField : "CategoryName",
		dataValueField :"CategoryID",
		dataSource : {
			type : "odata",
			serverFiltering : true,
			transport : {
				read : "http://demos.telerik.com/kendo-ui/service/Northwind.svc/Categories"
			}
		}
	});

	$("#cmbProducts").kendoDropDownList({
		autobind : false,
		optionLabel : "Select Product",
		cascadeFrom : "cmbCategory",
		dataTextField : "ProductName",
		dataValueField :"ProductID",
		dataSource : {
			type : "odata",
			serverFiltering : true,
			transport : {
				read : "http://demos.telerik.com/kendo-ui/service/Northwind.svc/Products"
			}
		}
	});


});