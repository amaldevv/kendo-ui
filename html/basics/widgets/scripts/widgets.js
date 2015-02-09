$(function(){
	 
	$("#atComplete").kendoAutoComplete(["Item1", "Item2", "Item3","Select1","Select2"]);

	$("#ctCalendar").kendoCalendar();

	$("#cmbProduct").kendoComboBox({
					dataTextField : "Name",
					dataValueField : "Code",
					dataSource : [{Name :"Red", Code :"R"},{Name:"Green", Code :"G"},{Name:"Yellow", Code :"Y"}]
				});
});