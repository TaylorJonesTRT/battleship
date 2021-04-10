import { carrier, battleship, destroyer, submarine, patrolBoat } from '../code/shipTypes';

// Making sure that all the ships return the correct names and lengths
test('Carrier: Name', () => {
  const ship = carrier;
  expect(ship.name).toBe('Carrier');
});

test('Carrier: Length', () => {
  const ship = carrier;
  expect(ship.length).toBe(5);
});

test('Battleship: Name', () => {
  const ship = battleship;
  expect(ship.name).toBe('Battleship');
});

test('Battleship: Length', () => {
  const ship = battleship;
  expect(ship.length).toBe(4);
});

test('Destroyer: Name', () => {
  const ship = destroyer;
  expect(ship.name).toBe('Destroyer');
});

test('Destoyer: Length', () => {
  const ship = destroyer;
  expect(ship.length).toBe(3);
});

test('Submarine: Name', () => {
  const ship = submarine;
  expect(ship.name).toBe('Submarine');
});

test('Submarine: Length', () => {
  const ship = submarine;
  expect(ship.length).toBe(3);
});

test('Patrol Boat: Name', () => {
  const ship = patrolBoat;
  expect(ship.name).toBe('Patrol Boat');
});

test('Patrol Boat: Length', () => {
  const ship = patrolBoat;
  expect(ship.length).toBe(2);
});
