const disemvowel = (str) => {
    const arr = str.split('')
    return arr.filter(el => !'aeiou'.includes(el.toLowerCase())).join('')
  };
  