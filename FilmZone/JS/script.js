
/* =========================================
   1. MENU RESPONSIVO
========================================= */

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
                : (link.style.animation =
                    `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`);
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
        if (this.mobileMenu && this.navList) {
            this.addClickEvent();
        }
        return this;
    }
}

const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li"
);

mobileNavbar.init();


/* =========================================
   2. MODAL DE CATEGORIAS
========================================= */

const abrirCategorias = document.getElementById("abrir-categorias");
const modalCategorias = document.getElementById("modal-categorias");
const fecharModal = document.getElementById("fechar-modal");

if (abrirCategorias && modalCategorias) {
    abrirCategorias.addEventListener("click", function (event) {
        event.preventDefault();
        modalCategorias.classList.add("ativo");
    });
}

if (fecharModal && modalCategorias) {
    fecharModal.addEventListener("click", function () {
        modalCategorias.classList.remove("ativo");
    });
}

if (modalCategorias) {
    modalCategorias.addEventListener("click", function (event) {
        if (event.target === modalCategorias) {
            modalCategorias.classList.remove("ativo");
        }
    });
}

const categorias = document.querySelectorAll(".categoria");
const categoriaSelecionada = document.getElementById("categoria-selecionada");

categorias.forEach(function (categoria) {
    categoria.addEventListener("click", function () {
        const nomeCategoria = this.dataset.categoria;

        if (categoriaSelecionada) {
            categoriaSelecionada.textContent =
                "Categoria selecionada: " + nomeCategoria;
        }

        if (modalCategorias) {
            modalCategorias.classList.remove("ativo");
        }
    });
});


/* =========================================
   3. FILMES ORIGINAIS DO CATÁLOGO
========================================= */

const filmes = [
    {
        titulo: "Interestelar",
        ano: 2014,
        genero: "Ficção científica",
        nota: "8.7",
        descricao: "Uma jornada além das estrelas.",
        poster: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
        sinopse: "Em um futuro em que a Terra enfrenta uma crise ambiental, um grupo de exploradores parte em uma missão espacial em busca de um novo lar para a humanidade.",
        diretor: "Christopher Nolan",
        elenco: "Matthew McConaughey, Anne Hathaway, Jessica Chastain",
        duracao: "2h 49min"
    },
    {
        titulo: "Batman: O Cavaleiro das Trevas",
        ano: 2008,
        genero: "Ação",
        nota: "9.0",
        descricao: "Um herói diante do caos de Gotham.",
        poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
        sinopse: "Batman e o promotor Harvey Dent, aliados ao tenente James Gordon, lutam contra o crime organizado em Gotham. A aliança é ameaçada pelo Coringa, que pretende mergulhar a cidade no caos.",
        diretor: "Christopher Nolan",
        elenco: "Christian Bale, Heath Ledger, Aaron Eckhart",
        duracao: "2h 32min"
    },
    {
        titulo: "A Origem",
        ano: 2010,
        genero: "Suspense",
        nota: "8.8",
        descricao: "Uma missão dentro dos sonhos.",
        poster: "https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg",
        sinopse: "Dom Cobb é um especialista em entrar nos sonhos das pessoas para roubar segredos. Ele recebe uma missão extraordinária: plantar uma ideia na mente de alguém.",
        diretor: "Christopher Nolan",
        elenco: "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page",
        duracao: "2h 28min"
    },
    {
        titulo: "Como Treinar o Seu Dragão",
        ano: 2010,
        genero: "Animação",
        nota: "8.1",
        descricao: "Uma amizade que muda tudo.",
        poster: "https://image.tmdb.org/t/p/w500/ygGmAO60t8GyqUo9xYeYxSZAR3b.jpg",
        sinopse: "Soluço é um jovem viking que vive em um mundo onde vikings e dragões são inimigos. Ao encontrar um dragão chamado Banguela, ele desenvolve uma amizade capaz de mudar seu povo.",
        diretor: "Chris Sanders e Dean DeBlois",
        elenco: "Jay Baruchel, America Ferrera, Gerard Butler",
        duracao: "1h 38min"
    },
    {
        titulo: "Jurassic Park",
        ano: 1993,
        genero: "Aventura",
        nota: "8.2",
        descricao: "Uma descoberta extraordinária.",
        poster: "https://image.tmdb.org/t/p/w500/b1xCNnyrPebIc7EWNZIa6jhb1Ww.jpg",
        sinopse: "Um bilionário cria um parque temático com dinossauros recriados geneticamente. Durante uma visita de especialistas, falhas de segurança transformam o passeio em uma luta pela sobrevivência.",
        diretor: "Steven Spielberg",
        elenco: "Sam Neill, Laura Dern, Jeff Goldblum",
        duracao: "2h 7min"
    },
    {
        titulo: "Homem-Aranha",
        ano: 2002,
        genero: "Ação",
        nota: "7.4",
        descricao: "Um jovem aprende o peso de seus poderes.",
        poster: "https://image.tmdb.org/t/p/w500/gh4cZbhZxyTbgxQPxD0dOudNPTn.jpg",
        sinopse: "Peter Parker adquire superpoderes após ser picado por uma aranha geneticamente modificada. Depois de uma tragédia pessoal, ele decide usar suas habilidades para combater o crime.",
        diretor: "Sam Raimi",
        elenco: "Tobey Maguire, Kirsten Dunst, Willem Dafoe",
        duracao: "2h 1min"
    },
    {
        titulo: "O Rei Leão",
        ano: 1994,
        genero: "Animação",
        nota: "8.5",
        descricao: "Uma história sobre família e coragem.",
        poster: "https://image.tmdb.org/t/p/w500/sKCr78MXSLixwmZ8DyJLrpMsd15.jpg",
        sinopse: "Simba é um jovem leão destinado a governar as Terras do Reino. Após uma traição, ele deixa sua casa e precisa enfrentar o passado para descobrir seu verdadeiro lugar.",
        diretor: "Roger Allers e Rob Minkoff",
        elenco: "Matthew Broderick, James Earl Jones, Jeremy Irons",
        duracao: "1h 28min"
    },
    {
        titulo: "Titanic",
        ano: 1997,
        genero: "Romance",
        nota: "7.9",
        descricao: "Uma história de amor inesquecível.",
        poster: "https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg",
        sinopse: "Jack e Rose se conhecem durante a viagem inaugural do Titanic. Apesar de virem de mundos diferentes, os dois se apaixonam enquanto o navio enfrenta uma tragédia histórica.",
        diretor: "James Cameron",
        elenco: "Leonardo DiCaprio, Kate Winslet, Billy Zane",
        duracao: "3h 14min"
    }
];


/* =========================================
   4. CARREGAR FILMES CADASTRADOS
========================================= */

function carregarFilmesSalvos() {
    try {
        const dados = JSON.parse(
            localStorage.getItem("filmesCadastrados") || "[]"
        );

        return Array.isArray(dados) ? dados : [];
    } catch (erro) {
        console.error("Erro ao carregar os filmes salvos:", erro);
        return [];
    }
}

const filmesCadastrados = carregarFilmesSalvos();

// Evita duplicar os filmes cadastrados na lista original.
filmes.push(...filmesCadastrados);


/* =========================================
   5. ELEMENTOS DO CATÁLOGO E FILTROS
========================================= */

const listaFilmes = document.getElementById("lista-filmes");
const campoBusca = document.getElementById("buscar-filme");
const filtroGenero = document.getElementById("filtrar-genero");
const ordenacao = document.getElementById("ordenar-filmes");
const quantidadeFilmes = document.getElementById("quantidade-filmes");
const botaoLimparFiltros = document.getElementById("limpar-filtros");

if (botaoLimparFiltros) {
    botaoLimparFiltros.addEventListener("click", function () {
        if (campoBusca) campoBusca.value = "";
        if (filtroGenero) filtroGenero.value = "";
        if (ordenacao) ordenacao.value = "";

        mostrarFilmes();
    });
}


/* =========================================
   6. EXIBIR FILMES, FILTRAR E ORDENAR
========================================= */

function mostrarFilmes() {
    if (!listaFilmes) return;

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
        filmesFiltrados.sort((a, b) => b.ano - a.ano);
    } else if (ordemSelecionada === "ano-asc") {
        filmesFiltrados.sort((a, b) => a.ano - b.ano);
    } else if (ordemSelecionada === "nota-desc") {
        filmesFiltrados.sort((a, b) => Number(b.nota) - Number(a.nota));
    } else if (ordemSelecionada === "nota-asc") {
        filmesFiltrados.sort((a, b) => Number(a.nota) - Number(b.nota));
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
        card.tabIndex = 0;
        card.setAttribute("role", "button");
        card.setAttribute("aria-label", "Ver detalhes de " + filme.titulo);

        card.addEventListener("click", function () {
            abrirDetalhes(filme);
        });

        card.addEventListener("keydown", function (event) {
            // Evita abrir os detalhes ao usar os botões internos.
            if (event.target !== card) return;

            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                abrirDetalhes(filme);
            }
        });

        // Pôster
        const poster = document.createElement("div");
        poster.className = "poster-filme";

        const imagem = document.createElement("img");
        imagem.src = filme.poster || "";
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

        // Informações do filme
        const informacoes = document.createElement("div");
        informacoes.className = "info-filme";

        const titulo = document.createElement("h3");
        titulo.textContent = filme.titulo;

        const ano = document.createElement("p");
        ano.textContent = "Ano: " + filme.ano;

        const nota = document.createElement("p");
        nota.textContent = "★ " + filme.nota + " / 10";

        const descricao = document.createElement("p");
        descricao.textContent = filme.descricao || filme.sinopse || "";

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

        // Área dos botões: só para filmes cadastrados pelo usuário.
        let acoesFilme = null;

        if (filme.id) {
            acoesFilme = document.createElement("div");
            acoesFilme.className = "acoes-filme";

            const botaoEditar = document.createElement("button");
            botaoEditar.type = "button";
            botaoEditar.className = "botao-editar";
            botaoEditar.innerHTML = "✎ Editar";

            const botaoExcluir = document.createElement("button");
            botaoExcluir.type = "button";
            botaoExcluir.className = "botao-excluir";
            botaoExcluir.innerHTML = "▤ Excluir";

            botaoEditar.addEventListener("click", function (event) {
                event.stopPropagation();
                editarFilme(filme);
            });

            botaoExcluir.addEventListener("click", function (event) {
                event.stopPropagation();
                excluirFilme(filme);
            });

            acoesFilme.append(botaoEditar, botaoExcluir);
        }

        // Ordem correta: pôster, informações e botões no final.
        card.append(poster, informacoes);

        if (acoesFilme) {
            card.appendChild(acoesFilme);
        }

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


/* =========================================
   7. MODAL DE DETALHES DO FILME
========================================= */

const modalDetalhes = document.getElementById("modal-detalhes");
const fecharDetalhes = document.getElementById("fechar-detalhes");

function abrirDetalhes(filme) {
    if (!modalDetalhes) return;

    const detalhePoster = document.getElementById("detalhe-poster");
    const detalheGenero = document.getElementById("detalhe-genero");
    const detalheTitulo = document.getElementById("detalhe-titulo");
    const detalheAno = document.getElementById("detalhe-ano");
    const detalheNota = document.getElementById("detalhe-nota");
    const detalheDuracao = document.getElementById("detalhe-duracao");
    const detalheSinopse = document.getElementById("detalhe-sinopse");
    const detalheDiretor = document.getElementById("detalhe-diretor");
    const detalheElenco = document.getElementById("detalhe-elenco");

    if (detalhePoster) {
        detalhePoster.src = filme.poster || "";
        detalhePoster.alt = "Pôster de " + filme.titulo;
    }

    if (detalheGenero) detalheGenero.textContent = filme.genero;
    if (detalheTitulo) detalheTitulo.textContent = filme.titulo;
    if (detalheAno) detalheAno.textContent = "Ano: " + filme.ano;
    if (detalheNota) detalheNota.textContent = "★ " + filme.nota + " / 10";

    if (detalheDuracao) {
        detalheDuracao.textContent =
            "Duração: " + (filme.duracao || "Não informada");
    }

    if (detalheSinopse) {
        detalheSinopse.textContent = filme.sinopse || filme.descricao || "";
    }

    if (detalheDiretor) {
        detalheDiretor.textContent = filme.diretor || "Não informado";
    }

    if (detalheElenco) {
        detalheElenco.textContent = filme.elenco || "Não informado";
    }

    modalDetalhes.classList.add("ativo");
}

function fecharJanelaDetalhes() {
    if (modalDetalhes) {
        modalDetalhes.classList.remove("ativo");
    }
}

if (fecharDetalhes) {
    fecharDetalhes.addEventListener("click", fecharJanelaDetalhes);
}

if (modalDetalhes) {
    modalDetalhes.addEventListener("click", function (event) {
        if (event.target === modalDetalhes) {
            fecharJanelaDetalhes();
        }
    });
}


/* =========================================
   8. MODAL DE EDIÇÃO
========================================= */

const modalEdicao = document.getElementById("modal-edicao");
const formEdicao = document.getElementById("form-edicao");
const mensagemEdicao = document.getElementById("mensagem-edicao");

let filmeEmEdicao = null;

function editarFilme(filme) {
    if (!modalEdicao || !formEdicao) {
        alert("O modal de edição não foi encontrado no HTML.");
        return;
    }

    filmeEmEdicao = filme;

    document.getElementById("ed-titulo").value = filme.titulo;
    document.getElementById("ed-ano").value = filme.ano;
    document.getElementById("ed-genero").value = filme.genero;
    document.getElementById("ed-nota").value = filme.nota;
    document.getElementById("ed-duracao").value = filme.duracao || "";
    document.getElementById("ed-diretor").value = filme.diretor || "";
    document.getElementById("ed-elenco").value = filme.elenco || "";
    document.getElementById("ed-poster").value = filme.poster || "";
    document.getElementById("ed-sinopse").value =
        filme.sinopse || filme.descricao || "";

    if (mensagemEdicao) mensagemEdicao.textContent = "";

    modalEdicao.classList.add("ativo");
    modalEdicao.setAttribute("aria-hidden", "false");

    document.getElementById("ed-titulo").focus();
}

function fecharEdicao() {
    if (!modalEdicao || !formEdicao) return;

    modalEdicao.classList.remove("ativo");
    modalEdicao.setAttribute("aria-hidden", "true");

    formEdicao.reset();

    if (mensagemEdicao) mensagemEdicao.textContent = "";

    filmeEmEdicao = null;
}

const botaoFecharEdicao = document.getElementById("fechar-edicao");
const botaoCancelarEdicao = document.getElementById("cancelar-edicao");

if (botaoFecharEdicao) {
    botaoFecharEdicao.addEventListener("click", fecharEdicao);
}

if (botaoCancelarEdicao) {
    botaoCancelarEdicao.addEventListener("click", fecharEdicao);
}

if (modalEdicao) {
    modalEdicao.addEventListener("click", function (event) {
        if (event.target === modalEdicao) {
            fecharEdicao();
        }
    });
}

if (formEdicao) {
    formEdicao.addEventListener("submit", function (event) {
        event.preventDefault();

        if (!filmeEmEdicao) return;

        const titulo = document.getElementById("ed-titulo").value.trim();
        const anoTexto = document.getElementById("ed-ano").value;
        const ano = Number(anoTexto);
        const genero = document.getElementById("ed-genero").value;
        const notaTexto = document.getElementById("ed-nota").value;
        const nota = Number(notaTexto);
        const duracao = document.getElementById("ed-duracao").value.trim();
        const diretor = document.getElementById("ed-diretor").value.trim();
        const elenco = document.getElementById("ed-elenco").value.trim();
        const poster = document.getElementById("ed-poster").value.trim();
        const sinopse = document.getElementById("ed-sinopse").value.trim();

        if (
            !titulo || !genero || !duracao || !diretor ||
            !elenco || !poster || !sinopse
        ) {
            mensagemEdicao.textContent = "Preencha todos os campos.";
            return;
        }

        if (
            anoTexto.trim() === "" ||
            !Number.isInteger(ano) ||
            ano < 1888 ||
            ano > 2100
        ) {
            mensagemEdicao.textContent = "Informe um ano válido.";
            return;
        }

        if (
            notaTexto.trim() === "" ||
            !Number.isFinite(nota) ||
            nota < 0 ||
            nota > 10
        ) {
            mensagemEdicao.textContent = "A nota deve estar entre 0 e 10.";
            return;
        }

        let filmesSalvos = carregarFilmesSalvos();

        const indiceSalvo = filmesSalvos.findIndex(function (item) {
            return item.id === filmeEmEdicao.id;
        });

        if (indiceSalvo === -1) {
            mensagemEdicao.textContent =
                "Não foi possível localizar o filme salvo.";
            return;
        }

        const filmeAtualizado = {
            ...filmeEmEdicao,
            titulo: titulo,
            ano: ano,
            genero: genero,
            nota: nota.toFixed(1),
            duracao: duracao,
            diretor: diretor,
            elenco: elenco,
            poster: poster,
            sinopse: sinopse,
            descricao: sinopse
        };

        filmesSalvos[indiceSalvo] = filmeAtualizado;

        try {
            localStorage.setItem(
                "filmesCadastrados",
                JSON.stringify(filmesSalvos)
            );
        } catch (erro) {
            mensagemEdicao.textContent =
                "Não foi possível salvar as alterações.";
            return;
        }

        const indiceCatalogo = filmes.findIndex(function (item) {
            return item.id === filmeEmEdicao.id;
        });

        if (indiceCatalogo !== -1) {
            filmes[indiceCatalogo] = filmeAtualizado;
        }

        fecharEdicao();
        mostrarFilmes();
    });
}


/* =========================================
   9. EXCLUIR FILMES CADASTRADOS
========================================= */

function excluirFilme(filme) {
    const confirmar = confirm(
        'Tem certeza que deseja excluir "' + filme.titulo + '"?'
    );

    if (!confirmar) return;

    const filmesSalvos = carregarFilmesSalvos();

    const filmesAtualizados = filmesSalvos.filter(function (item) {
        return item.id !== filme.id;
    });

    try {
        localStorage.setItem(
            "filmesCadastrados",
            JSON.stringify(filmesAtualizados)
        );
    } catch (erro) {
        alert("Não foi possível excluir o filme.");
        return;
    }

    const indice = filmes.findIndex(function (item) {
        return item.id === filme.id;
    });

    if (indice !== -1) {
        filmes.splice(indice, 1);
    }

    // Fechar os modais caso o filme excluído estivesse aberto.
    fecharJanelaDetalhes();

    if (filmeEmEdicao && filmeEmEdicao.id === filme.id) {
        fecharEdicao();
    }

    mostrarFilmes();
}


/* =========================================
   10. TECLA ESC PARA FECHAR MODAIS
========================================= */

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        fecharJanelaDetalhes();
        fecharEdicao();

        if (modalCategorias) {
            modalCategorias.classList.remove("ativo");
        }
    }
});


/* =========================================
   11. INICIAR CATÁLOGO
========================================= */

mostrarFilmes();
