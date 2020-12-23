const blocksAway = function(directions) {
  let currOrientation = 0;
  let ans = {
    east: 0,
    north: 0
  };
  
  for(let i=0 ; i<directions.length-1 ; i+=2){
    if(directions[i] === 'right') currOrientation++;
    else currOrientation--;

    if(currOrientation < 0) currOrientation += 4;
    else if(currOrientation > 3) currOrientation %= 4;
    switch(currOrientation){
      case 0:
        ans.north = ans.north+directions[i+1];
        break;
      case 1:
        ans.east = ans.east+directions[i+1];
        break;
      case 2:
        ans.north = ans.north-directions[i+1];
        break;
      case 3:
        ans.east = ans.east-directions[i+1];
        break;
    }
  }
  return ans;
};

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));