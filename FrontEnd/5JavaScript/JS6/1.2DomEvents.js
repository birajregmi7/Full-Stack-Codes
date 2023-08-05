//events are signals that something has occured (user input/action)
let btnn = document.querySelector('.btn')

btnn.onclick = function(){
    console.log('Btn is clicked')
}

let btnn2 = document.querySelectorAll('.btns');

// Use forEach to loop through the NodeList
btnn2.forEach(butn => {
    butn.onclick = sayHello;
});

function sayHello() {
    console.log('This is button 2');
}