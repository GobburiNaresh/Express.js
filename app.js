const http = require('http');
const fs=require('fs');
const server=http.createServer((req,res)=>{
    const url = req.url;
    const method =req.method;
    if(url === '/'){
        fs.readFile('message.txt', 'utf8', (err, data) => {
            if (err){
            console.log(err);
            }
            console.log(`data from file ` + data); 
            res.write('<html>');
            res.write('<head><title>enter message</title></head>');
            res.write(`<body>${data}</body>`);
            res.write('<body><form action="/message" method ="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
            res.write('</html>');
            return res.end();
        });

    }
    else if(url ==='/message' && method ==='POST'){
        const body = [];
        req.on('data', (chunk) =>{
            console.log(chunk);
            body.push(chunk)
        });
        return req.on('end',() => {
            const parsedBody = Buffer.concat(body).toString();
            console.log()
            const message = parsedBody.split('=')[1];
            fs.writeFile('message.txt', message,(err) =>{
                res.statusCode=302;
                res.setHeader('Location','/');
                return res.end();

            });     
        });
    }
    else{
        res.setHeader('Content-type' ,'text/html');
        res.write('<html>');
        res.write('<head><title>My first page</title></head>');
        res.write('<body><h1>Hello from my node.js server!</h1></body>');
        res.write('</html>');
        res.end();
    }




});
server.listen(4000);