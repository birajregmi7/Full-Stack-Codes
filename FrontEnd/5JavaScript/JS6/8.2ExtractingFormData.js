let form = document.querySelector('form')
form.addEventListener('click',function(event){
    event.preventDefault();
    let inp = document.querySelector('input')
    console.log(inp.value)
})
