function say(content) {
    console.log(content)
}
/**
 * 
 * @param {参数类型为方法类型} func 
 * @param {参数类型为任意类型} value 
 */
function excute(func, value) {
    func(value)
}

excute(say, "Hello")
/**
 * 参数为一个匿名函数， 一个字符串
 */
excute(function (msg) {
    console.log(msg)
}, "World")

/**
 * 参数为两个匿名函数
 */
excute(function (func) {
    func()
}, function () {
    console.log("params is Method")
})