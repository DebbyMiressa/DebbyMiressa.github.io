let menu  = document.querySelector('#menu')
let humberIcon = document.querySelector('.humber-icon')
let humber = document.querySelector('.humber')
let menuItem = document.querySelectorAll('.navigate')

function activeHumber () {
    humber.classList.add('active-humber');
}

function disableHumber () {
    humber.classList.remove('active-humber');
}

menu.addEventListener('click',activeHumber)
humberIcon.addEventListener('click',disableHumber)

menuItem.forEach(item => {
    item.addEventListener('click',disableHumber) 
})
