var fs = require("fs")

/**
 *  所有的 Stream 对象都是 EventEmitter 的实例。常用的事件有：

    data - 当有数据可读时触发。

    end - 没有更多的数据可读时触发。

    error - 在接收和写入过程中发生错误时触发。

    finish - 所有数据已被写入到底层系统时触发。
 */

//  读取流 
var stream = fs.createReadStream("./input.txt")
stream.setEncoding("utf-8")

var readContent = ""
stream.on("data", function (chunk) {
    readContent += chunk
})

stream.on("end", function () {
    console.log("end ---- ", readContent)
})

stream.on("error", function (err) {
    console.log(err.stack)
})

stream.on("finish", function () {
    // finish 是写入完成之后，才会被触发。
    console.log("finish")
})

console.log("程序执行完毕")

console.log("-------------------------------我是分割线-------------------------------")

//  写入流
var content = "Node Js Output file ."
var writeStream = fs.createWriteStream("./output.txt")

writeStream.write(content)

fs.appendFile("./output.txt", "这是追加数据。", function (err) {
    console.log("----------")
})

// 标记文件末尾，表示当前内容以及写完了。
writeStream.end()

writeStream.on("finish", function () {
    console.log("-------   finish ")
})

