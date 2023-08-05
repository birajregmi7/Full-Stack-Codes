let form = document.querySelector('form')
form.addEventListener('submit',function(event){
event.preventDefault()
});
//change event-> here change is calculated from initial state to final state
let user = document.querySelector('.inp1')
user.addEventListener('change',function(){
    console.log('input changed')
    console.log('final value =', this.value)
})

//input event -> here change is calculated in small step
let user2 = document.querySelector('.inp2')
let heading = document.querySelector('h1')
user2.addEventListener('input',function(){
    heading.innerText = user2.value;
})