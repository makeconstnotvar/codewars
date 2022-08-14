function validParentheses(parens) {
  const stack = [];
  for (let i = 0; i < parens.length; i++) {
    if (parens[i] == '(') {
      stack.push('(')
    }
    if (parens[i] == ')') {
      if (!stack.length)
        return false;
      else
        stack.pop()
    }
  }
  return !stack.length;
}



function validParentheses1(string){
  var tokenizer = /[()]/g, // ignores characters in between; parentheses are
    count = 0,           // pretty useless if they're not grouping *something*
    token;
  while(token = tokenizer.exec(string), token !== null){
    if(token == "(") {
      count++;
    } else if(token == ")") {
      count--;
      if(count < 0) {
        return false;
      }
    }
  }
  return count == 0;
}

validParentheses1('(((фыви)))')