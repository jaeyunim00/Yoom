import http from "http";
import express, { json } from "express";
import SocketIO from "socket.io";

const app = express();

app.set("view engine", "pug");
app.set("views", __dirname + "/public/views");
app.use("/public", express.static(__dirname + "/public"));
app.get("/", (req, res) => res.render("home"));
app.get("/*", (req, res) => res.redirect("/"));

const httpServer = http.createServer(app);
const io = SocketIO(httpServer);

io.on("connection", (socket) => {
  console.log("broswer connected");
  socket.on("room", (roomName, done) => {
    console.log(roomName);
    done("hello from backend");
  });
});

httpServer.listen(3000, () => {
  console.log(`http://localhost:3000`);
});
