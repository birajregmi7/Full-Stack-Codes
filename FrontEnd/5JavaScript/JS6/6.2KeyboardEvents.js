// triggering the events by pressing keys of keyboard

let inp = document.querySelector('input')
inp.addEventListener('keydown',function(event){
    console.log('Key is pressed')
    console.log(event.key)
    console.log(event.code)
})
//event is pointer event 
//event is divided into two parts code and key
//code returns key's code 
//key displays what is in screen

