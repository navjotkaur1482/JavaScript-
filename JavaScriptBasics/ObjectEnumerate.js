// How to Enumerate properties of an object
// how to get all properties of an object

const circle={
    radius:1,
    draw()
    {
        console.log('draw');
    }
};

// 1.For in loop

for(let key in circle)
{
    console.log(key, circle[key]);
}

console.log('-------------------------');

//2.Using for of loop

for(let k of Object.keys(circle)){
    console.log(k);
}


//
for(let entry of Object.entries(circle)){
    console.log(entry);
}
// in operator
// check a property in an object:
if('price' in circle)
{
    console.log('yes');
}
console.log('-------------------------');

if('draw' in circle)
{
    console.log('yes');
}
console.log('-------------------------');

if('radius' in circle)
{
    console.log('yes');
}
