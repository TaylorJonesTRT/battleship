import ship from '../code/ship';

test('Test: Making sure a new ship is not sunk', () => {
  const shiptest = ship('test ship', 8);
  expect(shiptest.isShipSunk()).toBe(false);
});

test('Test: Testing ship name', () => {
  const shiptest = ship('test ship', 8);
  expect(shiptest.name).toBe('test ship');
});

test('Test: Making sure ship length is set correctly', () => {
  const shiptest = ship('test ship', 8);
  expect(shiptest.length).toBe(8);
});

test('Test: Ship has an empty array', () => {
  const shiptest = ship('test ship', 8);
  expect(shiptest.hitArray).toStrictEqual([]);
});

test('hitArray: Hitting a ship should add to the hitArray ... 7', () => {
  const shiptest = ship('test ship', 8);
  shiptest.hit(7);
  expect(shiptest.hitArray).toStrictEqual(['x', 'x', 'x', 'x', 'x', 'x', 'x']);
});

test('hitArray: Hitting a ship should add to the hitArray... 8', () => {
  const shiptest = ship('test ship', 8);
  shiptest.hit(8);
  expect(shiptest.hitArray).toStrictEqual(['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x']);
});

test('Sunk Test: If a ships hitMarker array is not the length of ship', () => {
  const shiptest = ship('test ship', 8);
  shiptest.hit(7);
  expect(shiptest.isShipSunk()).toBeFalsy();
});

test('Sunk Test: If shipArray has the same amount of hits as length', () => {
  const shiptest = ship('test ship', 8);
  shiptest.hit(8);
  expect(shiptest.isShipSunk).toBeTruthy();
});
