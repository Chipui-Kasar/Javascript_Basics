//to store multiple data in a variable
//storing of data
//is called an array

//declaring an array
var shoppingList = ["rice", "maggi", "shampoo", "dal"];
//nested multiple array inside one array
shoppingList = [
  ["Rice", 56],
  ["Maggi", 15],
  ["Shampoo", 20],
  ["Salt", 50],
  ["Dal", 40],
  ["CoconutOil", "Groundnut Oil"],
];
//indexes -> number assigned to each element/data in array
var shampoo = shoppingList[2];
var shampooPrice = shoppingList[2][1]; //2 is the index of shampoo from the list and 1 is the index of single array (shampoo -0 and 20 =1)
console.log(shampooPrice);

var oil = shoppingList[5][1]; //accesing the second data of array
console.log(oil);
// console.log("Removed from shopping list is :" + shoppingList[5].pop()); // removing the data of second array
shoppingList[5].push("crocodile");
console.log(shoppingList);

//to remove an element from an array we will use pop() built in fn only for array
var numbers = [1, 2, 3];
var removeElement = numbers.pop();
console.log("The removed element is :" + removeElement);
console.log(numbers); //remaining array

var fruits = ["apple", "mango", "pineapple", "grapes"];
fruits.pop();
console.log(fruits);

// to add an element at last push() is used to add at the last
var numbers = [1, 2, 3];
numbers.push(4);
console.log(numbers);

//adding at the first element unshift() is to add at the start
var numbers = [1, 2, 3];
numbers.unshift(0);
console.log(numbers);
//remove from the first element shift()
var numbers = [1, 2, 3];
var removedElements = numbers.shift();
console.log(removedElements);
