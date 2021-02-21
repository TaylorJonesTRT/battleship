const ship = (name: string, length: number) => {
  const hitArray: string[] = [];
  const hit = (num: number) => {
    for (let i = 0; i < num; i++) {
      hitArray.push('x');
    }
  };
  const isShipSunk = () => {
    if (hitArray.length >= length) {
      return true;
    }  return false;
  };
  return { name, length, hitArray, hit, isShipSunk };
};

export default ship;