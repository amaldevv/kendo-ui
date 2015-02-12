$(function(){
	 var serviceBaseUrl = "http://services.odata.org/V3/(S(cxxe3yxe5l3f2c2hbxcaiuo2))/OData/OData.svc/Products";
	var ds = new kendo.data.DataSource({
		type : "odata",
		transport :{
			read : {
				url : serviceBaseUrl ,
				dataType : "json"
			},
			update : {
				url : function(data) {
					return serviceBaseUrl + "(" + data.ID + ")"
					type : "PUT"

				},
				dataType: "json",
                contentType: "application/json;odata=verbose",
                headers: {
                    "accept": "application/json;odata=verbose"
                }
			},
			destroy : {
				url : function(data) {
					return  serviceBaseUrl + "(" + data.ID + ")"
				}
			},
			create : {
				url : serviceBaseUrl 
			},
		},
		batch : false,
		schema : {
			data: function (data) {
                return data["value"];
            },
            total: function (data) {
                return data["odata.count"];
            },
			model : {
				id: "ID",
				fields :{
					ID : {
						editable : false,
						nullable : true
					},
					Name :{
						validation :{
							required : true,
						}
					},
					Description :{
						type : "text",
						
						validaton : {
							required : true
							
						}
					},
					ReleaseDate :{
						type : "date",
						
						editable :false
					},
					Price :{
						type : "number",
						defaultValue : 100,
						validaton : {
							required : true,
							min : 1,
							decimals : 2
						}
					},
					Rating : {
						type :"number",
						defaultValue : 0,
						validation :{
							
							min : 1,
							decimals : 0
						}
					}
				}
			}
		}
	});

	//step 1
	/*$("#grdProducts").kendoGrid({
		dataSource : ds,
		
		columns : [
			{ field : "ProductName", title : "Product Name" }, 
			{ field : "UnitPrice", title : "Unit Price", headerAttributes : { "class" : "center-header"} },
			{ field : "UnitsInStock", title : "Unit in Stock", headerAttributes : { "class" : "right-header"}}
		]
	});*/


	//step 2 - toolbars, command
	$("#grdProducts").kendoGrid({
		dataSource : ds,
		editable :  "inline",
		toolbar : ["create"],
		columns : [
			{ field : "Name", title : "Title" }, 
			{ field : "Description", title : "Description", headerAttributes : { "class" : "center-header"} },
			{ field : "Price", title : "Price", headerAttributes : { "class" : "right-header"}},
			{ command : ["edit", "destroy" ], title : "&nbsp;" }
		]
	});

});