import {
  renderCards,
  getLatestGraphics,
  getRandomGraphics
} from "./cards.js";

document.addEventListener("DOMContentLoaded", () => {
  // 🔹 vista inicial: últimos gráficos
  renderCards(getLatestGraphics());
});

const randomBtn = document.getElementById("randomBtn");

randomBtn.addEventListener("click", (e) => {
  e.preventDefault();
  renderCards(getRandomGraphics());
});
