
let getCards = () =>

    fetch("http://localhost:8089/api/card")
        .then(response => response.json())
        .then(json => {
            json.forEach(function (element) {
                console.log(element);

                let column = document.getElementById(`column${element.columnId}`);
                drawCard(element, column);

            })
        });


let drawCard = (element, column) => {
    const card = document.createElement('div');
    const deleteButton = document.createElement("button");
    deleteButton.addEventListener('click',()=>deleteCard(element.id));
    deleteButton.innerText= 'Remove';

    card.innerText = element.title;
    card.className = 'flex-card';
    card.id = `card${element.id}`;
    card.appendChild(deleteButton);
    column.appendChild(card);
}

let addCard = (columnId, title) => {
   
    var card = {
        title ,
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
let deleteCard =(id)=> fetch("http://localhost:8089/api/card/"+id.toString(), {
    method: 'DELETE',
})
.then(()=> document.getElementById(`card${id}`).remove())


export { getCards, addCard };