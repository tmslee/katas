const conditionalSum = function(values, condition) {
  if(values.length === 0) return 0;
  let sum = 0;
  for(let n of values){
    if(condition === "even" && n%2 === 0) sum+=n;
    else if(condition === "odd" && n%2 !== 0) sum+=n;
  }
  return sum;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));