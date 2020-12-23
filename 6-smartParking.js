const whereCanIPark = function (spots, vehicle) {
  if(spots.length === 0 || spots[0].length === 0) return false;

  let validSpots = getValidSpots(vehicle);
  for(let r=0 ; r<spots.length ; r++){
    for(let c=0 ; c<spots[0].length ; c++){
      for(let candidate of validSpots){
        if(spots[r][c] === candidate) return [c,r];
      }
    }
  }
  return false;
};

const getValidSpots = vehicle =>{
  switch(vehicle.charAt(0)){
    case 'r':
      return ['R'];
    case 's':
      return ['R', 'S'];
    case 'm':
      return ['R', 'S' , 'M'];

  }
};

console.log(whereCanIPark(
  [
    // COLUMNS ARE X
    // 0    1    2    3    4    5
    ['s', 's', 's', 'S', 'R', 'M'], // 0 ROWS ARE Y
    ['s', 'M', 's', 'S', 'r', 'M'], // 1
    ['s', 'M', 's', 'S', 'r', 'm'], // 2
    ['S', 'r', 's', 'm', 'r', 'M'], // 3
    ['S', 'r', 's', 'm', 'r', 'M'], // 4
    ['S', 'r', 'S', 'M', 'M', 'S']  // 5
  ],
  'regular'
));

console.log(whereCanIPark(
  [
    ['M', 'M', 'M', 'M'],
    ['M', 's', 'M', 'M'],
    ['M', 'M', 'M', 'M'],
    ['M', 'M', 'r', 'M']
  ],
  'small'
));

console.log(whereCanIPark(
  [
    ['s', 's', 's', 's', 's', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['S', 'r', 's', 'm', 'r', 's'],
    ['S', 'r', 's', 'm', 'R', 's'],
    ['S', 'r', 'S', 'M', 'm', 'S']
  ],
  'motorcycle'
))