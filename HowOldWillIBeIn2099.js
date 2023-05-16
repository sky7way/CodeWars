const  calculateAge = (b,c) => {
    r = c-b;
    switch(true) {
      case (r>1):    return `You are ${r} years old.`; break;
      case (r===1):  return `You are 1 year old.`; break;
      case (r===0):  return `You were born this very year!`; break;
      case (r===-1): return `You will be born in 1 year.`; break;
      case (r<-1):   return `You will be born in {-r} years.`; break;
    };
  }