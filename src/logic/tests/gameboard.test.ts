import Gameboard from '../code/gameboard';
import { carrier } from '../code/shipTypes';

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

test('Placing a mocked ship on the gameboard', () => {
  const testBoard = new Gameboard('testing');
  const mockBoard: any[] = new Array(100).fill({
    hasShip: false,
    isShot: false
  });
  const shipLength: number = 3;
  for (let i = 0; i < shipLength; i++) {
    mockBoard[i] = { hasShip: true, isShot: false, ship: 'test' };
  }
  testBoard.placeShip(1, 'test', 3, 'hor');
  expect(testBoard.board).toStrictEqual(mockBoard);
});

test('Placing a ship onto the board and checking to see it is there', () => {
  const testBoard = new Gameboard('player');
  const testShip = carrier;
  testBoard.placeShip(1, testShip.name, testShip.length, 'hor');
  const mockBoard: any[] = new Array(100).fill({
    hasShip: false,
    isShot: false
  });
  for (let i = 0; i < testShip.length; i++) {
    mockBoard[i] = { hasShip: true, isShot: false, ship: testShip.name };
  }
  expect(testBoard.board).toEqual(mockBoard);
});

test('Making sure a ship wont "fall off" the board', () => {
  const testBoard = new Gameboard('testing');
  const testShip = carrier;
  expect(() => {
    testBoard.placeShip(7, testShip.name, testShip.length, 'hor');
  }).toThrow('Cannot place the ship there as it is too long');
});

test('Checking to see what ship occupies a spot', () => {
  const testBoard = new Gameboard('player');
  const testShip = carrier;
  testBoard.placeShip(1, testShip.name, testShip.length, 'hor');
  expect(testBoard.board[1].ship).toBe('Carrier');
});
