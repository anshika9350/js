/* VARIABLES */

let $hi = 56;
console.log($hi)
let PI=3.14555
console.log(PI)
// --> we can write variable name starts with $,uppercase,lowercase.
// --> we can use uppercase,underscore in the variable name



/* DATA TYPES */

let Bigint =12345689088878; 
console.log(typeof(Bigint));//holds larger value than number
// --> string,boolean,number(decimals&int)
let first; 
console.log(typeof(first));//first variable not assign a value so it is called undefined
// --> null is empty value
// --> symbol is an unique value
console.log(typeof null) //returns an object
x=2**3 //it means 2 raise to power 3



/* TYPE CONVERSION AND COERTION */

// a) converting String to Number
console.log(typeof(Number("78")))
console.log("10"%"4") // -,*,**,/ treats the string as a number and + treats number as a string 
let a= Number('jonas');
console.log(a) //returns NaN
console.log(typeof NaN) //It's a Number

// b) converting Number to String
let num=123;
console.log(String(num))


//Truthy and Falsy values

// 0,'',Undefined,Null,NaN are falsy values
// all are truthy except these five falsy values
console.log(Boolean(0)) //used to convert into the Boolean values

/* == and === */
// == and === both are comparison operators
// = is an assignment operator
console.log(18=="18") //returns true bcz it only checks the number
console.log(18==="18") //returns false bcz it alseo checks the datatype


//switch statement

const day = 'Wednesday'
switch(day){
    case 'Monday':
        console.log('monday');
    break;
    case 'Tuesday':
        console.log("tuesday");
    break;
    case 'Wednesday':
    case 'Thursday':
        console.log("hiii"); //same as 'Wednesday' || 'Thursday'
    break;
    default:
        console.log("no day");

}



