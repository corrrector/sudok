// Use filesystem.
const fs = require('fs');
// Use functions from sudoku.js file.
const sudoku = require('./sudoku');

// Головоломки судоку, которые решит ваша программа, можно найти
// в файле sudoku-puzzles.txt.
//
// Помните, что файл имеет символы новой строки в конце каждой строки,
// так что вы должны удалить их.

// Получает одну головоломку из текстового файла.

function sudokuParse(content, puzzleNumber = 0) {
  const puzzle = content.split('\n')[puzzleNumber];
  console.log(puzzle);
  console.log('parser');
  return puzzle;
}



function readAndSolve(err, data) {
  if (err) {
    throw err;
  }
  const puzzle = sudokuParse(data, 1);

  const solvedPuzzle = sudoku.solve(puzzle);
  if (sudoku.isSolved(solvedPuzzle)) {
    console.log('The board was solved!');
    console.log(sudoku.prettyBoard(solvedPuzzle));
  } else {
    console.log("The board wasn't solved :(");
  }
}


// Reads file and sends data from it to the readAndSolve function.
fs.readFile(
  './sudoku-puzzles.txt',
  'utf-8',
  readAndSolve,
);
