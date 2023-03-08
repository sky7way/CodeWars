// function mango(quantity, price){
//     const remainder = quantity % 3        
//     const discount_mango = (quantity - remainder) * 2/3 * price        
//     const total_cost = discount_mango + (remainder * price)    
//     return total_cost
// };

function mango(quantity, price){
    const count = Math.floor(quantity/3)
    return (quantity - count) * price
  };
