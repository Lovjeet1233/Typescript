//lecture for functions

function greet(name:string){
    console.log(`hello ${name}`);
}
greet("Lovjeet singh")

const names =["alice","bob","jack"];

names.forEach((s)=>{
    console.log(s);
})

function Cordi(pt:{x:number;y:number}){
    console.log(`x cordinate is ${pt.x} and y cordinate is ${pt.y}`);
}

Cordi({x:7,y:8});

//Type alias
type Point={
    x:number;
    y:number;
}
function Cordii(pt:Point){
    console.log(`x cordinate is ${pt.x} and y cordinate is ${pt.y}`);
}

Cordii({x:7,y:8});
interface Teacher {
    name: string;
    course: string;
}

interface Student extends Teacher {
    marks: number;
}

// Defining the `getStudent` function
function getStudent(): Student {
    return {
        name: "John Doe",
        course: "Mathematics",
        marks: 95
    };
}

// Using the function
const detail = getStudent();
console.log(detail.name);

//https://dog.ceo/api/breeds/image/random
