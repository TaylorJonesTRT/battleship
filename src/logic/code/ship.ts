class Ship {
  name: string;

  length: number;

  position: number;

  hits: string[];

  isSunk: boolean;

  constructor(
    name: string,
    length: number
  ) {
    this.name = name;
    this.length = length;
    this.hits = [];
    this.isSunk = false;
    this.init();
  }

  init = () => {
    for (let i = 0; i < this.length; i++) {
      this.hits.push('');
    }
  };

  placeShip = () => {
  };

  hit = (location: number) => {
    this.hits[location - 1] = 'X';
  };

  isShipSunk = () => {
    if (this.hits.length === this.length) {
      this.isSunk = true;
    } else this.isSunk = false;
  };

}

export default Ship;
