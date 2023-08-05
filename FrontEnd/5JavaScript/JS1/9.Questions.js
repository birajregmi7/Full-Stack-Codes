//change array of start to final 
//start: [jan,jul,march,august]
//final: [july,june,march, august]

const start = ['jan','jul','march','august']
console.log(start.shift())
console.log(start)
console.log(start.shift())
console.log(start)
start.unshift('june')
console.log(start)
start.unshift('july')
console.log(start)

console.log(`-------------------------------------------------`)
//========================================================
//change array of start to final using splice
//start: [jan,jul,march,august]
//final: [july,june,march, august]

const start1 = ['jan','jul','march','august']
console.log(start1.splice(0,2,'july','june'))
console.log(start1)
console.log(`------------------------------------------------------------`)

//---------------------------------------------------------------------
//return the index of the "javascript" from the given array, if it was reversed

const jsList = ['c','c++','html','javascript','python','java', 'c#', 'sql'];
console.log(jsList.indexOf('javascript'))
console.log(jsList.reverse())
console.log(jsList.indexOf('javascript'))

//create a nested array to show the following tic-tac-toe game stame

const ticTackToe = [[['x'],[' '],['O']],[[' '],['X'],[' ']],[['O'],[' '],['X']]];
console.log(ticTackToe)
ticTackToe[0][1] = ['O']
console.log(ticTackToe)