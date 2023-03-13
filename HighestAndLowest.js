const highAndLow = (numbers) => {
    numbers = numbers.split(' ')
    let smallNum = numbers[0];
    let hightNum = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
      if (+numbers[i] < +smallNum) {
           smallNum = numbers[i];
      } if (+numbers[i] > +hightNum) {
           hightNum = numbers[i];
     }
   } return `${hightNum} ${smallNum}`
 };