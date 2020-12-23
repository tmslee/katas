const sumLargestNumbers = function(data) {
  if(data.length === 0) return 0;
  if(data.length === 1) return data[0];
  if(data.length === 2) return data[0] + data[1];

  let largest = Number.MIN_SAFE_INTEGER;
  let larger = Number.MIN_SAFE_INTEGER;
  let updated1 = false;
  let updated2 = false;

  for(let num of data){
    if(num >= largest){
      if(updated1 === false){
        updated1 = true;
      }
      else{
        larger = largest;
        updated2 = true;
      }
      largest = num;
    }
    else if(num >= larger){
      updated2 = true;
      larger = num;
    }
  }
  let sum = updated1 ? largest : 0;
  sum = updated2 ? sum+larger : sum;
  return sum;
};
