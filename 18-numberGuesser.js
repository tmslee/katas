let prompt = require("prompt-sync")();

let ans = Math.floor((Math.random() * 100) + 1);
let answer;
let count = 0;

while(true){
  count++;
  answer = prompt("Guess a number: ");

  if(answer < ans) console.log('Too Low!');
  else if(answer > ans) console.log('Too High!');
  else{
    console.log(`You got it! You took ${count} attemp(s)!`);
    break;
  }
}
