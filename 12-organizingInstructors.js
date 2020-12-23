const organizeInstructors = function(instructors) {
  let ans = {};
  for(let inst of instructors){
    let crs = inst.course;
    if(crs in ans){
      let instList = ans[crs];
      instList.push(inst.name);
      ans[crs] = instList;
    }
    else{
      let newList = [inst.name];
      ans[crs] = newList;
    }
  }
  return ans;
};

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));