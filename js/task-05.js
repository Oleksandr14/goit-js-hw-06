const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

const onInputText = (e) => {
    outputEl.textContent = e.currentTarget.value
        ? e.currentTarget.value
        : "Anonymous";
};

inputEl.addEventListener('input', onInputText);

