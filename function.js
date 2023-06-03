function evenfyAll(nums) {
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (num % 2 == 0) {
      console.log(num, ": number is even");
    } 
    else {
      console.log(num * 2, ": number is odd");
    }
  }
}

var nums = [12, 13, 14, 67, 89, 46];
evenfyAll(nums);

var friendAge = [11, 13, 16, 65, 80, 41];
evenfyAll(friendAge);
