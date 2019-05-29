import { addCard } from './cards.js';
let getColumns = () =>
    fetch("http://localhost:8089/api/column")
        .then(response => response.json())
        .then(json => {
            json.forEach(function (element) {
                const myBoard = document.getElementById('myBoard');
                const myColumns = document.createElement('div');
                myColumns.innerText = element.title;
                myColumns.className = 'flex-columns';
                myColumns.id = `column${element.id}`;

                const button = document.createElement('button');
                button.innerText = 'card';
                button.addEventListener('click', () => {
                    var title = prompt('Enter title');
                    addCard(element.id, title);
                });
                myColumns.appendChild(button);
                myBoard.appendChild(myColumns);
            }
            )
        });


export default getColumns;
