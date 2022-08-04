
const app=require('express')();
const server = require('http').createServer(app);
const io=require('socket.io')(server);

/*const wss = new WebSocket.Server({port: 8082});
wss.on("connection", ws =>{
    console.log("new client connected");
    ws.on("message",data =>{
        console.log("client has sent us :${data}")
    })
    ws.on("close", () =>{
        console.log("client has disconnected")
        
    });

});*/
app.get('/',(req,res)=>{
   res.sendFile(`${__dirname}/index.html`);
})
io.on('connect',(socket) =>{
    console.log("new client connected");
    socket.on("message de chat",(msg) =>{
        console.log("client has sent us "+ msg);
        io.emit("message de chat",msg);
    })
    socket.on("disconnect", () =>{
       console.log("client has disconnected");
        
    });
});
server.listen(3000,()=>{
    console.log('ecouter sur le port 3000... ');
})

