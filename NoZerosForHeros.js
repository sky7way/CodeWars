// const noBoringZeros = n => {
//     while(n%10==0 && n!=0){n/=10;}
//     return n;
//   }

/////////////////////

const noBoringZeros = n => +`${n}`.replace(/0*$/, "");
  