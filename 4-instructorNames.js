const instructorWithLongestName = function(instructors) {
  let longest = 0;
  let ans;
  for(let inst of instructors){
    if(inst.name.length > longest){
      longest = inst.name.length;
      ans = inst;
    }
  }
  return ans;
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));