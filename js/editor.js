import { graphics } from "../js/data.js";

const button = document.getElementById("update");
const viewerContainer = document.getElementById("viewer-container");

const params = new URLSearchParams(window.location.search);
const graphicId = params.get("id");

window.addEventListener("monaco-ready", () => {
  const graphic = graphics.find(g => g.id === graphicId);

  if (!graphic) {
    window.editor.setValue("% Graphic not found");
  } else {
    window.editor.setValue(graphic.tikz.trim());
  }

  renderIframe();

  // Live render con debounce
  let timer;
  window.editor.onDidChangeModelContent(() => {
    clearTimeout(timer);
    timer = setTimeout(renderIframe, 600);
  });
});

function renderIframe() {
  viewerContainer.innerHTML = "";

  const code = window.editor.getValue();
  localStorage.setItem("tikz-code", code);

  const iframe = document.createElement("iframe");
  iframe.src = "renderer-editor.html";
  iframe.width = "420";
  iframe.height = "420";
  iframe.style.border = "1px solid #333";

  viewerContainer.appendChild(iframe);
}

button.addEventListener("click", renderIframe);
