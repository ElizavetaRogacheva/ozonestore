export default function openCloseBasket() {
    let basketBtn = document.querySelector('#cart');
    let basketBlock = document.querySelector('.cart');
    let basketBlockCloseBtn = document.querySelector('.cart-close');
    
    basketBtn.addEventListener('click', function(evt) {
        evt.preventDefault();
        basketBlock.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    })
    
    basketBlockCloseBtn.addEventListener('click', function() {
        basketBlock.style.display = 'none';
        document.body.style.overflow = '';
    })
}
