//similar to array, except for the index accessing to data
//we will access data through properties
var dog = {
  name: "Huskey",
  legs: "4",
  tails: "1",
  enemies: ["Stray Dogs", "Medicine"],
};

//fetching data using .notation
console.log(dog.name);

//fetchig from object using square bracket
console.log(dog["enemies"]);

//updating object properties
dog.name = "Pamorin";
dog["name"] = "Haofa";
console.log(dog.name);

//adding new properties to object.
dog.eyes = 2;
dog["eyes"] = 4;
console.log(dog);

//deleting properties
delete dog.eyes;
delete dog["eyes"];
console.log(dog);

//built in function hasOwnProperty()    //to check whether it have a property or not
dog.hasOwnProperty("tails");
console.log(dog.hasOwnProperty("tails"));
