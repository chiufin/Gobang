export const fiveInLine = (board, playing) => {
  let { player, y } = playing[playing.length - 1];

  let count = [0];
  for (let i = 0; i < board[0].length; i++) {
    let piece = board[y][i];
    if (piece === player) {
      count[count.length - 1] += 1;
    } else {
      count.push(0);
    }
  }
  for (let i = 0; i < count.length; i++) {
    if (count[i] === 5) {
      return true;
    }
  }
};
