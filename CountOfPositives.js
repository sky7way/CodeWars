const countPositivesSumNegatives = (input) => {
    if(input === null){
      return []
    }if(input.length === 0){
      return []
    }
    const pos = input.filter(i => i > 0).length
    const neg = input.reduce((a, c) => c < 0 ? a+c : a, 0)
    return [pos, neg]
  };