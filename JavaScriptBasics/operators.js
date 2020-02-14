//Arithmatics
//assignment
//Ternary
//Comparison
//Logical
//Binary
//BitWise Operator

//arithmatic

/*let x=10;
let y=20;
console.log(x+y);
console.log(x-y);
console.log(x*y);
console.log(y/x);
console.log(x/y);
console.log(2**3);
*/
//++ and --
/*
let p=1;
let q=p++;
console.log(p++)// 1
console.log(p); //2
console.log(q);

//
let p1=1;
let q1=++p1;
console.log(p1)// 1
//console.log(p); //2
console.log(q1);
*/

//assignment operator

let x=10;

let c=x+5;
console.log(x+c);
x*=10;

let j=5;
j+=5;
console.log(j);


//Comparison operator
let z =1;
console.log(z>1);
// Strict Equality
console.log(z===10);
console.log(1===1);
//loose equality

console.log('1'==1);
console.log(true==1);

// Ternary Operator

let points=110;
let type=points>100 ? 'gold':'silver';
console.log(type);

//logical Operators
//And or not operator

let highIncome = true;
let goodCreditScore = false;
let eligibleForLoan = highIncome && goodCreditScore;
console.log(eligibleForLoan);

// OR
//NOT
let isActive = true;
console.log(! isActive);

console.log(!(10<5));

// logical operators with non boolean :
//falsy(false)
//undefined null 0 false '' NaN

console.log(false || 'naveen');
console.log(false || 1 || 2);
console.log(true || 1 || 2);
console.log(false || undefined);
console.log(true || undefined);

// real time ex
let userColor ='red';
let defaultColor=undefined;
let currentColor= userColor || defaultColor;
console.log(currentColor);

//bitwise operator
//1=00000001
console.log(1|2);//3
console.log(1&2);//0

//Operator precedence

console.log(2+3*4);


// Swap two values
let a1=10;
let b1=20;
let c1= a1;
a1=b1;
b1=c1;
console.log(a1);
console.log(b1);

