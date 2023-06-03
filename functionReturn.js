function evenfy(num) {
    var result;
      if (num % 2 == 0) {
        result =  num ;
      } 
      else {
        result = num * 2;
      }
      return result;
  }
 var numReslt= evenfy(9);
 squar = numReslt * numReslt;
 console.log( 'Evenfy squar is :',squar);

  function evenfyAll(nums){
      even_array = [];
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        var result = evenfy(num);
        even_array.push(result)
    }
    return even_array;
  }
  
  var nums = [12, 13, 14, 67, 89, 46];
  var numsEven = evenfyAll(nums);
  console.log('Evenfy array is :',numsEven);
  
  function sumNums(numsEven){
      var sum = 0;
     for (let i = 0; i < numsEven.length; i++) {
         const result =  numsEven[i];
         sum = sum + result;
     }
     return sum;
  }
  var numSum = sumNums(numsEven);
  console.log('Evenfy array sum is :',numSum);
  

