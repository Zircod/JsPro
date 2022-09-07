"use strict";
document.querySelector('.btn-replace-all').addEventListener('click', (event) => {
  event.preventDefault();
  let regExp = document.querySelector('.text');
  regExp.textContent = regExp.textContent.replace(/'/g, `"`);
});

document.querySelector('.btn-replace').addEventListener('click', (event) => {
  event.preventDefault();
  let regExp = document.querySelector('.text');
  regExp.textContent = regExp.textContent.replace(/ '/g, ` "`);
  regExp.textContent = regExp.textContent.replace(/'\n/g, `" `);
});