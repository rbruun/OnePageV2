$(document).ready(function () {
    WireEvents();

});

function WireEvents () {

    $(".planDetail").click(function() {
        $(".planDetail").toggleClass("planDetailExpanded");
        $(".planAreaCopy").toggleClass("planAreaExpanded");
    });
}

