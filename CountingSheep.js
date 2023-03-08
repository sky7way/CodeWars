const countSheeps = (arrayOfSheep) => arrayOfSheep.map(i => i ? 1 : 0).reduce((acc, cur) => acc + cur, 0);
