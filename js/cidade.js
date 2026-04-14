const inputCidade = document.getElementById('cidade');
const sugestoesContainer = document.getElementById('sugestoes');
const inputEstado = document.getElementById('estado');
let todasCidades = [];

async function carregarCidades() {
  try {
    const resposta = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/municipios');
    const dados = await resposta.json();
    todasCidades = dados
      .filter(cidade => cidade.microrregiao && cidade.microrregiao.mesorregiao && cidade.microrregiao.mesorregiao.UF)
      .map(cidade => ({
        nome: cidade.nome,
        uf: cidade.microrregiao.mesorregiao.UF.sigla
      }));
  } catch (erro) {
    console.error('Erro ao carregar cidades:', erro);
  }
}

carregarCidades();

inputCidade.addEventListener('input', () => {
  const termo = inputCidade.value.toLowerCase();
  sugestoesContainer.innerHTML = '';

  if (termo.length < 2) return;

  const resultados = todasCidades.filter(c =>
    c.nome.toLowerCase().startsWith(termo)
  ).slice(0, 10);

  resultados.forEach(cidade => {
    const div = document.createElement('div');
    div.textContent = `${cidade.nome} – ${cidade.uf}`;
    div.addEventListener('click', () => {
      inputCidade.value = cidade.nome;
      inputEstado.value = cidade.uf;
      sugestoesContainer.innerHTML = '';
    });
    sugestoesContainer.appendChild(div);
  });
});

document.addEventListener('click', (e) => {
  if (!e.target.closest('.input-wrapper')) {
    sugestoesContainer.innerHTML = '';
  }
});
