function kadane(inputArray) {

  let maxSum = -Infinity;
  let currentSum = 0;
  let maxStartIndex = 0;
  let maxEndIndex = inputArray.length - 1;
  let currentStartIndex = 0;

  inputArray.forEach((currentNumber, currentIndex) => {
    currentSum += currentNumber;

    if (maxSum < currentSum) {
      maxSum = currentSum;
      maxStartIndex = currentStartIndex;
      maxEndIndex = currentIndex;
    }

    if (currentSum < 0) {
      currentSum = 0;
      currentStartIndex = currentIndex + 1;
    }
  });

  return inputArray.slice(maxStartIndex, maxEndIndex + 1);
}

console.log(kadane([1,-3,4,-2,1,2,-3,1]))




