module.exports = (io) => {
  io.on("connection", (socket) => {
    console.log("a user connected");

    socket.on("chat message", (msg) => {
      console.log("message: " + msg);
    });

    socket.on("notifyMessage", (msg) => {
      console.log("message: " + msg);
      io.emit('notifyMessage', msg)
    });

    socket.on("disconnect", () => {
      console.log("user disconnected");
    });
  })
}