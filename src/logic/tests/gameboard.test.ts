import Gameboard from '../code/gameboard';

test('Gameboard: board (array) of 100 is initialized', () => {
  const gameboardTest = new Gameboard();
  expect(gameboardTest.board).toStrictEqual(new Array(100).fill({
    hasShip: false,
    isShot: false
  }));
});

test('Gameboard: Placing a Ship sideways starting on spot 2', () => {
  const gameboardTest = new Gameboard();
  gameboardTest.placeShip(1, 4, 'hor');
  expect(gameboardTest.board[1]).toStrictEqual({
    hasShip: true, isShot: false
  });
});
