// Q1. print number from 1 to 20 using a for loop
for(let i=1;i<=20;i++){
    // console.log(i)
}
// Q2. print number from 10 to 1 using a while loop

let i=10;
while(1<=i){
    // console.log(i)
    i--
}
// Q3. print even numbers from 1 to 20 using a for loop

for(let i=1;i<=20;i++){
    if(i%2==0){
        // console.log(i)
    }
}
// Q4. print odd numbers form 1 to 15 using while loop
let j=0;
while(j<=15){
    if(j%2==1){
        // console.log(j)

    }
    j++
}
// Q5. print the multiplication table of 5 using a for loop
for(i=1;i<=10;i++){
    // console.log(`5 x ${i}=${5*i}`)
    
}
// Q6. print the sum of number from 1 to 10 using a for loop
let sum=0;
for( let i=0;i<=10;i++){
    sum+=i
}
// console.log(sum)


// Q7. print all number between 1 to 50 divisible by 3 using a for loop
for(let i =1;i<=50;i++){
    if(i%3==0){
        // console.log(i)
    }
}

// Q8. "1 is odd ", "2 is even", "3 is odd" and so on till 20 using a for loop
for(let i=0;i<=20;i++){
    // if(i%2==0){
    //     console.log(`${i} is even`)
    // } 
    // else{
    //     console.log(`${i} is odd`)
    // }
}
// Q9. count how many number between 1 to 100 are divisible by 3 or 5 using a for loop
let count=0;
for(let i=0;i<=100;i++){
    if(i%3==0 || i%5==0){
        count+=1
        console.log(i + " "+count )
    }
}
console.log(count)