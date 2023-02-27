function defineSuit(card) {
    
    if(card.slice(-1) === '♣'){
      return 'clubs'
    }else if(card.slice(-1) === '♦'){
      return 'diamonds'
    }else if(card.slice(-1) === '♥'){
      return 'hearts'
    } else if(card.slice(-1) === '♠'){
    return 'spades' 
  }
  
  }