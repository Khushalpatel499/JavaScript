//dirct way of creating an object when we leanr classes then see new way
const student = {
  fullName: "khushal",
  marks: 94.4,
  printMarks: function () {
    console.log("marks=", this.marks); //here this.marks is talk about student.marks
  },
};

//prototype

const employee = {
  calcTax1() {
    console.log("tax rate is 10%");
  },
};

const karanArjun = {
  salary: 5000,
  calcTax1() {
    console.log("tax rate is 30%");
  },
};

karanArjun.__proto__ = employee;

karanArjun.calcTax1();
//if we have many object then we have to only assign that object to that classes and then we can use.

//Classes

class ToyotaCar {
  constructor(newCar, mil) {
    console.log("creating new object");
    this.newCar = newCar; // if no value passed then it show undefined
    this.mil = mil;
  }
  start() {
    console.log("start");
  }
  stop() {
    console.log("stop");
  }
  setBrand(brand) {
    this.brandName = brand; // here this for each object means for which object it is call for that ,it create variable brandName
  }
}

//tet create object

let fortuner = new ToyotaCar("fortuner", 10);
console.log(fortuner);
//for object create using class we don't have to assign prototype it can use their method.
fortuner.start();
fortuner.setBrand("fortuner");

//inheritence

class Parent {
  constructor() {
    this.species = "homo species";
  }
  hello() {
    console.log("hello");
  }
}

class Child extends Parent {}

let obj = new Child();
console.log(obj);

//super

class Person {
  // constructor(){
  //     console.log('enter parent constructor');
  //     this.species='homo';
  // }
  constructor(name) {
    this.name = name;
  }
  eat() {
    console.log("eat");
  }
}

class Engineer extends Person {
  // constructor(branch){
  //     console.log("enter child constructor");
  //     super();// to invoke parent class constructor
  //     this.branch =branch;
  //     console.log("exist child constructor");
  // }

  constructor(name) {
    super(name); // to invoke parent class constructor
  }

  work() {
    super.eat();
    console.log("solve problems,build something");
  }
}

// let engObj =new Engineer('chemical'); // this give error that is must call super constructor in derived calss  before accesing 'this' or returning from derived constructor at new Engineer.
let engObj = new Engineer("khushal");

//Pratice 1:
 let data ="secreate information"
class User {
     constructor(name,email){
        this.name =name;
        this.email =email.
     }
     viewData(){
        console.log('website data',data);
     }
}

let stud1 =new User('x','x12@gmail.com');
let stud2 =new User('y','y12@gmail.com');

//Pratice 2: 

class Admin extends User{
    constructor(name,email) {
        super(name,email);
        
    }
         editData(){
            data='new value';
            console.log(data);
         }
}

let ad1 =new Admin('a1','a1@gmail.com');//there is no name and email so we have to pass that here we in child not create super so it automatically create but which is normal not contain name and email so we create ours to pass name and email into super.


//try catch

let a=5;
let b=6;
console.log(a);
console.log(b);
console.log(a+b);
try{
    console.log(a+c);
} catch(err){
    console.log(err);
}
console.log(a+5);