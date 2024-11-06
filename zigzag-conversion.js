const convert = (s, numRows) => {
    let start = 0;
    let result = '';

    for (let row = 0; row < numRows; row++) {
        let i = row;
        if (row == 0 || row == numRows) {
            while (i < s.length) {
                result += s[i];
                i += 2 * (numRows - 1);
            }
        } else {
            while (i < s.length) {
                result += s[i];
                i += 2 * (numRows - 1) - 2 * row;
            }
        }
    }

    return result
};
//   0123456789
console.log(convert('PAYPALISHIRING', 4));
//PINALSIGYAHRPI