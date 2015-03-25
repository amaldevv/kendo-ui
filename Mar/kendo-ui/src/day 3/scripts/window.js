$(function () {

    // init
   // $("#wnd").kendoWindow();
});

function ShowWindow() {
    debugger;
    $('#cpContent').css("display", "none");
    $('#meContent').css("display", "none");
    $('#ntContent').css("display", "none");
    $('#dpContent').css("display", "none");
    $('#edContent').css("display", "none");
    $('#lvContent').css("display", "none");
    $('#msContent').css("display", "none");
    $('#tbContent').css("display", "none");
    $('#tvContent').css("display", "none");
    $('#wnContent').css("display", "block");

    var window = $("#wnd");

    if (!window.data("kendoWindow")) {
        window.kendoWindow({
            width: "400px",
            title: "Window Sample",
            actions: [
                "Pin",
                "Settings",
                "Minimize",
                "Maximize",
                "Close"
            ],
            close: function () {
                window.hide();
            }
        });
    }
    window.data("kendoWindow").wrapper.find(".k-i-Settings").click(function (e) {
        alert("Settings button clicked");
        e.preventDefault();
    });

    window.data("kendoWindow").center().open();
    window.show();

}