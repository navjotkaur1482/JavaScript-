// for /while /do-while /for...in/ for of...
// infinite loop
//console.log('hello world');
for(let i=0; i<=10; i++)
{
    console.log(i);
    if(i%2==0)
    {
        console.log('Hii this is even number');
    }
}

//while loop
let i=11;
while(i<=10){
    console.log(i);
    i++;
}
console.log('----------------------')

// do while loop will execute atleast on
let p=11;
do{
    console.log(p);
    p++;
}
while(p<=10);



//for in
// for objects

const persons = {
    name :'Navjot',
    age : 25
};

for(let key in persons)
{
    console.log(key, persons[key]);
}
const colors=['red', 'blue','green'];
for(let index in colors){
    console.log(index, colors[index]);
}

// For of is used for array

for(let col of colors)
{
    console.log(col);
}


//break and continuee statement

let k=0;
while (k<10)
{
    if(k===5)
        break;
console.log(k);
k++;
}
