function rob(root) {
  const dfs = (node) => {
    if (!node) {
      return {withValue: 0, withoutValue: 0}
    }

    const left = dfs(node.left);
    const right = dfs(node.right);

    const leftBranch = Math.max(left.withValue, left.withoutValue);
    const rightBranch = Math.max(right.withValue, right.withoutValue);

    const withoutValue = leftBranch + rightBranch;
    const withValue = node.val + left.withoutValue + right.withoutValue;

    return {withValue, withoutValue};
  }

  const {withValue, withoutValue} = dfs(root);

  return Math.max(withValue, withoutValue);
}