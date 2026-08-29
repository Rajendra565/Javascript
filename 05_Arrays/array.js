let arr=[1,2,3,4,5];
// push() method: The push() method is used to add one or more elements to the end (last position) of an array.
arr.push(60)
console.log(arr)
// pop() method: The pop() method is used to remove one elements to the end (last position) of an array.
arr.pop()
console.log(arr)
// shift() Method  The shift() method is used to remove the first element from an array.
arr.shift()
console.log(arr)
// unshift() Method  The unshift() method is used to add the first element from an array.
arr.unshift(10,20)
console.log(arr)
// map() Method in JavaScript
// The map() method is used to create a new array by applying a function to every element of the original array.
let result=arr.map((val,index)=>{
   return val+0
})
console.log(result)