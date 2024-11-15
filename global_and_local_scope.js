// let a = 10
// const b = 20
// var c = 30
let a = 300
if (true) {
    // let d = 20
    // const e = 30
    // var f = 40
    let a = 20
    const b = 30
    //var c = 40
    console.log("INNER:  ", a);
    
}
//the above d, e and f has been defined in the if scope  so it will not executed outside that scope
// console.log(d);
// console.log(e);
// console.log(f);
//console.log(a); //it gives output as a is not defined
//console.log(b); //it gives output as b is not defined
console.log(a); //it gives output as 40 which is the value of var c we already had defined




//NESTED SCOPE
function one(){
    const username = "arpit"
    function two(){
        const website = "microsoft"
        console.log(username);
        
    }
    // console.log(website); //website is  not defined outside the function two
    two()
    
}
one()


//********************INTESTING QUESTION***********************/
console.log(addone(6));
function addone(num){
    return num + 1
}
addone(5) //it will not print any value
//console.log(addTwo(6));  //The function addTwo is declared as a variable or we can say that it is initialized thats why it is not giving output but in the function addone it is not already initialized thats why it gives output even before it is written
const addTwo  = function(num){
    return num + 2
}
console.log(addTwo(8)) 

