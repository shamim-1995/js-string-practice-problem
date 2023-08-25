const result = Math.pow(3, 8);
// console.log(result);


const number1 = 25;
const number2 = 45;
const gap = Math.abs(number1 - number2);
// console.log(gap);
if (gap < 5) {
    console.log('you guys can be friends');
}
else {
    console.log('you guys stay apart');
}


//.............................

//

//....................................


// const number = 2.345456;
// const fullNumber = Math.round(number);
// console.log(fullNumber);


const number = 2.510000;
//round number is 3.
const fullNumber = Math.round(number);
// console.log(fullNumber);

const result2 = Math.ceil(2.0001);
// console.log(result2);
const result3 = Math.floor(456.260);
// console.log(result3);


//.....................
//random.......


// console.log(Math.random());

// const random = Math.random()*100;
// console.log(random);

//for full number...

// const random = Math.round(Math.random()*100);
// console.log(random);

//using loop.....

for (let i = 0; i < 20; i++) {
    const random = Math.round(Math.random() *6);
    console.log(random);
}