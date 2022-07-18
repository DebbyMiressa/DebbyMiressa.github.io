const menu = document.querySelector('#menu');
const humberIcon = document.querySelector('.humber-icon');
const humber = document.querySelector('.humber');
const menuItem = document.querySelectorAll('.navigate');

function activeHumber() {
  humber.classList.add('active-humber');
}

function disableHumber() {
  humber.classList.remove('active-humber');
}

menu.addEventListener('click', activeHumber);
humberIcon.addEventListener('click', disableHumber);

menuItem.forEach((item) => {
  item.addEventListener('click', disableHumber);
});
