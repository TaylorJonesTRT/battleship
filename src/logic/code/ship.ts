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

  // placeShip = (
  //   start: number,
  //   shipName: string,
  //   shipLength: number,
  //   rotation: string
  // ) => {
  //   try {
  //     // checking to make sure that there is not already a ship in any of the
  //     // spots that the new ship needs to use
        

  //     // This will check to make sure when placing a ship onto the board
  //     // that it will not go over any of the edges
  //     if (shipLength > (10 - start) + 1) {
  //       throw new Error('Cannot place the ship there as it is too long');
  //     }

  //     if (rotation === 'hor') {
  //       for (let i = 0; i < shipLength; i++) {
  //         this.board[(start - 1) + i] = {
  //           hasShip: true,
  //           isShot: false,
  //           ship: shipName
  //         };
  //       }
  //     } else if (rotation === 'vert') {
  //       for (let i = 0; i < shipLength; i++) {
  //         this.board[(start - 1) + 10] = {
  //           hasShip: true,
  //           isShot: false,
  //           ship: shipName
  //         };
  //       }
  //     } else {
  //       // Since the ships rotation can only be either vertical or sideways 
  //       // an error will be thrown if it's not the correct parrameters
  //       throw new Error('Rotation can only be either vert or hor');
  //     }
  //   } catch (e) {
  //     // Had to create a handleError method to get past the eslint error for
  //     // having a "useless" catch block
  //     this.handleError(e);
  //   }
  // };

  hit = (location: number) => {
    this.hits[location - 1] = 'X';
  };

  isShipSunk = () => {
    if (this.hits.length === this.length) {
      this.isSunk = true;
    } 
  };

}

export default Ship;
