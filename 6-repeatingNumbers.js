const repeatNumbers = function(data) {
  let ans = '';
  for(let i=0; i<data.length ; i++){
    let append = '';
    for(let rpt=0 ; rpt<data[i][1] ; rpt++){
      append += data[i][0].toString();
    }
    if(i!==0){
      append = ', ' + append;
    }
    ans += append;
  }
  return ans;
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));