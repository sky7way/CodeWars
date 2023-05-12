const persistence = num => num > 9 ? 1 + persistence([...`${num}`].reduce((pre, val) => pre * val)) : 0;

////////////////////////////////////

function persistence(num) {
    let amount = 0;
    
    while(num > 9) {
       num = [...num + ''].reduce((a, b) => a * b);
       amount++;
    }
    
    return amount;
  }