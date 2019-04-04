var fs = require("fs")
/**
 *  input.txt 文件必须是已存在的，否则报错
 *  Error: ENOENT: no such file or directory
 */
var readStream = fs.createReadStream("./input.txt")

var writeStream = fs.createWriteStream("./pipe_write.txt")

/**
 * 管道流
 * 管道提供了一个输出流到输入流的机制。通常我们用于从一个流中获取数据并将数据传递到另外一个流中。
 * 以下操作就是  把 readStream 读取到的数据 通过管道流 输入到 writeStream
 * 
 * 在终端 输入  cat [filePath] 查看文件内容
 */
readStream.pipe(writeStream)

// 追加文本
var wStream = fs.createWriteStream("./outappend.txt", {
    'flags': 'a'    // 设置读写模式为 append 
})
wStream.write("这是初始数据。")
readStream.pipe(wStream)