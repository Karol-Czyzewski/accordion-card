import '../scss/app.scss';

const allItems = document.querySelectorAll('.item')

const removeClass = () => {
    allItems.forEach(item => {
        item.classList.remove('open');
    })
};

allItems.forEach(item => {
    item.addEventListener('click', () => {
        removeClass();
        item.classList.toggle('open');
    })
})
