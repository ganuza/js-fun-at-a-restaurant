//function nameMenuItem() {

function nameMenuItem(name) {
  return `Delicious ${name}`;
}

function createMenuItem(menuName, price, type) {
  return {
    'name': nameMenuItem('French Toast'),
    'price': price,
    'type': 'breakfast'
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











module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  // createRecipe
}
