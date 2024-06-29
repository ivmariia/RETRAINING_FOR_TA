// TASK_1
// const os = require("node:os");
// const http = require("http");
// const path = require("path");

// http.createServer((request, response) =>{
//     response.writeHead(200, { 'Content-Type': 'text/html' });
//     response.write("<h1>System information</h1>");
//     response.write(`Current user name: ${os.userInfo().username}<br>`);
//     response.write(`OS type: ${os.type()}<br>`);
//     response.write(`System work time: ${os.uptime()} minutes<br>`);
//     response.write(`Current work directory: ${process.cwd()}<br>`);
//     response.write(`Server file name: ${path.basename(__filename)}<br>`);
//     response.end();
// }).listen(5000);
// END_TASK_1

// TASK_2
// const os = require("node:os");
// const http = require("http");
// const personalModule = require('./personalmodule');
// const username = os.userInfo().username;

//  http.createServer((request, response) => {
//     response.writeHead(200, { 'Content-Type': 'text/html' });
//     response.write(`Date of request: ${new Date()}<br>`);
//     response.write(personalModule.getGreetingMsg(username));
//     response.end();
// }).listen(8000);

// END_TASK_2
