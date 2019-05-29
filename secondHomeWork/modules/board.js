import {getCards} from './cards.js';
import getColumns from './columns.js';

const myBoard = document.getElementById('myBoard');
getColumns()
    .then(getCards);

