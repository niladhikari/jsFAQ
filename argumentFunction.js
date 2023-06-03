function addNumbers(num1,num2) {
    var sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        const num = arguments[i];
        sum = sum + num;
    }
    return sum;
}
var result =addNumbers(12,10,13,14);
console.log(result);