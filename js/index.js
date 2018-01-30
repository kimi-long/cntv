window.onload=function () {
    var slide=document.getElementsByClassName("slide");
   var ul=document.getElementsByClassName("slideUL")[0];
    var clickArr=document.getElementsByClassName("clickItem");
    var left=document.getElementsByClassName("prev");
    var right=document.getElementsByClassName("next");
    var key=0;
    var clickNO=0;
    function  move(ele,target) {
        clearInterval(ele.act)
        ele.act=setInterval(function () {
            console.log(ele.offsetLeft);
            var speed=target-ele.offsetLeft>0?Math.floor((target-ele.offsetLeft)/5):Math.ceil((target-ele.offsetLeft)/5);
            // console.log(speed);
            var chazhi=target-ele.offsetLeft;
            ele.style.left=ele.offsetLeft+speed+'px';
            if(Math.abs(chazhi)<=5){
                ele.style.left=target+'px';
                clearInterval(ele.act)
            }
        },80)
    }

    for (var i = 0; i < clickArr.length; i++) {
        clickArr[i].index=i;
        clickArr[i].onclick=function () {
            for (var j = 0; j < clickArr.length; j++) {
                clickArr[j].className="clickItem";
            }
            this.classList.add("clickActive")
            key=clickNO=this.index;
            move(ul,-this.index*700)
        }
    }
    function autoPlay() {
        key++;
        if (key>clickArr.length){
            ul.style.left=0+'px';
            key=1;
        }
        move(ul,-key*700);
        clickNO++;
        if(clickNO>(clickArr.length-1)){
            clickNO=0;
        }
        for (var i = 0; i < clickArr.length; i++) {
            clickArr[i].className='clickItem';
        }
        clickArr[clickNO].classList.add("clickActive")
    }
    var autoshow=setInterval(autoPlay,3000);
    slide.onmouseout=function () {
        autoshow=setInterval(autoPlay,3000);
        LR.style.display="none";
    }
    slide.onmouseover=function () {
        clearInterval(autoshow);
        LR.style.display="block";
    }
    left.onclick=function () {
        key--;
        if (key<0){
            ul.style.left=-5600+'px';
            key=7;
        }
        move(ul,-key*500);
        clickNO--;
        if(clickNO<0){
            clickNO=7;
        }
        for (var i = 0; i < clickArr.length; i++) {
            clickArr[i].className='clickItem';
        }
        clickArr[clickNO].classList.add('clickActive');
    }
    right.onclick=function () {
        autoPlay();
    }
}