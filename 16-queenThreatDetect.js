const generateBoard = (white, black) => {
  let board = Array(8).fill(0).map(() => Array(8).fill(0));
  board[white[0]][white[1]] = 1;
  board[black[0]][black[1]] = 1;
  return board;
};

const queenThreat = board => {
  let row, col;
  for(let r=0 ; r<8 ; r++){
    for(let c=0 ; c<8 ; c++){
      if(board[r][c] === 1){
        row = r;
        col = c;
        break;
      }
    }
  }

  if(checkBoard(board, row, col) || checkDiag(board, row, col)) return true;
  return false;
};

const checkBoard = (board, row, col) => {
  for(let i=0 ; i<8 ; i++){
    if(i !== col && board[row][i] === 1) return true;
    if(i !== row && board[i][col] === 1) return true;
  }
  return false;
}

const checkDiag = (board, row, col) => {
  for(let i=1; i<8 ; i++){
    let rOffset = [i,-i, i, -i];
    let cOffset = [i, -i, -i, i];
    for(let j=0 ; j<4; j ++){
      let newR = row + rOffset[j];
      let newC = col + cOffset[j];
      if(isValid(newR, newC) && board[newR][newC] === 1) return true;
    }
  }
  return false;
}

const isValid = (r,c) => r>=0 && r<8 && c>=0 && c<8;

let whiteQueen = [0, 5];
let blackQueen = [5, 0];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));
