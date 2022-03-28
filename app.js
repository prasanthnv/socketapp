const http = require('http').createServer();

const io = require('socket.io')(http, {
    cors: {
        origin: `https://socketdemo007.herokuapp.com/`, // I copied the origin in the error message and pasted here
        methods: ["GET", "POST"],
        credentials: true
      }
});


io.on('connection', (socket)=>{
  console.log('A user connected');

  socket.on('message', (message) => {
    console.log(message);
    io.emit('message', `${socket.id.substr(0,2)} Said ${message}`);
  })

})
http.
http.listen(8080, ()=> console.log('Listening on port 8080'))