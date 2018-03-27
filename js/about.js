$(function () {
    $(".aboutLabTop-li").click(function () {
        $(".aboutLabTop-li").removeClass("aboutLabTop-active");
        $(this).addClass("aboutLabTop-active")
        $(".about-main-part").addClass("hide")
        let showPart=$(this).attr("data-infor");
        $('.'+showPart).removeClass("hide")
    })
})