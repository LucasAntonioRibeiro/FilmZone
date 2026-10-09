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