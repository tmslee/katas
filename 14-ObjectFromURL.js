const urlDecode = function(text) {
  let ans = {};
  let curr = '';
  let currProperty;
  for(let ch of text){
    if(ch === '='){
      currProperty = curr;
      curr = '';
    }
    else if(ch === '&'){
      ans[currProperty] = processVal(curr);
      curr = '';
    }
    else{
      curr += ch;
    }
  }
  ans[currProperty] = processVal(curr);
  return ans;
};

const processVal = str => str.replace(/%20/gi, ' ');

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);