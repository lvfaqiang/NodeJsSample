/**
 * __filename 表示当前正在执行的脚本的文件名。
 * 它将输出文件所在位置的绝对路径，且和命令行参数所指定的文件名不一定相同。 如果在模块中，返回的值是模块文件的路径。
 */
console.log(__filename)  // 输出  /[本地文件路径]/NodeJs/demo_01/Node_09_Global.js

/**
 * __dirname 表示当前正在执行的脚本的目录名。
 */

console.log(__dirname)  // 输出  /[本地文件路径]/NodeJs/demo_01

console.time("计时阶段")    // 与 timeEnd 结合进行计算时间间隔

var timeOut = setTimeout(() => {
    console.info("延时 3 秒执行了该语句")
}, 3000)

clearTimeout(timeOut)   // 直接清理了，timeOut 函数就不执行了。

var interval = setInterval(() => {
    console.info("每 2 秒执行一次")
}, 2000)

clearInterval(interval) // 类似于 clearTimeout , 这个也是直接清理了 setInterval 函数。

console.warn("定时器都被清理了。")

console.timeEnd("计时阶段")

console.trace("---------------")


/**
 * @param1 参数1 返回 true or false 的表达式
 * @param2 如果 param1 为 false , 则 返回 param2 , 否则无输出。
 */
console.assert(!__filename.trim(), "filename") 

