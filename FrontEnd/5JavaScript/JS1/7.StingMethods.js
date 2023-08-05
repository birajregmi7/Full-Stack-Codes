//trim => used to trim space
let str = '     Ram     '
console.log(str.trim()); // here white spaces before and after Ram will be deleted with .trim and will print ram
console.log(str) // here the old str will be printed because .str didn't change the value of str
// NOTE: Thats why strings are immutable 

//-----------------------------------------------------------------------------------------------
const str2 = 'HelloWorld'
const upperCaseValue = str2.toLowerCase();
const lowerCaseValue = str2.toUpperCase();
console.log(upperCaseValue);
console.log(lowerCaseValue);
console.log(str2) // this shows that although we use methods it doesnt assign the value of str2 as new one it creates new other output

//-------------------------------------------------------------------------------------------------
//string with argument
const str3 = 'Hello I love Coding'
console.log(str3.indexOf("love")) 
console.log(str3.indexOf('j'))
console.log(str3.indexOf('o')) // it outputs the fist most value of o present in the sentence or word

//------------------------------------------------------------------------------------------------------
//method chaining

const str4 = '                    Hello this is Biraj Regmi                  '
const chainingValue = str4.toUpperCase().trim()
console.log(chainingValue)
//here use of two methods simultaneously shows mehtod chaining

const someString = 'BirajRegmi';
console.log(someString.slice(1)) //since we have not written anything to left js asumes that ending value is .length -1
console.log(someString.slice(1,7)) // here word goes from start to end index that we want to display +1
console.log(someString.slice(-2)) //means str.length-2

//Questions1
let messages = "help!"
console.log(messages.toUpperCase().trim())

//Qustion2
let name1 = "ApnaCollege"
console.log(name1.slice(4,9))
console.log(name1.indexOf("na"))
console.log(name1.replace("Apna","Our")) 

//question3
//seperate the college part in apnacollge and replace i with j
let collegeName = "LovelyProfessionalUniverstiy"
console.log(collegeName.replace("i", "j"))