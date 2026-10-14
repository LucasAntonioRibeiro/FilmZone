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
        descricao: "Uma jornada além das estrelas.",
        poster: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg"
    },
    {
        titulo: "Batman: O Cavaleiro das Trevas",
        ano: 2008,
        genero: "Ação",
        nota: "9.0",
        descricao: "Um herói diante do caos de Gotham.",
        poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg"
    },
    {
        titulo: "A Origem",
        ano: 2010,
        genero: "Suspense",
        nota: "8.8",
        descricao: "Uma missão dentro dos sonhos.",
        poster: "https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg"
    },
    {
        titulo: "Como Treinar o Seu Dragão",
        ano: 2010,
        genero: "Animação",
        nota: "8.1",
        descricao: "Uma amizade que muda tudo.",
        poster: "https://image.tmdb.org/t/p/w500/ygGmAO60t8GyqUo9xYeYxSZAR3b.jpg"
    },
    {
        titulo: "Jurassic Park",
        ano: 1993,
        genero: "Aventura",
        nota: "8.2",
        descricao: "Uma descoberta extraordinária.",
        poster: "https://image.tmdb.org/t/p/w500/b1xCNnyrPebIc7EWNZIa6jhb1Ww.jpg"
    },
    {
        titulo: "Homem-Aranha",
        ano: 2002,
        genero: "Ação",
        nota: "7.4",
        descricao: "Um jovem aprende o peso de seus poderes.",
        poster: "https://image.tmdb.org/t/p/w500/gh4cZbhZxyTbgxQPxD0dOudNPTn.jpg"
    },
    {
        titulo: "O Rei Leão",
        ano: 1994,
        genero: "Animação",
        nota: "8.5",
        descricao: "Uma história sobre família e coragem.",
        poster: "https://image.tmdb.org/t/p/w500/sKCr78MXSLixwmZ8DyJLrpMsd15.jpg"
    },
    {
        titulo: "Titanic",
        ano: 1997,
        genero: "Romance",
        nota: "7.9",
        descricao: "Uma história de amor inesquecível.",
        poster: "https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg"
    }
];


const listaFilmes = document.getElementById("lista-filmes");



const campoBusca = document.getElementById("buscar-filme");
const filtroGenero = document.getElementById("filtrar-genero");
const ordenacao = document.getElementById("ordenar-filmes");
const quantidadeFilmes = document.getElementById("quantidade-filmes");

const botaoLimparFiltros = document.getElementById("limpar-filtros");

if (botaoLimparFiltros) {
    botaoLimparFiltros.addEventListener("click", function () {
        campoBusca.value = "";
        filtroGenero.value = "";
        ordenacao.value = "";

        mostrarFilmes();
    });
}

function mostrarFilmes() {
    if (!listaFilmes) {
        return;
    }

    const textoBusca = campoBusca
        ? campoBusca.value.trim().toLowerCase()
        : "";

    const generoSelecionado = filtroGenero
        ? filtroGenero.value
        : "";

    const ordemSelecionada = ordenacao
        ? ordenacao.value
        : "";

    let filmesFiltrados = filmes.filter(function (filme) {
        const correspondeTitulo = filme.titulo
            .toLowerCase()
            .includes(textoBusca);

        const correspondeGenero =
            generoSelecionado === "" ||
            filme.genero === generoSelecionado;

        return correspondeTitulo && correspondeGenero;
    });

    if (ordemSelecionada === "ano-desc") {
        filmesFiltrados.sort(function (a, b) {
            return b.ano - a.ano;
        });
    } else if (ordemSelecionada === "ano-asc") {
        filmesFiltrados.sort(function (a, b) {
            return a.ano - b.ano;
        });
    } else if (ordemSelecionada === "nota-desc") {
        filmesFiltrados.sort(function (a, b) {
            return Number(b.nota) - Number(a.nota);
        });
    } else if (ordemSelecionada === "nota-asc") {
        filmesFiltrados.sort(function (a, b) {
            return Number(a.nota) - Number(b.nota);
        });
    }

    listaFilmes.innerHTML = "";

    if (quantidadeFilmes) {
        quantidadeFilmes.textContent =
            filmesFiltrados.length +
            (filmesFiltrados.length === 1
                ? " filme encontrado"
                : " filmes encontrados");
    }

    if (filmesFiltrados.length === 0) {
        const mensagem = document.createElement("p");
        mensagem.className = "mensagem-sem-filmes";
        mensagem.textContent = "Nenhum filme encontrado.";
        listaFilmes.appendChild(mensagem);
        return;
    }

    filmesFiltrados.forEach(function (filme) {
        const card = document.createElement("article");
        card.className = "card-filme";

        const poster = document.createElement("div");
        poster.className = "poster-filme";

        const imagem = document.createElement("img");
        imagem.src = filme.poster;
        imagem.alt = "Pôster do filme " + filme.titulo;
        imagem.loading = "lazy";

        imagem.onerror = function () {
            imagem.style.display = "none";
            poster.textContent = filme.titulo;
            poster.style.color = "#ffffff";
            poster.style.fontSize = "22px";
            poster.style.fontWeight = "bold";
        };

        poster.appendChild(imagem);

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

if (campoBusca) {
    campoBusca.addEventListener("input", mostrarFilmes);
}

if (filtroGenero) {
    filtroGenero.addEventListener("change", mostrarFilmes);
}

if (ordenacao) {
    ordenacao.addEventListener("change", mostrarFilmes);
}

mostrarFilmes();


