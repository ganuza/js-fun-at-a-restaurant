function takeOrder(newOrder, ordersList) {
  if (ordersList.length < 3) {
  return ordersList.push(newOrder);
  }
}

function refundOrder(orderNum, ordersList) {
  for (var i = 0; i < ordersList.length; i ++) {
    if (ordersList[i].orderNumber === orderNum) {
      return ordersList.splice(i,1);
    }
  }
}

function listItems(ordersList) {
  console.log(ordersList);
  var items = []
  for (var i = 0; i < ordersList.length; i ++) {
    items.push(ordersList[i].item);
  }
  console.log(items);
  var list = items.join(', ');
  return list;
}

function searchOrder(deliveryOrders, item) {
  console.log(deliveryOrders);
  console.log(item);
  var orderItems = []
  for (var i = 0; i < deliveryOrders.length; i ++) {
    orderItems.push(deliveryOrders[i].item);
  
  }
  console.log(orderItems);
  if (orderItems.includes(item)) {
    return true
  } else {
    return false
  }
  
    //stringItem = String(item)
    //console.log(deliveryOrders[i].item)
    //console.log(deliveryOrders[i].includes(stringItem));
    // if (deliveryOrders.item !== item) {
    //   var itemsMatch = false
    // } else {
    //   var itemsMatch = true
    // }console.log(deliveryOrders.item, itemsMatch)
    // return itemsMatch
}  
  // for (var i = 0; i < deliveryOrders.length; i ++) {
  //   console.log(deliveryOrders[i].item);
  //   if (deliveryOrders[i].item === item) {
  //     var bool = true;
  //   } else {
  //     var bool = false;
  //   }console.log(bool);
  // }

module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}