function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const refs = {
  body: document.body,
  colorBtn: document.querySelector('.change-color'),
  textColor: document.querySelector('.color'),
};

function changeColor(e) {
  const color = getRandomHexColor();

  refs.body.style.backgroundColor = color;
  refs.textColor.textContent = color;

};

refs.colorBtn.addEventListener('click', changeColor);
