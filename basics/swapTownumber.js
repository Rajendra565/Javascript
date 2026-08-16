let a=10;
let b=20;
// with in a temporary variable
// let temp=a;
// a=b;
// b=temp
// console.log("a= "+a);
// console.log("b= "+b);
// console.log(temp)   
// without using a temporary variable
[a,b]=[b,a]
console.log("a= "+a);
console.log("b= "+b);

let x=30 
let y=40
// console.log("x= "+x);
// console.log("y= "+y);
// without using a temporary variable
x=x+y
y=x-y
x=x-y
// console.log("x= "+x);
// console.log("y= "+y);
