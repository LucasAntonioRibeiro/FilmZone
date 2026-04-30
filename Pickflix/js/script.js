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

const series = JSON.parse(localStorage.getItem('series')) || [];

const filmes = JSON.parse(localStorage.getItem('filmes')) || [];

const container = document.querySelector('.carrossel');

filmes.forEach((filme, index) => {
  const img = document.createElement('img');
  img.src = filme.poster;
  img.classList.add('filme');

  img.addEventListener('click', () => {
    localStorage.setItem('filmeSelecionado', JSON.stringify(filme));
    window.location.href = 'detalhe.html';
  });

  container.appendChild(img);
});

const carrossel = document.querySelector('.carrossel2');

const filme = JSON.parse(localStorage.getItem('filmes')) || [];

container.innerHTML = '';

filmes.forEach((filme, index) => {

  const card = document.createElement('div');

  const img = document.createElement('img');
  img.src = filme.poster;

  

  const btn = document.createElement('button');
  btn.textContent = '🗑️';

  // 🔥 botão excluir
  btn.addEventListener('click', (e) => {
    e.stopPropagation(); // evita abrir o detalhes
    excluirFilme(index);
  });

  // clicar no filme → detalhes
  img.addEventListener('click', () => {
    localStorage.setItem('filmeSelecionado', JSON.stringify(filme));
    window.location.href = 'detalhes.html';
  });

  card.appendChild(img);
  card.appendChild(btn);
  container.appendChild(card);
});

function excluirFilme(index) {
  const confirmar = confirm('Deseja excluir este filme?');
  if (!confirmar) return;

  let filmes = JSON.parse(localStorage.getItem('filmes')) || [];

  filmes.splice(index, 1);

  localStorage.setItem('filmes', JSON.stringify(filmes));

  // recarregar página
  location.reload();
}