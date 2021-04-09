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

test('Placing a mocked ship (for now) on the gameboard', () => {
  const testBoard = new Gameboard('testing');
  const mockBoard: any[] = new Array(100).fill({
    hasShip: false,
    isShot: false
  });
  // todo: need to remember how this was setup to handle testing the plcaements 
  // todo: of ships on the board.
  testBoard.placeShip(1, 3, 'hor');
  expect(testBoard.board).toBe(mockBoard);
});
