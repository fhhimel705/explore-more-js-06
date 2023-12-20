const country = 'Bangladesh';
const age = 52;
const isIndependent = true;
const student = {name: 'jamila', class: 11, roll:52};
const marks = [20, 18, 23, 10, 15, 21];
function sum(num1, num2){
    return num1 + num2;
}

console.log(typeof country);
console.log(typeof age);
console.log(typeof isIndependent);
console.log(typeof student);
/*-------CHECKING IF ITS AN ARRY---------------*/
console.log(Array.isArray(marks));
/***********/
console.log(sum(5,9));
console.log(marks.includes(23));
console.log(marks.indexOf(23));
/*---------CONCAT-----------*/
const newMarks = [22, 10, 19, 17, 23, 25];
console.log(marks.concat(newMarks));