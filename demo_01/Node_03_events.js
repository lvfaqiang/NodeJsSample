// 引入 Events 模块。
var event = require("events")
// 创建 EventEmitter 对象
var ee = new event.EventEmitter()

// 创建事件处理函数
var eventFun = function (a, b, c) {
    console.log("eventName : " + (a + b + c))
}

// 绑定事件
ee.on("eventName", eventFun)

// 触发事件
ee.emit("eventName", 1, 2, 3)

// 延时3秒钟执行
setTimeout(() => {
    // 触发事件
    console.log("延时触发事件")
    ee.emit("eventName", 1, 3, 0)
}, 3000);