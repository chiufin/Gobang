export const fiveInLine = (board, playing) => {
  let { player, x, y } = playing[playing.length - 1];

  let count = [0];
  for (let i = 0; i < board[0].length; i++) {
    let piece = board[y][i];
    console.log(board[y]);
    if (piece === player) {
      count[count.length - 1] += 1;
      console.log('--- x');
    } else {
      count.push(0);
      console.log('--- ?');
    }
    console.log(count);
  }
  for (let i = 0; i < count.length; i++) {
    if (count[i] === 5) {
      return true;
    }
  }
};
