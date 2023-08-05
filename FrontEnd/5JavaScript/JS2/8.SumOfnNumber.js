const sumOfDigit = (n) =>{        
    let sum =0;
    for(let i=1;i<=n;i++){

        sum = sum+i;
    }
    return sum;
}
console.log(sumOfDigit(10))