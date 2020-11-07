import '../scss/app.scss';

const paragraph = document.querySelector('.item__paragraph--js')
const button = document.querySelector('.item__button');


const closeItem = () => {
    paragraph.classList.toggle('closed')
}

button.addEventListener('click', closeItem);
