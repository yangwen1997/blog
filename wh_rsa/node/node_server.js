var http = require("http");
var url = require("url");
var qs = require("querystring");
var fs = require("fs");


//搭建一个后台http请求的服务器 req客户端的请求,res,给客户端的响应
http.createServer(function(req,res){
    //设置请求头
        res.setHeader("Access-Control-Allow-Origin","*");

        var result = "";
        //url parse():可以把url分成一小段一小段,pathname为域名后的地址
        //如 http://127.0.0.1:8080/apps : pathname就是/apps
        // var pathName = url.parse(req.url).pathname;

        req.addListener("data",function (data) {
            result += data
        });

        req.on("end",function(){
            var obj = url.parse(req.url,true);

            const pathName = obj.pathname;
            const GET = obj.query;
            const POST = querystring.parse(result);
            if(pathName == '/user'){
                switch(GET.act) {
                    case 'reg':
                        if(users[GET.user]){
                            res.write('{"ok":false,"msg":"该用户已存在"}')
                        }else{
                            users[GET.user] = GET.pass;
                            res.write('{"ok":true,"msg":"注册成功"}')
                        }

                    case 'login':
                }
            }
        })

});
