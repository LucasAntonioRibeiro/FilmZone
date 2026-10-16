
const formCadastroFilme = document.getElementById("form-cadastro-filme");
const mensagemFilme = document.getElementById("mensagem-filme");

formCadastroFilme.addEventListener("submit", function (event) {
    event.preventDefault();

    const filme = {
        id: Date.now(),
        titulo: document.getElementById("titulo-filme").value.trim(),
        ano: Number(document.getElementById("ano-filme").value),
        genero: document.getElementById("genero-filme").value,
        nota: Number(document.getElementById("nota-filme").value),
        duracao: document.getElementById("duracao-filme").value.trim(),
        diretor: document.getElementById("diretor-filme").value.trim(),
        elenco: document.getElementById("elenco-filme").value.trim(),
        poster: document.getElementById("poster-filme").value.trim(),
        sinopse: document.getElementById("sinopse-filme").value.trim(),
        descricao: document.getElementById("sinopse-filme").value.trim()
    };

    if (filme.nota < 0 || filme.nota > 10) {
        mensagemFilme.textContent = "A nota deve estar entre 0 e 10.";
        return;
    }

    if (filme.ano < 1888 || filme.ano > 2100) {
        mensagemFilme.textContent = "Informe um ano válido.";
        return;
    }

    let filmesSalvos = [];

    try {
        filmesSalvos = JSON.parse(
            localStorage.getItem("filmesCadastrados") || "[]"
        );
    } catch (erro) {
        mensagemFilme.textContent = "Não foi possível ler os filmes salvos.";
        return;
    }

    filmesSalvos.push(filme);

    localStorage.setItem(
        "filmesCadastrados",
        JSON.stringify(filmesSalvos)
    );

    mensagemFilme.textContent = "Filme cadastrado com sucesso!";

    formCadastroFilme.reset();
});