/*
*  我们没有办法去监听触发 => 写在底层代码中
*  onclick addEventListener 与removeEventListener
*
* */

// 封装 addEventListener removeEventListener 底层思想 需要 onclick
/*
*  具体要做什么: 任何一个元素都可以有我的方法 =>在原型操作
* */

let div = document.querySelector('div');
let li = document.querySelector('li');

//设计一个数据结构:
/*
*  {
*       'click':[foo1,foo2],
*       'mousemove':[foo3]
*   }
* */


HTMLElement.prototype.myAddEventListener = (function () {
    //this指的那个对象
    let eventObject = {};
    return function (type, handleFunction) {
        type = type.toLowerCase();

        eventObject[type] = eventObject[type] || [];
        // 判断数组里面有没有之前添加过的函数
        // 如果有就 return
        if (!eventObject[type].includes(handleFunction)) return;
        //
        eventObject[type].push(handleFunction)

        //事件绑定处理
        this['on' + type] = function () {
            eventObject[type].forEach(item => item())
        }
    }
})();