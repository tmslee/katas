let set1 = new Set(['camel', 'pascal', 'snake', 'kebab', 'title']);
let set2 = new Set(['vowel', 'consonant']);
let set3 = new Set(['upper','lower']);
let vowels = new Set(['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U']);
let consonants = new Set(['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z','B','C','D','F','G','H','J','K','L','M','N','P','Q','R','S','T','V','W','X','Y','Z']);


const makeCase = function(input, cases) {
  if(typeof cases === 'string'){
    return process(input, cases);
  }
  else{
    cases.sort(newSortFunc);
    for(let c of cases){
      input = process(input, c);
    }
    return input;
  }
}

const newSortFunc = (c1, c2) => {
  let val1, val2;

  if(set1.has(c1)) val1 = 1;
  else if(set2.has(c1)) val1 = 2;
  else val1 = 3;
  if(set1.has(c2)) val2 = 1;
  else if(set2.has(c2)) val2 = 2;
  else val2 = 3;

  return val1-val2;
};

const process = (input, c) => {
  let ans = '';
  let prev = '#';

  switch(c){
    case 'camel':
      for(let ch of Array.from(input)){
        if(ch !== ' '){
          if(prev === ' ') ans += ch.toUpperCase();
          else ans += ch.toLowerCase();
        }
        prev = ch;
      }
      return ans; 

    case 'pascal':
      for(let ch of Array.from(input)){
        if(ch !== ' '){
          if(prev === ' ' || prev === '#') ans += ch.toUpperCase();
          else ans += ch.toLowerCase();
        }
        prev = ch;
      }
      return ans; 

    case 'snake':
      for(let ch of Array.from(input)){
        if(ch === ' ' && prev !== ' ') ans += '_';
        else if(ch !== ' ') ans += ch;
        prev = ch;
      }
      return ans; 

    case 'kebab':
      for(let ch of Array.from(input)){
        if(ch === ' ' && prev !== ' ') ans += '-';
        else if(ch !== ' ') ans += ch;
        prev = ch;
      }
      return ans; 

    case 'title':
      for(let ch of Array.from(input)){
        if(ch !== ' '){
          if(prev === ' ' || prev === '#') ans += ch.toUpperCase();
          else ans += ch.toLowerCase();
        }
        else if(prev !== ' ') ans += ch;
        prev = ch;
      }
      return ans; 

    case 'vowel':
      for(let ch of Array.from(input)){
        if(vowels.has(ch)) ans += ch.toUpperCase();
        else ans += ch;
      }
      return ans; 

    case 'consonant':
      for(let ch of Array.from(input)){
        if(consonants.has(ch)) ans += ch.toUpperCase();
        else ans += ch;
      }
      return ans; 

    case 'upper':
      for(let ch of Array.from(input)){
        if(ch !== ' ') ans += ch.toUpperCase();
        else ans += ch;
      }
      return ans; 

    case 'lower':
      for(let ch of Array.from(input)){
        if(ch !== ' ') ans += ch.toLowerCase();
        else ans += ch;
      }
      return ans; 
  }
};

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));