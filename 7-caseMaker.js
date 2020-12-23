const camelCase = function(input) {
  let ans = '';
  let prev = '#';
  for(let c of Array.from(input)){
    if(c !== ' '){
      if(prev === ' ') ans += c.toUpperCase();
      else ans += c.toLowerCase();
    }
    prev = c;
  }
  return ans;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));