// function basicOp(operation, value1, value2)
// {
//   switch(operation){
//     case '+': 
//     return value1 + value2;
//     case '-': 
//     return value1 - value2;
//     case '*': 
//     return value1 * value2;
//     case '/': 
//     return value1 / value2;
//   }
// }

function basicOp(operation, value1, value2)
{
  const result = { 
        '+': value1 + value2,
        '-': value1 - value2,
        '*': value1 * value2,
        '/': value1 / value2
  }
   return result[operation]
}