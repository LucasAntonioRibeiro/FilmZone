const form = document.getElementById('filmeForm');
const sucesso = document.getElementById('sucesso');

const nome = document.getElementById('nome');
const ano = document.getElementById('ano');
const genero = document.getElementById('genero');
const classificacao = document.getElementById('classificacao');
const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const diretor = document.getElementById('diretor');
const elenco = document.getElementById('elenco');
const poster = document.getElementById('poster');
const posterImg = document.getElementById('posterImg');
const resumo = document.getElementById('resumo');
const contador = document.getElementById('contador');
const trailerInput = document.getElementById('trailerInput');
const previewTrailer = document.getElementById('previewTrailer');
const atorInput = document.getElementById('atorInput');
const listaAtores = document.getElementById('listaAtores');

let atores = [];


atorInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();

    const nome = atorInput.value.trim();
    if (!nome) return;

    atores.push(nome);

    // container da tag
    const tag = document.createElement('span');
    tag.style.display = 'inline-flex';
    tag.style.alignItems = 'center';
    tag.style.margin = '5px';
    tag.style.padding = '5px 10px';
    tag.style.background = '#007bff';
    tag.style.color = '#fff';
    tag.style.borderRadius = '20px';
    tag.style.fontSize = '14px';

    // nome do ator
    const texto = document.createElement('span');
    texto.textContent = nome;

    // botão X
    const botaoRemover = document.createElement('span');
    botaoRemover.textContent = ' ✖';
    botaoRemover.style.cursor = 'pointer';
    botaoRemover.style.marginLeft = '8px';
    botaoRemover.style.fontWeight = 'bold';

    // ação de remover
    botaoRemover.addEventListener('click', () => {
      listaAtores.removeChild(tag);

      // remove do array
      atores = atores.filter(a => a !== nome);
    });

    // montar tag
    tag.appendChild(texto);
    tag.appendChild(botaoRemover);
    listaAtores.appendChild(tag);

    atorInput.value = '';
  }
});

if (trailerInput) {
  trailerInput.addEventListener('input', () => {
    const url = trailerInput.value;

    let videoId = '';

    // 🔥 AQUI É A CORREÇÃO
    if (url.includes('youtube.com/watch?v=')) {
      videoId = url.split('v=')[1].split('&')[0];
    } else if (url.includes('youtu.be/')) {
      videoId = url.split('youtu.be/')[1].split('?')[0];
    }

    if (videoId) {
      previewTrailer.innerHTML = `<iframe width="100%" height="200"
        src="https://www.youtube.com/embed/${videoId}"
        frameborder="0"
        allowfullscreen></iframe>`;
    } else {
      previewTrailer.innerHTML = '';
    }
  });
}


// Preview do pôster
poster.addEventListener('input', () => {
  if (poster.value.includes('http')) {
    posterImg.src = poster.value;
    posterImg.style.display = 'block';
  } else {
    posterImg.style.display = 'none';
  }
});

// Contador de resumo
resumo.addEventListener('input', () => {
  contador.textContent = `${resumo.value.length} / 500`;
});

// Envio do formulário
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const confirmar = confirm('Deseja cadastrar este filme?');
  if (!confirmar) return;

  if (!nome.value || !ano.value || !genero.value || !classificacao.value || !horas.value || !minutos.value) {
    alert('Preencha os campos obrigatórios!');
    return;
  }

  const duracaoFormatada = `${horas.value}h ${minutos.value}min`;

  const filme = {
    nome: nome.value,
    ano: ano.value,
    genero: genero.value,
    classificacao: classificacao.value,
    duracao: duracaoFormatada,
    diretor: diretor.value,
    elenco: atores,
    poster: poster.value,
    resumo: resumo.value,
    trailer: trailerInput.value,
  };

  const filmes = JSON.parse(localStorage.getItem('filmes')) || [];
  filmes.push(filme);
  localStorage.setItem('filmes', JSON.stringify(filmes));

  // Limpar formulário
  form.reset();
  // Limpar atores (array + tela)
atores = [];
listaAtores.innerHTML = '';

// Limpar preview do trailer
previewTrailer.innerHTML = '';

// Limpar preview do pôster (já tinha, mas mantendo)
  posterImg.style.display = 'none';
  
// Resetar contador
 contador.textContent = '0 / 500';


  // Mostrar sucesso
  sucesso.style.display = 'block';
  setTimeout(() => sucesso.style.display = 'none', 3000);
});

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