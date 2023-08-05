//function scope

//function vs globla scope => function is more specific than global therefore function is better than global 
function funScope(){
    let x =1; //we can easily access the variable that is defined inside the function
    console.log(x)
}
// console.log(x) 
//ReferenceError: x is not defined
funScope();

console.log(`---------------------------------------------`)


let add= 1111; //global scope
function clcSum(sum1,sum2){
    let sum = sum1+sum2; //function scope
    console.log(sum) //we can access the sum because the varibale sum is defined inside the function scope
    console.log(add) //we can use global scope everywhere
}
clcSum(1,2);