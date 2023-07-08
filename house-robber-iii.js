var rob = function(root) {
  let dp = [];
  function scan(el){
    let max = 0;
    if(el.left!=null){

      scan(el.left)
    }
    if(el.right!=null){
      scan(el.right)
    }
  }
  scan(root)
};
