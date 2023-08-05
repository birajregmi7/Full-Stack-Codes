//storing values of array into multiple variable 

let names = ['tony','bruce','steve','peter']
let [winner,second] =names;
console.log(winner)
console.log(second)
console.log(`-------------------------------------------------------------------`)

//eg 2
let random = ['abc','efg','hij','klm','nop','qrs']
let [firstThree, secondThree, ...othersAll] = random;
console.log(firstThree)
console.log(secondThree)
console.log(othersAll)