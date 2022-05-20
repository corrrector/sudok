// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!

function solve(boardString) {

  const arr = boardString.split('').map((el) => (el === '-' ? 0 : +el));
  const board = [];
  for (let i = 0; i < 81; i += 9) {
    board.push(arr.slice(i, i + 9));
  }
  function cord(arr) {
    for (let x = 0; x < arr.length; x++) {
      for (let y = 0; y < arr.length; y++) {
        if (arr[x][y] === 0) {
          return [x, y];
        }
      }
    }
    return 'end';
  }
  function tripleСheck(board, cord, n) {
    const [x, y] = cord;
    function vertical(board) {
      return board.map((el, i) => board.map((el) => el[i]))[x].includes(n);
    }
    function horizontal(board) {
      return board[y].includes(n);
    }

    function cube() {
      return true;
    }
    return vertical(board) && horizontal(board) && cube();
  }
  function test() {
    if (cord(board) === 'end') {
      return true;
    }
    const c = cord(board);
    for (let i = 1; i < 10; i++) {
      // const num = i;
      const num = Math.floor(Math.random() * (10 - 1) + 1);
      if (!tripleСheck(board, c, num)) {
        const [x, y] = c;
        board[x][y] = num;
        if (test()) {
          return true;
        }
      }
    }
  }
  test();
  return board;
=======
 isSolved
  console.log('first changes');
  return boardString;

}

    let y = boardString.split("").map((el)=>el == '-' ? 0 : + el)
  let g = []
    for (let i=0; i<81; i+=9){
   g.push(y.slice(i,i+9))
    }
  return g
  }

 devdream

// Returns a boolean indicating whether
// or not the provided board is solved.
// The input board will be in whatever
// form `solve` returns.


function isSolved(board) {

  return true;
=======
isSolved
  let board2 = board.map((el, i) => board.map((el) => el[i]));
  function gorizontSum(board) {
    return board.map((el) => el.reduce((acc, el) => acc + el)).every((el) => el === 45);
  }
  function verticalSum(board2) {
    return board2.map((el) => el.reduce((acc, el) => acc + el)).every((el) => el === 45);
  }
  function allSum(board) {
    return board.map((el) => el.reduce((acc, el) => acc + el))
      .reduce((acc, el) => acc + el) === 405;
  }
  return (gorizontSum(board) && verticalSum(board2) && allSum(board))
};


return true
}
devdream

// Takes in a board in some form and
// returns a String that's well formatted
// for output to the screen.
// The input board will be in whatever
// form `solve` returns.

function prettyBoard(board) {
  console.table(board);



}

// Exports all the functions to use them in another file.
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};
