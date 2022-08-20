//let text = `Lorem ipsum dolor sit amet, consectetur`

let text = `Lorem ipsum dolor sit amet, consecteturconsectetur adipiscing elit. Vestibulum sagittis dolor mauris, at elementum ligula tempor eget. In quis rhoncus nunc, at aliquet orci. Fusce at dolor sit amet felis suscipit tristique. Nam a imperdiet tellus. Nulla eu vestibulum urna. Vivamus tincidunt suscipit enim, nec ultrices nisi volutpat ac. Maecenas sit amet lacinia arcu, non dictum justo. Donec sed quam vel risus faucibus euismod. Suspendisse rhoncus rhoncus felis at fermentum. Donec lorem magna, ultricies a nunc sit amet, blandit fringilla nunc. In vestibulum velit ac felis rhoncus pellentesque. Mauris at tellus enim. Aliquam eleifend tempus dapibus. Pellentesque commodo, nisi sit amet hendrerit fringilla, ante odio porta lacus, ut elementum justo nulla et dolor.`

function justify1(text, width) {
  const arr = text.split(' ');
  const result = [];
  let x = 0;
  for (let i = 0; i < arr.length; i++) {
    let word = arr[i];
    if (!result[x]) {
      result[x] = {len: 0, words: []};
    }
    result[x].words.push(word);
    result[x].len += word.length;
    let spaceLen = result[x].words.length - 1;
    let last = arr[i + 1] ? arr[i + 1].length : 0;
    if (result[x].len + spaceLen + last >= width) {
      x++;
    }
  }
  for (let i = 0; i < result.length; i++) {
    if (i == result.length - 1) {
      result[i] = result[i].words.join(' ');
    } else {
      result[i] = setSpaces(result[i].len, result[i].words, width)
    }
  }
  return result.join('\n');
}

function setSpaces(len, row, width) {
  let spaces = width - len;
  let text = '';
  if (row.length == 1) {
    text = row[0];
  } else {
    let i = 0;
    while (spaces) {
      row[i] += ' ';
      spaces--;
      if (i == row.length - 2) {
        i = 0;
      } else {
        i++;
      }
    }
    text = row.join('');
  }
  return text;
}

function justify(str, len) {
  let result = "";
  let lastLine = str.split(' ').reduce((line, word) => {
    if (line.length + word.length < len)
      return line + ' ' + word;
    for (let lineLen = line.length; lineLen < len && line.indexOf(' ') >= 0;)
      line = line.replace(/\s+/g, spaces => {
        return spaces + (lineLen++ < len ? ' ' : '')
      });
    result += line + "\n";
    return word;
  });
  return result + lastLine;
}


console.log(justify(text, 40))