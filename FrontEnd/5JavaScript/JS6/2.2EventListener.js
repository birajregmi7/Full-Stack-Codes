// event listner 
// for multiple event's to be performed it will make easier
//element.addEventListener(event,callback)
let btnn = document.querySelector('.btn')
btnn.addEventListener('click',function(){
    console.log('Button is clicked')
})

let btnn1 = document.querySelector('.btn1');
for (someVal of btnn1) {
    someVal.addEventListener('click', sayHello);
    someVal.addEventListener('click', sayName);
}
function sayHello() {
    alert('Hello');
}
function sayName() {
    alert('Apna College');
}