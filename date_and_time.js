//Dates
let myDate = new Date()
console.log(myDate)
console.log(myDate.toString()) //Converts date to string it has Day, month,date,year,time
console.log(myDate.toDateString())//it has day and date only
console.log(myDate.toTimeString())
console.log(myDate.toISOString())
console.log(myDate.toJSON())
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString())
console.log(myDate.toUTCString())
console.log(myDate.toTimeString())
console.log(myDate.getTime());
console.log(myDate.getDay())

let mycreateddate = new Date(2023,0,23)
let mycreateddateo = new Date(2023,1,23,22,3)
let mycreateddatet = new Date("2023-01-14")
let mycreateddateth = new Date("01-14-2023")
console.log(mycreateddate.toDateString());
console.log(mycreateddateo.toLocaleString());
console.log(mycreateddatet.toLocaleString());
console.log(mycreateddateth.toLocaleString());

//current time
let timestamp = Date.now()
console.log(timestamp)

console.log(mycreateddate.getTime()) //to compare two dates use getTime as it compares in millisecond
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()

newDate.toLocaleString('default', {
    weekday: "long",

})


