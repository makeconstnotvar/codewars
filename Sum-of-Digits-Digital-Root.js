function digital_root(n) {
  let nums = n.toString().split('');
  let result = nums.reduce((acc,num)=>(acc+= +num,acc),0);
  if(result>9)
    return digital_root(result)
  return result;
}

let  test = digital_root(16)
  test = digital_root(456)