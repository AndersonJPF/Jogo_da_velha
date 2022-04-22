let jogador = null
let jogadorSelecionado = document.getElementById('jogador-selecionado')
let quadrados = document.getElementsByClassName('quadrado')
let jogadorVencedor = document.getElementById('vencedor')

let tabuleiro = ['','','','','','','','','']
const sequencias = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [3, 6, 9],
    [2, 5, 8],
    [1, 5, 9],
    [3, 5, 7]
]

jogoParado = false
MudarJogador('X')

function SelecionarQuadrado (id) {
    if (jogoParado) {
        return
    }
    let quadrado = document.getElementById(id)

    if (quadrado.innerHTML !== '-') {
        return
    }

    quadrado.innerHTML = jogador
    quadrado.classList.add('player' + jogador)
    AtualizarTabuleiro(id - 1, jogador)

    jogador = jogador === 'X' ? 'O' : 'X'
    MudarJogador(jogador)
    ChecarResultado()
}

function AtualizarTabuleiro(valor, jogador) {
    tabuleiro[valor] = jogador
}

function ChecarResultado() {
    for (let index = 0; index < sequencias.length; index++) {
        sequencia = sequencias[index]
        const a = tabuleiro[sequencia[0] - 1]
        const b = tabuleiro[sequencia[1] - 1]
        const c = tabuleiro[sequencia[2] - 1]

        if (a === '' || b === '' || c === '') {
            continue
        }
        if (a === b && b === c) {
            Vitoria(a)
            PintarVencedor(sequencia[0], sequencia[1], sequencia[2])
            jogoParado = true
            return
        }
        
    }
    if (!tabuleiro.includes('')) {
        jogadorSelecionado.innerHTML = ''
        jogadorVencedor.innerHTML = 'Nenhum'
        jogoParado = true
    }
}

function PintarVencedor(a, b, c) {
    document.getElementById(a).classList.add('cordovencedor')
    document.getElementById(b).classList.add('cordovencedor')
    document.getElementById(c).classList.add('cordovencedor')
}
function Vitoria(a) {
    jogadorSelecionado.innerHTML = ''
    jogadorVencedor.innerHTML = a
    jogadorVencedor.classList.add('player' + a)
}

function MudarJogador(valor) {
    jogador = valor
    jogadorSelecionado.innerHTML = valor
    jogadorSelecionado.classList.remove('playerX', 'playerO')
    jogadorSelecionado.classList.add('player' + jogador)
}

function reiniciar() {
    tabuleiro = ['','','','','','','','','']
    jogadorVencedor.innerHTML = ''
    Array.from(quadrados).forEach(element => {
        element.innerHTML = '-'
        element.classList.remove('playerX')
        element.classList.remove('playerO')
        element.classList.remove('cordovencedor')
    jogadorSelecionado.classList.remove('playerX', 'playerO')
    jogadorVencedor.classList.remove('playerX', 'playerO')
    MudarJogador('X')
    jogoParado = false
    });
}