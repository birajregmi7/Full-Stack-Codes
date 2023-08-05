//every is like AND function it return true if all return statement is true otherwise it will print false 

let array = [1,35,45,5,1,33,22,555,7,40];
const func = array.every((el)=>{
    return (el%2==0)
})
console.log(func)

//exmaple 2
let arr= [2,4]
let someRandomFun = arr.every((el)=>{
    return (el%2==0)
})
console.log(someRandomFun)

console.log('-------------------------------------------------')

//some function 
// some is like OR operator that returns true if some elements of arrya give for some function else return false.

let arrayyy =[1,2,3,4,5];
let someArr = arrayyy.some((el)=>{
    return (el%2==0);
})
console.log(someArr) // this showed true because in arrayyy there were both true and false values so it returned true

//example 2
let arAy = [1,3,5,7]
let ranArr = arAy.some((el)=>{
    return (el%2==0) //it return false because all element on array are not divisible by 2
})
console.log(ranArr)