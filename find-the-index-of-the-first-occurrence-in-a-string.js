    const strStr = (text, word) => {
        let x = 0;
        let len = word.length;
        for (let i = 0; i < text.length; i++) {
            if (word[x] == text[i]) {
                while (x < len) {
                    if (word[len-x-1] != text[i + len-x-1]) {
                        x = 0;
                        break;
                    }
                    x++;
                }
                if (x==len)
                    return i;
            }
        }
        return -1;
    };
//                       0123456789
//console.log(strStr('mississippi', 'issip'))
console.log(strStr('hello', 'll'))