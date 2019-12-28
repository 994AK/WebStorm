let box = document.querySelector('.box');

function handleClick() {
    console.log('处理了点击');
}

// 第一种点击效果
box.onclick = handleClick;

box.onclick = () => {
    handleClick.call(box);
};

//按下哪个键
// window.onkeydown = function (e) {
//     // win建Meta键
//     console.log('按下', e);
// };

//抬起
// window.onkeyup = function (e) {
//     console.log('抬下', e);
// };

//组合案件怎么操作
// 在一个按键被按下未抬起,再按下另一个按键,组合操作触发


// // 谁正在被按下
// let keydownState = {};
//
//

// class register{
//     constructor() {
//         this.keydownState = {};
//         this.init()
//     }
//     init(){
//         // 按下哪个键
//         window.onkeydown = function (e) {
//             if(!this.keydownState[e.key.toLocaleLowerCase()])
//                 // win建Meta键
//                 console.log('按下', e);
//             this.keydownState[e.key.toLocaleLowerCase()] = true;
//         };
//
// // 抬起
//         window.onkeyup = function (e) {
//             console.log('抬起', e);
//             delete this.keydownState[e.key.toLocaleLowerCase()];
//         };
//     }
// }

//鼠标按下
// window.onmousedown = (e) =>{
//     console.log('按下',e)
// };
//鼠标抬起
// window.onmouseup =(e) =>{
//     console.log('抬上',e)
// }

// 会触发很多次
// box.onmousemove = function (e) {
//     // console.log(e);
//     box.style.backgroundColor = "#fff";
// };


//---------------------------//

// 事件模型:
box.addEventListener('click',function () {
    console.log(this);
});


function foo() {
    console.log('click绑定了')
}
//添加 监听事件
box.addEventListener('click',foo);

//移出 监听事件
box.removeEventListener('click',foo);
