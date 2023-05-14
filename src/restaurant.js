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

function addMenuItem(restaurantName, menuItem) {
  // if (!menuValues[i].includes(menuItem.name)) {
  console.log(menuItem.type)
  if (menuItem.type === 'lunch' && !restaurantName.menus.lunch.includes(menuItem)) {
    restaurantName.menus.lunch.push(menuItem)
  } else if (menuItem.type === 'breakfast' && !restaurantName.menus.breakfast.includes(menuItem)) {restaurantName.menus.breakfast.push(menuItem)
  } else if (menuItem.type === 'dinner' && !restaurantName.menus.dinner.includes(menuItem)){restaurantName.menus.dinner.push(menuItem)
  }
}

    // console.log('menuItem.name: ', menuItem.name)
    // console.log('if name includes: ', true);
    // console.log('menuItems values:', objectValues)
    // if (objectValues.includes('lunch')) {
    //       restaurantName.menus.lunch.push(menuItem)
    //     } else if (objectValues.includes('breakfast')) {
    //       restaurantName.menus.breakfast.push(menuItem)
    //     } else {
    //       restaurantName.menus.dinner.push(menuItem)
    //     }console.log('whole restaurant object: ', restaurantName)
    //     }
  

  // console.log(menuItem)
  // console.log('HERE --->', menuItem.type)
  // var objectValues = Object.values(menuItem)
  // console.log(objectValues)
  // var menuValues = Object.values(restaurantName.menus)
  // console.log('menuValues: ', menuValues)
  
  // console.log('length:', restaurantName.menus.length)
  
  

  
  
  // for (var i = 0; i < menuValues.length; i ++) {
  //   console.log('index number: ', i)
  //   console.log('menuValues[i]: ', menuValues[i])

    



module.exports = {
  createRestaurant, 
  addMenuItem,
  // removeMenuItem,
  // checkForFood
}