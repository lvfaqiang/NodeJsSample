// / <reference path="./typings/index.d.ts" />

var http = require("http")
var url = require("url")

function start(route) {
    function onRequest(req, resp) {
        var pathname = url.parse(req.url).pathname
        console.log("Request for  ", pathname, "received")

        route(pathname)
        
        resp.writeHead(200, { "Content-type": "text/plain" })
        resp.write("Hello world")
        resp.end()
    }

    http.createServer(onRequest).listen(8888)
    console.log("Local server is start ")
}

exports.start = start