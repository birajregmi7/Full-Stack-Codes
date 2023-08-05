//square and sum the array using the arrow function and hten find the average of the array 

let nums = [1, 2, 3, 4, 5];
const square = nums.map((num) => num * num);
console.log(square);

let sum = square.reduce((acc, cur) => acc + cur, 0);
let avg = sum / nums.length;
console.log(avg);

console.log(`-----------------------------------`)

//q2 create a new array using map whose orginal element is equal to element +5

const array = [1,2,3,4,5]
const mapUsing = array.map((el)=>{
    return el+5;
})
console.log(mapUsing)

console.log(`--------------------------------------`)

//q3 create a new array whose elements are in uppercase of words present in the orginal array

const array1 =['ram']
const mapThings = array1.map((el)=>{
    return el.toUpperCase(); 
})
console.log(mapThings)

//q4 write funcation called doubleAndReturnArgs which accepts an array and a variable number of arguments. The function should return a new array with the orginal array values and all of the additional arguments doubled.

const doubleAndReturnArgs = (arr, ...args) =>[
    ...arr,
    ...args.map((v)=>v*2),
]
console.log(doubleAndReturnArgs([1,2,3],4,4))
console.log(doubleAndReturnArgs([2],10,4))

//wap function called mergeObjects that accepts two objects and returns a new object which contains all the key and values of the first object and second object

let student = {
    name: 'Biraj'
}
let classofStd = {
    section: 'hk'
}
const mergeObjects = (obj1,obj2)=>({
    ...obj1 ,
    ...obj2
});

console.log(student,classofStd)