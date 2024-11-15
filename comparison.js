console.log(2>3);
console.log(2 == 2);

//FOr the above two lines and similar lines of code we know what the output should be

//The problem arises when we dont cmpare the same datatype
//like
console.log("2" > 1); //it gives output as true by automatically converting "2" int number
console.log("02" > 1);