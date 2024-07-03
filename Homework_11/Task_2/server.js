const http = require("http");

const authors = [
    { id: 1, name: "David Flangan" },
    { id: 2, name: "Kyle Simpson" },
    { id: 3, name: "John Resig" },
    { id: 4, name: "Jeremy Keith" }
];

function accept(request, response) {
    if (request.url === "/authorslist") {
        response.setHeader("Access-Control-Allow-Origin", "*");
        response.writeHead(200, {'Content-Type': 'application/json'});
        response.write(JSON.stringify(authors));
        response.end();
    } else {
        response.writeHead(404, {'Content-Type': 'text/plain'});
        response.write("Not Found");
        response.end();
    }
}

http.createServer(accept).listen(5000);
