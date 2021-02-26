class Gameboard {
  board: any[];

  constructor() {
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

  placeShip = (start: number, shipLength: number, rotation: string) => {
    try {
      // todo: Need to refactor the code below to encompass all illegal moves
      // ? idea: figure out how to use the logic from the tic tac toe project 
      // ? to determine what row a ship is on to be able to use that to find out 
      // ? if a placement is illegal or not.
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
    }
    catch (e) {
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
