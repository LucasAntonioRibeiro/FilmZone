const posterInput = document.getElementById('poster');
const posterImg = document.getElementById('posterImg');
const resumo = document.getElementById('resumo');
const contador = document.getElementById('contador');
const form = document.getElementById('filmeForm');
const sucesso = document.getElementById('sucesso');

const nome = document.getElementById('nome');
const ano = document.getElementById('ano');
const genero = document.getElementById('genero');
const classificacao = document.getElementById('classificacao');
const duracao = document.getElementById('duracao');
const diretor = document.getElementById('diretor');
const elenco = document.getElementById('elenco');
const poster = document.getElementById('poster');
const trailer = document.getElementById('trailer');
const avaliacao = document.getElementById('avaliacao');

// Pré-visualização do pôster
posterInput.addEventListener('input', () => {
  posterImg.src = posterInput.value;
  posterImg.style.display = posterInput.value ? 'block' : 'none';
});

// Contador de caracteres
resumo.addEventListener('input', () => {
  contador.textContent = `${resumo.value.length} / 500`;
});

// Envio do formulário
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const confirmar = confirm('Tem certeza que deseja cadastrar este filme?');
  if (!confirmar) return;

  if (!nome.value || !ano.value || !genero.value || !classificacao.value || !duracao.value) {
    alert('Por favor, preencha todos os campos obrigatórios.');
    return;
  }

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

  form.reset();

  posterImg.style.display = 'none';
  contador.textContent = '0 / 500';

  sucesso.style.display = 'block';

  setTimeout(() => sucesso.style.display = 'none', 3000);
});
