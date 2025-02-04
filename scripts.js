const container = document.querySelector('#container');

for(let i=0; i<256; i++){
    const square = document.createElement('div');
    square.classList.add('square');
    container.appendChild(square);
}

const square = document.querySelectorAll('.square');
square.forEach(square =>{
    square.addEventListener('mouseover', () =>{
        square.style.backgroundColor = 'black';
    });
});

const resetBtn = document.querySelector('#resetButton');
resetBtn.addEventListener('click', () =>{
    square.forEach(square => {
        square.style.backgroundColor = 'white';
    });
});