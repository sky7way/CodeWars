function maxMultiple(divisor, bound){
    let arr = [];
    for(let i = 1; i <= bound; i++){
      if(i % divisor === 0){
         arr.push(i);
      }
    }return arr.reduce((a, b) => a > b ? a : b);
  }