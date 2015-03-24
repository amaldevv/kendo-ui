$(function () {

    //initialization
    //using input element
    /*$("#drpCategory").kendoDropDownList({
        dataSource: ["Cap", "Belts", "Wallets", "Shirts", "Jeans"]
    });*/

    //using select element
    //$("#drpCategory").kendoDropDownList();

    //using remote data
    /*$("#drpCategory").kendoDropDownList({
        index: 0,
        
        headerTemplate: '<div class="dropdown-header">' +
                                '<span class="k-widget k-header">Photo</span>' +
                                '<span class="k-widget k-header">Contact info</span>' +
                            '</div>',
        valueTemplate: '<img class="selected-value" src=\"data:image/jpeg;base64,#:data.Picture.slice(104)#\" alt=\"#:data.CategoryID#\" /><span>#:data.CategoryName#</span>',
        template: '<span class="k-state-default"><img src=\"data:image/jpeg;base64,#:data.Picture.slice(104)#\" alt=\"#:data.CategoryID#\" /></span>' +
                  '<span class="k-state-default"><h3>#: data.CategoryName #</h3><p>#: data.Description #</p></span>',

        dataTextField: "CategoryName",
        dataValueField: "CategoryID",
        dataSource: {
            type: "odata", // specifies data protocol
            transport: {
                read: "http://demos.telerik.com/kendo-ui/service/Northwind.svc/Categories"
            }
        }
    });
    */

    //cascading dropdowns
    /*$("#drpCasProduct").kendoDropDownList({
        autoBind: false,
        cascadeFrom: "drpCategory",
        optionLabel: "Select product...",
        dataTextField: "ProductName",
        dataValueField: "ProductID",
        dataSource: {
            type: "odata",
            serverFiltering: true,
            transport: {
                read: "http://demos.telerik.com/kendo-ui/service/Northwind.svc/Products"
            },
            group: { field: "SupplierID" }
        }
    });*/







});