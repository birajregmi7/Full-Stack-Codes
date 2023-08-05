//return statement
//return return somevalue inside the function 

const returnExample = (age) =>{
    if(age>=18){
        return 'Eligible'
    }else{
        return 'Not Eligible'
    }
}
returnExample(20);//nothing is printed because of no console.log
returnExample(10);

console.log(returnExample(20))
console.log(returnExample(15))