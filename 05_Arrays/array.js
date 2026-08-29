let arr=[1,2,3,4,5];
// push() method: The push() method is used to add one or more elements to the end (last position) of an array.
arr.push(60)
console.log("push(60) method is used ")
console.log(arr)
// pop() method: The pop() method is used to remove one elements to the end (last position) of an array.
arr.pop()
console.log("pop() method is used ")
console.log(arr)
// shift() Method  The shift() method is used to remove the first element from an array.
arr.shift()
console.log(" shift() method is used ")
console.log(arr)
// unshift() Method  The unshift() method is used to add the first element from an array.
arr.unshift(10,20)
console.log("unshift(10,20) method is used ")
console.log(arr)

// slice() method is used to extract a portion of an array and return a new array
 let newarray=arr.slice(1,3);
 console.log("slice() method is used ")
 console.log(newarray)


// map() Method in JavaScript
// The map() method is used to create a new array by applying a function to every element of the original array.
let result=arr.map((val,index)=>{
   return val+0
})
console.log(result)

// filter method in javascript

// The filter() method is used to select elemants form an array based on condition . it return a new array containing only the elements that satisfy the condition.

let filterelemant=arr.filter((val)=>{
    return val>=5
})

console.log(filterelemant)


// // reduce() Method in JavaScript

// The reduce() method is used to process all elements of an array and produce one final value.
// For example, you can use it to calculate a sum, total, average, maximum value, etc.

