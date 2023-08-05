//this in event listeners
//when this is used in event handler of something then this refers to something


let btn = document.querySelector('.button1')
let para = document.querySelector('p')
btn.addEventListener('click',function(){
    para.innerText = this.innerText; //here this means button itself
})

let btn2 = document.querySelector('.btn2')
let h1 = document.querySelector('h1')
let h3 = document.querySelector('h3')

function changeColor(){
    console.dir(this.innerText)
    this.style.backgroundColor = 'red'
}
btn2.addEventListener('click',changeColor)
h1.addEventListener('click',changeColor)
h3.addEventListener('click',changeColor)
