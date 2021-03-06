/*
* 事情: 事情发生了的状态；用户调整点击等等
*  - 需要在什么时候做什么样的事情
*  - 核心：交互
*
* 事件种类:点击事情 滚动事件 拖s事件 鼠标移动事件 键盘事件 请求事件 加载事件 等等
*
* 需要有特定函数处理：
*
*  以一个事件参考:
*     1.事件主体对象(谁发生了什么样的事情)
*     2.事件类型(涉及很多单词,尽可能记忆一些单词)
*     3.事件处理函数
*     4.面向百度
*
*   想到 什么时候的时候 就考虑 事件问题
*   1.事件绑定： 直接函数赋值给点击事件 box.onclick = handleClick;
*
*   特点:1.事件他重复赋值会被覆盖(一个元素同一个事件只能有一个处理函数)
*       2.函数的this this会指向那个元素 箭头函数会绑定上下文
*       3.事件对象:任何事件触发浏览器都会帮我们整理一个事件对象,
*         存储事件触发的一些细节是事件处理函数函数第一个参数
*
*         isTrust 是否是原生的事件
*         携带了很多参数,比如点击位置点击,点击时候其他案例的状态
*         能获取点击时候的鼠标位置信息
*         事件源:e.target触发事件的那个对象得到底是谁
*       4.事件绑定取消绑定, 直接赋值为null
*
*  键盘事件:onkeydown按下;  onkeyup抬起;
*
* */


/*
*   事件模型：事件监听: addEventListener 添加事件监听
*   两个参数:
*       第一个是事件类型
*               不需要写 on 直接写事件名称 以字符串形式传入
*       第二个事件处理函数
*
* 事件监听：
*    1.新注册了一个函数处理操作,可以有多个处理函数同时执行, 谁先写谁先执行
*    2.事件监听是以函数作为基准，相同的函数不能重复注册;
*    3.事件监听的事情对象 和 之前的绑定的事件对象是一致的
*
*
* 事件绑定 === 事件监听  //false
*
*   事件监听取消：removeEventListener
*   -传和绑定一致的参数;
* */