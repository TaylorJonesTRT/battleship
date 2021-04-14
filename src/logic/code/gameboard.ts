class Gameboard {
  board: any[];

  belongsTo: string;

  constructor(belongsTo: string) {
    this.belongsTo = belongsTo;
    this.board = [];
    this.init();
  }

  init = () => {
    for (let i = 0; i < 100; i++) {
      this.board.push({
        hasShip: false,
        isShot: false
      });
    }
  };

  // todo: need to create the code that checks for what kind of ship is located in a tile

  placeShip = (
    start: number,
    shipName: string,
    shipLength: number,
    rotation: string
  ) => {
    try {
      // This will check to make sure when placing a ship onto the board that it will not go over
      // any of the edges
      if (shipLength > (10 - start) + 1) {
        throw new Error('Cannot place the ship there as it is too long');
      }

      if (rotation === 'hor') {
        for (let i = 0; i < shipLength; i++) {
          this.board[(start - 1) + i] = { hasShip: true, isShot: false, ship: shipName };
        }
      } else if (rotation === 'vert') {
        for (let i = 0; i < shipLength; i++) {
          this.board[(start - 1) + 10] = { hasShip: true, isShot: false, ship: shipName };
        }
      } else {
        // Since the ships rotation can only be either vertical or sideways an
        // error will be thrown if it's not the correct parrameters
        throw new Error('Rotation can only be either vert or hor');
      }
    } catch (e) {
      // Had to create a handleError method to get past the eslint error for
      // having a "useless" catch block
      this.handleError(e);
    }
  };

  handleError = (error: string) => {
    throw new Error(error);
  };
}

export default Gameboard;
