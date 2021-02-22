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
}

export default Gameboard;
