//q1
let num = 10;
if(num%10==0){
    console.log('Good')
}else{
    console.log('Bad')
}
//Q2
// const firstName = prompt("Eneter your name");
// const birthAge  = prompt("Enter your age");
// console.log(`${firstName} is ${birthAge} years old.`)

//q3
const quarter = 4;
switch(quarter){
    case 1: 
    console.log("January, February, March")
    break;
    case 2: 
    console.log("April, May, June")
    break;
    case 1: 
    console.log("July, August, September")
    break;
    default: 
    console.log("October, November, December")
    break;

}

//q4
const goldenString = 'Aap'
if(goldenString[0]==='a'|| goldenString[0] ==='A' && goldenString.length>5){
    console.log('Golden')
}else{
    console.log('Not Golden')
}

//q5
const a =1;
const b =2;
const c =3;
if(a>b && a>c){
    console.log('a is greates')
}else if(b>a && b>c){
    console.log(`b is greatest`)
}else{
    console.log(`c is greatest`)
}

//q6
//wap to check if 2 numbers have the same last digit. 32 and 473532 have same last digits

const number1 =2
const number2 =322422;
if((number1%10 === number2%10))
{
    console.log(`Both have same last digits, ${number1%10}`)
}else{
    console.log(`Both don't have same last digits`)
}