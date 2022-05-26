const inputEl = document.querySelector('#validation-input');

const onInputBlur = (e) => {
    const length = Number(e.target.dataset.length);
    if (e.target.value.trim().length === length) {
        return updateClassEl(e.target, 'valid', 'invalid');
        
    };

        return updateClassEl(e.target, 'invalid', 'valid');   
};

const updateClassEl = (element, add, rem) => {
    element.classList.add(add);
    element.classList.remove(rem);
};

inputEl.addEventListener('blur', onInputBlur);

