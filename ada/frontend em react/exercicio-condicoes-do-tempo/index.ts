const form = document.querySelector('#search-form > form');
const input: HTMLInputElement | null =
    document.querySelector('#input-localizacao');
const sectionTempoInfo = document.querySelector('#tempo-info');

form?.addEventListener('submit', async (event) => {
    event.preventDefault(); // impedir carregamento da pagina

    if (!input || !sectionTempoInfo) return;

    const localizacao = input.value.trim();

    if (localizacao.length < 3) alert('O local deve ter ao menos 3 caracteres');

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${localizacao}&appid=e06329eac585b1d59cc630ab7f7b4729&lang=pt&units=metric`;

    try {
        const resposta = await fetch(url);
        const dados = await resposta.json();

        console.log(dados);

        const infos = {
            temperatura: Math.round(dados.main.temp),
            descricao: dados.weather[0].description,
            local: dados.name,
            icone: `https://openweathermap.org/img/wn/${dados.weather[0].icon}@2x.png`,
        };

        sectionTempoInfo.innerHTML = `
            <div class="tempo-dados">
                <h2>${infos.local}</h2>
                <span>${infos.temperatura}º C</span>
            </div>
            <div class="tempo-desc">
                <img src="${infos.icone}" alt="${infos.descricao}" />
                <span>${infos.descricao}</span>
            </div>
        `;
    } catch (erro) {
        console.log('Erro na obtencao dos dados da api:', erro);
    }
});
