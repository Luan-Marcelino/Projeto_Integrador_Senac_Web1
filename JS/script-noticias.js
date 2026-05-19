const lista_noticias = document.querySelector('#lista-noticias');

//Função que vai consumir a API https://newsapi.org/
const buscarNoticias = async () => {
    const endpoint = '/.netlify/functions/noticias';

    try {
        const response = await fetch(endpoint);
        const data = await response.json();

        if (data.articles && data.articles.length > 0) {//Para o caso de não retornar nenhum artigo
            lista_noticias.innerHTML = '';

            data.articles.forEach(artigo => {
                montarCards(artigo)
            })
        } else {
            lista_noticias.innerHTML = `<h1>Nenhuma noticia encontrada no momento.</h1>`
        }

    } catch (erro) {
        console.log("Erro ao buscar noticias:", erro);
        lista_noticias.innerHTML = `<h1>Erro ao carregar noticias. Tente Novamente mais tarde.</h1>`
    }

}

//Função que organiza as informações em CARDS e imprimi na tela
function montarCards(data) {
    const card = `
                <div id="card">
                    <img src="${data.urlToImage || 'https://placehold.co/300x150'}" alt="imagem da noticia">
                    <div>
                        <h4>${data.title}</h4>
                        <p>${data.description ? data.description.substring(0, 100) : 'Sem descrição...'}...</p>
                        <a target="_blank" href="${data.url}">Leia mais<i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
    `
    lista_noticias.innerHTML += card;
}

window.onload = buscarNoticias;
