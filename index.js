const express = require('express');
const app=express();
const http = require('http');
const expressServer =http.createServer(app);

expressServer.listen(5000,function(){
    console.log('server run @5000')
})