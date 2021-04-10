import Ship from './ship';

const carrier = new Ship('Carrier', 5);
const battleship = new Ship('Battleship', 4);
const destroyer = new Ship('Destroyer', 3);
const submarine = new Ship('Submarine', 3);
const patrolBoat = new Ship('Patrol Boat', 2);

export { carrier, battleship, destroyer, submarine, patrolBoat };
