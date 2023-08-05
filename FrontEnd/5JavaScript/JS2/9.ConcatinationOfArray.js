const array =['hi','hello','bye','!']
let str = '';
const conCat = () =>{
for(let i=0;i<=array.length-1;i++){
    str=str+array[i]
}
return str;
}
console.log(conCat())