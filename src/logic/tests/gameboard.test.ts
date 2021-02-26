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
  expect(gameboardTest.board[0]).toStrictEqual({
    hasShip: true, isShot: false
  });
});

test('Gameboard: Placing a Ship vertically starting on spot 4', () => {
  const gameboardTest = new Gameboard();
  gameboardTest.placeShip(5, 4, 'vert');
  expect(gameboardTest.board[14]).toStrictEqual({
    hasShip: true, isShot: false
  });
});

test('Placing a ship at a starting point that will make the ship go off the board should return an error', () => {
  const gameboardTest = new Gameboard();
  expect(() => {
    gameboardTest.placeShip(7, 5, 'hor');
  }).toThrow('Ship cannot be placed there');
});

// Todo: Need to add tests to make sure an error is returned if ship placed
// todo: at a starting point where its end point will be "off the board"