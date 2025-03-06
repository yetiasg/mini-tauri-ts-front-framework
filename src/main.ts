import { App } from "./app";

window.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  if (!root) return;

  new App(root);
});
