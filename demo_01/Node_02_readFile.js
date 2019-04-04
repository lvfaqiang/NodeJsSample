
var fs = require("fs")  // 导入文件系统模块。

var filePath = "Desktop/Personal/NodeJs/demo_01/input.txt"
// 同步读取文件。
var data = fs.readFileSync(filePath)

console.log("data : "+data.toString())

// 异步文件读取
var d = fs.readFile(filePath ,function(err , data){
    console.log("异步 data : "+data.toString())
})

console.log("程序执行完成")


// 执行结果
/**
 *  data : I am not a good man"
    程序执行完成
    异步 data : I am not a good man"
 */