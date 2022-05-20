const sudoku = require('../sudoku.js')

// const fs = require('fs');
// let string = fs.readFile(
//   './sudoku-puzzles.txt',
//   'utf-8',
// );


describe('Проверка решения судоку по методу isSolved', function () {
  const board = sudoku.solve()
  test('isSolved', function () {
    expect(sudoku.isSolved(board)).toBeTruthy
  });

  const board1 = sudoku.solve('1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--')
  test('isSolvedPuzzle', function () {
    expect(sudoku.isSolved(board1)).toBeTruthy
  });

  const board2 = sudoku.solve('--5-3--819-285--6-6----4-5---74-283-34976---5--83--49-15--87--2-9----6---26-495-3')
  test('isSolvedPuzzle', function () {
    expect(sudoku.isSolved(board2)).toBeTruthy
  });

  const board3 = sudoku.solve('29-5----77-----4----4738-129-2--3-648---5--7-5---672--3-9--4--5----8-7---87--51-9')
  test('isSolvedPuzzle', function () {
    expect(sudoku.isSolved(board3)).toBeTruthy
  });

  const board4 = sudoku.solve('-8--2-----4-5--32--2-3-9-466---9---4---64-5-1134-5-7--36---4--24-723-6-----7--45-')
  test('isSolvedPuzzle', function () {
    expect(sudoku.isSolved(board4)).toBeTruthy
  });

  const board5 = sudoku.solve('6-873----2-----46-----6482--8---57-19--618--4-31----8-86-2---39-5----1--1--4562--')
  test('isSolvedPuzzle', function () {
    expect(sudoku.isSolved(board5)).toBeTruthy
  });

  const board6 = sudoku.solve('---6891--8------2915------84-3----5-2----5----9-24-8-1-847--91-5------6--6-41----')
  test('isSolvedPuzzle', function () {
    expect(sudoku.isSolved(board6)).toBeTruthy
  });

  const board7 = sudoku.solve('-3-5--8-45-42---1---8--9---79-8-61-3-----54---5------78-----7-2---7-46--61-3--5--')
  test('isSolvedPuzzle', function () {
    expect(sudoku.isSolved(board7)).toBeTruthy
  });

  const board8 = sudoku.solve('-96-4---11---6---45-481-39---795--43-3--8----4-5-23-18-1-63--59-59-7-83---359---7')
  test('isSolvedPuzzle', function () {
    expect(sudoku.isSolved(board8)).toBeTruthy
  });

  const board9 = sudoku.solve('----754----------8-8-19----3----1-6--------34----6817-2-4---6-39------2-53-2-----')
  test('isSolvedPuzzle', function () {
    expect(sudoku.isSolved(board9)).toBeTruthy
  });

  const board10 = sudoku.solve('3---------5-7-3--8----28-7-7------43-----------39-41-54--3--8--1---4----968---2--')
  test('isSolvedPuzzle', function () {
    expect(sudoku.isSolved(board10)).toBeTruthy
  });

  const board11 = sudoku.solve('3-26-9--55--73----------9-----94----------1-9----57-6---85----6--------3-19-82-4-')
  test('isSolvedPuzzle', function () {
    expect(sudoku.isSolved(board11)).toBeTruthy
  });

  const board12 = sudoku.solve('-2-5----48-5--------48-9-2------5-73-9-----6-25-9------3-6-18--------4-71----4-9-')
  test('isSolvedPuzzle', function () {
    expect(sudoku.isSolved(board12)).toBeTruthy
  });


  const board13 = sudoku.solve('--7--8------2---6-65--79----7----3-5-83---67-2-1----8----71--38-2---5------4--2--')
  test('isSolvedPuzzle', function () {
    expect(sudoku.isSolved(board13)).toBeTruthy
  });

  const board14 = sudoku.solve('----------2-65-------18--4--9----6-4-3---57-------------------73------9----------')
  test('isSolvedPuzzle', function () {
    expect(sudoku.isSolved(board14)).toBeTruthy
  });

  const board15 = sudoku.solve('---------------------------------------------------------------------------------')
  test('isSolvedPuzzle', function () {
    expect(sudoku.isSolved(board15)).toBeTruthy
  });

});

