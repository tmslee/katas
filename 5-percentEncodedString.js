const urlEncode = function(text) {
  let ans = '';
  for(let c of Array.from(text.trim())){
    if(c === ' ') ans += '%20';
    else ans+=c;
  }
  return ans;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));