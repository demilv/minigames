const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const app = express();
app.use(cors());

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log("Se unió ", socket.id, " al chat");

  socket.on("send-message", (message) => {
    io.emit(socket.id, " envió un mensaje:", message);
  });
});

server.listen(3001, () => {
  console.log("Servidor en http://localhost:3001");
});