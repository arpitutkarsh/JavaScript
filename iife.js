//IMMEDIATELY INVOKED FUNCTION EXPRESSION(IIFE)
// function coffee(){
    // console.log(`DB CONNECTED`)
// }
// console.log(coffee());

//IIFE means the function which executes immediately, and also due to the problem caused by the pollution of global scope and to remove that pollution we use IIFE
(function chai(){
    console.log(`DB CONNECTED`)
})();

( (name) =>  {
    console.log(`DB CONNECTED TO ${name}`)
}) ('database321');