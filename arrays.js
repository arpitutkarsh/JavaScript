//arrays
const myArrays = [0,1,2,3,4,5]
//The arrays in the Javascripts are resizeable, which means that it's size can be increased or decreased after its declaration
//Javascript arrayscontains a mix of different types of data-types

// Javascript array copy operation creates shallow copy rather than deep cody
//Shallow copy of an object is a copy whose properties share the same reference as those of the source object from which the copy was made. IT MEANS THAT WHATEVER WE CHANGE IN THE COPIED ARRAY IT WILL BE CHANGED IN THE ORIGINAL ARRAY AS WELL

const myHeroes = ["Shaktiman", "Arpitman","sexy arpit","ooo baby yes fuck me fuck me harded"]

const myarr = new Array(1,2,3,4)
console.log(myarr[1]);

//Array methods
//myarr.push(5); //Push is used to insert element at the end of the array
//console.log(myarr)
//myarr.push(7);
//console.log(myarr)

//myarr.pop();
myarr.unshift(9) //It is used to insert element at the srating of the array
console.log(myarr)
myarr.shift() //it is like the pop operation, it removes the element from the starting of the array
console.log(myarr)

console.log(myarr.includes(9)); //It returns the boolean value true if the array includes 9
console.log(myarr.indexOf(3)); //It outputs the index of the given element

const newArr = myarr.join() //join operation changes the data type of array to string
console.log(myarr);
console.log(newArr);

console.log(typeof(newArr)) //it gives otput as string

//SLICE AND SPLICE METHOD
console.log("A ", myarr);
const myn1 = myarr.slice(1,3);
console.log(myn1);
console.log("B", myarr);

const myn2 = myarr.splice(1,3) //it manipulates the original array
console.log(myarr) 
console.log(myn2)