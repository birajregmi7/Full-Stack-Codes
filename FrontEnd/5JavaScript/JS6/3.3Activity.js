let btn = document.querySelector('button')
btn.addEventListener('click',function(){
    activity()
})
function activity (){
    let red = Math.floor(Math.random()*255)
    console.log(red)
    let green = Math.floor(Math.random()*255)
    let blue = Math.floor(Math.random()*255)
    let output = `rgb(${red},${green},${blue})`
    let heading = document.querySelector('h1')
    heading.innerText = output;
    let div = document.querySelector('div')
    div.style.backgroundColor = output;
}