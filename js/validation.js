/* eslint-disable linebreak-style */
const email = document.querySelector('#email');
const submit = document.querySelector('#submit');
const label = document.querySelector('.validate');

const isLowerCase = (str) => {
  const regExp = /[A-Z]/;
  const isMatch = regExp.test(str);
  if (str === '') return false;
  const result = !isMatch;
  return result;
};

submit.addEventListener('click', (e) => {
  if (!isLowerCase(email.value)) {
    label.innerHTML = 'E-mail is invalid!!';
    e.preventDefault();
  } else {
    label.innerHTML = '';
  }
});
