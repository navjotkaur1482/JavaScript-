// iF ELSE STATEMENT
let hour=20;
if(hour>6 && hour<12) console.log('Good Morning');
else if(hour>12 && hour <18) console.log('Good Afternoon');
else console.log('Good Evening');


let a=400;
let b=200;
let c=300;

if(a>b && a>c)
{
    console.log('a is the greatest');
}
else if(b>c)
{
    console.log('b is the greatest');
}
else{
    console.log('c is the greatest');
}


// Switch case 
let role='navjot';
switch(role){
    case 'guest':
        console.log('guest user');
        break;
    case 'admin':
        console.log('admin user');
        break;
    case 'vendor':
        console.log('vendor user');
        break;
    default:
        console.log('No user');    
        break;
}

//role with if else
if(role==='guest') console.log('guest user');
else if(role==='admin') console.log('admin user');
else if(role==='vendor') console.log('vendor user');
else console.log('No user');