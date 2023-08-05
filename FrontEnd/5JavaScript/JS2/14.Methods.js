//methods
//if we define function as in key value pair in object it is called methods
const calculator = {
    add: function(a,b){
        return a+b;
    },
    sub: function(a,b){
        return a-b
    }
}
console.log(calculator.add(1,2))
console.log(calculator.sub(4,2))

//shorthand

const calculation = {
    add(a,b){
        return a+b;
    },
    substraction(a,b){
        return a-b;
    }
}
console.log(calculation.add(1,5))