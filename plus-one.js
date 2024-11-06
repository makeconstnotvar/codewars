const plusOne = (d) => {
    let i = d.length - 1;
    let x = d[i] + 1;
    let one = (x > 9) ? 1 : 0;
    d[i] = x % 10;
    i--;

    while (one && i >= 0) {
        let x = d[i] + one;
        one = (x > 9) ? 1 : 0;
        d[i] = x % 10;
        i--;
    }
    if (one)
        d.unshift(1);
    return d;
};
//console.log(plusOne([1,2,3]))
console.log(plusOne([9,9]))