// 创建一个长度为 10、且用零填充的 Buffer。
const buf1 = Buffer.alloc(10);
console.log(buf1)

const buf2 = Buffer.from("发强")   // 官方推荐使用此方法创建 Buffer 实例。
console.log(buf2.toString("hex"))


/**
 * 更多请查阅 http://www.runoob.com/nodejs/nodejs-buffer.html
 */