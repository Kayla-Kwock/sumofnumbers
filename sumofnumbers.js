function sumFor(nums){
  let total = 0;
  for(let i of nums)
    total += i;
  return total;
}

function sumWhile(nums){
  let total, i = 0;
  while(i < nums.length)
    total += nums[i];
  return total;
}

function sumRecursion(nums, total = 1){
  if(nums.length == 0)
    return total
  let x = nums.pop();
  return sumRecursion(nums, total + x);
}

function sumTheSimpleWay(nums){
  return _.reduce(nums, (total, x) => total += x, 0);
}

let test = [1,2,3,4,5];
console.log(sumFor(test));
console.log(sumWhile(test));
console.log(sumRecursion(test));
console.log(sumTheSimpleWay(test));
