//q1
let inputing = document.createElement('input')

let btn = document.createElement('button')
btn.innerText =  'Click here'
let body = document.querySelector('body')
body.append(inputing)
body.appendChild(btn)

//q2

inputing.placeholder = 'Input your details'
btn.getAttribute('id')
btn.setAttribute('id','btn')

// q3

classBtn = document.querySelector('#btn')
classBtn.style.backgroundColor = 'blue'
classBtn.style.color ='white'

// q4

let heading = document.createElement('h1')
heading.innerText = 'DOM Practice'
heading.style.textDecoration = 'underline';
body.insertAdjacentElement('beforebegin',heading)

// q5
let ptag = document.createElement('p')
ptag.innerText = 'ApnaCollegeDeltaPractice'
ptag.style.fontWeight ='bold'
body.insertAdjacentElement('beforebegin',ptag)