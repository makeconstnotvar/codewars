let characterReplacement = (str, k) => {
  let max = 0;
  let map = {};
  str = str.split('');
  for (let i = 0; i < str.length; i++) {
    map[str[i]] = 1;
  }
  for (let letter in map) {

    let left = 0;
    let right = 0;
    let counter = str[left] == letter ? k : k - 1;
    while (right < str.length) {

      while (counter > -1 && right < str.length) {
        right++;

        if (letter != str[right]) {
          counter--;
        }
        if(counter> -1 && right < str.length){
          max = Math.max(max, right - left + 1);
        }
      }

      if (left <= right) {
        left++;
        if (str[left - 1] != letter) {
          counter++
        }
      }

    }
  }
  return max;
};
