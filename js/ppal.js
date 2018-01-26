$(function () {
    var a=$(".pageone");
    var b=$(".pagetwo");
    // 制作服务和开发服务两个按钮
    var aa=$(".onepage");
    var bb=$(".twopage");
    // 对应的页面
    var topone=$(".topone");
    var toptwo=$(".toptwo");
    // 顶上的两栏
    var topleft=$(".topLeft")
    var topright=$(".topRight")
    // 对应的页面
    aa.addClass("show");
   a.click(function(){
       aa.addClass("show");
       a.addClass("act");
      bb.removeClass("show");
       b.removeClass("act");
   })
    b.click(function(){
        aa.removeClass("show");
        a.removeClass("act");
        bb.addClass("show");
        b.addClass("act");
    })
    topleft.click(function () {
        topone.removeClass("hide");
        toptwo.removeClass("show");
        topleft.addClass("active");
        topright.removeClass("active");
    })
    topright.click(function () {
        topone.addClass("hide");
        toptwo.addClass("show");
        topleft.removeClass("active");
        topright.addClass("active");
    })
})