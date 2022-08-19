let text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sagittis dolor mauris, at elementum ligula tempor eget. In quis rhoncus nunc, at aliquet orci. Fusce at dolor sit amet felis suscipit tristique. Nam a imperdiet tellus. Nulla eu vestibulum urna. Vivamus tincidunt suscipit enim, nec ultrices nisi volutpat ac. Maecenas sit amet lacinia arcu, non dictum justo. Donec sed quam vel risus faucibus euismod. Suspendisse rhoncus rhoncus felis at fermentum. Donec lorem magna, ultricies a nunc sit amet, blandit fringilla nunc. In vestibulum velit ac felis rhoncus pellentesque. Mauris at tellus enim. Aliquam eleifend tempus dapibus. Pellentesque commodo, nisi sit amet hendrerit fringilla, ante odio porta lacus, ut elementum justo nulla et dolor.`

function justify(text, width) {
  const arr = text.split(' ');
  const result = [];
  let len = 0;
  let row = []
  arr.forEach(word => {
    let spaceLen = row.length > 0 ? row.length - 1 : 0;
    if (len + spaceLen + word.length < width) {
      len += word.length;
      row.push(word);
    } else {
      result.push(row.join(' '));
      row = [word];
      len = word.length;
    }
  })
  result.forEach(row => {
    let i = 1;
    while(row.length<30){
      const pattern = new RegExp(`\w(\\s{${i}})\w`)
      row = row.replace(pattern,' '.repeat(i+1))
    }
  })

  return result
}


console.log(justify(text, 30))