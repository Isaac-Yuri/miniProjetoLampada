const lampadaLigada = './img/lampada acesa.jpg';
const lampadaDesligada = './img/lampada apagada.jpg';
const lampadaQuebrada = './img/lampada quebrada.jpg';
const estadoDaLampada = document.querySelector('#estado-da-lampada');
const botaoLigarDesligar = document.querySelector('#ligar-desligar');

estadoDaLampada.addEventListener('dblclick', quebrarLampada);
estadoDaLampada.addEventListener('mouseout', desligarLampada);
estadoDaLampada.addEventListener('mouseover', ligarLampada);

botaoLigarDesligar.addEventListener('click', () => {
    if(botaoLigarDesligar.classList[0] == 'ligar') {
        ligarLampada();
        botaoLigarDesligar.classList.remove('ligar');
        botaoLigarDesligar.classList.add('desligar');
    } else if(botaoLigarDesligar.classList[0] == 'desligar') {
        desligarLampada();
        botaoLigarDesligar.classList.remove('desligar');
        botaoLigarDesligar.classList.add('ligar');
    }
});

function estaQuebrada() {
    return estadoDaLampada.src.indexOf('quebrada') > -1;
}

function ligarLampada() {
    if(estaQuebrada()) return
    estadoDaLampada.src = lampadaLigada;
}

function desligarLampada() {
    if(estaQuebrada()) return
    estadoDaLampada.src = lampadaDesligada;
}

function quebrarLampada() {
    estadoDaLampada.src = lampadaQuebrada;
}