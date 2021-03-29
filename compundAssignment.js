//find the sum of all number
var myNumbers=[1,2,3,4,5];  //15 total  
//1+2 =3
//3+3=6
//6+4=10
//10+5=15
var addTotal=0;
var multiplyTotal=1;

myNumbers.forEach(x=>{
    //1st iterationn total is 0
    addTotal += x; //total = x + total //compound assignment addition
    //0+1 =1   total
    //2+1 =3   total
    //3+3 =6   total
    //6+4 =10   total
    //10+5 =10   total
});
console.log("Total Number is " + addTotal);

myNumbers.forEach(x=>{
    multiplyTotal *= x;
});
console.log("Total Number is " + multiplyTotal);