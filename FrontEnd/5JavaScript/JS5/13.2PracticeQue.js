let para1  = document.createElement('p')
para1.innerText = 'Hey I am red'
para1.style.color = 'red'

let body1 = document.querySelector('body')
body1.appendChild(para1)

let heading = document.createElement('h3')
heading.innerText = 'I am blue'
heading.style.color = 'blue'

body1.appendChild(heading)

let divs = document.createElement('div')