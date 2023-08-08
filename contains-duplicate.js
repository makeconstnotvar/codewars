let containsDuplicate1 = nums => {
  nums.sort((a,b)=>a-b);
  for (let i = 1; i < nums.lenght; i++){
    if(nums[i-1]==nums[i])
      return true;
  }
  return false;
};
let containsDuplicate2 = nums => {
  let hash = {}
  for (let i = 0; i < nums.length; i++){
    if(hash[nums[i]]!=null)
      return true;
    else
      hash[nums[i]]=1
  }
  return false;
};
let data = [3,3];
containsDuplicate2(data)