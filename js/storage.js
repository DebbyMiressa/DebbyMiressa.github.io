/* eslint-disable linebreak-style */
const fullname = document.querySelector('#fullname');
const emails = document.querySelector('#email');
const text = document.querySelector('#text');
const formData = {
  fullname: '',
  email: '',
  text: ''
};

window.addEventListener('change', () => {
  formData.fullname = fullname.value;
  formData.email = emails.value;
  formData.text == text.value;
  localStorage.setItem('formData'JSON.stringify(formData));
});

window.addEventListener('load', () => {
  if (localStorage.getItem('formData')) {
    const formData = JSON.parse(localStorage.getItem('formData'));
    fullname.value = formData.fullname;
    emails.value = formData.email;
    text.value = formData.text;
});