import gameboard from '../code/gameboard';

test('Gameboard: Making sure the createBoard function creates an empty board of 100 spots', () => {
  const gameboardTest = gameboard();
  expect(gameboardTest.createBoard(100)).toStrictEqual(new Array(100).fill(''));
});