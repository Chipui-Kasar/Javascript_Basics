//object, classes, ecapsulation, inheritance
//encapsulation : hiding the properties from the object
//Object: in javascript everything is object
//object is a unique entity which contains properties and method
//function is also an object

//defining an object
let person = {
  first_name: "Sobylal",
  last_name: "Baby",

  getFunction: function () {
    return `${this.first_name} ${this.last_name}`;
  },
  phoneNumber: {
    mobile: "8264163783",
    telephone: "3245687755",
  },
};
console.log(person.getFunction());
console.log(person.phoneNumber.mobile);

//creating two person using an object constructor
function personusingcons(first_name, last_name) {
  this.first_name = first_name;
  this.last_name = last_name;
  console.log(`${this.first_name}........${this.last_name}`);
}
//constructor is a first executable function when an object is instantiated
let person1 = new personusingcons("sobylal", "Baby"); //creating new instance object
let person2 = new personusingcons("Chipui", "Kasar");

//object.create() method
const coder = {
  isStudying: false,
  introduction: function () {
    console.log(`My name is : ${this.name} Studying: ${this.isStudying}`);
  },
}; //object
const coder1 = Object.create(coder);
coder1.name = "Thangam";
coder1.isStudying = true;
coder1.introduction();

//classes
//classes are a blueprint of object
//classes can have many object bc class is just a template while object are instance
//there are no classes in object even if we define it will be an object internally
//javascript is a prototype based object oriented programming language
//until ES 2015 there was no keyword called class
//in ES6 they introduced traditionally way of defining object
//class keyword

class vehicle {
  constructor(name, maker, engine) {
    this.name = name;
    this.maker = maker;
    this.engine = engine;
  }
  getDetails() {
    return `${this.name}, ${this.maker}, ${this.engine}`;
  }
}
let bike1 = new vehicle("Hayabusa", "Suzuki", "1340cc");
let bike2 = new vehicle("Karizma", "Honda", "990cc");
console.log(bike1.name);
console.log(bike2.name);

//Encapsulation
class persont {
  constructor(name, id) {
    this.name = name;
    this.id = id;
  }
  add_address(address) {
    this.address = address;
  }
  getDetails() {
    console.log(`${this.name} + ${this.id}`);
  }
}
let personv = new persont("VIgnesh", 12);
personv.add_address("Delhi");
console.log(personv.address);
