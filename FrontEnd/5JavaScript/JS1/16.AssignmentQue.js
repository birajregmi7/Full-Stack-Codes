let arr=[1,2,3,4,5,6,2,3]
let num=2;
for(let i =0; i<arr.length;i++){
    if(arr[i]==2){
        arr.splice(i,1)
    }
    console.log(arr[i])
}
console.log('-----')

//find no of digits in number

let numbers = 287152;
let count =0;

let copy = numbers;

while(copy>0){
    count++;
    copy = Math.floor(copy/10)
}
console.log(count);
console.log('---')
//find sum of digits in a number
let num1 = 287152;
let sum =0;
while(sum>=0){
    let rem = num1 %10;
    sum = rem+sum;
}
console.log(sum)


