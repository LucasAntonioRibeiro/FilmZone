const form = document.getElementById('serieForm');
const sucesso = document.getElementById('sucesso');

const nome = document.getElementById('nome');
const ano = document.getElementById('ano');
const genero = document.getElementById('genero');
const classificacao = document.getElementById('classificacao');
const temporadas = document.getElementById('temporadas');
const episodios = document.getElementById('episodios');
const duracao = document.getElementById('duracao');
const criador = document.getElementById('criador');
const poster = document.getElementById('poster');
const posterImg = document.getElementById('posterImg');
const resumo = document.getElementById('resumo');
const contador = document.getElementById('contador');
const trailerInput = document.getElementById('trailerInput');
const previewTrailer = document.getElementById('previewTrailer');
const atorInput = document.getElementById('atorInput');
const listaAtores = document.getElementById('listaAtores');
const topSerie = document.getElementById('topSerie');

let atores = [];


// 🎭 ELENCO
atorInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();

    const nomeAtor = atorInput.value.trim();
    if (!nomeAtor) return;

    atores.push(nomeAtor);

    const tag = document.createElement('span');
    tag.style.background = '#007bff';
    tag.style.color = '#fff';
    tag.style.padding = '5px 10px';
    tag.style.margin = '5px';
    tag.style.borderRadius = '20px';

    const texto = document.createElement('span');
    texto.textContent = nomeAtor;

    const x = document.createElement('span');
    x.textContent = ' ✖';
    x.style.cursor = 'pointer';

    x.addEventListener('click', () => {
      listaAtores.removeChild(tag);
      atores = atores.filter(a => a !== nomeAtor);
    });

    tag.appendChild(texto);
    tag.appendChild(x);
    listaAtores.appendChild(tag);

    atorInput.value = '';
  }
});


// 🎬 TRAILER
trailerInput.addEventListener('input', () => {
  const url = trailerInput.value;

  let videoId = '';

  if (url.includes('youtube.com/watch?v=')) {
    videoId = url.split('v=')[1].split('&')[0];
  } else if (url.includes('youtu.be/')) {
    videoId = url.split('youtu.be/')[1].split('?')[0];
  }

  if (videoId) {
    previewTrailer.innerHTML = `
      <iframe width="100%" height="200"
      src="https://www.youtube.com/embed/${videoId}"
      allowfullscreen></iframe>
    `;
  } else {
    previewTrailer.innerHTML = '';
  }
});


// 🖼️ POSTER
poster.addEventListener('input', () => {
  if (poster.value.includes('http')) {
    posterImg.src = poster.value;
    posterImg.style.display = 'block';
  } else {
    posterImg.style.display = 'none';
  }
});


// ✏️ RESUMO
resumo.addEventListener('input', () => {
  contador.textContent = `${resumo.value.length} / 500`;
});


// 📦 SUBMIT
form.addEventListener('submit', (e) => {
  e.preventDefault();

  if (!nome.value || !ano.value) {
    alert('Preencha os campos obrigatórios');
    return;
  }

  const serie = {
    nome: nome.value,
    ano: ano.value,
    genero: genero.value,
    classificacao: classificacao.value,
    temporadas: temporadas.value,
    episodios: episodios.value,
    duracao: `${duracao.value} min`,
    criador: criador.value,
    elenco: atores,
    poster: poster.value,
    resumo: resumo.value,
    trailer: trailerInput.value,

    topSerie: topSerie.checked
  };

  const series = JSON.parse(localStorage.getItem('series')) || [];
  series.push(serie);
  localStorage.setItem('series', JSON.stringify(series));

  // limpar
  form.reset();
  atores = [];
  listaAtores.innerHTML = '';
  previewTrailer.innerHTML = '';
  posterImg.style.display = 'none';
  contador.textContent = '0 / 500';

  sucesso.style.display = 'block';
  setTimeout(() => sucesso.style.display = 'none', 3000);
});