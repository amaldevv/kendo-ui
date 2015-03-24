// JavaScript source code

//local data binding
$(function () {

    //creating combo from input element
    /*$("#cmbProduct").kendoComboBox({
        dataTextField: "text",
        dataValueField: "value",
        dataSource: [
            { text: "Product 1", value: "1" },
            { text: "Product 2", value: "2" },
            { text: "Product 3", value: "1" },
            { text: "Product 4", value: "2" },
            { text: "Product 5", value: "1" },
            { text: "Product 6", value: "2" }
        ]
    });*/

    //using select element
    //$("#cmbProduct").kendoComboBox();

    //remote data
    /*$("#cmbProduct").kendoComboBox({
        index: 2,
        //using templates
        template: $("#cbTemplate").html(),
        headerTemplate: $("#cbHeaderTemplate").html(),
        dataTextField: "ProductName",
        dataValueField: "ProductID",
        filter: "contains",
        dataSource: {
            transport: {
                read: {
                    dataType: "jsonp",
                    url: "http://demos.telerik.com/kendo-ui/service/Products"
                }
            }
        }
    });*/

    //set width
    /*var cbBox = $("#cmbProduct").data("kendoComboBox");
    cbBox.list.width(400);*/

});
