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
  //console.log(menuItem.type)
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

    
function removeMenuItem(restaurantName, menuItemName, menuItemType) {
  console.log('param1: ', restaurantName)
  console.log('param2: ', menuItemType)
  console.log('menus: ', restaurantName.menus)
  console.log('try param: ', restaurantName.menus[menuItemType])


//   for (var i = 0; i < restaurantName.menus[menuItemType].length; i ++) {
//     console.log('menus.length: ', restaurantName.menus[menuItemType].length)
//     console.log('round: ', i)
//     console.log('restName.menus.type.indexi:' , restaurantName.menus[menuItemType][i])
//     if (restaurantName.menus[menuItemType].includes(menuItemName)) {
//       restaurantName.menus[menuItemType].splice(i,1)
//     }console.log('HERE: ', restaurantName.menus[menuItemType])
//   }
// }
  
  // if (restaurantName.menus[menuItemType].name === menuItemName) {
    
  //if (!restaurantName.menus[menuItemType].includes(menuItemName)) {
    for (var i = 0; i < restaurantName.menus[menuItemType].length; i ++) {
      if (restaurantName.menus[menuItemType][i].name === menuItemName) {
        restaurantName.menus[menuItemType].splice(i,1)
        return `No one is eating our ${menuItemName} - it has been removed from the ${menuItemType} menu!`
      }
    } return `Sorry, we don't sell ${menuItemName}, try adding a new recipe!`
  }
    
//   }

//   restaurantName.menus[menuItemType].splice(0,1)
//   console.log('breakfast menus: ', restaurantName.menus)
//   return `No one is eating our ${menuItemName} - it has been removed from the ${menuItemType} menu!`
// }






module.exports = {
  createRestaurant, 
  addMenuItem,
  removeMenuItem,
  // checkForFood
}