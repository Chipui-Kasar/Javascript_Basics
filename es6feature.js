//default parameters
var link = function (height = 50, color, url) {
  var height = height;
  var color = color || "red";
  var url = url || "www.google.com";
  console.log(url);
  console.log(height);
};
link();

//if any is undefined and you don't want to send it as undefined you will default parameters to replace undefined

//destructing feature
array = [1, 2, 3, 4, 5];
var [, a, , b] = array;
console.log(a);
console.log(b);

//rest and spread property
function sum(x, ...y) {
  total = x;

  for (let index = 0; index < y.length; index++) {
    total += y[index];
  }
  return total;
}

console.log(sum(1, 2, 3));
console.log(sum(1, 2, 3, 4));

var a = [1, 2, 3];
function sumSpread(x, y, z) {
  return x + y + z;
}
console.log(sumSpread(...a));
