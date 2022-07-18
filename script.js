let menu  = document.querySelector('#menu')
let humberIcon = document.querySelector('.humber-icon')
let humber = document.querySelector('.humber')

function activeHumber () {
    humber.classList.add('active-humber');
}

function disableHumber () {
    humber.classList.remove('active-humber');
}

menu.addEventListener('click',activeHumber)
humberIcon.addEventListener('click',disableHumber)
