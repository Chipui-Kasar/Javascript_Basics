//Check two given number
//check if the given umber is 50 or their sum  is 50

var x = 45;
var y = 5;
if (x === 50 || y === 50) {
  console.log("Found a magical number");
} else if (x + y === 50) {
  console.log("Found A magical number");
} else {
  console.log("Sorry! Can't find any Magical Number");
}

/* or
var result =
  numberone == 50 || numbertwo == 50
    ? true
    : numberone + numbertwo == 50
    ? true
    : false;

if (result) {
  console.log("Magical Number");
} else {
  console.log("not a magical number");
}
*/

//do it using function

var numberOne = 26;
var numberTwo = 25;

magicalNUmber(numberOne, numberTwo);

function magicalNUmber(one, two) {
  if (numberOne === 50 || numberTwo === 50) {
    console.log("This is a magical number");
  } else if (numberOne + numberTwo === 50) {
    console.log("A magical Number");
  } else {
    console.log("Not a magical number");
  }
}
