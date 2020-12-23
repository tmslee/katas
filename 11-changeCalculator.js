const calculateChange = function(total, cash) {
  let denom = [2000, 1000, 500, 200, 100, 25, 10, 5, 1];
  let denomStr = ['twentyDollar','tenDollar','fiveDollar','twoDollar','oneDollar','quarter','dime','nickel','penny'];
  let val = cash-total;
  let idx = 0;
  let ans = {};

  while(val > 0){
    if(denom[idx] > val){
      idx++;
      continue;
    }
    else{
      let count = Math.floor(val/denom[idx]);
      val -= count*denom[idx];
      ans[denomStr[idx]] = count;
      idx++;
    }
  }
  return ans;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));