//let score = 33
let score = "33"
//Now lets suppose 
let newScore = "33ab"
//Now suppose if the value is NULL
let newnewScore = null
console.log(typeof score);
console.log(typeof(score));

//from line number 3 and 4 we can assume that there are two ways to write type of 
//to change string to number
let valueinNumber = Number(score);
console.log(typeof(valueinNumber)); 

let value = Number(newScore);
console.log(value); //It gives output as NaN which stands for Not a Number

let newValue = Number(newnewScore);
console.log(newValue);

//Now suppose if the value is undefined
let newnewnewScore = undefined

let newnewnewValue = Number(newnewnewScore);
console.log(newnewnewValue);

//If it has some boolean value

let bool = true
let newbool = Number(bool);
console.log(newbool);


let isLoggedinNumber = 1
let isLoggedinString = "Arpit"
let isLoggedinEmpty = ""

let newisLoggedinNumber = Boolean(isLoggedinNumber);
console.log(newisLoggedinNumber);

let newisLoggedinString = Boolean(isLoggedinString);
console.log(newisLoggedinString);

let newisLoggedinEmty = Boolean(isLoggedinEmpty);
console.log(newisLoggedinEmty);

//If 1 or 0 , in boolean it is converted to true and false respectively
//If empty string then it is converted to false in boolean
//If string then it is converted to true in boolean


//CONVERSION TO STRING
let someNumber = 33
let stringn = String(someNumber);
console.log(stringn);
