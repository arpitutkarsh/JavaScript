//In primitive data type we use stack memory
//In non primitive data type we use heap memory
//In stack memory for every variable we have defined we get a copy and in heap we get reference of the original value

let myname = "Arpit"; 
let mysecondname = myname;
console.log(myname)
console.log(mysecondname);
mysecondname = "Utkarsh";
console.log(myname)
console.log(mysecondname)

let user1 = {
    email : "arpit.com",
    name : "arpit",
}
let user2 = user1;
user2.email = "79";
console.log(user1.email);
console.log(user2.email)
/*
|                   |
|                   |
|          user2    |
|        user1      |
|      myname       |
|     secondname    |   
|       myname      |
---------------------

stack

________________________
|                       |
|                       |
|                       |
| email : "arpit.com",  |
| name : "arpit",       |
|                       |
|                       |
|                       |
________________________
Heap
*/
