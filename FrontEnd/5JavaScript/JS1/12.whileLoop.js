//print 1 to 5
let num= 1;
while(num<=5){
    console.log(num)
    num++
}
console.log('-----------')

//print your fav movie
// let favMovie = 'Avatar'
// let guess =prompt('Guess your fav movie')

// while(guess!=favMovie && guess!='quit'){
//     guess=prompt('wrong guess try again')
// }

// if(guess==favMovie){
//     document.querySelector('h1').textContent = 'Guess Matched'
// }else{
//     document.querySelector('h1').textContent = 'Quit'
// }

console.log('-------------')

//break statemtnt
let i = 1;
while(i<6){
    if(i==3){
        break;
    }
    console.log(i)
    i++
}
//only prints 1 and 2 because when it is 3 it removes from the block scope


