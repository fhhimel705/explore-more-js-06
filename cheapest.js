/*
Find the mobile which has the lowest price..
*/

const phones = [
    { brand: "samsung", camera: '12mp', price: 22000, model: 2023 },
    { brand: "nokia", camera: '10mp', price: 20000, model: 2023 },
    { brand: "oppo", camera: '16mp', price: 12000, model: 2023 },
    { brand: "xiaomi", camera: '16mp', price: 16000, model: 2023 },
    { brand: "poco", camera: '22mp', price: 32000, model: 2023 },
];

function findCheapestPhone(phones){
    let cheapest = phones[0];
    for(i=0; i<phones.length; i++){
        if (cheapest.price > phones[i].price) {
          cheapest = phones[i];
        }
    
    }
return cheapest;
}
console.log(findCheapestPhone(phones));