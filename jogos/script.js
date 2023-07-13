let life = document.querySelector('#life')
let score = document.querySelector('#score')
let info = document.querySelector('.info')
let gameOver = document.querySelector('#gameOver')
let mouseClique = [];
const bottle = document.querySelector('#bottle')
const apple = document.querySelector('#apple')
const paper = document.querySelector('#paper')

function eliminar(item) {
    score.textContent++
    document.getElementById(item).classList.add('eliminado')

    setInterval(() => {
        document.getElementById(item).classList.remove('eliminado')
    },500)
}

// let lifeCheck = setInterval(() => {
//     console.log(apple.y)
//     if ((paper.y > 740 || apple.y >= 695 || bottle.y > 715) && Number(life.textContent) > 0) {
//         life.textContent--
//         paper.y = 0
//         bottle.y = 0
//         apple.y = 0
//     } if (Number(life.textContent) == 0) {
//         paper.style.animation = 'none'
//         bottle.style.animation = 'none'
//         apple.style.animation = 'none'
//         clearInterval(lifeCheck)
//         gameOver.style.display = 'flex'
//         gameOver.classList.add('game-over')
//         info.classList.add('game-over-info')
//     }
// }, 250) 

let lifeCheck = setInterval(() => {
    console.log(apple.y + ", " + bottle.y + ", " + paper.y)
    if ((paper.y >= 740 || apple.y >= 695 || bottle.y >= 715) && Number(life.textContent) > 0) {
        life.textContent--
        paper.y = 0
        bottle.y = 0
        apple.y = 0
    } if (Number(life.textContent) == 0) {
        paper.style.animation = 'none'
        bottle.style.animation = 'none'
        apple.style.animation = 'none'
        clearInterval(lifeCheck)
        gameOver.style.display = 'flex'
        gameOver.classList.add('game-over')
        info.classList.add('game-over-info')
    }
}, 250) 

const element = document.getElementById('board');
element.addEventListener('mousedown', (event) => {
    // console.log(event, event.srcElement.id);
    itemClicado = event.srcElement.id
    if (itemClicado == "paper" || itemClicado == "apple" || itemClicado == "bottle") {
        eliminar(itemClicado)
    }
});

function restart(){
    location.reload()
}
