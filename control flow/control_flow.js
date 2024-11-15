//FIrst control flow is IF STATEMENT
const isUserlogged = false
if(!isUserlogged){
    console.log("Arpit")

}

//Types of Operator
// 1. <, > Less than or Greater than
// 2. <=, >= Less than equal to or greater than equal to
// 3. == , the single equal (=) symbol is used for operator assignment but two equals is used to check if it is equal or Not
// 4. != Not equal to
// 5. === is used to check data type also

if(2 == "2"){
    console.log("EXECUTED")
}
if(2 === "2"){
    console.log("EXECUTED AGAIN")
}

//if else

let temp = 40
if(temp < 50){
    console.log("Alert: Less than 50");
}
else{
    console.log("More than 50");
    
}

const score = 200
if(score > 100){
    const power = "fly"
    console.log(`User Power: ${power}`)
}
// console.log(`User Power: ${power}`) //it will not be executed as it does not comes in global scope

// const balance = 1000
// if(balance > 500){
    // console.log("Enough Balance")
// }
// 
// const bal = 1000
// if(bal < 500){
    // console.log("Less than");
// }
// else if(bal < 750){
    // console.log("Less than 750");
    // 
// }
// else{
    // console.log("Equal to 1000");
    // 
// }

const userLoggedIn = true
const debitCard = false
if(userLoggedIn && debitCard){
    console.log("ALLOWED TO SHOP");
}
else{
    console.log("NOT ALLOWED TO SHOP");
    
}