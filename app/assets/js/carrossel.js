let imagens = [];
let indexAtual = 0;

document.addEventListener("DOMContentLoaded", () => {
  imagens = Array.from(document.querySelectorAll('.carousel img'));
});

function abrirLightbox(imgElement) {
  indexAtual = parseInt(imgElement.getAttribute('data-index'));
  const lightbox = document.getElementById('lightbox');
  const img = document.getElementById('lightbox-img');
  img.src = imgElement.src;
  lightbox.classList.add('show');
}

function fecharLightbox() {
  document.getElementById('lightbox').classList.remove('show');
  document.getElementById('lightbox-img').src = '';
}

function proximo() {
  indexAtual = (indexAtual + 1) % imagens.length;
  document.getElementById('lightbox-img').src = imagens[indexAtual].src;
}

function anterior() {
  indexAtual = (indexAtual - 1 + imagens.length) % imagens.length;
  document.getElementById('lightbox-img').src = imagens[indexAtual].src;
}

// Teclado
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') fecharLightbox();
  if (e.key === 'ArrowRight') proximo();
  if (e.key === 'ArrowLeft') anterior();
});

// Clique fora da imagem
document.getElementById('lightbox').addEventListener('click', function (e) {
  if (e.target === this) fecharLightbox();
});
