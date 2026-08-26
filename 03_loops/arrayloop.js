// Array Methods map and filter
// map method is used to iterate over an array and return a new array with the results of calling a provided function on every element in the calling array.

let arr=[1,2,3,4,5];
let mappedArray=arr.map((i)=>{
    return i
})
console.log(arr)

// filter method is used to create a new array with all elements that pass the test implemented by the provided function.


let filterarray=arr.filter((i)=>{
    return i>2
})
console.log(filterarray)