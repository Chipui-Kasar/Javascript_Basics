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
