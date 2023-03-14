// const disemvowel = (str) => {
//     const arr = str.split('')
//     return arr.filter(el => !'aeiou'.includes(el.toLowerCase())).join('')
//   };


///////////////////////////////////////////////////////////////////

const disemvowel = (str) => str.replace(/[aeiou]/gi, '');