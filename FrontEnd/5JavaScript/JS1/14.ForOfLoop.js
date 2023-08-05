let names =['hari','shyam','king']
for(let i of names){
    console.log(i)
}

let strName = 'Biraj'
for(let stringName of strName){
    console.log(stringName)
}
console.log('--------')

//nested
let alphaNum =[[1,2,3],['a','b','c']]
for(i of alphaNum){
    for(j of i){
        console.log(j)
    }
}