function generateParenthesis1(n) {
  const result = [], stack = [];

  function backtrack(open, closed) {
    if (open === n && closed === n) {
      result.push(stack.join(''));
      return;
    }

    if (open < n) {
      stack.push('(');
      backtrack(open + 1, closed);
      stack.pop();
    }

    if (closed < open) {
      stack.push(')');
      backtrack(open, closed + 1);
      stack.pop();
    }
  }

  backtrack(0, 0);
  return result;
}


function generateParenthesis2(n) {
  const output = [];

  const dfs = (str, open, close) => {
    if (open > close) {
      return;
    }
    if (open === 0 && close === 0) {
      output.push(str);
      return;
    }
    if (open > 0) {
      dfs(str + '(', open - 1, close);
    }
    if (close > 0) {
      dfs(str + ')', open, close - 1);
    }
  };
  dfs('', n, n);
  return output;
}

generateParenthesis1(3)