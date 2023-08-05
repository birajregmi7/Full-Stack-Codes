let fruits =['mango','apple','litchi']
for(let i=0; i<fruits.length; i++){
    console.log(fruits[i])
}
console.log(`--------`)
//nested array loop

let heroes = [['spider','iron','captain'],['super','bat','flash']]
for(let i = 0; i<heroes.length;i++){
    for(let j=0;j<heroes[i].length;j++){
        console.log(heroes[i][j])
    }
}