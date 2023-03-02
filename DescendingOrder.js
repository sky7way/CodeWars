function descendingOrder(n){
    const newNum = Array.from(String(n).split('')).sort().reverse().join('')
    return +newNum
   }