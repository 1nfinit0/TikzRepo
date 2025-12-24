import { graphics } from "/TikzRepo/js/data.js";

const container = document.querySelector(".cardsContainer");

// 🔹 últimos gráficos (asumimos que data.js está en orden cronológico)
export function getLatestGraphics(n = 6) {
  return graphics.slice(-n).reverse();
}

// 🔹 gráficos aleatorios
export function getRandomGraphics(n = 6) {
  return [...graphics]
    .sort(() => Math.random() - 0.5)
    .slice(0, n);
}

// 🔹 render genérico
export function renderCards(selectedGraphics) {
  container.innerHTML = "";

  selectedGraphics.forEach(g => {
    const a = document.createElement("a");
    a.className = "card";
    a.href = `editor.html?id=${g.id}`;

    a.innerHTML = `
      <div class="iframeWrapper">
        <div class="loading">Loading...</div>
        <iframe
          class="cardViewer"
          src="renderer.html?id=${g.id}"
          loading="lazy"
        ></iframe>
      </div>

      <div class="cardContent">
        <h2>${g.title}</h2>
        <p>${g.description}</p>
        <span class="author">${g.author}</span>
      </div>
    `;

    window.addEventListener("message", (event) => {
  if (event.data?.type !== "tikz-ready") return;

  const iframe = document.querySelector(
    `iframe[src*="id=${event.data.id}"]`
  );

  if (!iframe) return;

  const card = iframe.closest(".iframeWrapper");
  const loading = card.querySelector(".loading");

  if (loading) {
    loading.style.display = "none";
  }
});

    container.appendChild(a);
  });
}
