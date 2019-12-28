//布置一个作业:尝试做一下 鼠标按下盒子移动盒子跟着动,鼠标抬起,盒子停下;


let box = document.querySelector('.box');

//随机颜色
function rgb(){//rgb颜色随机
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    let rgb = '('+r+','+g+','+b+')';
    return rgb;
}

// 移动元素
function onmousemove(e){
    //鼠标按下 添加鼠标样式
    box.style.backgroundColor=`rgb${rgb()}`;
    box.style.left = e.clientX -50  + 'px';
    box.style.top = e.clientY -50 + 'px';
}
// 按下鼠标
function mousedown(e) {

    //鼠标移动事件开始
    window.addEventListener('mousemove',onmousemove);
    rgb();
    console.log('事件已开始')
}

////鼠标抬起;
function mouseup(e){
    //鼠标移动事件结束
    window.removeEventListener('mousemove',onmousemove);
    box.style.backgroundColor='greenyellow';
    console.log('事件已经结束')
}
//鼠标按下
box.addEventListener('mousedown',mousedown);
//鼠标结束
box.addEventListener('mouseup',mouseup);


