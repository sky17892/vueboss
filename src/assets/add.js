// src/utils/add.js
export function addAmounts(currentValue, amount) {
    if (amount === 'CLR') {
      return '0';
    }
  
    const currentAmount = parseInt(currentValue) || 0;
  
    // amount가 string인 경우를 처리
    const numericAmount = typeof amount === 'number' ? amount : parseInt(amount);
  
    // NaN 방지를 위해 추가적인 체크
    return (currentAmount + (numericAmount || 0)).toString();
  }
  