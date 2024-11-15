const marvelHeroes = ["Thor","Ironman", "SpiderMan"]
const dc_hero = ["Superman", "Flash", "Batman"]
marvelHeroes.push(dc_hero); //doing this will give nested array
//console.log(marvelHeroes) 
//console.log(marvelHeroes[3][1]) //As pushing has created a nested array, to access the element of the nested array to solve the problem of nested array
//const allheroes = marvelHeroes.concat(dc_hero);
//console.log(allheroes)
const all_new = [...marvelHeroes, ...dc_hero];
console.log(all_new);

const anotherarray = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = anotherarray.flat(Infinity);
console.log(real_another_array)

console.log(Array.isArray("Arpit"))
console.log(Array.from("Arpit")); //converts any value to array

const score1 = 100
const score2 = 200
const score3 = 300

console.log(Array.of(score1,score2,score3))