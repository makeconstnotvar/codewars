const distance = nums => {
    let result = [];
    let hash = {};
    for (let idx = 0; idx < nums.length; idx++) {
        let val = nums[idx];
        if (!hash[val]) {
            hash[val] = [1, idx, 0];
            result[idx] = 0;
        } else {
            let [c, i, d] = hash[val]
            d = (idx - i) * c + d;
            hash[val] = [++c, idx, d];
            result[idx] = d;
        }
    }
    hash = {};
    for (let idx = nums.length - 1; idx >= 0; idx--) {
        let val = nums[idx];
        if (!hash[val]) {
            hash[val] = [1, idx, 0];
        } else {
            let [c, i, d] = hash[val]
            d = (i - idx) * c + d;
            hash[val] = [++c, idx, d];
            result[idx] += d;
        }
    }
    return result;
};

console.log(distance([1, 3, 1, 1, 2, 1]));