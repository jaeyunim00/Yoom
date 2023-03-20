import http from "http";
import WebSocket, { WebSocketServer } from "ws";
import express from "express";

const app = express();

app.set("view engine", "pug");
app.set("views", __dirname + "/public/views");
app.use("/public", express.static(__dirname + "/public"));
app.get("/", (req, res) => res.render("home"));
app.get("/*", (req, res) => res.redirect("/"));

const server = http.createServer(app);
const wss = new WebSocketServer({ server });

wss.on("connection", (soket) => {
  console.log("connected to browser");
  soket.on("close", () => {
    console.log("disconnected from the broswer");
  });
  soket.on("message", (message) => {
    console.log(message.toString("utf-8"));
  });
  soket.send("hello!");
});

server.listen(3000, () => {
  console.log(`ws://localhost:3000`);
});
