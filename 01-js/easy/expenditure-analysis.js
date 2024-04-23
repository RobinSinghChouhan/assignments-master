/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  items = []
  for(let i=0;i<transactions.length;i++)
  {
    itemCategory = transactions[i].category
    itemTotalPrice = 0
    for(let j=0;j<transactions.length;j++)
    {
      if (itemCategory == transactions[j].category)
      {
        itemTotalPrice = itemTotalPrice + transactions[j].price
      }
    }
    
    itemExists = false;
    for(let j=0;j<items.length;j++)
    {
      if (itemCategory == items[j].category)
      {
        itemExists = true;
        break;
      }
    }

    if(!itemExists){
      item = {
        category: itemCategory,
        totalSpent: itemTotalPrice
      }
      items.push(item)
    }

  }

  return items;
}

module.exports = calculateTotalSpentByCategory;
