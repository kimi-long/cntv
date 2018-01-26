window.onload = function () {
    var arr = [
        {   //  1
            width:220,
            top:50,
            left:375,
            opacity:40,
            zIndex:2,
            lineHeight:16.5
        },
        {  // 2
            width:300,
            top:100,
            left:250,
            opacity:60,
            zIndex:3,
            fontSize:12
        },
        {   // 3
            width:400,
            top:175,
            left:100,
            opacity:80,
            zIndex:4,
            fontSize:16,
            lineHeight:30
        },
        {  // 4
            width:700,
            top:250,
            left:300,
            opacity:100,
            zIndex:5,
            fontSize:25,
            lineHeight:52.55
        },
        {   //5
            width:400,
            top:175,
            left:800,
            opacity:80,
            zIndex:4,
            fontSize:16,
            lineHeight:30
        },
        {   //6
            width:300,
            top:100,
            left:750,
            opacity:60,
            zIndex:3,
            fontSize:12
        },
        {   //7
            width:220,
            top:50,
            left:700,
            opacity:40,
            zIndex:2,
            lineHeight:16.5
        }
    ];

    //0.获取元素
    var slide = document.getElementById("slide");
    var liArr = slide.getElementsByTagName("li");
    var arrow = slide.children[1];
    var arrowChildren = arrow.children;
    //设置一个开闭原则变量，点击以后修改这个值。
    var flag = true;

    //1.鼠标放到轮播图上，两侧的按钮显示，移开隐藏。
    slide.onmouseover = function () {
        //arrow.style.opacity = 1;
        // animate(arrow,{"opacity":100});
        arrow.style.display="block";
        clearInterval(auto);
    }
    slide.onmouseout = function () {
        //arrow.style.opacity = 1;
        // animate(arrow,{"opacity":0});
        arrow.style.display="none";
        auto=setInterval(autoplay,3000);
    }

    move();
    //3.把两侧按钮绑定事件。(调用同一个方法，只有一个参数，true为正向旋转，false为反向旋转)
    arrowChildren[0].onclick = function () {
        if(flag){
            flag = false;
            move(true);
        }
    }
    arrowChildren[1].onclick = function () {
        if(flag){
            flag = false;
            move(false);
        }
    }
    var auto=null;
    auto=setInterval(autoplay,3000);


    //4.书写函数。
    function move(bool){
        //判断：如果等于undefined,那么就不执行这两个if语句
        if(bool === true || bool === false){
            if(bool){
                arr.unshift(arr.pop());
            }else{
                arr.push(arr.shift());
            }
        }
        //在次为页面上的所有li赋值属性，利用缓动框架
        for(var i=0;i<liArr.length;i++){
            animate(liArr[i],arr[i], function () {
                flag = true;
            });
        }
    }
    function autoplay() {
        arr.push(arr.shift());
        for(var i=0;i<liArr.length;i++){
            animate(liArr[i],arr[i], function () {
                flag = true;
            });
        }
    }
}