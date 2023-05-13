//function nameMenuItem() {

function nameMenuItem(name) {
  return `Delicious ${name}`;
}

function createMenuItem(menuName, price, type) {
  return {
    'name': nameMenuItem('French Toast'),
    'price': price,
    'type': type
  }
};

function addIngredients(items, arrayName) {
  
    if (arrayName.includes(items)) {
      return arrayName;
    } else {
      return arrayName.push(items);
    }
  }

function formatPrice(price) {
  return `$${price}`
}

function decreasePrice (price) {
  return 0.90 * price
}

function createRecipe(title, ingredients, type) {
  return {
    title: title,
    ingredients: ingredients,
    type: type,

  }
}









module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
