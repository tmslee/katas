
const multiplicationTable = function(maxValue) {
  let ans = '';
  for(let a=1 ; a<=maxValue ; a++){
    let rowStr = '';
    for(let b=1 ; b<=maxValue; b++){
      if(b !== 1) rowStr += ' ';
      rowStr += (a*b).toString();
    }
    if(a !== maxValue) rowStr += '\n';
    ans += rowStr;
  }
  return ans;
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));