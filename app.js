let express = require('express');
let app = express();
let http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
app.use(express.static("public"))

let user = [];

app.get('/', (req, res) => {
    res.redirect('/index.html');
});

io.on('connection', (socket) => {
    console.log(`${socket.id}a user connected`);
    socket.on("chat_join", function(name) {
        socket.broadcast.emit("user-joined", name);

        user.push({ id: socket.id, name })
    })

    socket.on("chat_send", function(userObj) {
        socket.broadcast.emit("receive_chat", userObj)
    })
});

server.listen(3000, () => {
    console.log('listening on *:3000');
});