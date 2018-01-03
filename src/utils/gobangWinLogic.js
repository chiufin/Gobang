export const fiveInLine = (board, player, y) => {
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

export const fiveInRow = (board, player, x) => {
  let count = [0];
  for (let i = 0; i < board.length; i++) {
    let piece = board[i][x];
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

export const fiveFromTopLeft = (board, player, x, y) => {
  let modifiedX;
  let modifiedY;
  if (x > y) {
    modifiedX = x - y;
    modifiedY = 0;
  } else {
    modifiedX = 0;
    modifiedY = y - x;
  }
  let count = [0];

  let run = true;
  while (run) {
    if (board[modifiedY][modifiedX] === player) {
      count[count.length - 1] += 1;
    } else {
      count.push(0);
    }
    modifiedX++;
    modifiedY++;
    if (modifiedX === board[0].length - 1 || modifiedY === board.length - 1) {
      run = false;
    }
  }

  for (let i = 0; i < count.length; i++) {
    if (count[i] === 5) {
      return true;
    }
  }
};

export const fiveFromTopRight = (board, player, x, y) => {
  let mX = board[0].length - 1 - x;
  let mY = y;
  let m = mY / mX;
  let modifiedX;
  let modifiedY;
  if (m >= 1) {
    modifiedX = board[0].length - 1;
    modifiedY = y - mX;
  } else {
    modifiedX = x + y;
    modifiedY = 0;
  }

  console.log(`[${mX}, ${mY}] m: ${m}`);
  // console.log(`x[${modifiedX}, ${modifiedY}]`)
  let count = [0];

  let run = true;
  while (run) {
    if (board[modifiedY][modifiedX] === player) {
      count[count.length - 1] += 1;
    } else {
      count.push(0);
    }
    console.log(`x[${modifiedX}, ${modifiedY}]`);
    modifiedX--;
    modifiedY++;
    if (modifiedX === 0 || modifiedY === board.length - 1) {
      run = false;
    }
  }

  for (let i = 0; i < count.length; i++) {
    if (count[i] === 5) {
      return true;
    }
  }
};
