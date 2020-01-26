export default function renderCatalog() {
    const cards = document.querySelectorAll('.goods .card');
    const catalogBlock = document.querySelector('.catalog');
    const catalogList = document.querySelector('.catalog-list');
    const catalogBtn = document.querySelector('.catalog-button');
    const categories = new Set();

    cards.forEach((card => {
        categories.add(card.dataset.category);
    }))

    categories.forEach((category) => {
        const li = document.createElement('li');
        li.textContent = category;
        catalogList.appendChild(li);
    })

    catalogBtn.addEventListener('click', (evt) => {
        if(catalogBlock.style.display) {
            catalogBlock.style.display = '';
        } else {
            catalogBlock.style.display = 'block';
        }

        if(evt.target.tagName === 'LI') {
            cards.forEach((card) => {
                if(card.dataset.category === evt.target.textContent) {
                    card.parentNode.style.display = '';
                } else {
                    card.parentNode.style.display = 'none';
                }
            }) 
        }
    })
}
