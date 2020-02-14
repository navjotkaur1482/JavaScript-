//data types
let name ='Navjot';
let age = 25;
let color='red';
console.log(name+ ''+age);
// Don't use REserve Keywords as variable name
console.log(2+2);
 const range =4;
 //range = 5;
 console.log(range);
 const numberOfDays = 7;
 let s1='hello world';
 let num=30;
 let flag = true;
 let isActive=false;
 let price;
 let model=null;
 let wheels=undefined;

 // Dynamic Typing

 let d='naveen';
 d=30;


 //Objects

 let user={

    name:"Tom",
    age:30
 };
 //dot notation
 console.log(user);
 console.log(user.age);
 console.log(user.name);
 user.age=35;
 console.log(user.age);

 //bracket notation
 user['name']='Mary';
 console.log(user.name);

 //Arrays
 //List of objects and can have similar type of data

 let language=['java','javascript'];
 console.log(language.length);

 language[2]='Ruby';
 console.log(language);

 console.log(language.length);
 console.log(language[3]);

 // Functions
// 0 parameter function
 function getName(){
     console.log('this is my function!!')
     
 }
 getName();

 // parameter based function
 function greet(name, age){
     console.log('Hello'+ " "+name+ ' '+age);
 }
 greet('Navjot',30);
 greet('Nav');

 //Return from a function

 function add(num1, num2){
     return num1+num2;
 }
 let sum=add(10,20);
 console.log(sum);
 console.log(add(40,50));

 function squareRoot(num)
 {
     let root = num*num;
     return root;
 }

 console.log(squareRoot(10));
