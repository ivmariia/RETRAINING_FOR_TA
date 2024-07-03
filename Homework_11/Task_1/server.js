const http = require("http");

function accept(request, response){
    if(request.url == "/vote"){
        response.setHeader("Access-Control-Allow-Origin", "*");
        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.write("Your vote is assepted:" + new Date());
        response.end();
    }
}

http.createServer(accept).listen(5000);