/*ws://192.168.196.94:8082/*/
/*ws://192.168.1.159:8082/*/
const express = require('express');
// const server=require('http').createServer(app);


const app=express();
/*
app.get('/',(req,res)=>{
    res.sendFile(`${__dirname}/Views/test.html`)
   
})
*/
const PORT = process.env.PORT || 8081;

// Listen on port 8081
app.listen(PORT, () =>
  console.log(`Application is listening on port ${PORT}!`)
);
//set index.html
//app.set('views','./Views');
app.use(express.static('public'));

//app.use(express.static(__dirname + '/Views'));
// set css file :
app.use('/css',express.static(__dirname + '/public'));
//set image file :
app.use('/image',express.static(__dirname + '/public'));

const { Server } = require('ws');
var WebSocket = require('ws');
const wss = new WebSocket.Server({port: 8082});
wss.on("connection", ws =>{
    console.log("new client connected");
                    
                    

     ws.on("close", () =>{
        console.log("client has disconnected");
                        
                });


                });

