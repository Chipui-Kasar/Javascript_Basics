// ids = ["patient", "doctor", "employee", "surgeon"];
// for (let index = 0; index < ids.length; index++) {
//   checkID(ids[index]);
// }
// function checkID(id)
// switch (id) {
//   case "patientID":
//   case "employeeID":
//   case "":
//   case "doctorID":
//   case "surgeonID":
//     console.log("You can get treament");
//     break;
//   default:
//     console.log("Sorry not allowed to enter");
// }
//try it

//reusing the funtion
var a = 1;
var b = 2;

var c = 3;
var d = 4;

var e = 5;
var f = 6;

var g = 7;
var h = 8;

arithmeticOperations(a, b);
arithmeticOperations(c, d);

//void function
function arithmeticOperations(num1, num2) {
  result = num1 + num2;
  results = num1 - num2;
  resultm = num1 * num2;
  resultd = num1 / num2;
  console.log(
    `Results of  these numbers is : ${[result, results, resultm, resultd]}`
  );
}

//split, reverse is a build in function in javascript
var i = "3,22,24"; //42 is the id, 22 is the rupees, 3 is the stock
var stock;
var price;
var ID;
var result = i.split("").reverse().join("").split(","); //reverse is to reverse the numbers and join is to join the numbers(rupees, id, stock)
var price = result[0];
var ID = result[1];
var stock = result[2];
console.log(`id : ${ID}, price : ${price}, stock : ${stock}`);
