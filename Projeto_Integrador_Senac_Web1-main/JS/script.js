window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        // Cor um pouco mais visível ao rolar para manter a leitura do menu
        navbar.style.background = 'rgba(0, 31, 63, 0.5)'; 
    } else {
        // Retorna à transparência total definida no CSS
        navbar.style.background = 'rgba(255, 255, 255, 0.03)';
    }
});



const dadosAtuacao = [
    { img: "../img/trabalhista.png", titulo: "Direito Trabalhista" },
    { img: "../img/inss2.jpg", titulo: "Direito Previdenciário" },
    { img: "../img/criminalista.png", titulo: "Direito Criminalista" },
    { img: "../img/tribut.png", titulo: "Direito Tributário" }
];

let indiceAtual = 0;
const imgElemento = document.getElementById('imagem-carrossel');
const tituloElemento = document.getElementById('titulo-atuacao');

/* Trecho ajustado da função mudarSlide no script.js */
function mudarSlide() {
    indiceAtual = (indiceAtual + 1) % dadosAtuacao.length;
    
    // Início da transição dramática
    imgElemento.style.opacity = 0;
    
    // Tempo maior para o "fade-out" completo antes da troca (800ms)
    setTimeout(() => {
        imgElemento.src = dadosAtuacao[indiceAtual].img;
        tituloElemento.innerText = dadosAtuacao[indiceAtual].titulo;
        
        // Surge suavemente com o tempo definido no CSS (1.5s)
        imgElemento.style.opacity = 1;
    }, 800); 
}

// Intervalo maior entre as trocas para apreciar a imagem (6 segundos)
setInterval(mudarSlide, 6000);





