//点击li 元素然后打印元素的innerHTML
let liList = [...document.querySelectorAll('.list > li')];

//事件的循环的绑定 1
// liList.forEach( li=>{
//     li.onclick = function () {
//         console.log(this.innerHTML);
//     }
// });

// 事件绑定 进行10次传值 => 生成了 10 个函数

// 事件监听 10次赋值
// liList.forEach( li=>{
//    li.addEventListener('click',function () {
//
//        console.log(li.innerHTML);
//    })
// });

// 事件委托: 思想

//所有li父亲 单个元素 事件对象帮助我们记录了信息
// e.target 事情的目标 触发事件的主体对象
let ul = document.querySelector('.list');

ul.addEventListener('click',function (e) {
    // 委托
    if(e.target.tagName.toLowerCase() === 'li'){
        // console.log(e.target.innrtHTML);
        console.log(e.target.innerHTML);
        const  li = e.target;
        li.style.background = li.dataset.type || '';
    }
});

