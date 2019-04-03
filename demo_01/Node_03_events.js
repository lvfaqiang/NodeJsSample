// 引入 Events 模块。
var event = require("events")
// 创建 EventEmitter 对象
var ee = new event.EventEmitter()

var eventName = "eventName"

// 创建事件处理函数
var eventFun = function (a, b, c) {
    console.log("eventName : " + (a + b + c))
}

/**
 *  绑定事件, 可绑定多个事件
 * ee.on("eventName" , eventListener1,eventListener2.... )
 */
ee.on(eventName, eventFun)

// 为某个 event 再次添加一个 Listener
ee.addListener(eventName, function (a, b, c) {
    console.log("result : ", a, b, c)
})

ee.addListener("error", function () {
    console.log("error----------------------------")
})

/**
 * 为 event 添加一个只执行一次的 Listener .
 */
ee.once(eventName, function (a, b, c, d) {
    console.log("once function ------", a, b, c, d)
    // 输出  once function ------ 1 2 3 undefined

    /**
     *  发送 error 信息，当代码执行异常时，抛出该异常。
     * 如果添加了  error 的 Listener 则执行 error listener 之后，继续往后执行，
     * 如果没添加 error Listener 则程序异常退出。
     */
    ee.emit("error")
})

// 触发事件 1
ee.emit(eventName, 1, 2, 3)
// 延时3秒钟执行
setTimeout(() => {
    // 触发事件 2
    console.log("延时触发事件")
    ee.emit(eventName, 1, 3, 0)
}, 3000);