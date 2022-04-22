let jogador = null
let jogadorSelecionado = document.getElementById('jogador-selecionado')
let quadrados = document.getElementsByClassName('quadrado')

MudarJogador('X')

function SelecionarQuadrado (id) {
    let quadrado = document.getElementById(id)

    if (quadrado.innerHTML !== '-') {
        return
    }

    quadrado.innerHTML = jogador
    quadrado.classList.add('player' + jogador)
    console.log('player' + jogador)

    if (jogador === 'X') {
        jogador = 'O'
    }
    else {
        jogador = 'X'
    }
    MudarJogador(jogador)
}

function MudarJogador(valor) {
    jogador = valor
    jogadorSelecionado.innerHTML = valor
    jogadorSelecionado.classList.remove('playerX', 'playerO')
    jogadorSelecionado.classList.add('player' + jogador)
}

function reiniciar() {
    Array.from(quadrados).forEach(element => {
        element.innerHTML = '-'
        element.classList.remove('playerX')
        element.classList.remove('playerO')
    MudarJogador('X')
    });
}