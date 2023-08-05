let data = {
    email:'biraj.regmi.jr@gmail.com',
    password: 'hello123'
};
let dataCopy = {...data, id:123};
console.log(dataCopy)

console.log(`---------------------------`)

//eg2
let arr=[1,2,3,4,5]; 
let obj1 = {...arr} //here arr has only value but no key so while outputing key is it's index 
console.log(obj1) 

//eg3
let nameOfSomething =["karan"];
let obj2 = {...nameOfSomething}
console.log(obj2) //{ '0': 'karan' }

//eg4
let obj3 = {...'BIRAJ'}
console.log(obj3) //{ '0': 'B', '1': 'I', '2': 'R', '3': 'A', '4': 'J' }