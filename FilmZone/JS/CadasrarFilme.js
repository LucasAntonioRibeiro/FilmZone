
/* =========================================
   1. ELEMENTOS DO FORMULÁRIO
========================================= */

const formCadastroFilme = document.getElementById("form-cadastro-filme");
const mensagemFilme = document.getElementById("mensagem-filme");

const tipoConteudo = document.getElementById("tipo-conteudo");

const grupoDuracao = document.getElementById("grupo-duracao");
const grupoTemporadas = document.getElementById("grupo-temporadas");
const grupoEpisodios = document.getElementById("grupo-episodios");

const campoDuracao = document.getElementById("duracao-filme");
const campoTemporadas = document.getElementById("temporadas-serie");
const campoEpisodios = document.getElementById("episodios-serie");

const labelTitulo = document.getElementById("label-titulo");
const labelDiretor = document.getElementById("label-diretor");
const botaoCadastrar = document.getElementById("botao-cadastrar");


/* =========================================
   2. ALTERAR CAMPOS CONFORME O TIPO
========================================= */

function atualizarFormulario() {

    const tipo = tipoConteudo.value;

    if (tipo === "Filme") {

        // Mostra duração e esconde os campos de série.
        grupoDuracao.hidden = false;
        grupoTemporadas.hidden = true;
        grupoEpisodios.hidden = true;

        // Define quais campos são obrigatórios.
        campoDuracao.required = true;
        campoTemporadas.required = false;
        campoEpisodios.required = false;

        // Altera os textos do formulário.
        labelTitulo.textContent = "Título do filme";
        labelDiretor.textContent = "Diretor";
        botaoCadastrar.textContent = "Cadastrar filme";

    } else {

        // Esconde duração e mostra os campos de série.
        grupoDuracao.hidden = true;
        grupoTemporadas.hidden = false;
        grupoEpisodios.hidden = false;

        // Define quais campos são obrigatórios.
        campoDuracao.required = false;
        campoTemporadas.required = true;
        campoEpisodios.required = true;

        // Altera os textos do formulário.
        labelTitulo.textContent = "Nome da série";
        labelDiretor.textContent = "Criador da série";
        botaoCadastrar.textContent = "Cadastrar série";
    }

    mensagemFilme.textContent = "";
}

// Executa quando o usuário troca Filme/Série.
tipoConteudo.addEventListener("change", atualizarFormulario);

// Configura o formulário ao abrir a página.
atualizarFormulario();


/* =========================================
   3. CADASTRAR FILME OU SÉRIE
========================================= */

formCadastroFilme.addEventListener("submit", function (event) {

    event.preventDefault();

    const tipo = tipoConteudo.value;

    // Monta o objeto com os dados preenchidos.
    const conteudo = {

        id: Date.now(),

        tipo: tipo,

        titulo: document.getElementById("titulo-filme").value.trim(),

        ano: Number(document.getElementById("ano-filme").value),

        genero: document.getElementById("genero-filme").value,

        nota: Number(document.getElementById("nota-filme").value),

        diretor: document.getElementById("diretor-filme").value.trim(),

        elenco: document.getElementById("elenco-filme").value.trim(),

        poster: document.getElementById("poster-filme").value.trim(),

        sinopse: document.getElementById("sinopse-filme").value.trim(),

        descricao: document.getElementById("sinopse-filme").value.trim(),

        // Campos específicos de séries.
        temporadas: null,

        episodios: null,

        // Campo usado pelo catálogo atual.
        duracao: ""
    };


    /* =========================================
       4. VALIDAR NOTA E ANO
    ========================================= */

    if (!Number.isFinite(conteudo.nota) ||
        conteudo.nota < 0 ||
        conteudo.nota > 10) {

        mensagemFilme.textContent =
            "A nota deve estar entre 0 e 10.";

        return;
    }

    if (!Number.isInteger(conteudo.ano) ||
        conteudo.ano < 1888 ||
        conteudo.ano > 2100) {

        mensagemFilme.textContent =
            "Informe um ano válido.";

        return;
    }


    /* =========================================
       5. VALIDAR CAMPOS ESPECÍFICOS
    ========================================= */

    if (tipo === "Filme") {

        conteudo.duracao = campoDuracao.value.trim();

        if (!conteudo.duracao) {

            mensagemFilme.textContent =
                "Informe a duração do filme.";

            return;
        }

    } else {

        conteudo.temporadas = Number(campoTemporadas.value);

        conteudo.episodios = Number(campoEpisodios.value);

        if (!Number.isInteger(conteudo.temporadas) ||
            conteudo.temporadas < 1) {

            mensagemFilme.textContent =
                "Informe uma quantidade válida de temporadas.";

            return;
        }

        if (!Number.isInteger(conteudo.episodios) ||
            conteudo.episodios < 1) {

            mensagemFilme.textContent =
                "Informe uma quantidade válida de episódios.";

            return;
        }

        // Mantém compatibilidade com o catálogo atual.
        conteudo.duracao =
            conteudo.temporadas === 1
                ? "1 temporada"
                : conteudo.temporadas + " temporadas";
    }


    /* =========================================
       6. CARREGAR CONTEÚDOS JÁ CADASTRADOS
    ========================================= */

    let conteudosSalvos = [];

    try {

        conteudosSalvos = JSON.parse(
            localStorage.getItem("filmesCadastrados") || "[]"
        );

        if (!Array.isArray(conteudosSalvos)) {
            conteudosSalvos = [];
        }

    } catch (erro) {

        mensagemFilme.textContent =
            "Não foi possível ler os conteúdos salvos.";

        console.error("Erro ao ler os dados:", erro);

        return;
    }


    /* =========================================
       7. SALVAR FILME OU SÉRIE
    ========================================= */

    conteudosSalvos.push(conteudo);

    try {

        localStorage.setItem(
            "filmesCadastrados",
            JSON.stringify(conteudosSalvos)
        );

    } catch (erro) {

        mensagemFilme.textContent =
            "Não foi possível salvar o conteúdo.";

        console.error("Erro ao salvar:", erro);

        return;
    }


    /* =========================================
       8. MENSAGEM DE SUCESSO
    ========================================= */

    if (tipo === "Filme") {

        mensagemFilme.textContent =
            "Filme cadastrado com sucesso!";

    } else {

        mensagemFilme.textContent =
            "Série cadastrada com sucesso!";
    }

    formCadastroFilme.reset();

    // Volta ao tipo Filme e atualiza os campos.
    tipoConteudo.value = "Filme";

    atualizarFormulario();
});
