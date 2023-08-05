//Lexical Scope 
//a variable that is defined in the outer function can be used inside another function (nested)
// but function defined inside can't be used outside function

function outSideFunction(){
    let x=23;
    function insideFunction(){
        console.log(x)
    }
   insideFunction(); //23
}