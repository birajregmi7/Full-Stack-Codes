//try and catch 
// try allows you to define a block of code to be tested for errors while it is being executed 
// catch allows you to define bloc k of code if an error occurs in the try block

try{
    console.log(a)
}catch{
    console.log('Here is error')
}
console.log('--------------------')
//example 2
console.log('hello')
console.log('hello')
try{
    console.log(a)
}catch{
    console.log('Here is error')
}
console.log('hello')

console.log(`---------------`)
//example3
console.log('wow')
console.log('wow')
let a =3;
try{
    console.log(a)
}catch{
    console.log('Error') //here catch isin't running because there is no error in try block
}
console.log('wow')
