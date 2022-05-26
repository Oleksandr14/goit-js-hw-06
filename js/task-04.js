const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const valueEl = document.querySelector('#value');

let counterValue = 0;

const onDecrementBtn = () => {
    counterValue -= 1;
    valueElement();
};

const onIncrementBtn = () => {
    counterValue += 1;
    valueElement();
};

const valueElement = () => {
    valueEl.textContent = counterValue;
};

decrementBtn.addEventListener('click', onDecrementBtn);

incrementBtn.addEventListener('click', onIncrementBtn);

