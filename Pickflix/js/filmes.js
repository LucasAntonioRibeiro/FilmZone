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
const porterImg = document.getElementById('porterImg');
const resumo = document.getElementById('resumo');
const contador = document.getElementById('contador');
const trailer = document.getElementById('trailer');
const avaliacao = document.getElementById('avaliacao');

// Previsualização do Poster

poster.addEventListener('input', () => {
  posterImg.src = poster.Value;
  posterImg.style.display = poster.Value ? 'block' : 'nome';
});

// Contador de caracter do resumo

resumo.addEventListener('input', () => {
  contador.textContent = `${resumo.Value.length} / 500`;
});


// Envio do formulario

form.addEventListener ('submit', (e) => {
  e.preventDefault();

  const confirmar = confirm('Deseja castrar este filme?');
  if (!confirmar) return;

  if (!nome.Value || !ano.value || !genero.value || !classificacao.value || !duracao.value) {
    alert('Preencha os campos obrigatórios!');
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

  // Limpar formulário
  form.reset();
  posterImg.style.display = 'none';
  contador.textContent = '0 / 500';

  // Mostrar sucesso
  sucesso.style.display = 'block';
  setTimeout(() => sucesso.style.display = 'none', 3000);
});