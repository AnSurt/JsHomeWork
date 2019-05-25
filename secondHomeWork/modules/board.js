import card from './cards.js';
import getColumns from'./columns.js';

const myBoard = document.getElementById('myBoard');
const mySpaceChild = document.createElement("button");
mySpaceChild.innerText = '1234'; 
mySpaceChild.className = 'flex-element';
mySpaceChild.id = 'button'; 
myBoard.appendChild(mySpaceChild);
mySpaceChild.addEventListener("click",getColumns);
console.log({myBoard});
