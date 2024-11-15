function sayMyName(){
    console.log("Arpit");
}
//sayMyName()
//functions to add two numbers
// function addtwonumbers(number1, number2){
    // console.log(number1 + number2)
    // 
// 
//}

function addtwonumbers(number1, number2){
    let result = number1 + number2
    return result

}

const result = addtwonumbers(5,3)
//console.log("Result: ",result)

function loginUserMessage(username){
    if(username === undefined){
        console.log("Please enter an USERNAME !")
        return 
    }
    return `${username} Just Logged Inn`
}
//to give default value
function loginUserMessage1(username = "sam"){
    if(username === undefined){
        console.log("Please enter an USERNAME !")
        return 
    }
    return `${username} Just Logged Inn`
}
//console.log(loginUserMessage('Arpit'))
//console.log(loginUserMessage())

//console.log(loginUserMessage1('Arpit'))
//console.log(loginUserMessage1())

function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(200,400,500))

const user = {
    username1: "Arpit",
    age: 19
}

function handleobject(anyobject){
    console.log(`Username is ${anyobject.username1} and age is ${anyobject.age}`)
}

handleobject(user)




