/*
**** Removes elements from an array
***** and, if necessary, inserts new elements in their place,
****** returning the deleted elements,
******* will change the original array
*/

const marks = [20, 18, 23, 10, 15, 21];

console.log(marks.splice(3, 2, 18, 20));
console.log(marks);

/*-------Same output using loop,condition--------------*/
const newMarks = [22, 10, 19, 17, 23, 25];


function xmMarks(newMarks) {
    const newMarks02 = [];
  for (i = 0; i < newMarks.length; i++) {
    let newMark = newMarks[i];
    if (newMark <= 15) {
      continue;
    } 
    else {
        newMarks02.push(newMark);
    //   console.log(newMarks02);
    }
  }
  return newMarks02;
}
console.log(xmMarks(newMarks));
