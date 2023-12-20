/*
Calculate the total cost price
*/

const phones = [
  { brand: "samsung", camera: "12mp", price: 22000, model: 2023 },
  { brand: "nokia", camera: "10mp", price: 20000, model: 2023 },
  { brand: "oppo", camera: "16mp", price: 12000, model: 2023 },
  { brand: "xiaomi", camera: "16mp", price: 16000, model: 2023 },
  { brand: "poco", camera: "22mp", price: 32000, model: 2023 },
];

function sum(phones){
  let totalCost = 0;
  for (i = 0; i < phones.length; i++) {
    totalCost = totalCost + phones[i].price;
  }
  return totalCost;
}
console.log('total price if you buy all of them:',sum(phones));