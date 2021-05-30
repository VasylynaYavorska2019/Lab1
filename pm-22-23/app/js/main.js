function start() {
    func1();
    func2();
    func3();
    func4();
}
window.onload = start;

$(document).ready(function(){
    $(".dash").click(function(){
        $("#panel").slideToggle("slow");
        $(this).toggleClass("active");
    });
});

function navClick(event) {
    alert("Click " /*+ this.href*/);
};

document.addEventListener("DOMContentLoaded",
    function(event) {
        var navArray = document.getElementsByTagName("nav");

        for(var i = 0; i < navArray.length; ++i) {
            var nav = navArray[i];
            var anchors = nav.getElementsByTagName("a");
            for(var ai = 0; ai < anchors.length; ++ai) {
                anchors[ai].addEventListener("click", navClick);
            }
        }
    }
);
$.get(
    "app/data.json",
    function (data) {
        $('#tasksTitle').text(data.tasksTitle);
    }
);
