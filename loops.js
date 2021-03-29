//if Loop

var ticket = true;
var seniorCitizen = true;

if (ticket) {
  console.log("Permitted to travel");
}

//if else loop
if (ticket) {
  console.log("Permitted to travel");
} else {
  console.log("Not permitted");
}

//if eles if loop
if (ticket) {
  console.log("Permitted to travel");
} else if (seniorCitizen) {
  console.log("Senior, So permitted");
} else {
  console.log("Not permitted to travel");
}

//while loop
//ISBT --> to maintain only 5 buses
var terminalCapacity = 5;
var bus = 0;
while (terminalCapacity > 0) {
  bus++;
  console.log(`Park the : Bus ${bus}`);
  terminalCapacity--;
}
if (terminalCapacity === 0) {
  console.log("Terminal if full");
}

//Switch Case
//if women consession
//if kid, free
var ticket = "normalTicket";
switch (ticket) {
  case "normalTicket":
  case "seniorCitizen":
  case "kid":
  case "handicap":
    console.log("Permitted enter the bus");
    break;
  default:
    console.log("Sorry Get out");
}

//for loop
var tc;
var busNumber = 0;
for (tc = 5; tc >= 1; tc--) {
  busNumber++;
  //1st iteration
  //tc=0
  //tc<5 --> enter into loop
  //print bus 0
  //tc=1
  console.log(`Park the bus : ${busNumber}`);
}

// for(i=0;i<5;i++){
//     console.log(`Park the : ${bus}`)
// }

//for each defining arrays
