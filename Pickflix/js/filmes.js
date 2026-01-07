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
                : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3
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

const posterInput = document.getElementById('poster');
const posterImg = document.getElementById('posterImg');
const resumo = document.getElementById('resumo');
const contador = document.getElementById('contador');
const form = document.getElementById('filmeForm');
const sucesso = document.getElementById('sucesso');

posterInput.addEventListener('input', () => {
    posterImg.src = posterInput.value;
    posterImg.style.display = posterInput.value ? 'block' : 'none'
});

resumo.addEventListener('input', () => {
    contador.textContent = `${resumo.value.length} / 500`;
});

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const filme = {
        nome: nome.value,
        ano: ano.value,
        genero: genero.value,
        classificacao: classificacao.value,
        duracao: duracao.value,
        diretor: diretor.value,
        elenco: elenco.value,
        poster: poster.value,
        resumo: resumo.value,
        trailer: trailer.value,
        avaliacao: avaliacao.value
    };

    const filmes = JSON.parse(localStorage.getItem('filmes')) || [];
    filmes.push(filme);
    localStorage.setItem('filmes', JSON.stringify(filmes));


    sucesso.style.display = 'block';
    form.reset();
    posterImg.style.display = 'none';
    contador.textContent = '0 / 500';


    setTimeout(() => sucesso.style.display = 'none', 3000);
});