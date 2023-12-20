/*-------------FOO-BAR-----------------*/

for (i = 1; i <= 50; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    // console.log('foo-bar');
  } else if (i % 3 === 0) {
    // console.log('foo');
  } else if (i % 5 === 0) {
    // console.log('bar');
  } else {
    // console.log(i);
  }
}

/*-------------------WOOD QUANTITY---------------- */

// CHAIR = 3Cft;
// table = 10cft;
// bed = 50cft;

function woodQuantity(chairQnty, tableQnty, bedQnty) {
  let chairWood = chairQnty * 3;
  let tableWood = tableQnty * 10;
  let bedWood = bedQnty * 50;

  // console.log(chairWood, tableWood, bedWood);

  let totalWood = chairWood + tableWood + bedWood;
  // console.log(totalWood);
}
woodQuantity(2, 2, 5);

/*---------------------OBJECT KEY SUM---------------------*/

let shopping = [
  { item: "shirt", Price: 1200 },
  { item: "pant", Price: 2200 },
  { item: "belt", Price: 700 },
  { item: "shoe", Price: 1500 },
];
// console.log(shopping[0].Price);

let sum = 0;
for (i = 0; i < shopping.length; i++) {
  // console.log(shopping[i].Price);
  sum = sum + shopping[i].Price;
  console.log(sum); 
}
