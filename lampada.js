const lampadaLigada = './img/lampada acesa.jpg';
const lampadaDesligada = './img/lampada apagada.jpg';
const lampadaQuebrada = './img/lampada quebrada.jpg';
const estadoDaLampada = document.querySelector('#estado-da-lampada');
const botaoLigar = document.querySelector('#ligar');
const botaoDesligar = document.querySelector('#desligar');

estadoDaLampada.addEventListener('dblclick', quebrarLampada);
estadoDaLampada.addEventListener('mouseout', desligarLampada);
botaoLigar.addEventListener('click', ligarLampada);
botaoDesligar.addEventListener('click', desligarLampada);
estadoDaLampada.addEventListener('mouseover', ligarLampada);

function estaQuebrada() {
    return estadoDaLampada.src.indexOf('quebrada') > -1
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