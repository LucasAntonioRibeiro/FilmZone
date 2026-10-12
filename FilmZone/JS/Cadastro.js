
const formCadastro = document.getElementById("formCadastro");
const nome = document.getElementById("nome");
const usuario = document.getElementById("usuario");
const email = document.getElementById("email");
const senha = document.getElementById("senha");
const confirmarSenha = document.getElementById("confirmarSenha");
const aceitarTermos = document.getElementById("aceitarTermos");
const mensagem = document.getElementById("mensagem");

// Seleciona os dois botões de visualizar senha
const botoesSenha = document.querySelectorAll(".mostrar-senha");

botoesSenha.forEach(function (botao) {

    botao.addEventListener("click", function () {

        const campoSenha = document.getElementById(
            botao.dataset.alvo
        );

        if (campoSenha.type === "password") {
            campoSenha.type = "text";
            botao.setAttribute("aria-label", "Ocultar senha");
        } else {
            campoSenha.type = "password";
            botao.setAttribute("aria-label", "Mostrar senha");
        }

    });

});

// Validação do formulário
formCadastro.addEventListener("submit", function (event) {

    event.preventDefault();

    mensagem.textContent = "";
    mensagem.className = "";

    const nomeDigitado = nome.value.trim();
    const usuarioDigitado = usuario.value.trim();
    const emailDigitado = email.value.trim();

    if (
        nomeDigitado === "" ||
        usuarioDigitado === "" ||
        emailDigitado === "" ||
        senha.value === "" ||
        confirmarSenha.value === ""
    ) {
        mostrarMensagem("Preencha todos os campos.", "erro");
        return;
    }

    if (nomeDigitado.length < 3) {
        mostrarMensagem(
            "O nome deve ter pelo menos 3 caracteres.",
            "erro"
        );
        return;
    }

    if (usuarioDigitado.length < 3) {
        mostrarMensagem(
            "O usuário deve ter pelo menos 3 caracteres.",
            "erro"
        );
        return;
    }

    if (senha.value.length < 6) {
        mostrarMensagem(
            "A senha deve ter pelo menos 6 caracteres.",
            "erro"
        );
        return;
    }

    if (senha.value !== confirmarSenha.value) {
        mostrarMensagem("As senhas não são iguais.", "erro");
        confirmarSenha.focus();
        return;
    }

    if (!aceitarTermos.checked) {
        mostrarMensagem(
            "Você precisa aceitar os termos para continuar.",
            "erro"
        );
        return;
    }

    mostrarMensagem(
        "Validação concluída! Agora conecte o cadastro ao seu sistema.",
        "sucesso"
    );

});

// Exibe mensagens na tela
function mostrarMensagem(texto, tipo) {
    mensagem.textContent = texto;
    mensagem.className = tipo;
}
