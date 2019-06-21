import { addCard, updateCard, allCards } from './cards.js';
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
                myColumns.addEventListener('drop', onDrop);

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



function onDragOver(event) {
  console.log('onDragover');
  event.preventDefault()
}

function onDrop(event) {
  try {
    event.preventDefault()
    console.log('onDrop');
    const blockId = event.dataTransfer.getData("blockId");
    console.log('dropped blockId', blockId);


    const blockEl = document.querySelector(`[data-block-id="${blockId}"]`);
    // blockEl.setAttribute('draggable', false);

    const insertAfter = getBlockToInsertAfter(event.clientY, event.clientX);

    console.log(insertAfter, blockEl);
    if (insertAfter) {
      insertAfter.after(blockEl)
    } else {
      document.querySelector('.flex-columns').append(blockEl);
    }
    console.log('id',event.target.id)
    let newCard = allCards.find(card=> blockId==card.id);
    let [newID] = event.target.id.split('column').reverse();
    console.log("split", newID);
   
    console.log(allCards);
    updateCard({...newCard, columnId: newID})
    .then(updatedCard => allCards.splice( allCards.indexOf(newCard), 1,updatedCard))
    .then(()=>console.log(allCards))
  }
  catch (ex) {console .log("error", ex) }
 
}
function getBlockToInsertAfter(y, x) {
  return [...document.querySelectorAll('.flex-columns .flex-card')]
    .filter((element) => element.getBoundingClientRect().top < y && element.getBoundingClientRect().left < x)
    .pop();

}


export default getColumns;
