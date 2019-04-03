
var http = require("http")

http.createServer(function(req ,resp){
    /**
     *  发送 Http 头部
     * @param1 Http 状态值
     * @param2 内容类型
     **/ 
    resp.writeHead(200 , {
        "Content-type":"text/plain"
    });
    resp.end("Welcome to NodeJs");
}).listen(8000)

// 终端打印信息
console.log("Server running at http://127.0.0.1:8000/")