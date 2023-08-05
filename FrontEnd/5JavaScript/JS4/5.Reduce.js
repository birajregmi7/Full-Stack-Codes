//reduce function -> reduces an array to single value
let arr = [1,2,3,4,5];
let valueStorer = arr.reduce((res,el)=>{
    return res+el;
})
console.log(valueStorer)

//find maximum in an array 
let num = [1,3,4,1,4,6,5]
let valStore = num.reduce((res,el)=>{
    if(res<el){
        return el;
    }else{
        return res;
    }
})
console.log(valStore)