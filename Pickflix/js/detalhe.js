const filme = JSON.parse(localStorage.getItem('filmeSelecionado'));

if (!filme) {
  document.body.innerHTML = "<h2>Filme não encontrado</h2>";
}

// elementos
const titulo = document.getElementById('titulo');
const meta = document.getElementById('meta');
const poster = document.getElementById('poster');
const resumo = document.getElementById('resumo');
const elencoDiv = document.getElementById('elenco');
const trailerDiv = document.getElementById('trailer');
const btnTrailer = document.getElementById('btnTrailer');

// preencher dados
titulo.textContent = filme.nome;
meta.textContent = `Ano de Lançamento: ${filme.ano} | Classificação: ${filme.classificacao} | Tempo de duração: ${filme.duracao}`;
poster.src = filme.poster;
resumo.textContent = filme.resumo;

// elenco
filme.elenco.forEach(ator => {
  const tag = document.createElement('span');
  tag.textContent = ator;
  elencoDiv.appendChild(tag);
});

// trailer
function criarTrailer() {
  const url = filme.trailer;
  let videoId = '';

  if (url.includes('youtube.com/watch?v=')) {
    videoId = url.split('v=')[1].split('&')[0];
  } else if (url.includes('youtu.be/')) {
    videoId = url.split('youtu.be/')[1];
  }

  if (videoId) {
    trailerDiv.innerHTML = `
      <iframe width="100%" height="400"
        src="https://www.youtube.com/embed/${videoId}"
        frameborder="0"
        allowfullscreen>
      </iframe>
    `;
  }
}

// botão trailer
btnTrailer.addEventListener('click', criarTrailer);


class MobileNavbar {
  constructor(mobileMenu, navList, navLinks) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelectorAll(navLinks);
    this.activeClass = "active";

    this.handleClick = this.handleClick.bind(this);
  }

  animateLinks() {
    this.navLinks.forEach((link, index) => {
      link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.3
          }s`);
    });
  }

  handleClick() {
    this.navList.classList.toggle(this.activeClass);
    this.mobileMenu.classList.toggle(this.activeClass);
    this.animateLinks();
  }

  addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick);
  }

  init() {
    if (this.mobileMenu) {
      this.addClickEvent();
    }
    return this;
  }
}

const mobileNavbar = new MobileNavbar(
  ".mobile-menu",
  ".nav-list",
  ".nav-list li",
);
mobileNavbar.init();