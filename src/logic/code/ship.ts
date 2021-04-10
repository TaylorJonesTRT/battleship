class Ship {
  name: string;

  length: number;

  position: number;

  hits: string[];

  isSunk: boolean;

  constructor(
    name: string,
    length: number,
    hits: string[] = []
  ) {
    this.name = name;
    this.length = length;
    this.hits = hits;
    this.isSunk = false;
  }

  hit = (num: number) => {
    // Todo: Need to refactor to accept another argument of the location on the ship where there
    // todo: was a valid hit
    for (let i = 0; i < num; i++) {
      this.hits.push('x');
    }
  };

  isShipSunk = () => {
    if (this.hits.length >= this.length) {
      return true;
    } return false;
  };

}

export default Ship;
