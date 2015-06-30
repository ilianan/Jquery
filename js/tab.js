$(function(){
    $(".tab-panels .tabs li").on("click", function(e) {
        $(this).siblings().add(".panel").removeClass("active");
        $(".panel").hide();
        $(this).addClass("active");

        var panelToShow = $(this).attr("rel");

        $("#" + panelToShow).addClass("active")
        .slideDown(300);
    })
});