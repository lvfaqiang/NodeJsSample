/**
 * 链式流
 * 链式是通过连接输出流到另外一个流并创建多个流操作链的机制。链式流一般用于管道操作。
 */

var fs = require("fs")
var zlib = require("zlib")

/**
 * 压缩 input.txt 文件 为 input.txt.gz
 */
fs.createReadStream("./input.txt")
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream("./input.txt.gz"))

console.log("文件压缩完成")


/**
 * 解压缩文件 input.txt.gz 为 input_01.txt
 */
const zc = zlib.createGunzip()
zc.on("error", function (err) {
    console.log("err: ", err.stack)
})
zc.on("finish", function () {
    console.log("finish")
})

zc.on("end", function () {
    console.log("end")
})
fs.createReadStream("./input.txt.gz")
    .pipe(zc)
    .pipe(fs.createWriteStream("./input_01.txt"))

console.log("文件解压完成。")
