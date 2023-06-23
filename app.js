const http = require('http');
const server=http.createServer((req,res)=>{
    console.log('naresh');
    process.exit();

})
server.listen(4000);