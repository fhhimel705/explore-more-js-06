/*-
The item price and quantity are given. how much will be the total cost ?
*/

const product = [
  { item: "shirt", price: 2200, quantity: 5},
  { item: "pant", price: 2000,  quantity: 3},
  { item: "belt", price: 1200,  quantity: 2},
  { item: "shoe", price: 1600,  quantity: 1},
];

function total(product){
let totalCost = 0;
for(i=0; i<product.length; i++){
    totalCost = totalCost + (product[i].price * product[i].quantity);
}
return totalCost;
}
console.log("total price:", total(product));
