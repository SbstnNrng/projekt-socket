const express = require('express');
const app = express();
const cors = require('cors');
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

io.on('connection', (socket) => {
    setInterval(() => {
        var rand1 = Math.floor(Math.random() * 11 + 2);
        var rand2 = Math.floor(Math.random() * 11 + 4);
        var rand3 = Math.floor(Math.random() * 11 + 11);
        var rand4 = Math.floor(Math.random() * 11 + 3);
        var rand5 = Math.floor(Math.random() * 11 + 6);
        var randArr = [rand1, rand2, rand3, rand4, rand5];
        socket.emit('change', randArr);
    }, 10000);
});

server.listen(3000);