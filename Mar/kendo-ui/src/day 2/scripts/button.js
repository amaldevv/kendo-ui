// JavaScript source code - button
$(function () {

    //widget initalization
    $("#btContent button").kendoButton();

    //binding events
    var btnSend = $("#btnSend").data("kendoButton");
    btnSend.bind("click", function (e) {
        alert("Clicked Send button");
    });

    //button with icons
    $("#btnEdit").kendoButton({
            spriteCssClass: "k-icon k-edit"
        });
});
