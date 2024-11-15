//for of loop
//These are arrray specific loops
const arr = [1,2,3,4,5];
for (const num of arr) {
    console.log(num)
}
//in for of loop there is no need of iterator
const greetings = "HEllo World!"
for(const i of greetings){
    console.log(i)
}

//Maps
const map = new Map() //map gives unique value in the order given to them
map.set('IN', "INDIA")
map.set('USA', "United States of America")
map.set('F', "France")

console.log(map)

for(const key of map){
    console.log(key)
}
for(const [key, value] of map){
    console.log(`${key} -> ${value}`)
}

//object
const myObj = {
    'game1' : 'nfs',
    'gam2' : 'spiderman'
}
//object is not iterable
// for(const [key, value] of myObj){
    // console.log(`${key} -> ${value}`)
// }