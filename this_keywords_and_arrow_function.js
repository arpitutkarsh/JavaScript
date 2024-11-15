//this keyword provides information about current context
const user = {
    username: "arpit",
    price : 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to the Website`)  //inside the dollar symbol we can write username easily but as we are reffering to a current context we willl use this keyword
        //console.log(this)
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

console.log(this) //it refers to empty object

// function chai(){
    // let username = "au"
    // console.log(this)
// }
// chai()
//ARROW FUNCTION
const chai = () => {
    let username = "arpit"
    console.log(this.username)
}
chai()

//syntax of arrow function
const addTwo = (num1, num2) => {
    return num1 + num2
}
console.log(addTwo(3,4));

//Other syntax of arrow function als called as IMPLICIT RETURN
const add = (num7, num8) =>  num7 + num8

console.log(add(7,8))
const addi = (num7, num8) =>  (num7 + num8)
console.log(addi(8,9))