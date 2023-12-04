let a = '377777123123123'.split('')
let b = '7574375437534377'.split('')
let data = [[0]];
for (let i = 0; i < b.length; i++) {
    data[i] = data[i] || [];
    for (let j = 0; j < a.length; j++) {
        let eq = b[i] == a[j];
        if (eq) {
            data[i][j] = (data[i - 1]?.[j - 1] || 0) + 1;
        } else {
            data[i][j] = Math.max(data[i - 1]?.[j] || 0, data[i][j - 1] || 0);
        }
    }
}
let i = b.length - 1;
let j = a.length - 1;
let result = [];
while (i >= 0 && j >= 0) {
    if (b[i] == a[j]) {
        result.push(a[j])
        j--;
        i--;
    } else {
        if (data[i - 1][j] > data[i][j - 1]) {
            i--;
        } else {
            j--;
        }
    }
}

console.log(result.reverse().join(' '))