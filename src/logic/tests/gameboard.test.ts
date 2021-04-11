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
    mockBoard[i] = { hasShip: true, isShot: false };
  }
  testBoard.placeShip(1, 3, 'hor');
  expect(testBoard.board).toStrictEqual(mockBoard);
});

test('Placing an actual ship on the gameboard', () => {
  const testBoard = new Gameboard('player');
  const testShip = carrier;
  const mockBoard: any[] = new Array(100).fill({
    hasShip: false,
    isShot: false
  });
  for (let i = 0; i < shipLength; i++) {
    mockBoard[i] = { hasShip: true, isShot: false };
  }
  testBoard.placeShip();
});
