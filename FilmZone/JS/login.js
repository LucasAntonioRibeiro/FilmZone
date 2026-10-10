// Elementos da página
const formLogin = document.getElementById("formLogin");
const usuario = document.getElementById("usuario");
const senha = document.getElementById("senha");
const mostrarSenha = document.getElementById("mostrarSenha");
const mensagem = document.getElementById("mensagem");
const lembrar = document.getElementById("lembrar");

// Mostrar e ocultar a senha
mostrarSenha.addEventListener("click", function () {

    if (senha.type === "password") {
        senha.type = "text";
        mostrarSenha.textContent = "👁";
        mostrarSenha.setAttribute("aria-label", "Ocultar senha");
    } else {
        senha.type = "password";
        mostrarSenha.textContent = "👁";
        mostrarSenha.setAttribute("aria-label", "Mostrar senha");
    }

});

// Recuperar usuário salvo
const usuarioSalvo = localStorage.getItem("usuarioLogin");

if (usuarioSalvo) {
    usuario.value = usuarioSalvo;
    lembrar.checked = true;
}

// Validar o formulário
formLogin.addEventListener("submit", function (event) {

    event.preventDefault();

    const nome = usuario.value.trim();
    const senhaDigitada = senha.value;

    mensagem.className = "";

    if (nome === "" || senhaDigitada.trim() === "") {
        mensagem.textContent = "Preencha todos os campos.";
        mensagem.classList.add("erro");
        return;
    }

    if (nome.length < 3) {
        mensagem.textContent =
            "O nome de usuário deve ter pelo menos 3 caracteres.";

        mensagem.classList.add("erro");
        return;
    }

    if (senhaDigitada.length < 6) {
        mensagem.textContent =
            "A senha deve ter pelo menos 6 caracteres.";

        mensagem.classList.add("erro");
        return;
    }

    // Salva somente o nome, se o usuário escolher lembrar
    if (lembrar.checked) {
        localStorage.setItem("usuarioLogin", nome);
    } else {
        localStorage.removeItem("usuarioLogin");
    }

    mensagem.textContent =
        "Validação concluída! Conecte este formulário ao seu sistema de login.";

    mensagem.classList.add("sucesso");

});

// Recuperação de senha
document.getElementById("esqueciSenha")
    .addEventListener("click", function (event) {

        event.preventDefault();

        alert(
            "Para recuperar sua senha, será necessário implementar " +
            "um processo de recuperação com o seu sistema."
        );

    });

// Login com Google: requer integração real
document.getElementById("btnGoogle")
    .addEventListener("click", function () {

        alert(
            "O login com Google precisa ser configurado " +
            "com autenticação Google para funcionar."
        );

    });