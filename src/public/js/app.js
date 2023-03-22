const socket = io();

const welcome = document.querySelector("#welcome");
const form = welcome.querySelector("form");

const backendDone = (msg) => {
  console.log(`Backend Says: ${msg}`);
};

const handleSubmit = (event) => {
  event.preventDefault();
  const input = form.querySelector("input");
  socket.emit("room", { payload: input.value }, backendDone);
  input.value = "";
};

form.addEventListener("submit", handleSubmit);
