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


// Elementos do modal
const abrirCategorias = document.getElementById("abrir-categorias");
const modalCategorias = document.getElementById("modal-categorias");
const fecharModal = document.getElementById("fechar-modal");

// Abrir o modal ao clicar em Categorias
abrirCategorias.addEventListener("click", function (event) {
    event.preventDefault();
    modalCategorias.classList.add("ativo");
});

// Fechar ao clicar no X
fecharModal.addEventListener("click", function () {
    modalCategorias.classList.remove("ativo");
});

// Fechar ao clicar fora do conteúdo
modalCategorias.addEventListener("click", function (event) {
    if (event.target === modalCategorias) {
        modalCategorias.classList.remove("ativo");
    }
});

// Fechar ao pressionar ESC
document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        modalCategorias.classList.remove("ativo");
    }
});

const categorias = document.querySelectorAll(".categoria");

const categoriaSelecionada = document.getElementById("categoria-selecionada");

categorias.forEach(function (categoria) {
    categoria.addEventListener("click", function () {
        const nomeCategoria = this.dataset.categoria;

        categoriaSelecionada.textContent =
            "Categoria selecionada: " + nomeCategoria;

        modalCategorias.classList.remove("ativo");
    });
});

const filmes = [
  {
    titulo: "Interestelar",
    ano: 2014,
    genero: "Ficção científica",
    nota: "8.7",
    descricao: "Uma jornada além das estrelas."
  },
  {
    titulo: "Batman: O Cavaleiro das Trevas",
    ano: 2008,
    genero: "Ação",
    nota: "9.0",
    descricao: "Um herói diante do caos de Gotham."
  },
  {
    titulo: "A Origem",
    ano: 2010,
    genero: "Suspense",
    nota: "8.8",
    descricao: "Uma missão dentro dos sonhos."
  },
  {
    titulo: "Como Treinar o Seu Dragão",
    ano: 2010,
    genero: "Animação",
    nota: "8.1",
    descricao: "Uma amizade que muda tudo."
  },
  {
    titulo: "Jurassic Park",
    ano: 1993,
    genero: "Aventura",
    nota: "8.2",
    descricao: "Uma descoberta extraordinária."
  },
  {
    titulo: "Homem-Aranha",
    ano: 2002,
    genero: "Ação",
    nota: "7.4",
    descricao: "Um jovem aprende o peso de seus poderes."
  },
  {
    titulo: "O Rei Leão",
    ano: 1994,
    genero: "Animação",
    nota: "8.5",
    descricao: "Uma história sobre família e coragem."
  },
  {
    titulo: "Titanic",
    ano: 1997,
    genero: "Romance",
    nota: "7.9",
    descricao: "Uma história de amor em uma viagem inesquecível."
  }
];

const listaFilmes = document.getElementById("lista-filmes");

function mostrarFilmes() {
  if(!listaFilmes) {
    return;
  }

  listaFilmes.innerHTML = "";

  filmes.forEach(function (filme) {
    const card = document.createElement("article");
    card.className = "card-filme";

    const poster = document.createElement("div");
    poster.className = "poster-filme";

    const tituloPoster = document.createElement("h3");
    tituloPoster.textContent = filme.titulo;
    poster.appendChild(tituloPoster);

    const informacoes = document.createElement("div");
        informacoes.className = "info-filme";

        const titulo = document.createElement("h3");
        titulo.textContent = filme.titulo;

        const ano = document.createElement("p");
        ano.textContent = "Ano: " + filme.ano;

        const nota = document.createElement("p");
        nota.textContent = "★ " + filme.nota + " / 10";

        const descricao = document.createElement("p");
        descricao.textContent = filme.descricao;

        const genero = document.createElement("span");
        genero.className = "genero-filme";
        genero.textContent = filme.genero;

        informacoes.append(
            titulo,
            ano,
            nota,
            descricao,
            genero
        );

        card.append(poster, informacoes);
        listaFilmes.appendChild(card);
    });
}

mostrarFilmes();
