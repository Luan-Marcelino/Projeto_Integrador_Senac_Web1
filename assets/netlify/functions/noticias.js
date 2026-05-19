
exports.handler = async function () {
    const key = 'fb126b2d446041c38d5e632bdc526609'
    const endpoint =
    `https://newsapi.org/v2/everything?q=direito+OR+advogado+OR+direito+trabalhista&language=pt&sortBy=publishedAt&pageSize=9&apiKey=${key}`;

    try {

        const response = await fetch(endpoint);
        const data = await response.json();

        return {
            statusCode: 200,
            body: JSON.stringify(data)
        };

    } catch (erro) {

        return {
            statusCode: 500,
            body: JSON.stringify({
                erro: 'Erro ao buscar notícias'
            })
        };
    }
};