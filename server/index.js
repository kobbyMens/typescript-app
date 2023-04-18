require('./config/mongodb');
const express = require('express');
const app = express();
const socket = require('socket.io')
const AuthenticationRoute = require('./api/auth')
const DataRoute = require('./api/data')  
const messagesRoute = require('./api/messagesRoute')
const cors = require('cors');

// const io = require('socket.io')(server, {
//     cors: {
//         origin: "http://localhost:3000"
//      }
//  })

const PORT = process.env.PORT || 8080
app.use(cors())
app.use(express.json())

// Routers
app.use('/api/userauth', AuthenticationRoute)
app.use('/api/data', DataRoute)
app.use('/api/messages', messagesRoute)

const server = app.listen(PORT, (err) => {
    if(err) console.log(err)
    console.log(`Server has started on PORT ${PORT}`)
})

const io = socket(server, {
    cors: {
        origin: "http://localhost:3000",
        credentials: true,
    }
})

global.onlineUsers = new Map();

io.on("connection", (socket) => {
    global.chatSocket = socket;

    socket.on("add-user", (userId) => {
        onlineUsers.set(userId, socket.id)
    });

    socket.on("sendMessage", (data) => {
        const sendUserSocket = onlineUsers.get(data.to);
        if (sendUserSocket) {
            socket.to(sendUserSocket).emit("messageRecieved", data.msg)
        }
    });

    
});