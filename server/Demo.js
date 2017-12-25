/**
 * Created by liusir-pc on 2017/12/25.
 */
let str = require('./User');
console.log(`${str.userName},${str.say()}`);

let http = require('http');
let url = require('url');
let util = require('util');
http.createServer((req,res)=>{
    res.statusCode = 202;

  res.setHeader("Content-Type","text/plain;utf-8");
  console.log(req.url)
  console.log(url.parse(req.url))
  res.end(util.inspect(url.parse(req.url)));
}).listen(3000,'127.0.0.1',()=>{
  console.log("服务器已经运行，请输入http://127.0.0.1:3000");
})
