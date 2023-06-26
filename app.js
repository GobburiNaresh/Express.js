const express =require('express');

const app = express();

app.use((req,res,next)=>{
    console.log('In the middleWare');
    next();

});

app.use((req,res,next)=>{
    console.log('In the another middleWare');
    res.send('<h1>Hello from Express!</h1>')

});

app.listen(4000);