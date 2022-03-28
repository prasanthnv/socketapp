const http = require('http').createServer();

const io = require('socket.io')(http, {
  cors: {origin: '*'}
});


io.on('connection', (socket)=>{
  console.log('A user connected');

  socket.on('message', (message) => {
    console.log(message);
    io.emit('message', `${socket.id.substr(0,2)} Said ${message}`);
  })

})

http.listen(8080, ()=> console.log('Listening on port 8080'))