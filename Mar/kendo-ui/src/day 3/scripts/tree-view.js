$(function () {

    //init 
   // $("#trVw").kendoTreeView();

    //using local datasource
    /*var ds = new kendo.data.HierarchicalDataSource({
        data: [
            {
                text: "Item 1",
                items: [
                    {
                        text: "Item 1.1",
                        items: [
                           { text: "Item 1.1.1" },
                           { text: "Item 1.1.2" },
                        ]
                    },
                    { text: "Item 1.2" }
                ]
            },
            { text: "Item 2" }
        ]
    });*/

    //using remote datasource
   /* var ds = new kendo.data.HierarchicalDataSource({
        transport: {
            read: {
                url: "http://demos.telerik.com/kendo-ui/service/Employees",
                dataType: "jsonp"
            }
        },
        schema: {
            model: {
                id: "EmployeeId",
                hasChildren: "HasEmployees"
            }
        }
    });
    */
    /*$("#trVw").kendoTreeView({
        dataSource: ds,
        dataTextField: "FullName",
        //dragAndDrop: true

    });*/
})