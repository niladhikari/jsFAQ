var Name = "karim";  //global variable
function add(num1 ,num2) {
    //var result = num1 + num2; // local varibale...we don't use that outside of the function
    //result = num1 + num2; // but we don't use any variable this time we use that outside of the function
    
    window.result = num1 + num2; //window is used to convert a variable from local to global
    console.log(Name);
    return result;
}
//console.log('local to global',result) // when we use it before the function it give us error.

//console.log('local to global',result) // window when we use it for output before the function it give us error.

let sum = add(12,15);
console.log(sum);
console.log('local to global',result)