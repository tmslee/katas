const numberOfVowels = function(data) {
  let ans = 0;
  for(let c of Array.from(data)){
    if(c === 'a' || c === 'e' || c === 'i' || c === 'o' ||c === 'u') ans++;
  }
  return ans;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));