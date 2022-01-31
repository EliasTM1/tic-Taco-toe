let isXturn = true
let turnoDe = document.querySelector('#turnoDe')
let cuadros = document.querySelectorAll('.box');
let resultado = []
let tablero = 0

cuadros.forEach(e => {
    e.addEventListener('click', isMyTurn)
})

let equisMoves = {
    xSymbol: 'X',
    xMoves: [],
    state: false
}
let cirleMoves = {
    oSymbol: 'O',
    oMoves: [],
    state: false
}

let possibleWins = [
    // ? Horizontal
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    // ? Vertical
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    //  ? Diagonal
    [1, 5, 9],
    [3, 5, 7],
]


function isMyTurn(evento) {


    if (cirleMoves.state === true || equisMoves.state === true) {
        return
    }
    let cuadrosPosition = Number(evento.srcElement.dataset.position)
    if (evento.target.innerHTML !== '') return
    if (evento.target.innerHTML === '' && isXturn === true) {
        evento.target.innerHTML = equisMoves.xSymbol
        turnoDe.innerHTML = cirleMoves.oSymbol
        equisMoves.xMoves.push(cuadrosPosition)
        whoWins(equisMoves.xMoves)
        isXturn = false
    }
    if (evento.target.innerHTML === '' && isXturn === false) {
        evento.target.innerHTML = cirleMoves.oSymbol
        turnoDe.innerHTML = equisMoves.xSymbol
        cirleMoves.oMoves.push(cuadrosPosition)
        whoWins(equisMoves.xMoves)
        isXturn = true
    }
    tablero++
    if (tablero >= 9) {
        if (confirm('Reset Board?')) {
            equisMoves = {
                xSymbol: 'X',
                xMoves: [],
                state: false
            }
            cirleMoves = {
                oSymbol: 'O',
                oMoves: [],
                state: false
            }
            cuadros.innerHTML = ''
            console.error(equisMoves)
            console.error(cirleMoves)
        }
    }
    console.warn(tablero)
}

function whoWins(PlayerMoves) {
    console.log({ PlayerMoves })
    for (let i = 0; i < possibleWins.length; i++) {
        if (cirleMoves.state === true || equisMoves.state === true) {
            return
        }
        const element = possibleWins[i];
        isXturn ? checke(equisMoves.xMoves, element) : checke(cirleMoves.oMoves, element)
    }
}


function checke(arr, target) {
    let result = target.every(v => arr.includes(v))
    if (resultado.length >= 8) {
        resultado = []
    }

    resultado.push(result)
    if (resultado.includes(true) && isXturn) {
        alert('x gano')
        equisMoves.state = true;
        return
    }
    if (resultado.includes(true) && !isXturn) {
        alert('O gano')
        cirleMoves.state = true;
        return
    }
}
