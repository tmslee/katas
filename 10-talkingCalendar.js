const talkingCalendar = function(date) {
  let dateArr = date.split('/');
  return `${getMonth(dateArr[1])} ${getDate(dateArr[2])}, ${dateArr[0]}`;
};

const getDate= num => {
  let ans = '';
  if(num[1] === '1' && num[0] !== '1') ans = num+'st';
  else if(num[1] === '2' && num[0] !== '1') ans = num+'nd';
  else if(num[1] === '3' && num[0] !== '1') ans =  num+'rd';
  else ans = num+'th';

  if(ans[0] === '0') ans = ans.substring(1);
  return ans;
};

const getMonth = month => {
  switch(month){
    case '01':
      return 'January';
    case '02':
      return 'February';
    case '03':
      return 'March';
    case '04':
      return 'April';
    case '05':
      return 'May';
    case '06':
      return 'June';
    case '07':
      return 'July';
    case '08':
      return 'August';
    case '09':
      return 'September';
    case '10':
      return 'October';
    case '11':
      return 'November';
    case '12':
      return 'December';
  }
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));