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













module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  // formatPrice,
  // decreasePrice,
  // createRecipe
}
