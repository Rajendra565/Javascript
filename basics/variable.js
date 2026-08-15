

// Keyword	Scope	Can be reassigned?	Can be redeclared?	Hoisted?
// var	Function-scoped	✅ Yes	✅ Yes	Yes (initialized as undefined)
// let	Block-scoped {}	✅ Yes	❌ No	Yes (but not initialized - Temporal Dead Zone)
// const	Block-scoped {}	❌ No (must assign immediately)	❌ No	Yes (but not initialized - Temporal Dead Zone)

// var is function-scoped, which means it is accessible within the function it is declared in. It can be reassigned and redeclared within the same scope. It is hoisted to the top of its scope and initialized as undefined.
var name="Rajendra";
console.log(name);
name="kumar";
console.log(name);
var name="Rajendra Kumar";
console.log(name);
// let is block-scoped, which means it is only accessible within the block it is declared in. It can be reassigned but cannot be redeclared within the same scope. It is hoisted to the top of its scope but not initialized, which means it cannot be accessed before its declaration (Temporal Dead Zone).


let age=25;
console.log(age);
age=26;
console.log(age);

// const is also block-scoped, but it cannot be reassigned or redeclared. It must be assigned a value immediately upon declaration. It is hoisted to the top of its scope but not initialized, which means it cannot be accessed before its declaration (Temporal Dead Zone).
const city ="Bangolore";
console.log(city)
