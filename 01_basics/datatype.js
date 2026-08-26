// datatype is a basic two types of data in javascript
// 1. Primitive Data Types
// 2. Reference Data Types
// ->primitive Data type There are 7 primitive data types in javascript.
// NNBBSSU
// N = Number
// N = Null
// S = String
// S = Symbol
// B = Boolean(true/false)
// B = BigInt
// U = Undefined
let account = 1234567890; // Number
let nullValue = null; // Null
let name="Rajendra";//string
let accountName = Symbol("Rajendra Kumar");//symbol
let booleanValue = true; // Boolean
let bigIntValue=123456789123456789n;//BigInt
let accountPassword;//Undefined
// console.log(account);
// console.log(nullValue);
// console.log(name);
// console.log(accountName);
// console.log(booleanValue);
// console.log(bigIntValue);
// console.log(accountPassword);
// console.log(typeof account);    
// console.log(typeof nullValue);  

// Datatype conversion  
let score=null
// console.log(typeof score);
// console.log(typeof Number(score))
let score1=Number(score)
// console.log(score1)

// "33" -> 33
// "33abe" -> NaN
// true -> 1    
// false -> 0
let isLoggedIn=true;
// console.log(typeof isLoggedIn);
// let isLoggedIn1=Boolean(isLoggedIn)
// console.log(isLoggedIn1)






// reference data types  (non-primitive data types) 
// array ,object,function|

// Array 
const myarray=[1,2,3,4,5]
console.log(myarray[0])

const array1=new Array(1,2,3,4,5)
console.log(array1[0])

// Object
const details={Name:"Rajendra",Age:22,Gender:"Male"}
console.log(details.Name)
console.log(details.Age)
console.log(details.Gender)

// function
let fun=function add(a,b){
    return  a+b
}
console.log(fun(2,3))
