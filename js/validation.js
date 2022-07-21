/* eslint-disable linebreak-style */
const email = document.querySelector('#email');
const submit = document.querySelector('#submit');
const label = document.querySelector('.validate');
const btn = document.querySelector('.form-inputs button ');

const isLowerCase = (str) => {
  const regExp = /[A-Z]/;
  const isMatch = regExp.test(str);
  if (str === '') return false;
  const result = !isMatch;
  return result;
};

submit.addEventListener('click', (e) => {
  if (!isLowerCase(email.value)) {
    label.style.position = 'relative';
    label.style.color = 'red';
    label.style.top = '10px';
    label.style.left = '10px';
    btn.style.marginLeft = '0%';
    label.innerHTML = 'E-mail is invalid!!';
    e.preventDefault();
  } else {
    label.innerHTML = '';
    btn.style.marginLeft = '32.5%';
  }
});
