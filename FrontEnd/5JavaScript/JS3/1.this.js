// this keyword refers to an object that executes the current piece of code 
//use of this inside an object points to the current object 
const studuent = {
    name: 'Sujal',
    age: 24,
    getAvg(){
        let avg = (this.age/2);
        console.log(this)
        console.log(avg)
        return avg
    }
}
console.log(studuent.getAvg())

//use of this on normal functions 

function getAvg(age){
    let avg = (this.age/2);
    console.log(this)
    return avg
}
console.log(getAvg(22))