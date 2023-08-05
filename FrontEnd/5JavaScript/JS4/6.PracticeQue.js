//check if all numbers in our array are multiple of 10 or not

let array = [1,2,3,4,5,6,7,8,9,10];
let checkArr = array.every((el)=>{ //every method
    return (el%10==0);
})
console.log(checkArr)

//create a function to find the min number in an array
const arr = [1,24,5,10,80,3,4,5]
const finalRes = arr.reduce((min,el)=>{
    if(el>min){
        return min;
    }else{
        return el;
    }
})
console.log(finalRes)