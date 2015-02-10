$(function(){
	 
	$("#atComplete").kendoAutoComplete(["Item1", "Item2", "Item3","Select1","Select2"]);

	$("#ctCalendar").kendoCalendar();

	$("#cmbProduct").kendoComboBox({
					dataTextField : "Name",
					dataValueField : "Code",
					dataSource : [{Name :"Red", Code :"R"},{Name:"Green", Code :"G"},{Name:"Yellow", Code :"Y"}]
				});

	$("#dtDatePicker").kendoDatePicker({
		//value : new Date().getDate() -30,
		format : "dd-MMM-yyyy"

	});

	$("#dtDateTimePicker").kendoDateTimePicker({
  		animation: {
	   		close: {
	     	effects: "fadeOut zoom:out",
	     		duration: 300
	   		},
	   		open: {
	     		effects: "fadeIn zoom:in",
	     		duration: 300
	   		}
  		}
	});

	$("#drpDropDown").kendoDropDownList({
        index: 0,
        dataTextField: "ContactName",
        dataValueField: "CustomerID",
        dataSource: {
            type: "odata", // specifies data protocol
            transport: {
                read: "http://demos.telerik.com/kendo-ui/service/Northwind.svc/Customers"
            }
        }
    });

    $("#editor").kendoEditor({
         tools: [
	         "bold",
	         "italic",
	         "underline",
	         "foreColor"
     	]
  	});

  	$("#nmNumericTextBox").kendoNumericTextBox({
		min: 0,
		max:1000,
		step :1,
		format:"n2",
		decimals: 2
	});


  	$("#dtTimePicker").kendoTimePicker({
        format: "hh:mm:ss tt"
    });

     $("#lstContacts").kendoListView({
          template: "<li>${FirstName} ${LastName}</li>",
          dataSource: {
              data: [
                  {
                      FirstName: "Joe",
                      LastName: "Smith"
                  },
                  {
                      FirstName: "Jane",
                      LastName: "Smith"
              }]
          }
      });

     $("#clPickr").kendoColorPicker({palette : "basic"});

     $("#slider").kendoSlider({
	    min: 10,
	    max: 50,
	    orientation: "horizontal",
	    smallStep: 1,
	    largeStep: 10
	});
	

	$("#btnSend").kendoButton().css("background-color", "gray");

	var btnSend = $("#btnSend").data("kendoButton");
	btnSend.bind("click", function(e) {
	    alert("Clicked Send button");
	}); 

	$("#msTextBox").kendoMaskedTextBox({
            mask: "000000"
        });

	 $('#multiselect').kendoMultiSelect();


	 $("#grdDetails").kendoGrid({
    dataSource: {
        type: "odata",
        transport: {
            read: "http://demos.telerik.com/kendo-ui/service/Northwind.svc/Customers"
        },
        pageSize: 20
    },
    height: 550,
    groupable: true,
    sortable: true,
    pageable: {
        refresh: true,
        pageSizes: true,
        buttonCount: 5
    },
    columns: [{
        field: "ContactName",
        title: "Contact Name",
        width: 200
    }, {
        field: "ContactTitle",
        title: "Contact Title"
    }, {
        field: "CompanyName",
        title: "Company Name"
    }, {
        field: "Country",
        width: 150
    }]
});

$("#tbStrip").kendoTabStrip();
var tb = $("#tbStrip").data("kendoTabStrip");
tb.select(0);

});

