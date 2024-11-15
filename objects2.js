//Declaring objects using constructor
const tinderUser = new Object()
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedin = false

// console.log(tinderUser)

const regularUser = {
    email : "someone@gmail.com",
    fullname: {
        userfullname : {
            firstname : "Arpit",
            lastname : "Utkarsh"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname)

//merging two objects
const obj1 = {
    1 : "a",
    2 : "b" 
}

const obj2 = {
    3 : "c",
    4 : "d"
}

const obj3 = {obj1, obj2}
//console.log(obj3); //we are getting a problem of nested object

const obj4 = Object.assign({}, obj1 , obj2) //another way to merge
//console.log(obj4)

//one more way to merge
const obj5 = {...obj1, ...obj2}
console.log(obj5)

//to get the keys of the object
console.log(Object.keys(tinderUser)) //extremely important
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))
console.log(tinderUser.hasOwnProperty('isLoggedin'))
console.log(tinderUser.hasOwnProperty('isLoggedint'))


const course = {
    coursename : "JavaScript",
    price : "999",
    courseteacher : "Arpit"
}

// const {courseteacher} = course
// console.log(courseteacher)

//Suppose at any point of time we might think that courseteacher is such a big name and we want to address it as teach so for this what we will do is
const {courseteacher: ins} = course //here we have changed the name
console.log(ins)
