import Gameboard from '../code/gameboard';

test('Making sure the class is initialized', () => {
  const testBoard = new Gameboard('test');
  expect(testBoard.board).toStrictEqual(new Array(100).fill({
    hasShip: false,
    isShot: false
  }));
});

test('Creating a new gameboard and setting the owner of it', () => {
  const testBoard = new Gameboard('player');
  expect(testBoard.belongsTo).toBe('player');
});
