
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

    init() {
        if (this.mobileMenu && this.navList) {
            this.addClickEvent();
        }

        return this;
    }

    addClickEvent() {
        this.mobileMenu.addEventListener("click", this.handleClick);
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
const fecharModalCategorias = document.getElementById("fechar-modal");

if (abrirCategorias && modalCategorias) {
    abrirCategorias.addEventListener("click", function (event) {
        event.preventDefault();
        modalCategorias.classList.add("ativo");
    });
}

if (fecharModalCategorias && modalCategorias) {
    fecharModalCategorias.addEventListener("click", function () {
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
    categoria.addEventListener("click", function (event) {
        event.preventDefault();

        const nomeCategoria = this.dataset.categoria;

        if (categoriaSelecionada && nomeCategoria) {
            categoriaSelecionada.textContent =
                "Categoria selecionada: " + nomeCategoria;
        }

        if (modalCategorias) {
            modalCategorias.classList.remove("ativo");
        }
    });
});



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
        console.error("Erro ao carregar filmes salvos:", erro);
        return [];
    }
}

const filmesCadastrados = carregarFilmesSalvos();

// Evita duplicar os filmes cadastrados.
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
   6. ELEMENTOS DO MODAL DE DETALHES
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
        detalhePoster.onerror = function () {
            this.style.display = "none";
        };
        detalhePoster.style.display = "";
    }

    if (detalheGenero) detalheGenero.textContent = filme.genero || "";
    if (detalheTitulo) detalheTitulo.textContent = filme.titulo || "";
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
   7. ELEMENTOS DO FORMULÁRIO DE EDIÇÃO
========================================= */

const modalEdicao = document.getElementById("modal-edicao");
const formEdicao = document.getElementById("form-edicao");
const botaoFecharEdicao = document.getElementById("fechar-edicao");
const botaoCancelarEdicao = document.getElementById("cancelar-edicao");
const mensagemEdicao = document.getElementById("mensagem-edicao");

let filmeEmEdicao = null;


/* =========================================
   8. ABRIR FORMULÁRIO DE EDIÇÃO
========================================= */

function abrirFormularioEdicao(filme) {
    if (!modalEdicao || !formEdicao) return;

    filmeEmEdicao = filme;

    document.getElementById("ed-ano").value = filme.ano ?? "";
    document.getElementById("ed-genero").value = filme.genero || "";
    document.getElementById("ed-nota").value = filme.nota ?? "";
    document.getElementById("ed-duracao").value = filme.duracao || "";
    document.getElementById("ed-diretor").value = filme.diretor || "";
    document.getElementById("ed-elenco").value = filme.elenco || "";
    document.getElementById("ed-poster").value = filme.poster || "";
    document.getElementById("ed-sinopse").value =
        filme.sinopse || filme.descricao || "";

    if (mensagemEdicao) {
        mensagemEdicao.textContent = "";
    }

    modalEdicao.classList.add("ativo");
    modalEdicao.setAttribute("aria-hidden", "false");
}


/* =========================================
   9. FECHAR FORMULÁRIO DE EDIÇÃO
========================================= */

function fecharFormularioEdicao() {
    if (!modalEdicao) return;

    modalEdicao.classList.remove("ativo");
    modalEdicao.setAttribute("aria-hidden", "true");

    if (formEdicao) {
        formEdicao.reset();
    }

    if (mensagemEdicao) {
        mensagemEdicao.textContent = "";
    }

    filmeEmEdicao = null;
}

if (botaoFecharEdicao) {
    botaoFecharEdicao.addEventListener(
        "click",
        fecharFormularioEdicao
    );
}

if (botaoCancelarEdicao) {
    botaoCancelarEdicao.addEventListener(
        "click",
        fecharFormularioEdicao
    );
}

if (modalEdicao) {
    modalEdicao.addEventListener("click", function (event) {
        if (event.target === modalEdicao) {
            fecharFormularioEdicao();
        }
    });
}


/* =========================================
   10. SALVAR ALTERAÇÕES DO FILME
========================================= */

if (formEdicao) {
    formEdicao.addEventListener("submit", function (event) {
        event.preventDefault();

        if (!filmeEmEdicao) return;

        const anoTexto = document.getElementById("ed-ano").value.trim();
        const genero = document.getElementById("ed-genero").value;
        const notaTexto = document.getElementById("ed-nota").value.trim();
        const duracao = document.getElementById("ed-duracao").value.trim();
        const diretor = document.getElementById("ed-diretor").value.trim();
        const elenco = document.getElementById("ed-elenco").value.trim();
        const poster = document.getElementById("ed-poster").value.trim();
        const sinopse = document.getElementById("ed-sinopse").value.trim();

        const ano = Number(anoTexto);
        const nota = Number(notaTexto);

        if (
            anoTexto === "" ||
            !Number.isInteger(ano) ||
            ano < 1888 ||
            ano > 2100
        ) {
            mensagemEdicao.textContent = "Informe um ano válido.";
            return;
        }

        if (
            notaTexto === "" ||
            !Number.isFinite(nota) ||
            nota < 0 ||
            nota > 10
        ) {
            mensagemEdicao.textContent =
                "A nota deve estar entre 0 e 10.";
            return;
        }

        if (
            !genero ||
            !duracao ||
            !diretor ||
            !elenco ||
            !poster ||
            !sinopse
        ) {
            mensagemEdicao.textContent =
                "Preencha todos os campos do formulário.";
            return;
        }

        if (!filmeEmEdicao.id) {
            mensagemEdicao.textContent =
                "Este filme não possui um cadastro editável no navegador.";
            return;
        }

        const filmeAtualizado = {
            ...filmeEmEdicao,
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

        const filmesSalvos = carregarFilmesSalvos();

        const indiceSalvo = filmesSalvos.findIndex(function (item) {
            return item.id === filmeEmEdicao.id;
        });

        if (indiceSalvo === -1) {
            mensagemEdicao.textContent =
                "Não foi possível localizar o filme salvo.";
            return;
        }

        filmesSalvos[indiceSalvo] = filmeAtualizado;

        try {
            localStorage.setItem(
                "filmesCadastrados",
                JSON.stringify(filmesSalvos)
            );
        } catch (erro) {
            console.error("Erro ao salvar alterações:", erro);
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

        fecharFormularioEdicao();
        mostrarFilmes();
    });
}


/* =========================================
   11. EXIBIR FILMES, FILTRAR E ORDENAR
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
        const correspondeTitulo = (filme.titulo || "")
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

        // Botões de edição e exclusão para filmes cadastrados.
        let acoesFilme = null;

        if (filme.id) {
            acoesFilme = document.createElement("div");
            acoesFilme.className = "acoes-filme";

            const botaoEditar = document.createElement("button");
            botaoEditar.type = "button";
            botaoEditar.className = "botao-editar";
            botaoEditar.textContent = "✎ Editar";

            const botaoExcluir = document.createElement("button");
            botaoExcluir.type = "button";
            botaoExcluir.className = "botao-excluir";
            botaoExcluir.textContent = "▤ Excluir";

            botaoEditar.addEventListener("click", function (event) {
                event.stopPropagation();
                abrirFormularioEdicao(filme);
            });

            botaoExcluir.addEventListener("click", function (event) {
                event.stopPropagation();
                excluirFilme(filme);
            });

            acoesFilme.append(botaoEditar, botaoExcluir);
        }

        card.append(poster, informacoes);

        if (acoesFilme) {
            card.appendChild(acoesFilme);
        }

        listaFilmes.appendChild(card);
    });
}


/* =========================================
   12. EVENTOS DOS FILTROS
========================================= */

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
   13. EXCLUIR FILMES CADASTRADOS
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
        console.error("Erro ao excluir filme:", erro);
        alert("Não foi possível excluir o filme.");
        return;
    }

    const indice = filmes.findIndex(function (item) {
        return item.id === filme.id;
    });

    if (indice !== -1) {
        filmes.splice(indice, 1);
    }

    if (filmeEmEdicao && filmeEmEdicao.id === filme.id) {
        fecharFormularioEdicao();
    }

    fecharJanelaDetalhes();
    mostrarFilmes();
}


/* =========================================
   14. FECHAR MODAIS COM ESC
========================================= */

document.addEventListener("keydown", function (event) {
    if (event.key !== "Escape") return;

    fecharJanelaDetalhes();
    fecharFormularioEdicao();

    if (modalCategorias) {
        modalCategorias.classList.remove("ativo");
    }
});


/* =========================================
   15. INICIAR CATÁLOGO
========================================= */

mostrarFilmes();
