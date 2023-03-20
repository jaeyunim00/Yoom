const soket = new WebSocket(`ws://localhost:3000`);

soket.addEventListener("open", () => {
  console.log("connected to server");
});

soket.addEventListener("message", (message) => {
  console.log("Just got this: ", message, " from the server");
});

soket.addEventListener("close", () => {
  console.log("disconnected to server");
});

setTimeout(() => {
  soket.send("hello from the broswer");
}, 10000);
