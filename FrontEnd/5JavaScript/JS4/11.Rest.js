//rest
//rest is opposite to spread
//spread expands into multiple values
//rest gathers into single value

function sum(...args){
    for(let i=0;i<args.length;i++){
        console.log('You gave us', args[i])
    }
}
console.log(sum(1,2))

console.log(`------------------------`)

//eg2

function totSum(...args){ 
    return args.reduce((res,el)=>{
       return (res+el)
    })
}
console.log(totSum(1,2,3,4))

console.log(`-------------------------------`)

//eg3

function min(...args){
    return args.reduce((res,el)=>{
        if(el>res){
            return res;
        }else{
            return el;
        }
    })
}
console.log(min(1,2,3,4,0))