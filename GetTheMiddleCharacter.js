const getMiddle = s => {
  const slicedStart = s.slice(Math.ceil(s.length/2 - 1));
  return  slicedStart.slice(0, s.length % 2 === 0 ? 2 : 1 )                     
};