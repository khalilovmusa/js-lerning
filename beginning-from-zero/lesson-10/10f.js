// const gamingButton = document.querySelector('.js-gaming');
// const musicButton = document.querySelector('.js-music');
// const techButton = document.querySelector('.js-tech');


function toggleButton (classList) {
    if (classList.contains('is-toggled')){
        classList.remove('is-toggled');
    } else {
        classList.add('is-toggled');
    }
}