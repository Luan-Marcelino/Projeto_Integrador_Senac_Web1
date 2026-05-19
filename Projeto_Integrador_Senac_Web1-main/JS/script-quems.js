const dadosQuems = [
    { img: "../img/quems.png", titulo: "Quem Somos" },
    { img: "../img/quemsomos.png", titulo: "27 anos de experiência" }
];

let indiceQuems = 0;
const imgQuems = document.getElementById('imagem-quems');
const tituloQuems = document.getElementById('titulo-quems');

function mudarSlideQuems() {
    indiceQuems = (indiceQuems + 1) % dadosQuems.length;
    
    // Início da transição dramática (Fade-out)
    imgQuems.style.opacity = 0;
    
    setTimeout(() => {
        imgQuems.src = dadosQuems[indiceQuems].img;
        tituloQuems.innerText = dadosQuems[indiceQuems].titulo;
        
        // Fade-in suave (tempo definido no CSS)
        imgQuems.style.opacity = 1;
    }, 800); // Tempo para o desaparecimento total
}

// Intervalo de 6 segundos para apreciação
setInterval(mudarSlideQuems, 6000);