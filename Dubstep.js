let song = 'AWUBWUBWUBBWUBWUBWUBC';

function test(song) {
  let result = song.replace(/(WUB)+/gm, ' ').trim();
  console.log(result)

}

test(song)