// JavaScript source code -- auto complete

//local binding
$(document).ready(function () {

    //widget initalization with data
    //$("#atComplete").kendoAutoComplete(["India", "Australia", "New Zealand", "South Africa", "Ireland", "Austria", "Iceland", "Syria", "Sri Lanka"]);

    //using datasource object
   /* var data = ["India", "Australia", "New Zealand", "South Africa", "Ireland", "Austria", "Iceland", "Syria", "Sri Lanka"];
    $("#atComplete").kendoAutoComplete({ dataSource: data });
    */
    //specify filter
    /*var ctrl = $("#atComplete").getKendoAutoComplete();
    ctrl.setOptions({
        filter: "startswith"
        //filter : "endswith"
    });*/


    /*$("#atComplete").kendoAutoComplete({
        minLength: 3,
        dataTextField: "ProductName", // JSON property name to use
        dataSource: new kendo.data.DataSource({
            type: "odata", // specifies data protocol
            transport: {
                read: "http://demos.telerik.com/kendo-ui/service/Northwind.svc/Products"
            }
        })

    });*/

});

