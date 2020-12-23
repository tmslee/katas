const squareCode = function(message) {
  let spaceRemoved = message.replace(/ /gi, '');
  let colSize = Math.ceil(Math.sqrt(spaceRemoved.length));
  let numRows = Math.ceil(spaceRemoved.length/colSize);

  let cols = [];
  for(let i=0 ; i<colSize ; i++){
    cols.push('');
  }

  for(let i=0 ; i<spaceRemoved.length ; i++){
    cols[i%colSize] = cols[i%colSize] + spaceRemoved[i];
  }

  let ans = '';
  for(let i=0 ; i<colSize ; i++){
    ans += cols[i];
    ans = i!==colSize-1 ? ans+' ' : ans;
  }
  return ans;
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));