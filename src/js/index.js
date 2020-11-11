import '../scss/app.scss';

const allItems = document.querySelectorAll('.item')

allItems.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('open');
    })
})
