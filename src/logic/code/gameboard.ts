class Gameboard {
  board: any[];

  constructor() {
    this.board = [];
    this.init();
  }

  init = () => {
    for (let i = 0; i < 100; i++) {
      this.board.push({
        hasShip:  false,
        isShot: false
      });
    }
  };

  placeShip = (start: number, shipLength: number, rotation: string) => {
    if (rotation === 'hor') {
      for (let i = 0; i < shipLength; i++) {
        this.board[(start - 1) + i] = { hasShip: true, isShot: false };
      }
    }
    if (rotation === 'ver') {
      for (let i = 0; i < shipLength; i++) {
        this.board[(start - 1) + i] = { hasShip: true, isShot: false };
      } 
    }
    return this.board;
  };
}

export default Gameboard;
