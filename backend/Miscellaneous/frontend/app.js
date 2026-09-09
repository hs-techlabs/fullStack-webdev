// let arr=[1,2,3];
// arr.sayHello=()=>{
//     console.log("Hello");
// }



// function Personmaker(name,age){
//     const person={
//         name:name,
//         age:age,
//         talk(){
//             console.log(`Hello my name is ${name} and I am ${age} years old`);
//         },
//     };
//     return person;
// }


// New operator
// The new operator lets developers create an instance of a user-defined object type or of one of
// the built-in object types that has a constructor function.
//constractor function
// function Personmaker(name,age){
//     this.name=name;
//     this.age=age;
//     console.log(this);
//     // this.talk=function(){
//     //     console.log(`Hello my name is ${this.name} and I am ${this.age} years old`);
//     // };
// }
// Personmaker.prototype.talk=function(){
//     console.log(`Hello my name is ${this.name} and I am ${this.age} years old`);
// };




// class 
// class Person{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//         // console.log(this);
//     }
//     talk(){
//         console.log(`Hello my name is ${this.name} and I am ${this.age} years old`);
//     }
// }
// let p1=new Person("krishna",20);
// let p2=new Person("ram",21);




// inheritance

class person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    talk(){
        console.log(`Hello my name is ${this.name} and I am ${this.age} years old`);
    }
}

class student extends person{
    constructor(name,age,rollno){
        super(name,age);
        this.rollno=rollno;
    }
}
class teacher extends person{
    constructor(name,age,subject){
        super(name,age);
        this.subject=subject;
    }
}
let s1=new student("krishna",20,101);
let t1=new teacher("ram",30,"maths");