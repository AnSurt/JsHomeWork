import { addCard } from './cards.js';
let getColumns = () =>
    fetch("http://localhost:8089/api/column")
        .then(response => response.json())
        .then(json => {
            json.forEach(function (element) {
                const myBoard = document.getElementById('myBoard');
                const myColumns = document.createElement('div');
                const card = document.getElementById(`card${element.id}`)

                myColumns.innerText = element.title;
                myColumns.draggable = 'true';
                myColumns.className = 'flex-columns';
                myColumns.id = `column${element.id}`;
                myColumns.addEventListener('dragover', function (event) {
                    event.preventDefault();
                });
                myColumns.addEventListener('drop', function (event) {
                    myColumns.appendChild(card)
                });

                const button = document.createElement('div');
                button.innerText = '+';
                button.className = 'columnButton'
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
