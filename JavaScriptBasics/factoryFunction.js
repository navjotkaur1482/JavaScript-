// it produces number of objects of same type
// came case : oneTwoThree

function createCircle(radius){
    return{
        radius,
        draw(){
            console.log('draw');
        }

    };
}

const c1=createCircle(1);
console.log(c1.radius);
c1.draw();

const c2 = createCircle(5);
console.log(c2);

console.log(c1);


// Constructor function also used to create objects

// Name : pascal Notation: OneTwoThreeFour

function Circle(radius)
{
    this.radius = radius;
    this.draw = function()
    {
        console.log('draw', radius);
    }
}
// call constructor function
const a = new Circle(1);
console.log(a);
console.log(a.radius);
a.draw();













