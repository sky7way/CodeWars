const getCount = (str) => {
    let numOfVowelLetters = str.match(/[aeiou]/g)
    return numOfVowelLetters === null ? 0 : numOfVowelLetters.length 
   };