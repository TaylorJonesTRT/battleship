import Gameboard from '../code/gameboard';

test('Gameboard: Making sure the createBoard function creates an empty board of 100 spots', () => {
  const gameboardTest = new Gameboard();
  expect(gameboardTest.board).toStrictEqual(new Array(100).fill({
    hasShip: false,
    isShot: false
  }));
});
