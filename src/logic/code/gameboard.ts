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

  recieveAttack = (col: string, row: number) => {

  };

  handleError = (error: string) => {
    throw new Error(error);
  };
}

export default Gameboard;
