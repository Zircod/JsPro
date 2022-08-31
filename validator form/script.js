'use strict'

const nameInput = document.querySelector('.input-name');
const emailInput = document.querySelector('.input-email');
const telInput = document.querySelector('.input-tel');
const textInput = document.querySelector('.input-textarea');
const errorDiv = document.querySelector('.error');


document.querySelector('.login').addEventListener('click', event => {
  if (!event.target.classList.contains('login__btn')) {
    return;
  }
//debugger
  nameInput.classList.remove('outline');
  emailInput.classList.remove('outline');
  telInput.classList.remove('outline');
  textInput.classList.remove('outline');
  errorDiv.textContent = '';

  if (!nameInput.value.match(/[a-z]+/gi)) {
    nameInput.classList.add('outline');
    return errorDiv.textContent = 'Введите корректное имя';
  }

  if(!emailInput.value.match(/^[a-zа-я0-9._-]+@[a-z0-9-_]+\.[a-z0-9-_]{2,4}/iu)) {
    emailInput.classList.add('outline');
    return errorDiv.textContent = 'Введите корректный email';
  }

  if (!telInput.value.match(/^\+7\([0-9]{3}\)+[0-9]{3}-[0-9]{4}/gm)) {
    telInput.classList.add('outline');
    return errorDiv.textContent = 'Введите корректный номер телефона +7(000)000-0000';
  }

  if (textInput.value.length < 5) {
    textInput.classList.add('outline');
    return errorDiv.textContent = 'Введите текст';
  }
})