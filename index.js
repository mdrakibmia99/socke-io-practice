const express = require('express');
const app=express();
const http = require('http');
const expressServer =http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(expressServer);

app.get('/',(req,res)=>{
    res.sendFile(__dirname + "/index.html");
})


io.on('connection',(socket)=>{
    console.log('New user connect');
    socket.on('chat',function(msg){
        console.log(msg);
    })
})


expressServer.listen(5000,function(){
    console.log('server run @5000')
})