const arrayData = ['a', 'b', 'c', 1, 2]
console.log(arrayData)

console.log(arrayData[0]);

console.log(arrayData.length)

console.log(typeof (arrayData)) //type of array is object

//-------------------------------------------------------
let newArray = [];
console.log(newArray) //empty array

//-=--------------------------------------------------------
//how to access datas first index
const arrayInfo = ['Biraj', 1, 55, "honey"]
console.log(arrayInfo[0][2]) //r will be printed

//--------------------------------------------------------------
//array are mutable(change can be brought to an array)
let fruits = ['mango', 'banana', 'apple', 'orange'];
fruits[0] = 'dragonfruit'
console.log(fruits); //changes in whole array is done

//
const alphabetChar = ['a', 'b', 'c']
alphabetChar[10] = 'j'
console.log(alphabetChar) //output: [ 'a', 'b', 'c', <7 empty items>, 'j' ]

//---------------------------------------------------------------------------------------
//Array Methods
//push
const dataOfInfo = ['ram', 'hari', 'ansh', 'kabali']
dataOfInfo.push('HingMan')
console.log(dataOfInfo); //[ 'ram', 'hari', 'sonam', 'ansh', 'kabali', 'HingMan' ]

//unshift
dataOfInfo.unshift('Biraj')
console.log(dataOfInfo); //[ 'Biraj', 'ram', 'hari', 'ansh', 'kabali', 'HingMan' ]

//pop
dataOfInfo.pop()
console.log(dataOfInfo)

//shift
dataOfInfo.shift();
console.log(dataOfInfo)

//-------------------------------------------------------------------------------------------------------------------
//IndexOF
let alpha = ['a', 'b', 'c']

console.log(alpha.indexOf('b'))
console.log(alpha.indexOf('a'))
console.log(alpha.indexOf('h')) //no 'h' in array so prints -1
//-----------------------------------------------------------------------------------------------------------------------
//Includes
console.log(alpha.includes('a')) //true
console.log(alpha.includes('L')) //false

//---------------------------------------------------------------------------------------------------------------
//concat method
let prim = ['red', 'yellow', 'blue'];
let num = [1, 2, 3];
console.log(prim.concat(num)) //[ 'red', 'yellow', 'blue', 1, 2, 3 ]
console.log(num.concat(prim)) //[ 1, 2, 3, 'red', 'yellow', 'blue' ]

//------------------------------------------------------------------------------------------------------------------------
//slice in Array
const sliceArray = [1, 2, 3, 4, 5, 6]
console.log(sliceArray.slice(1)) //1 index dekhi baki return garne

console.log(sliceArray.slice(1, 3)) //[ 2, 3 ]
console.log(sliceArray.slice(-2)) //-2 means it is (.length-2) so [ 5, 6 ]

//---------------------------------------------------------------------------------------------------------------
//splice method = removes/add/replace

const colors = ['red','yellow','pink','purple','hotpink']

console.log(colors.splice(4)) // [ 'hotpink' ]
console.log(colors.splice(0,1)) //[ 'red' ]
colors.splice(1,1,'green', 'black') //[ 'yellow', 'green', 'purple' ]
console.log(colors) 
 
//---------------------------------------------------------------------------------------------------------------------------------------
//slice vs spice
//slice=> no change in orginal array
//spice=> makes changes in orginal array

//-----------------------------------------------------------------------------------------------------------------------
//Sorting array
let cars = ['audi', 'toyota','bmw','sokoda']
console.log(cars.sort()); //[ 'audi', 'bmw', 'sokoda', 'toyota' ]
//it is sorted acending order wise 

let numberss= [ 99,42,67,42,100]
console.log(numberss.sort()) //[ 100, 42, 42, 67, 99 ]
//there is no sequence of sorting in numbers becuase the numbers will be converted to string and then later sorted

//--------------------------------------------------------------------------------------------------------------------------
//Array Refrencing

let arr11 = [];
let arr22 = [];
console.log(arr11 == arr22) //false because array doesnt point to values it rather points to it's address

//----------------------------------------------------------------------------------------------------------------------------------
//constant array
const arrayyy = [1,3,4]
arrayyy.push(20)
console.log(arrayyy)
//althouth it's constant but we can add or remove values but cant assign them to other 
const array33=[]
// array33 = arrayyy;
// console.log(array33)
 //Assignment to constant variable.

 //---------------------------------------------------------------------------------------------------------------------------------------------
 //Nested Array or MultiDimentional Array

 let numbData = [[1,2],[3,4],[8,7]]
 console.log(numbData)
 console.log(numbData[0][1]) //2
