function createRestaurant(restaurantName) {
  return {
    name: restaurantName,
    menus: {
      breakfast: [],
      lunch: [],
      dinner: [],
    }
  }
}


module.exports = {
  createRestaurant, 
  // addMenuItem,
  // removeMenuItem,
  // checkForFood
}