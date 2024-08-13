import server from "../server";
const io = new Server(server, {
    pingTimeout: 60000,
    cors: {
        origin: 'https://chathello.netlify.app/'
    }
})
console.log("socket is on")

io.on('connection', (socket) => {

    console.log("connected to socket");
    socket.on("setup", (userData) => {
        socket.join(userData._id);
        console.log(userData._id);
        socket.emit("connection")
    })

    socket.on("join room", (room) => {
        socket.join(room)
        console.log("user joined room " + room);
    })

    socket.on("new message", (newMessageRecieved) => {
        if (!newMessageRecieved) return console.log("message not received");
        // if (newMessageRecieved.senderId===)

        socket.in(newMessageRecieved.senderId).emit("message received", newMessageRecieved)

    })


})
