const longest = (a, b) => {
    return [... new Set( (a + b).split('')  )].sort().join('');
  };