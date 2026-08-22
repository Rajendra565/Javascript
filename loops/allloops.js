//  loops in javascript 
// loops are used to execute a block of code repeatedly until a specified condition is met. There are several types of loops in javascript, including for loop, while loop, do while loop, and foreach loop.
// for loop
// for loop is used to execute a block of code a specified number of times. It consists of three parts: the initialization, the condition, and the increment/decrement.
for(let i=0;i<5;i++){
    // console.log(i);
}
// while loop
// while loop is used to execute a block of code as long as a specified condition is true. The condition is evaluated before executing the block of code.
let i=0;
while(i<=5){
    // console.log(i)
    i++;
}
// do while loop
// 
let j=0
do{
    console.log(j)
    j++
}while(j<5)
    console.log(j)


// foreach loop
arr=[1,2,3,4,5]
arr.forEach((i)=>{
    return i
})
console.log(arr)