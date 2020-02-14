let num = [1,2,3,4,5,6,8,9,0];

//End
const last = (num.pop());
console.log(num);
console.log(last);

//Beginning
const f = (num.shift());
console.log(num);
console.log(f);

//Middle
num.splice(0,1);
console.log(num);

// Empty an array
//num = [];
console.log(num);

//using length
//num.length=0;
console.log(num);

//num.splice[0];
console.log(num);

//using pop method
while(num.length>0){
    num.pop();
}
console.log(num);
