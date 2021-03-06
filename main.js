let order = []
let clickOrder = []
let score = 0

// 0 - verde
// 1 - vermelho
// 2 - amarelo
// 3 - azul

const blue = document.getElementById('azul')
const red = document.getElementById('vermelho')
const green = document.getElementById('verde')
const yellow = document.getElementById('amarelo')

const shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4)
    order[order.length] = colorOrder
    clickOrder = []

    for (let i in order) {
        let elementColor = createColorElement(order[i])
        lightColor(elementColor, Number(i) + 1)
    }
}

const lightColor = (element, number) => {
    let time = number * 500
    setTimeout(() => {
        element.classList.add('selected')
    }, time - 250)
    setTimeout(() => {
        element.classList.remove('selected')
    }, time + 250)
}

let checkOrder = () => {
    for(let i in clickOrder) {
        if(clickOrder[i] != order[i]) {
            gameOver();
            break;
        }
    }
    if(clickOrder.length == order.length) {
        alert(`Pontuação: ${score}\nVocê acertou! Iniciando próximo nível!`);
        nextLevel();
    }
}

const click = (color) => {
    clickOrder[clickOrder.length] = color
    createColorElement(color).classList.add('selected')

    setTimeout(() => {
        createColorElement(color).classList.remove('selected')
    }, 250)

    checkOrder()
}

const createColorElement = (color) => {
    if(color === 0) {
        return green;
    } else if(color === 1) {
        return red;
    } else if (color === 2) {
        return yellow;
    } else if (color === 3) {
        return blue;
    }
}

const nextLevel = () => {
    score++;
    shuffleOrder();
}

const gameOver = () => {
    alert(`Pontuação: ${score}!\nVocê perdeu o jogo!\nClique em OK para iniciar um novo jogo`);
    order = [];
    clickOrder = [];

    playGame();
}

const playGame = () => {
    alert('Bem vindo ao Gênius! Iniciando novo jogo!');
    score = 0;

    nextLevel();
}

green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

playGame();
