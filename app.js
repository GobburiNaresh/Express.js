const http = require('http');
const routes = require ('./Routes');
console.log(routes.someText);

const server=http.createServer(routes.handler);
server.listen(4000);