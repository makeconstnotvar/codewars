function trap(arr) {
    let volume = 0;
    let leftBorder = 0;
    let rightBorder = 0;
    let i = 0;
    let j = arr.length - 1;
    while (i < j) {
      leftBorder = Math.max(leftBorder, arr[i]);
      rightBorder = Math.max(rightBorder, arr[j]);
      let minBorder = Math.min(leftBorder, rightBorder);
      if (arr[i] <= arr[j]) {
        i++;
        if (arr[i] < minBorder) {
          volume += minBorder - arr[i];
        }
      } else {
        j--;
        if (arr[j] < minBorder) {
          volume += minBorder - arr[j];
        }
      }
    }
    return volume;
}

let result = trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]);
console.log(result)
