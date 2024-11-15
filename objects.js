//There are two ways to declare objects 1st is Literal and 2nd is Constructor
//Singleton is formed when we create object using constructor only


//We can also create object using constructor method 
//Object.create
//object literals

//Below is the method to declare an object in the Javascript
const mySym = Symbol("key1")
const JsUser = {
    name : "Arpit",
    "full name" : "Arpit Utkarsh",
    //mySym : "mykey1", //it is declared as string but not as a symbol to use it as a symbol we will have to write it in the square bracket
    [mySym] : "mykey1",
    age : 22,
    location : "Bhopal",
    email : "arpit.utkarsh49@gmail.com",
    isLoggedIn : false,
    lastloginDays : ["Monday", "Saturday"]
}

//to access objects in JS
console.log(JsUser.email); //This way is not really good way
//One more way is
console.log(JsUser["email"]) //console.log(JsUser[email]) is not a way because parameter in the object is taken as string
console.log(JsUser["full name"]) //we can not access the full name using the dot(.) symbol
console.log(JsUser[mySym])

//to change or modify the value
JsUser.email = "arpit.utkarsh2021@vitbhopal.ac.in"
console.log(JsUser["email"]) //as we can see that here the value of email id is changed to make it in such a way that its value cant be changed we use an operator called as freeze operator
//Object.freeze(JsUser)
JsUser.email = "ar.com"
console.log(JsUser["email"]) //here the value of email is not changed to ar.com as before  changing its value it was already freezed

//console.log(JsUser)

//Suppose we have to add greetings
JsUser.greeting = function(){
    console.log("HEllo USER!!!")
}
JsUser.greeting2 = function(){
    console.log(`Hello ${this["full name"]}! Welcome to the JS `)
}
console.log(JsUser.greeting());
console.log(JsUser.greeting2())

