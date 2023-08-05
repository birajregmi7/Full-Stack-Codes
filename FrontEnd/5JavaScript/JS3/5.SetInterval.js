//set interval will execute continously after sometime

console.log('this is setInterval')
let id = setInterval(()=>{
    console.log('This will repeat every 2 sec')
},2000)

// clearInterval(id)  stops the setinterval 