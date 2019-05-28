import card from './cards.js';
let getColumns = event => {
    const myBoard = document.getElementById('myBoard');
    const myColumns = document.createElement('div');
    myColumns.innerText = 'column';
    myColumns.className = 'flex-columns';

    const  button = document.createElement('button');
    button.innerText='card';
    button.addEventListener('click', card);
    myColumns.appendChild(button);
    myBoard.appendChild(myColumns);
}
export default getColumns;
