//Number swapping..

let first = 5;
let second = 7;
console.log(first, second);
//This is wrong approach:
// first = second;
// second = first;
//Approach:1
const temp = first;
first = second;
second = temp;
console.log(first, second);


//approach:2
let first1 = 10;
let second1 = 19;
console.log(first1, second1);
[first1, second1] = [second1, first1];
console.log(first1, second1);

