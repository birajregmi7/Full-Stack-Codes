//foreach
//for array 

const alphabet = ['a','b','c','d'];
alphabet.forEach((char)=>{
    console.log(char)
})

// for array of object

const student = [
    {   
        name: 'raman'
    },
    {
        name:'bikash' 
    }
]
student.forEach((details)=>{
    console.log(details.name)
})