export default function addDeleteGoods() {
    let goodsCards = document.querySelectorAll('.goods .card');
    let basketWrapper = document.querySelector('.cart-wrapper');
    let basketEmpty = document.querySelector('#cart-empty');
    
    goodsCards.forEach((card) => {
        let cardBtn = card.querySelector('.btn');
        
        cardBtn.addEventListener('click', function() {
            let cardClone = card.cloneNode(true);
            let btnRemove = cardClone.querySelector('.btn');
            
            basketWrapper.appendChild(cardClone);
            basketEmpty.style.display = 'none';
            showCardsCount();
            
            btnRemove.textContent = 'Удалить из корзины';
            
            btnRemove.addEventListener('click', () => {
                cardClone.remove();
                showCardsCount();
            })
            
        })
    })
     
function showCardsCount() {
    let basketCards = document.querySelectorAll('.cart-wrapper .card');
    let basketCounter = document.querySelector('.counter');
    let goodsPrice = basketWrapper.querySelectorAll('.card-price');
    let basketPrice = document.querySelector('.cart-total span');    
    let priceSum = 0;
    basketCounter.textContent = basketCards.length;
    
    if(basketCards.length === 0) {
        basketEmpty.style.display = 'block';
    }
    
    goodsPrice.forEach((price) => {
        priceSum += parseFloat(price.textContent)
    });
    
    basketPrice.textContent = priceSum;
    }
}
