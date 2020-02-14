const num = [3,4];
//console.log(num);

//console.log(num.length);
console.log(num[0]);

//add element at the end of an array
num.push(5);
console.log(num);
// remove element from the end of an array
num.pop();
console.log(num);
// add element at the start of an array
num.unshift(1,2);
console.log(num);

//remove element from the start of at array using shift method 

num.shift();
console.log(num);
// how to add an element at the  mid of an array

num.splice(2,0,'a','b');
console.log(num);
// How to print all theelements of an array
for(let k in num){
    console.log(num[k]);
}


// find the elements in an array
// primitive types of data
const s = [1,2,3,1,4];
console.log(s.indexOf(1));
console.log(s.indexOf(5));
console.log(s.indexOf('a'));
console.log(s.indexOf(1,1));
console.log(s.indexOf(1,s.indexOf(1)+1));


console.log(s.indexOf(3)!==-1);
console.log(s.includes(3));

// Refrence Type
// Array can have Objects
const courses = [
    {id:1, name:'a'},
    {id:2, name:'b'}

];
const f = courses.find( function(course){
    return course.name ==='a';
});
console.log(f);


