$(function () {

    //local data
    /* $("#lvItems").kendoListView({
         template: "<li>${Country} -- ${Capital}</li>",
         //selectable: true,
         selectable : "multiple",
         
         dataSource: {
             data: [
                 {
                     Country: "India",
                     Capital: "Delhi"
                 },
                 {
                     Country: "England",
                     Capital: "London"
                 },
                 {
                     Country: "Spain",
                     Capital: "Madrid"
                 },
                 {
                     Country: "Germany",
                     Capital: "Berlin"
                 },
                 {
                      Country: "Russia",
                      Capital: "Moscow"
                 }]
         }
     });*/

    //remote data with templating
    /*$("#lvItems").kendoListView({
        dataSource: {
            transport: {
                read: {
                    url: "http://demos.telerik.com/kendo-ui/service/Products",
                    dataType: "jsonp"
                }
            }
        },
        template: kendo.template($("#tmplItems").html())
    });*/

    //alternating template and paging


    /*var ds = new kendo.data.DataSource({
        transport: {
            read: {
                url: "http://demos.kendoui.com/service/Products",
                dataType: "jsonp"
            }
        },
        pageSize: 4
    });

    $("#pager").kendoPager({
        dataSource: ds
    });

    $("#lvItems").kendoListView({
        dataSource: ds,

        selectable: true,
        navigatable: true,
        template: kendo.template($("#tmplItems").html()),
        altTemplate: kendo.template($("#altTmplItems").html()),
    });
    */
});