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
    // eslint-disable-next-line no-useless-catch
    try {
      if (start === 7 && shipLength > 4) throw new Error('Ship cannot be placed there');

      if (rotation === 'hor') {
        for (let i = 0; i < shipLength; i++) {
          this.board[(start - 1) + i] = { hasShip: true, isShot: false };
        }
      }
      if (rotation === 'vert') {
        for (let i = 0; i < shipLength; i++) {
          this.board[(start - 1) + 10] = { hasShip: true, isShot: false };
        }
      }
    }
    catch (e) {
      throw e;
      console.log(e);
    }
  };
}

export default Gameboard;
