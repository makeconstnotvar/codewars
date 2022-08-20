let text = `Lorem ipsum dolor sit amet, consectetur`

//let text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sagittis dolor mauris, at elementum ligula tempor eget. In quis rhoncus nunc, at aliquet orci. Fusce at dolor sit amet felis suscipit tristique. Nam a imperdiet tellus. Nulla eu vestibulum urna. Vivamus tincidunt suscipit enim, nec ultrices nisi volutpat ac. Maecenas sit amet lacinia arcu, non dictum justo. Donec sed quam vel risus faucibus euismod. Suspendisse rhoncus rhoncus felis at fermentum. Donec lorem magna, ultricies a nunc sit amet, blandit fringilla nunc. In vestibulum velit ac felis rhoncus pellentesque. Mauris at tellus enim. Aliquam eleifend tempus dapibus. Pellentesque commodo, nisi sit amet hendrerit fringilla, ante odio porta lacus, ut elementum justo nulla et dolor.`

function justify(text, width) {
  const arr = text.split(' ');
  const result = [];
  let len = 0;
  let row = [];
  let x = 0;
  for (let i = 0; i < arr.length; i++) {
    let word = arr[i];
    if (!result[x]) {
      result[x] = [];
    }
    result[x].push(word);
    len += word.length;
    let spaceLen = result[x].length - 1;
    let last = arr[i + 1] ? arr[i + 1].length : 0;
    if (len + spaceLen + last >= width) {
      x++;
    }
    console.log(1)
  }


  return result
}


function setSpaces(row, width, len) {
  let spaces = width - len;

  if (row.length == 1) {
    row[0] += ' '.repeat(spaces)
  } else {
    let i = 0;
    while (spaces) {
      row[i] += ' ';
      spaces--;
      if (i == row.length - 2)
        i = 0;
      else
        i++;
    }
  }

}

console.log(justify(text, 30))