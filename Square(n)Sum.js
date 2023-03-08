// const squareSum = (numbers) =>  (numbers.map(i => i**2)).reduce((acc, cur) => cur + acc, 0);

const squareSum = (numbers) => numbers.reduce((acc, cur) => cur**2 + acc, 0);