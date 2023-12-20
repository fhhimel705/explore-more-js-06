/*
Given,
To make one chair you need 2ft wood;
To make one table you need 8ft wood;
To make one bed you need 20ft wood;

take chair, table, bed quantity as input and show how much wood in total;
*/

function woodCalculation(chair, table, bed){
    let perChairWood = chair * 2;
    let pertableWood = table * 8;
    let perBedWood = bed * 20;

    let totalWood = perChairWood + pertableWood + perBedWood;
    return totalWood;
}
console.log(woodCalculation(4, 1, 2));