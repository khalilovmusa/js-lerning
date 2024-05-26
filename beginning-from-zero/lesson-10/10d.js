function changeButtonColor () {
    const interactiveButton = document.querySelector('.js-button');

    if (interactiveButton.classList.contains('button-active')){
        interactiveButton.classList.remove('button-active');
    }else {
        interactiveButton.classList.add('button-active');
    }
}