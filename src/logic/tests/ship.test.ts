import Ship from '../code/ship';

test('Test: Making sure a new ship is not sunk', () => {
  const shiptest = new Ship('test ship', 8, 0, []);
  expect(shiptest.isSunk).toBe(false);
});

test('Test: Testing ship name', () => {
  const shiptest = new Ship('test ship', 8, 0, []);
  expect(shiptest.shipName).toBe('test ship');
});

test('Test: Making sure ship length is set correctly', () => {
  const shiptest = new Ship('test ship', 8, 0, []);
  expect(shiptest.length).toBe(8);
});

test('Test: Ship has an empty array', () => {
  const shiptest = new Ship('test ship', 8, 0, []);
  expect(shiptest.hits).toStrictEqual([]);
});

test('hitArray: Hitting a ship should add to the hitArray ... 7', () => {
  const shiptest = new Ship('test ship', 8, 0, []);
  shiptest.hit(7);
  expect(shiptest.hits).toStrictEqual(['x', 'x', 'x', 'x', 'x', 'x', 'x']);
});

test('hitArray: Hitting a ship should add to the hitArray... 8', () => {
  const shiptest = new Ship('test ship', 8, 0, []);
  shiptest.hit(8);
  expect(shiptest.hits).toStrictEqual(['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x']);
});

test('Sunk Test: If a ships hitMarker array is not the length of ship', () => {
  const shiptest = new Ship('test ship', 8, 0, []);
  shiptest.hit(7);
  expect(shiptest.isShipSunk()).toBeFalsy();
});

test('Sunk Test: If shipArray has the same amount of hits as length', () => {
  const shiptest = new Ship('test ship', 8, 0, []);
  shiptest.hit(8);
  expect(shiptest.isShipSunk).toBeTruthy();
});
