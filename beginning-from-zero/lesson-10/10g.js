let buttons = document.querySelectorAll('.button');

function toggleButton (classList) {
    if (buttons.classList.contains('is-toggled')) {
        buttons.classList.remove('is-toggled');
    } else {
        classList.add('is-toggled');
    }
}