
function GetSearchParams()
{
	debugger;
	var category = $("#drpCategory").val();
	var product = $("#drpProducts").val();
	var OrderFrom = moment( $("#dtOrderFrom").val()).format("YYYY-MM-DD");
	var OrderTo = moment($("#dtOrderTo").val()).format("YYYY-MM-DD");
	var PriceFrom = $("#ntPriceFrom").val();
	var PriceTo = $("#ntPriceTo").val();

	//var url = "http://services.odata.org/V3/Northwind/Northwind.svc/Orders?expand=Order_Details";
	var searchString = "";
	if(category !== undefined & category !== "")
		searchString += " CategoryID eq " + category + " and ";
	if(product !== undefined & product !== "")
		searchString += "  ProductID eq " + product + " and ";
	if(OrderFrom !== undefined & OrderFrom !== "")
		searchString += "OrderDate ge DateTime'" + OrderFrom + "'" + " and ";
	if(OrderTo !== undefined & OrderFrom !== "")
		searchString += "  OrderDate le DateTime'" + OrderTo + "'" + "  ";

	if(PriceFrom !== undefined & PriceFrom !== "")
		searchString += "  round(Freight) ge " + PriceFrom + " and ";
	if(PriceTo !== undefined & PriceTo !== "")
		searchString += "  round(Freight) le " + PriceTo ;		
	return kendo.format(searchString);
}
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
	var fromDate = moment().subtract('20','years');
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

	$("#notMessage").kendoNotification({
		 position: {
            
            pinned: false,
            
            top: 600,
            left: 30
        },
        button: true,
        stacking: "up",
        
        width: 300,
        height: 50
	});
	/*$("#gdOrderDetails").kendoGrid({
		autoBind : true,
		
		dataSource:{
			type : "odata",
			transport : {
				read : {
					url : "http://services.odata.org/V4/Northwind/Northwind.svc/Orders",
            		data: {
                		$expand: "Order_Details"
            		} ,
            		dataType:"odata"
        		}
			},
			schema: {
                model: {
                	id : "OrderID",
                    fields: {
                        OrderID: { type: "number" },
                       
                        OrderDate: { type: "date" }
                       
                    }
                },
                data: function(data) {
           	 		return data.d;
            	}
            },
            pageSize: 20,
            serverPaging: true,
            serverFiltering: true,
            serverSorting: true
		},
		scrollable : true,
		selectable : true,
		columns : [
			"OrderID", "OrderDate"
		]
	});*/

	var dataSource = new kendo.data.DataSource({
        type: "odata",
        transport: {
            read: {
                url: "http://services.odata.org/V3/Northwind/Northwind.svc/Orders",
                data : {
                	$expand :  "Order_Details",
                	$filter : GetSearchParams()
                },
                dataType: "json"
            },
        },
        schema: {
            data: function (data) {
                return data["value"];
            },
            total: function (data) {
                return data["odata.count"];
            },
            model: {
                fields: {
                    OrderID: { type: "number" },
                    CustomerID: { type: "string" },
                  //  Order_Details [ ProductID:{type :"number"} ],
                    ShipName: { type: "string" },
                    OrderDate: { type: "date" },
                    ShippedDate: { type: "date" }
                }
            }
        },
        pageSize: 10,
        serverPaging: true,
        serverFiltering: true,
        serverSorting: true
	});
    $("#gdOrderDetails").kendoGrid({
	        dataSource: {
	        type: "odata",
	        transport: {
	            read: {
	                url: "http://services.odata.org/V3/Northwind/Northwind.svc/Orders",
	                data : {
	                	$expand :  "Order_Details",
	                	$filter : GetSearchParams()
	                },
	                dataType: "json"
	            },
	        },
	        schema: {
	            data: function (data) {
	                return data["value"];
	            },
	            total: function (data) {
	                return data["odata.count"];
	            },
	            model: {
	                fields: {
	                    OrderID: { type: "number" },
	                    CustomerID: { type: "string" },
	                  //  Order_Details [ ProductID:{type :"number"} ],
	                    ShipName: { type: "string" },
	                    OrderDate: { type: "date" },
	                    ShippedDate: { type: "date" }
	                }
	            }
	        },
	        pageSize: 10,
	        serverPaging: true,
	        serverFiltering: true,
	        serverSorting: true
		},
        filterable: true,
        sortable: true,
        pageable: true,
        autoBind:true,
        columns: [
            { field: "OrderID", title : "Order ID", width:"50px" },
            { field: "CustomerID", title : "Customer ID" , width:"50px"},
            { field: "OrderDate" , format:"{0:dd-MMM-yyyy}", width:"50px"},
           
            { field: "ShipName", title : "Shipper" , width:"100px"},
            
            { field: "ShippedDate" , format:"{0:dd-MMM-yyyy}", width:"50px"}
        ]
    
	});
	$("#btnSearch").click(function(){
		debugger;
		var grid = $("#gdOrderDetails").data("kendoGrid");
		var ds = new kendo.data.DataSource({
        type: "odata",
        transport: {
            read: {
                url: "http://services.odata.org/V3/Northwind/Northwind.svc/Orders",
                data : {
                	$expand :  "Order_Details",
                	$filter : GetSearchParams()
                },
                dataType: "json"
            },
        },
        schema: {
            data: function (data) {
                return data["value"];
            },
            total: function (data) {
                return data["odata.count"];
            },
            model: {
                fields: {
                    OrderID: { type: "number" },
                    CustomerID: { type: "string" },
                  //  Order_Details [ ProductID:{type :"number"} ],
                    ShipName: { type: "string" },
                    OrderDate: { type: "date" },
                    ShippedDate: { type: "date" }
                }
            }
        },
        pageSize: 10,
        serverPaging: true,
        serverFiltering: true,
        serverSorting: true
	});
	ds.fetch();
	if(ds.data().length ==0)
	{
		
    	var notificationWidget = $("#notMessage").data("kendoNotification");

    	
    	notificationWidget.show("No Records Found","error");	
    	grid.dataSource.data([]);
	}
	else
		grid.setDataSource(ds);
	});


});
