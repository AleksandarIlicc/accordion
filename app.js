'use sctrict';

const btns = document.querySelectorAll('.accordion__btn');
const accContent = document.querySelectorAll('.accordion__content');

function toggleContent() {
    const panel = this.nextElementSibling;
    panel.classList.toggle('active');
    this.classList.toggle('active');

    accContent.forEach(content => {
        if (panel !== content && content.classList.contains('active')) {
            content.classList.remove('active');
            btns.forEach(btn => btn.classList.remove('active'));
        }
    })
}

btns.forEach(btn => {
    btn.addEventListener('click', toggleContent);
});

window.addEventListener('click', (e) => {
    accContent.forEach(content => {
        if (e.target.nextElementSibling !== content && content.classList.contains('active')) {
            content.classList.remove('active');
            btns.forEach(btn => btn.classList.remove('active'));
        }
    })
});

