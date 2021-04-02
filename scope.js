var studentName = "Chipui"; //declaring globally

function getStudentName() {
  var studentName = "Thangam"; //declaring locally
  console.log(studentName);
}
getStudentName();
console.log(studentName);

//ES6 feature
//javascript --? EcmaScript
//ecma script
//let and const
//let can be change later
//eg
let surName = "Kasar";
surName = "Khudai";
console.log(surName);

//const is used whenever the data is not mutable    --> not changing
//eg
const schoolName = "Savio High School";
// schoolName = "Alice School"; //will get error because we can't change it

//-----------------------------------------------------------------------------------------------------------------//
//addition function
function add(num1, num2) {
  return num1 + num2;
}
//making add function more simpler
const addition = (num1, num2) => num1 + num2;
console.log(addition(1, 2));

const multiply = (num1, num2) => num1 * num2;
console.log(multiply(1, 2));

const arr = [1, 5, 60];
const GreaterthanFifty = num1 => (num1 > 50 ? true : false);
for (let index = 0; index < arr.length; index++) {
  if (GreaterthanFifty(arr[index])) {
    console.log(arr[index]);
  }
}

//map() making it more easier
var officers = [
  { id: 20, name: "Captain" },
  { id: 10, name: "Smith" },
  { id: 40, name: "stain" },
];
function getid(officer) {
  return officer.id;
}

for (let index = 0; index < officers.length; index++) {
  console.log(`ID of pilot ${index + 1}:${getid(officers[index])}`);
}

//
console.log(
  officers.map(function (officers) {
    console.log(`ID of pilot :${officers.id}`);
  })
);
//making it more simpler
officers.map(officer => {
  console.log(`ID of officer is ${officer.id}`);
});

//practice. check whether it is divible by 2 or not  if yes add 2 to it
numbers = [52, 61, 74];
numbers.map(num => {
  if (num % 2 == 0) {
    console.log(num + 2);
  } else {
    console.log(num);
  }
});
//checking it different way
numbers = [52, 61, 74];
const result = numbers.map(num => (num % 2 === 0 ? num + 2 : num));
console.log(result);

// reduce functionality
var pilots = [
  {
    id: 10,
    name: "Poe Dameron",
    years: 14,
  },
  {
    id: 2,
    name: "Temmin 'Snap' Wexley",
    years: 30,
  },
  {
    id: 41,
    name: "Tallissan Lintra",
    years: 16,
  },
  {
    id: 99,
    name: "Ello Asty",
    years: 22,
  },
];

// sum of all the pilot years
// normal way
// let and const

let totalYears = 0;

pilots.forEach(pilot => {
  totalYears += pilot.years; // totalYears= totalYears+ pilot.years
});

console.log(`Normal way : ${totalYears}`);

// var a;
// console.log(a + 2);

// let totalYearsUsingReduce = pilots.reduce(function (lastValue, pilot) {
//   console.log(lastValue);
//   return lastValue + pilot.years;
//   // return accumulator + pilot.years; // 14+ 14 =28 1st iteration
//   //28+30 =46 2nd iteration
//   //46 + 16 =62 3rd iteration
//   // 60 + 22 = 82 4th iteration
// }, 0);

let totalYearsUsingReduce = pilots.reduce(
  (lastValue, pilot) => lastValue + pilot.years,
  0
);

console.log(`reduce way : ${totalYearsUsingReduce}`);

// .filter() functionality

var pilots = [
  {
    id: 2,
    name: "Wedge Antilles",
    faction: "Rebels",
  },
  {
    id: 8,
    name: "Ciena Ree",
    faction: "Empire",
  },
  {
    id: 40,
    name: "Iden Versio",
    faction: "Empire",
  },
  {
    id: 66,
    name: "Thane Kyrell",
    faction: "Rebels",
  },
];

// filter using common method
var rebels = pilots.filter(function (pilot) {
  return pilot.faction === "Rebels";
});

// filter using Arrow functions
var rebels2 = pilots.filter(pilot => pilot.faction === "Rebels");

console.log(rebels);
console.log(rebels2);

// example

var personnel = [
  {
    id: 5,
    name: "Luke Skywalker",
    pilotingScore: 98,
    shootingScore: 56,
    isForceUser: true,
  },
  {
    id: 82,
    name: "Sabine Wren",
    pilotingScore: 73,
    shootingScore: 99,
    isForceUser: false,
  },
  {
    id: 22,
    name: "Zeb Orellios",
    pilotingScore: 20,
    shootingScore: 59,
    isForceUser: false,
  },
  {
    id: 15,
    name: "Ezra Bridger",
    pilotingScore: 43,
    shootingScore: 67,
    isForceUser: true,
  },
  {
    id: 11,
    name: "Caleb Dume",
    pilotingScore: 71,
    shootingScore: 85,
    isForceUser: true,
  },
];

var totalScoreJ = personnel
  .filter(person => person.isForceUser)
  .map(scorePerson => scorePerson.pilotingScore + scorePerson.shootingScore)
  .reduce((acc, score) => acc + score, 0);

console.log(totalScoreJ);
