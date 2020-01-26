export default function filterCards() {
    let goods = document.querySelector('.goods');
    let cards = document.querySelectorAll('.goods .card');
    let checkbox = document.querySelector('#discount-checkbox');
    let minPriceInput = document.querySelector('#min');
    let maxPriceInput = document.querySelector('#max');
    let search = document.querySelector('.search-wrapper_input');
    let searchBtn = document.querySelector('.search-btn');

    checkbox.addEventListener('change', () => {
        cards.forEach((card) => {
            if(checkbox.checked) {
                if(!card.querySelector('.card-sale')) {
                    card.parentNode.style.display = 'none';
                }
            } else {
                card.parentNode.style.display = '';
            }
        })
    })

    function filterPrice() {
        cards.forEach((card) => {
            let cardPrice = card.querySelector('.card-price');
            let price = parseFloat(cardPrice.textContent);

            if((minPriceInput.value !== '' && price < minPriceInput.value) || (maxPriceInput.value !== '' &&  price > maxPriceInput.value)) {
                card.parentNode.remove();
            } else {
                goods.appendChild(card.parentNode);
            }
            
        });

    }
    
    minPriceInput.addEventListener('change', filterPrice);
    maxPriceInput.addEventListener('change', filterPrice);

    searchBtn.addEventListener('click', () => {
        const searchText = new RegExp(search.value.trim(), 'i');

        cards.forEach((card) => {
            const cardTitle = card.querySelector('.card-title');
            if(!(searchText.test(cardTitle.textContent))) {
                card.parentNode.style.display = 'none';
            } else {
                card.parentNode.style.display = '';
            }
        })
    });

}
