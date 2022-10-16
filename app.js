// @ts-nocheck
const board = document.querySelector('#board')
const colors = ["#e73c3c", "#8e34ad", "#3898db", "#e67e12", "#2eca71", "#3081e3", "#ee817e", "#c678dd", "#5db0d7"]
const SQUARES_NUMBER = 2000

for (let i = 0; i <SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))

    square.addEventListener('mouseleave', () => removeColor(square))

    board.append(square)
}

function setColor(element) {
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 10px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = "0 0 2px #000";
}

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length);
    return colors[index]
  }
  