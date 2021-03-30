//declare a student array
//multi dimensional array
//there will be single student array
//inside the student array you will get list of student array
//[["name of student","class", [[maths,72], [science,56], [Physics,60]],
//["name of student","class", [[maths,72], [science,56], [Physics,60]]]

//declare for 5 students
//try pop() for last element
//push()
//unshift
//shift

var students = [
  [
    ["John", 5],
    [
      ["Maths", 56],
      ["Science", 65],
      ["Physics", 70],
    ],
  ],
  [
    ["Marilyn", 4],
    [
      ["Maths", 65],
      ["Science", 32],
      ["Physics", 80],
    ],
  ],
  [
    ["William", 6],
    [
      ["Maths", 72],
      ["Science", 46],
      ["Physics", 59],
    ],
  ],
  [
    ["Sam", 3],
    [
      ["Maths", 72],
      ["Science", 46],
      ["Physics", 59],
    ],
  ],
  [
    ["Johnson", 8],
    [
      ["Maths", 83],
      ["Science", 82],
      ["Physics", 89],
    ],
  ],
];

//Adding New student at first
students.unshift([
  ["First New Student", 9],
  [
    ["Maths", 90],
    ["Science", 93],
    ["Physics", 98],
  ],
]);
//Adding New student at the end
students.push([
  ["Last New Student", 9],
  [
    ["Maths", 90],
    ["Science", 93],
    ["Physics", 98],
  ],
]);
console.log(students);

//Deleting the last student
var deleteLast = students.pop();
console.log(`Deleted element : ${deleteLast}`);
console.log(students);

//Deleting the first element
var deleteFirst = students.shift();
console.log(`Deleted element from first : ${deleteFirst}`);
console.log(students);
