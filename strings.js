//In javascript, string can be denoted by single quote as well as double quote that is either by '' or ""
//"hello"
//'hello'
//We use + symbol to add two strings
let temp1 = "hello"
let temp2 = "world"
console.log(temp1+" "+temp2);

let name = "Arpit"

let count = 53
console.log(name + count)  //This type of concatenation is not recommeded
console.log(`Hello my name is ${name} and my body count is ${count}`)

//There is an another way to declare string
const gameName = new String('Arpit_Utkarsh')
console.log(gameName);
//In this type of declaration we get so many methods like  position, to convert to uppercase, lowercase
console.log(gameName[0]);
//console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('r'));
const newString = gameName.substring(0,3);
console.log(newString)
const anotherString = gameName.slice(0,4);
let reverseString = gameName.slice(-5,8);
console.log(anotherString);
console.log(reverseString)

const newStringone = "     arpit     " //some times we dont need extra space and thats why we use trim
console.log(newStringone);
console.log(newStringone.trim()); //we can see that all the extra spaces are removed now
console.log(newStringone.trimEnd());
console.log(newStringone.trimStart());

const url = "www.arpit.com/arpit%20newpage";

url.replace('%20', '-');

console.log(url.replace('%20', '-'))
console.log(url.includes('arpit fuck up'))
//to convert string to array
console.log(gameName.split('_'));
console.log(url,'fuck off');

 





