// Change this flag to control the message
const activated = true;

const message = activated
  ? "meet me at midnight"
  : "stop being precoce";

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("message").textContent = message;
});