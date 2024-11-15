const coding = ["js","rupy","python","java","cpp"]
coding.forEach(function (item) {
    console.log(item)
})//this function is called callback function and callback function does not have a name

//arrow function
coding.forEach((values) => {
    console.log(values)
})

function printElement(item){
    console.log(item)
}

coding.forEach(printElement)