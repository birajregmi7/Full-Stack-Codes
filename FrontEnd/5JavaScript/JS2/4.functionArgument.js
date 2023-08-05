const printDetails = (name, age)=>{
    console.log(`My name is ${name} and I am ${age} years old`)
}

printDetails('Biraj',24);
printDetails('Bittu',26);
printDetails('Shyam'); //My name is Shyam and I am undefined years old
printDetails(); // My name is undefined and I am undefined years old