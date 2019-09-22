function sumFor(nums){
  let total = 0;
  for(let i of nums)
    total += i;
  return total;
}

function sumWhile(nums){
  let total = 0;
  let i =0;
  while(i < nums.length) {
    total += nums[i];
    i++;
  }
  return total;
}

function sumRecursion(nums, total = 0){
  if(nums.length == 0)
    return total;
  return sumRecursion(nums.slice(1), total + nums[0]);
}

function sumTheSimpleWay(nums){
  return _.reduce(nums, function(total, x) {return total + x});
}

const test = [1,2,3,4,5];
console.log(test);
console.log(sumFor(test));
console.log(sumWhile(test));
console.log(sumRecursion(test));
console.log(sumTheSimpleWay(test));
