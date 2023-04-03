const container = document.getElementById('container');
const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71', '#7fff00', '#6495ed'];
const SQUARES = 1400;


for (let i = 0; i < SQUARES; ++i) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', () => setColor(square));
    square.addEventListener('mouseout', () => resetSquare(square));

    container.appendChild(square);
}

function setColor(square) {
    const color = randomColor();
    square.style.backgroundColor = color;
    square.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function resetSquare(square) {
    square.style.backgroundColor = '#1d1d1d'
    square.style.boxShadow = '0 0 2px #000';
}

function randomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}
