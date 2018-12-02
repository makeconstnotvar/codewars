let fighters = [
  ["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
  ["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"]
];

let moves = ['up', 'left', 'right', 'left', 'left'];

function streetFighterSelection(fighters, position, moves) {

  let x = position[0];
  let y = position[1];
  let track = [];

  moves.forEach(move => {
    switch (move) {
      case 'up':
        if (y > 0)
          y--;
        break;
      case 'down':
        if (y < 1)
          y++;
        break;
      case 'left':
        if (x === 0)
          x = 5;
        else
          x--;
        break;
      case 'right':
        if (x === 5)
          x = 0;
        else
          x++;
        break;
    }
    track.push(fighters[y][x])
  });

  return track;
}