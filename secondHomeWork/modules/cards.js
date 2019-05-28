
let card = (event) => {
    fetch("http://localhost:8089/api/card/1")
        .then(response => response.json())
        .then(json => {
            console.log(json);
            let button = event.target;
            let column = button.parentElement;
            const card = document.createElement('div');
            card.innerText = JSON.stringify(json);
            card.className = 'flex-card';
            column.appendChild(card);
        });
}
export default card;
