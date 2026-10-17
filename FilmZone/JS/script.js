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

        sinopse: "Batman: O Cavaleiro das Trevas (2008) acompanha Batman (Christian Bale) e o promotor Harvey Dent (Aaron Eckhart), aliados ao tenente James Gordon (Gary Oldman), na luta contra o crime organizado em Gotham.  Essa aliança é ameaçada pelo surgimento do Coringa (Heath Ledger), um agente do caos que busca lançar a cidade na anarquia e provar que qualquer um pode se corromper. ",
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

        sinopse: "A Origem (Inception, 2010), dirigido por Christopher Nolan, acompanha Dom Cobb (Leonardo DiCaprio), um ladrão especializado em extrair segredos do subconsciente durante os sonhos.  Para ser absolvido de acusações e reencontrar seus filhos nos EUA, Cobb aceita uma última missão impossível: a inserção, que consiste em plantar uma ideia na mente do herdeiro de um império energético, Robert Fischer ",
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

        sinopse: "Como Treinar o Seu Dragão é uma franquia de animação da DreamWorks (e um recente filme live-action de 2025) que narra a história de Soluço (Hiccup), um jovem viking franzino e desajeitado da ilha de Berk, filho do chefe Stoico.  Em um mundo onde vikings e dragões estão em guerra, Soluço derruba um raro e temido Fúria da Noite, mas, em vez de matá-lo, forma uma amizade improvável com o dragão, a quem chama de Banguela. ",
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

        sinopse: "Jurassic Park conta a história do bilionário John Hammond, que cria um parque temático na Isla Nublar com dinossauros clonados a partir de DNA preservado em âmbar.  Para validar a segurança do empreendimento antes da abertura ao público, Hammond convida o paleontólogo Alan Grant, a paleobotânica Ellie Sattler, o matemático Ian Malcolm e os netos de Hammond, Tim e Lex, para uma visita guiada. ",
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

        sinopse: "Dirigido por Sam Raimi e estrelado por Tobey Maguire, o filme narra a história de origem de Peter Parker, um jovem tímido picado por uma aranha geneticamente modificada que adquire superpoderes.  Após o assassinato de seu tio Ben, Peter decide usar suas habilidades para combater o crime, enfrentando o Duende Verde (Norman Osborn). ",
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

        sinopse: "O Rei Leão narra a jornada de Simba, um jovem leão destinado a governar as Terras do Reino, cujo destino é alterado pela traição de seu tio Scar.  Após ser manipulado a acreditar que é responsável pela morte acidental de seu pai, o rei Mufasa, Simba foge do reino e vive uma vida despreocupada com seus novos amigos, o suricato Timão e o javali Pumba. ",
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

        sinopse: "Jack Dawson (Leonardo DiCaprio) é um jovem aventureiro que, na mesa de jogo, ganha uma passagem para a primeira viagem do transatlântico Titanic. Trata-se de um luxuoso e imponente navio, anunciado na época como inafundável, que parte para os Estados Unidos. Nele está também Rose DeWitt Bukater (Kate Winslet), a jovem noiva de Caledon Hockley (Billy Zane). Rose está descontente com sua vida, já que sente-se sufocada pelos costumes da elite e não ama Caledon. Entretanto, ela precisa se casar com ele para manter o bom nome da família, que está falida. Um dia, desesperada, Rose ameaça se atirar do Titanic, mas Jack consegue demovê-la da ideia. Pelo ato ele é convidado a jantar na primeira classe, onde começa a se tornar mais próximo de Rose. Logo eles se apaixonam, despertando a fúria de Caledon. A situação fica ainda mais complicada quando o Titanic se choca com um iceberg, provocando algo que ninguém imaginava ser possível: o naufrágio do navio. ",
        diretor: "James Cameron",
        elenco: "Leonardo DiCaprio, Kate Winslet, Billy Zane",
        duracao: "3h 14min"
    }
];

// Carregar os filmes cadastrados pelo formulário
const filmesCadastrados = JSON.parse(
    localStorage.getItem("filmesCadastrados") || "[]"
);

// Adicionar os filmes cadastrados ao catálogo
filmes.push(...filmesCadastrados);


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
        card.tabIndex = 0;
card.setAttribute("role", "button");
card.setAttribute("aria-label", "Ver detalhes de " + filme.titulo);

card.addEventListener("click", function () {
    abrirDetalhes(filme);
});

card.addEventListener("keydown", function (event) {
    if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        abrirDetalhes(filme);
    }
});

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

        if (filme.id) {
            const acoesFilme = document.createElement("div");
            acoesFilme.className = "acoes-filme";

            const botaoEditar = document.createElement("button");
            botaoEditar.type = "button";
            botaoEditar.textContent = "Editar";
            botaoEditar.className = "botao-editar";

            const botaoExcluir = document.createElement("button");
            botaoExcluir.type = "button";
            botaoExcluir.textContent = "Excluir";
            botaoExcluir.className = "botao-excluir";

            botaoEditar.addEventListener("click", function (event) {
              event.stopPropagation();
              editarFilme(filme);  
            });

            botaoExcluir.addEventListener("click", function (event) {
                event.stopPropagation();
                excluirFilme(filme);
            });

            acoesFilme.appendChild(botaoEditar);
            acoesFilme.appendChild(botaoExcluir);

            card.appendChild(acoesFilme);        }

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

const modalDetalhes = document.getElementById("modal-detalhes");
const fecharDetalhes = document.getElementById("fechar-detalhes");


function abrirDetalhes(filme) {
    document.getElementById("detalhe-poster").src = filme.poster || "";
    document.getElementById("detalhe-poster").alt = "Pôster de " + filme.titulo;

    document.getElementById("detalhe-genero").textContent = filme.genero;

    // Título correto do filme
    document.getElementById("detalhe-titulo").textContent = filme.titulo;

    // Ano de lançamento
    document.getElementById("detalhe-ano").textContent = "Ano: " + filme.ano;

    // Nota do filme
    document.getElementById("detalhe-nota").textContent = "★ " + filme.nota + " / 10";

    // Duração
    document.getElementById("detalhe-duracao").textContent =
        "Duração: " + (filme.duracao || "Não informada");

    // Sinopse
    document.getElementById("detalhe-sinopse").textContent =
        filme.sinopse || filme.descricao;

    // Direção
    document.getElementById("detalhe-diretor").textContent =
        filme.diretor || "Não informado";

    // Elenco principal
    document.getElementById("detalhe-elenco").textContent =
        filme.elenco || "Não informado";

    // Abrir o modal
    modalDetalhes.classList.add("ativo");
}


function fecharJanelaDetalhes() {
    modalDetalhes.classList.remove("ativo");
}

fecharDetalhes.addEventListener("click", fecharJanelaDetalhes);

modalDetalhes.addEventListener("click", function (event) {
    if (event.target === modalDetalhes) {
        fecharJanelaDetalhes();
    }
});

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        fecharJanelaDetalhes();
    }
});

function editarFilme(filme) {
    const titulo = prompt("Título do filme:", filme.titulo);
    if (titulo === null) return;

    const ano = prompt("Ano de lançamento:", filme.ano);
    if (ano === null) return;

    const genero = prompt("Gênero:", filme.genero);
    if (genero === null) return;

    const nota = prompt("Nota de 0 a 10:", filme.nota);
    if (nota === null) return;

    const duracao = prompt("Duração:", filme.duracao || "");
    if (duracao === null) return;

    const diretor = prompt("Diretor:", filme.diretor || "");
    if (diretor === null) return;

    const elenco = prompt("Elenco:", filme.elenco || "");
    if (elenco === null) return;

    const poster = prompt("URL do pôster:", filme.poster || "");
    if (poster === null) return;

    const sinopse = prompt(
        "Sinopse:",
        filme.sinopse || filme.descricao || ""
    );
    if (sinopse === null) return;

    if (
        !titulo.trim() ||
        !genero.trim() ||
        !duracao.trim() ||
        !diretor.trim() ||
        !elenco.trim() ||
        !poster.trim() ||
        !sinopse.trim()
    ) {
        alert("Preencha todas as informações.");
        return;
    }

    const anoNumero = Number(ano);
    const notaNumero = Number(nota);

    if (
        !Number.isInteger(anoNumero) ||
        anoNumero < 1888 ||
        anoNumero > 2100
    ) {
        alert("Informe um ano válido.");
        return;
    }

    if (
        nota.trim() === "" ||
        !Number.isFinite(notaNumero) ||
        notaNumero < 0 ||
        notaNumero > 10
    ) {
        alert("A nota deve estar entre 0 e 10.");
        return;
    }

    // Atualizar os dados do filme
    filme.titulo = titulo.trim();
    filme.ano = anoNumero;
    filme.genero = genero.trim();
    filme.nota = notaNumero.toFixed(1);
    filme.duracao = duracao.trim();
    filme.diretor = diretor.trim();
    filme.elenco = elenco.trim();
    filme.poster = poster.trim();
    filme.sinopse = sinopse.trim();
    filme.descricao = sinopse.trim();

    // Atualizar os filmes salvos no navegador
    const filmesSalvos = JSON.parse(
        localStorage.getItem("filmesCadastrados") || "[]"
    );

    const indice = filmesSalvos.findIndex(
        function (item) {
            return item.id === filme.id;
        }
    );

    if (indice === -1) {
        alert("Não foi possível encontrar o filme salvo.");
        return;
    }

    filmesSalvos[indice] = filme;

    localStorage.setItem(
        "filmesCadastrados",
        JSON.stringify(filmesSalvos)
    );

    alert("Filme atualizado com sucesso!");

    mostrarFilmes();
}

function excluirFilme(filme) {
    const confirmar = confirm(
        'Tem certeza que deseja excluir "' + filme.titulo + '"?'
    );

    if (!confirmar) {
        return;
    }

    const filmesSalvos = JSON.parse(
        localStorage.getItem("filmesCadastrados") || "[]"
    );

    const filmesAtualizados = filmesSalvos.filter(
        function (item) {
            return item.id !== filme.id;
        }
    );

    localStorage.setItem(
        "filmesCadastrados",
        JSON.stringify(filmesAtualizados)
    );

    // Remover o filme também da lista que está na memória
    const indice = filmes.findIndex(
        function (item) {
            return item.id === filme.id;
        }
    );

    if (indice !== -1) {
        filmes.splice(indice, 1);
    }

    alert("Filme excluído com sucesso!");

    mostrarFilmes();
}



mostrarFilmes();


