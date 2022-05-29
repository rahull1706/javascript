//            **************question -1*************
// Explain difference between var/ let const by giving examples

// var - var is the keyword to declare a variable in java script  let - let is also a keyword to declare a variable in javascript whose values are mutable(can be changed) const - const is also a keyword to declare a variable in javascript whose values are immutable(cannot be changed)

//            **************question -2*************
// What is the difference between null , undefined and not defined


// null-Null means an empty or non-existent value undefined-Undefined means a variable has been declared, but the value of that variable has not yet been defined notdefined-A not defined is a variable which is not declared

//            **************question -3*************
// What is initialisation and declaration? Check if for a given length and breadth, is the shape a square or rectangle. (eg: Let's say the length is 10 and breadth is 20, and then check)

// answer--->******declaration-declaration means declaring some memory location to a variable initialisation- initialisation means giving some value to the the declared variable******

var length=10;
var breadth=20;
if (length===breadth){
    console.log("the shape is a square");
}
else{
    console.log("the shape is a rectangle");
}
//            **************question -4*************
// Check if a number is odd or even using if-else statement


var i=21;
if(i%2===0){
    console.log(i+"-->even");
}
else{
    console.log(i+"-->odd");
}

//            **************question -5*************
// Using SWITCH statement, get the day of the week based on day number, means if the day is 1, the day of week is Sunday. If the day is 2 , it's Monday and so on.
var day=1;
switch(day){
    case 1:
        console.log("sunday");
        break;
    case 2:
        console.log("monday");
        break;
    case 3:
        console.log("tuesday");
        break;
    case 4:
        console.log("wednsday");
        break;
    case 5:
        console.log("thursday");
        break;
    case 6:
        console.log("friday");
        break;
    case 7:
        console.log("saturday");
        break;
    default:
        console.log("invalid day number");
        break;

}

 








 