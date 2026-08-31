// foreach method used to execute the elemant of the array
let arr=[1,2,3,4,5];
let res=arr.forEach((val)=>{
console.log(val)
})

//map() method used to  creates a new array by changing each element of the original array.
let mapres=arr.map((val)=>{
    return val*2
})
console.log("this is a map method in an array")
console.log(mapres)

// filter() method used to create a new array Select elements based on a condition.
let filterelemant=arr.filter((val)=>{
    return val>3
})
console.log("this is a filter method in an array")
console.log(filterelemant)


// reduce() is used to reduce an array to a single value.
let totalarr=arr.reduce((acc,val)=>{
    return acc+val
},0)
console.log(" this is a reduce method "+totalarr)