import '../scss/app.scss';

const allParagraphs = document.querySelectorAll('.item__paragraph--js')
const allButtons = document.querySelectorAll('.item__button');


allButtons.forEach(button => {
    button.addEventListener('click', () => {
        console.log('działa');
    })
})

allParagraphs.forEach(paragraph => {
    console.log(paragraph.dataset.item)
})
