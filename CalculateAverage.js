const findAverage = (array) => array.length ? array.reduce((acc, cur) => (acc + cur), 0) / array.length : 0;
