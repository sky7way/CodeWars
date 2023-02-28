function SeriesSum(n){
    let seriesN = 1
    let result = 0
    for(i=0;i<n;i++){
      result += 1/seriesN
      seriesN +=3
    }
    return result.toFixed(2)
  }

  // v2

  function SeriesSum(n) {
    let count = 0
    for (i = 0; i < n; i++) {
      count += 1 / (1 + i * 3)
    }
    return count.toFixed(2)
  }