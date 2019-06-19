let allCards = [];
let getCards = () =>

    fetch("http://localhost:8089/api/card")
        .then(response => response.json())
        .then(json => {
            json.forEach(function (element) {
                console.log(element);

                let column = document.getElementById(`column${element.columnId}`);
                drawCard(element, column);
                

            })
            allCards=json;
        });


let drawCard = (element, column) => {
    const card = document.createElement('div');
    const deleteButton = document.createElement("div");
    const cardTitle = document.createElement("div");
    

    cardTitle.innerText = element.title;
    card.className = 'flex-card';
    
    card.addEventListener('dragstart', onDragStart);
    card.setAttribute('draggable', true);
    card.setAttribute('data-block-id', element.id );  
    card.contentEditable= 'false';  
    cardTitle.contentEditable= 'true'; 
    card.id = `card${element.id}`;
    card.appendChild(deleteButton);
    card.appendChild(cardTitle);
    deleteButton.contentEditable= 'false';
    deleteButton.className = 'cardButton'
    deleteButton.addEventListener('click', () => deleteCard(element.id));
    deleteButton.innerText = 'Remove';

    card.draggable = 'true';

    cardTitle.addEventListener('click', (event) => {
        
        let newTitle=event.target.textContent;
     
        
        updateCard({ ...element, title: newTitle })
            .then(newCard => {
                cardTitle.innerText = newCard.title;
                card.appendChild(deleteButton);
                
            });
    });


    column.appendChild(card);

 

}
let updateCard = (card) =>

    fetch("http://localhost:8089/api/card/" + card.id, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(card)
    })
        .then(response => response.json())



let addCard = (columnId, title) => {

    var card = {
        title,
        columnId
    };

    fetch("http://localhost:8089/api/card", {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(card)
    })
        .then(response => response.json())
        .then(element => console.log(element) || drawCard(element, document.getElementById(`column${element.columnId}`)));
};
let deleteCard = (id) => fetch("http://localhost:8089/api/card/" + id.toString(), {
    method: 'DELETE',
})
    .then(() => document.getElementById(`card${id}`).remove())


    

function onDragStart(event) {
  console.log('onDragStart', event.target.dataset.blockId);
  event.dataTransfer.setData("blockId", event.target.dataset.blockId);
}



export { getCards, addCard, updateCard, allCards };