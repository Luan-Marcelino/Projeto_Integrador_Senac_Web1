const express = require('express')
const cors = require('cors')
const porta = process.env.PORT || 3000
const key = 'fb126b2d446041c38d5e632bdc526609'

const app = express()



app.use(cors());

app.get('/noticias', async (req, res) => {
    const endpoint = `https://newsapi.org/v2/everything?q=direito+OR+advogado+OR+direito+trabalhista&language=pt&sortBy=publishedAt&pageSize=9&apiKey=${key}`;

    try {
        const response = await fetch(endpoint)
        const data = await response.json()
        res.json(data)

    }catch (erro) {
        console.log(erro)
        res.status(500).json({
            erro: 'Erro ao buscar noticias'
        });
    }
})


app.listen(porta, () => {console.log('Servidor Rodando')})