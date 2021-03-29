// year 1976    - is a leap year or not
//1976/4   && 1976/100  && 1976/400 -->if all this condt is satisfied then it is a leap year
//year / 4 and not divisible by 100 --> Leap year
//year/100  --? year/400    --> Leap year

var year = 1977;
if (year % 100 === 0) {
  if (year % 400) {
    console.log(`${year} is a leap year`);
  }
} else if (year % 4 === 0) {
  console.log(year + " is a Leap year");
} else {
  console.log(year + " Not a leap year");
}

var leapYear =
  year % 100 === 0
    ? year % 400 === 0
      ? true
      : false
    : year % 4 === 0
    ? true
    : false;

if (leapYear) {
  console.log("Its a Logarithmic leap year");
} else {
  console.log("Not a leap year");
}
