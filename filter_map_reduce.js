// // // // const coding = ["js", "ruby", "python", "java", "cpp"]
// // // // const values = coding.forEach((item) => {
// // // //     //console.log(item)
// // // //     return item
// // // // })

// // // // //From line number 8's output we can conclude that for each does not return any values
// // // // console.log(values)

// // // const myNums = [1,2,3,4,5,6,7,8,9,10]

// // // const newNums = myNums.filter( (nums) => {
// // //     return nums > 4
// // // })
// // // console.log(newNums);

// // const Books = [
// //     {title: 'Book One', genre: 'FIction', publish: '1998', edition: '2004'},
// //     {title: 'Book two', genre: 'Non-Fiction', publish: '2004', edition: '2008 '},
// //     {title: 'Book three', genre: 'History', publish: '2006', edition: '2010'},
// //     {title: 'Book four', genre: 'Science', publish: '2000', edition: '2008'},
// //     {title: 'Book five', genre: 'Non-Fiction', publish: '1991', edition: '2000'},
// //     {title: 'Book six', genre: 'Fiction', publish: '2012', edition: '2020'},
// //     {title: 'Book seven', genre: 'Science and Technology', publish: '1998', edition: '2000'},
// //     {title: 'Book eight', genre: 'History', publish: '2002', edition: '2006'},
// //     {title: 'Book nine', genre: 'Non-Fiction', publish: '1997', edition: '2024'},
// //     {title: 'Book ten', genre: 'Fiction', publish: '2004', edition: '2010'},
// // ];

// // let userBooks = Books.filter((bk) => {
// //     return bk.genre === 'Non-Fiction'
// // })
// // console.log(userBooks)


// const myNumbers = [1,2,3,4,5,6,7,8,9,10]
// // let newNums = myNumbers.map((num) => num + 10)
// // console.log(newNums)



// const newNums = myNumbers.map((num) => num * 10).map((nums) => nums + 1).filter((num) => num >= 40)
// console.log(newNums)


//Reduce

const myNumbers = [1,2,3,4]
let myTotal = myNumbers.reduce(function(acc, currval){
    return acc + currval
}, 0)

console.log(myTotal)