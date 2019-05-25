
let card = (event) => {
    console.log('123');
    let button = event.target;
    let column = button.parentElement;
    const card = document.createElement('div');
    card.innerText = 'card Blyd';
    column.appendChild(card);
}
export default card;
