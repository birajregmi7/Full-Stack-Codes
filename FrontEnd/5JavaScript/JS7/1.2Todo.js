
let form = document.querySelector('form')
form.addEventListener('submit',function(event){
  event.preventDefault();
})
let inp = document.querySelector('input')
let btn = document.querySelector('.btn')
let ul = document.querySelector('ul')

btn.addEventListener('click',function(){
  let li = document.createElement('li')
  li.innerText = inp.value;
  ul.appendChild(li);

  let delBtn = document.createElement('button')
  delBtn.innerText = 'Delete'
  delBtn.classList.add('delete')
  li.appendChild(delBtn)
  inp.value=''
})
  ul.addEventListener('click',function(event){
    let select = document.querySelector('.delete')
    console.log(event.target);
    console.dir(event.target)
    
    if(event.target.nodeName=='BUTTON'){
     let allDel =  select.parentElement;
     allDel.remove(); 
    }
  })


















