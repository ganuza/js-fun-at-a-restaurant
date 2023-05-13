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

function searchOrder() {

};
module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}