const http = require("http");	//http模块用来创建http服务
const createHandler = require("github-webhook-handler");//中间件，用来监听github的webHook的事件

const handler = createHandler({
  path: "/webhook",
  secret: "mySecretKiKoHashKey",
});//创建实例，path和secret是自定义的，后面在github上配置时需要保持一致

http.createServer(function (req, res) {
  handler(req, res, function () {
    res.statusCode = 200;
  });
}).listen(8082);//创建http服务并且监听8082端口

handler.on("push", function (event) {
  console.log(event)
})//监听github仓库的push事件
