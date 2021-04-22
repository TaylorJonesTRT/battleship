import Ship from '../code/ship';
import Gameboard from '../code/gameboard';
import { carrier } from '../code/shipTypes';

// test('Placing a mocked ship on the gameboard', () => {
//   const testBoard = new Gameboard('testing');
//   const mockBoard: any[] = new Array(100).fill({
//     hasShip: false,
//     isShot: false
//   });
//   const shipLength: number = 3;
//   for (let i = 0; i < shipLength; i++) {
//     mockBoard[i] = { hasShip: true, isShot: false, ship: 'test' };
//   }
//   testBoard.placeShip(1, 'test', 3, 'hor');
//   expect(testBoard.board).toStrictEqual(mockBoard);
// });

// test('Placing a ship onto the board and checking to see it is there', () => {
//   const testBoard = new Gameboard('player');
//   const testShip = carrier;
//   testBoard.placeShip(1, testShip.name, testShip.length, 'hor');
//   const mockBoard: any[] = new Array(100).fill({
//     hasShip: false,
//     isShot: false
//   });
//   for (let i = 0; i < testShip.length; i++) {
//     mockBoard[i] = { hasShip: true, isShot: false, ship: testShip.name };
//   }
//   expect(testBoard.board).toEqual(mockBoard);
// });

// test('Making sure a ship wont "fall off" the board', () => {
//   const testBoard = new Gameboard('testing');
//   const testShip = carrier;
//   expect(() => {
//     testBoard.placeShip(7, testShip.name, testShip.length, 'hor');
//   }).toThrow('Cannot place the ship there as it is too long');
// });

// test('Checking to see what ship occupies a spot', () => {
//   const testBoard = new Gameboard('player');
//   const testShip = carrier;
//   testBoard.placeShip(1, testShip.name, testShip.length, 'hor');
//   expect(testBoard.board[1].ship).toBe('Carrier');
// });

// test('Should not be able to place an already occupied spot', () => {
//   const testBoard = new Gameboard('player');
//   const testShip = carrier;
//   testBoard.placeShip(1, testShip.name, testShip.length, 'hor');
//   expect(() => {
//     testBoard.placeShip(3, testShip.name, testShip.length, 'hor');
//   }).toThrow('There is already a shop in that spot, choose another.');
// });

test('Test: Making sure a new ship is not sunk', () => {
  const shiptest = new Ship('test ship', 8, 0, []);
  expect(shiptest.isSunk).toBe(false);
});

test('Test: Testing ship name', () => {
  const shiptest = new Ship('test ship', 8, 0, []);
  expect(shiptest.name).toBe('test ship');
});

test('Test: Making sure ship length is set correctly', () => {
  const shiptest = new Ship('test ship', 8, 0, []);
  expect(shiptest.length).toBe(8);
});

test('Making sure the ships hit array is initalized with the correct length', () => {
  const testShip = carrier;
  expect(testShip.hits).toStrictEqual(['', '', '', '', '']);
});

test('Hitting a ship and making sure hit is recorded in correct location', () => {
  const testShip = carrier;
  testShip.hit(3);
  expect(testShip.hits).toStrictEqual(['', '', 'X', '', '']);
});

test('Making sure the isShipSunk method returns false if a ship is not sunk', () => {
  const testShip = carrier;
  testShip.hit(3);
  testShip.hit(5);
  expect(testShip.isSunk).toBeFalsy();
});
test('Sinking a ship and making sure it is registered as sunk', () => {
  const testShip = carrier;
  testShip.hit(1);
  testShip.hit(2);
  testShip.hit(3);
  testShip.hit(4);
  testShip.hit(5);
  testShip.isShipSunk();
  expect(testShip.isSunk).toBeTruthy();
});

// test('hitArray: Hitting a ship should add to the hitArray ... 7', () => {
//   const shiptest = new Ship('test ship', 8, 0, []);
//   shiptest.hit(7);
//   expect(shiptest.hits).toStrictEqual(['x', 'x', 'x', 'x', 'x', 'x', 'x']);
// });

// test('hitArray: Hitting a ship should add to the hitArray... 8', () => {
//   const shiptest = new Ship('test ship', 8, 0, []);
//   shiptest.hit(8);
//   expect(shiptest.hits).toStrictEqual(['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x']);
// });

// test('Sunk Test: If a ships hitMarker array is not the length of ship', () => {
//   const shiptest = new Ship('test ship', 8, 0, []);
//   shiptest.hit(7);
//   expect(shiptest.isShipSunk()).toBeFalsy();
// });

// test('Sunk Test: If shipArray has the same amount of hits as length', () => {
//   const shiptest = new Ship('test ship', 8, 0, []);
//   shiptest.hit(8);
//   expect(shiptest.isShipSunk).toBeTruthy();
// });