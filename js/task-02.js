const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientContainerList = document.querySelector('#ingredients');

const makeIngredientContainer = (options) => {
  return options.map(option => {
    const item = document.createElement('li');
    item.textContent = option;
    item.classList.add('item');

    return item;
  });
};

const elements = makeIngredientContainer(ingredients);

ingredientContainerList.append(...elements);

// const elements = ingredients.map(ingredient => {
//   const item = document.createElement('li');
//   item.textContent = ingredient;
//   item.classList.add('item');
//   return item;
// });

// ingredientContainerList.append(...elements);