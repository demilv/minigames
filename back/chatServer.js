import express from "express";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";

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
    io.emit("receive-message", `${socket.id.slice(0, 5)}: ${message}`);
  });
});

server.listen(3001, () => {
  console.log("Servidor en http://localhost:3001");
});