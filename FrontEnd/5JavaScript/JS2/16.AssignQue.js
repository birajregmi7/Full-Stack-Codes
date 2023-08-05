//q1 
//wap javascirptt funcation that ruturn array elements larger than a number
let arr = [8, 9, 10, 1, 2, 3, 4, 5, 6, 7];
let num = 5;
let temp = [];

const arrFun = (num) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > num) {
            temp.push(arr[i]);
        }
    }
    return temp;
}

console.log(arrFun(num));

//q2 write a js function to extract uniquye charaters from a string

const str='abcdabcdefgggh';

const strFunc =(str) =>{
    let ans =''
    for(let i=0;i<str.length;i++){
      let currStr = str[i]
      if(ans.indexOf(currStr)===-1){
        ans = ans + currStr;
      }  
    }
    return ans
}
console.log(strFunc(str))

//q3 js function that accepts a list of country names as input and reutrn the longest country names as oputput
const country = ["Australia","Germany","UnitedStatesofAmerica"]

const stringFunc = (str) => {
    let ansIdx = 0;
    for(let i=0; i<country.length;i++){
        let ansLength = country[ansIdx].length;
        let currLength = country[i].length;
        if(currLength>ansLength){
            ansIdx = i;
        }
    } return country[ansIdx]
}   
console.log(stringFunc(country))

//q3
let strr = 'birajregmi'
function countVowels(str){
    let count=0;
    for(let i=0;i<str.length;i++){
        if(strr.charAt(i)=="a"||strr.charAt(i)=="e"||strr.charAt(i)=="i"||strr.charAt(i)=="o"||strr.charAt(i)=="u"){
            count++;
        }
    }
    return count
}

