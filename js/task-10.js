function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const inputEl = document.querySelector('input');
const createBtnEl = document.querySelector('button[data-create]');
const destroyBtnEl = document.querySelector('button[data-destroy]');
const boxesEl = document.querySelector('#boxes');

function onValue() {
  const value = inputEl.value;
  if (!value) return;
  createBoxes(Number(value));
};

function createBoxes(amount) {
  let size = 30;
  let markup = '';

  for (let i = 0; i < amount; i += 1){
    markup += `<div class='item-container' style='width:${size}px; height:${size}px; background:${getRandomHexColor()};'></div>`
    size += 10;
  };

  updateMarkup(markup);
};

function clearMarkup() {
  updateMarkup();
  inputEl.value = '';
};

function updateMarkup(markup = '') {
  boxesEl.innerHTML = markup;
};

createBtnEl.addEventListener('click', onValue);
destroyBtnEl.addEventListener('click', clearMarkup);