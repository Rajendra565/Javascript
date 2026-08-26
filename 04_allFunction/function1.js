// function with declrations
function fun1(){
console.log("function")
}
// function expression 
let fun2=function (){
console.log("function 2")
}

// fun2()
// fat arrow function

let fun3=()=>{
console.log("function 3")
}
// fun3()


// function perameter and arg

function fun4(a,b){
    console.log(a+b)
}
// fun4(2,3)

// Dafault,rest and spread parameter

// default
function fun5(c1=0,c2=0){
    console.log(c1,c2)
}

// fun5()
// rest parameter
function fun6(...val){
    // let sum=0
    // // for(let i=0;i<=val.length;i++){
    // //     sum+=val[i];
    // // }
    // return sum
    // console.log(val)
    let sum=0;
    for(let i =0 ;i<=val.length-1;i++){
        // console.log(val[i])
        sum+=val[i];
    }
    return sum
}
console.log(fun6(1,2,3,4,5))
// function with return type
function fun7(a,c){
    return a+c
}
console.log(fun7(1,2))

// first class function ->A first-class function is a function that can be treated like a value—it can be stored in a variable, passed as an argument, or returned from another function.


function fun8(val){
val()
}

fun8(function(){
    console.log("Helow i am first class function")
})

// higher order function ->A higher-order function is a function that accepts another function as an argument or returns a function.


function greet(name){
    return "hello "+name
}
function processUser(fn,name){
    return fn(name)
}
console.log(processUser(greet,"Rajendra"))