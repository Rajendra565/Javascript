// if(10>5){
//     console.log("10 is greater than 5")
// }
// else{
//     console.log("10 is not greater than 5")
// }

function checkAge(age){
    if(age>=18){
        return "You are eligible to vote"
    }
    else{
        return "You are not eligible to vote"
    }
}


console.log(checkAge(20))