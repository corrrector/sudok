// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!

function solve(boardString) {
  console.log('first changes');
  return boardString;
}

// Returns a boolean indicating whether
// or not the provided board is solved.
// The input board will be in whatever
// form `solve` returns.


function isSolved(board) {
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


// Takes in a board in some form and
// returns a String that's well formatted
// for output to the screen.
// The input board will be in whatever
// form `solve` returns.

function prettyBoard(board) {

}

// Exports all the functions to use them in another file.
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};
