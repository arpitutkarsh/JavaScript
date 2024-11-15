const score = 400 //A simple way to define number
console.log(score)
console.log(typeof(score))
const balance = new Number(100)
console.log(balance);

//to convert number to string
console.log(balance.toString());
console.log(balance.toString().length);
console.log(balance.toFixed(2)); //used to show number upto given decimal places

const othnm = 123.8863299
console.log(othnm.toPrecision(4));

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));

//Finding the minimm value in js
const minvalue = new Number(100000);
console.log(Number.MAX_SAFE_INTEGER)


//MATHS
console.log(Math)
console.log(Math.abs(-4))//COnverts negative to positive but not the other way round it finds the absolute value
console.log(Math.round(4.6)); //used to round the number
console.log(Math.ceil(4.2)); //Chooses the top value
console.log(Math.floor(4.9));

console.log(Math.sqrt(25)); //used to find the square root
console.log(Math.min(3,1,-2,5,6)); //used to find the minimum value 
console.log(Math.max(3,1,2,1111));

//MOST IMPORTANT LIBRARY
console.log(Math.random()) //it gives random value between 0 and 1
console.log((Math.random()*10) + 1) //it gives random value between 0 and 1

const min = 5
const max = 10

console.log(Math.floor(Math.random() * (max - min + 1)) + min)









