$(function () {
    $(".aboutLab-li").click(function () {
        $(".aboutLab-li").removeClass("aboutLab-active");
        $(this).addClass("aboutLab-active")
        $(".about-main-part").addClass("hide")
        let showPart=$(this).attr("data-infor");
        $('.'+showPart).removeClass("hide")
    })
})