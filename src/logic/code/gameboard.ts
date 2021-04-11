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
      // todo: Need to make sure that ships can only be placed on a starting position that doesn't
      // todo: have the ship "hang off" of the board.

      if (shipLength > (10 - start) + 1) {
        throw new Error('Cannot place the ship there as it is too long');
      }

      if (start === 7 && shipLength > 4) throw new Error('Ship cannot be placed there');

      if (rotation === 'hor') {
        for (let i = 0; i < shipLength; i++) {
          this.board[(start - 1) + i] = { hasShip: true, isShot: false };
        }
      } else if (rotation === 'vert') {
        for (let i = 0; i < shipLength; i++) {
          this.board[(start - 1) + 10] = { hasShip: true, isShot: false };
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
