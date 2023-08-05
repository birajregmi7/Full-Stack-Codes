const student = {
    name: 'karan',
    age: 22,
    class: 9,
    subjects: ['hindi','english'],
    username: 'karan@123',
    password: 'abcd'
}

let {username,password,city="mumbai"} =student; //if the keyword here and key value in object matches then data can be fetched
// console.log(username)
// console.log(password)

//we can write {user,pass} because there is no such value as user and pass in student object

let {username:user, password:secret} =student;
console.log(user) //now we can use user 
// console.log(password) // now we can't use user since we have assigned it to secret -
// ReferenceError: username is not defined

console.log(city)
