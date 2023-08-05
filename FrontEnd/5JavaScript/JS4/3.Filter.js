//filter 
// filter is similar to map BUt it inserts it's value to new array when the condition of callback function is true else it will not display anything if condition is false

const number = [2,5,1,3,5,3,45,6,7,4,3,5,7,84,6];
const newArray = number.filter((element)=>{
        return (element%2==0)
})
console.log(newArray)
