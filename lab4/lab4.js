//1-2

function CarFun(company, model, year) {
    this.company = company;
    this.model = model;
    this.year = year;
}

class CarClass {
    constructor(company, model, year) {
        this.company = company;
        this.model = model;
        this.year = year;
    }
}

var Car1 = Object.create(CarFun);
Car1.company = 'Nissan';
Car1.model = 'Skyline';
Car1.year =  1990;

console.log(Car1);

var Car2 = Object.create(CarClass);
Car2.company = 'Renault';
Car2.model = 'Megane';
Car2.year = 2013;

console.log(Car2);

//3-4

class Person{
constructor(firstName, lastName, birthDate) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthDate = birthDate;
}
    getFullInfo = function() {
        console.log(`Full name: ${this.firstName} ${this.lastName}\nBirth date: ${this.birthDate}`);

}
}
class Employee extends Person{
    constructor(firstName, lastName, birthDate, position){
        super(firstName,lastName, birthDate);
        this.position = position;
}
    getFullInfo = function() {
        console.log(`Full name: ${this.firstName} ${this.lastName}\nBirth date: ${this.birthDate}\nPosition: ${this.position}`);
    }
}

var myEmployee = new Employee('Roman', 'Bolily', new Date(2004, 9, 14).toLocaleDateString(), 'Student');

myEmployee.getFullInfo();

//5

function compareClasses(obj1, obj2) {
    var class1 = obj1.constructor.name;
    var class2 = obj2.constructor.name;
    
    if (class1 === class2) {
        console.log(`Both objects are instances of ${class1}`);
    } else {
        console.log(`Object 1: ${class1}\nObject 2: ${class2}`);
    }
}


const first = new CarClass('Porshe', '911', 2020);
const second = new CarClass('Lada', '2106', 1990);

compareClasses(first, second);

const third = new Employee('Roman', 'Bolily', new Date(2005, 9, 14).toLocaleDateString(), 'Student');

compareClasses(first, third);

//6

function ObservedPerson(person) {
    this.person = person;
    this.calls = 0;

    this.getFullInfo = function() {
        this.calls++;
        this.person.getFullInfo();
    }
}

var myPerson = new Person('Roman', 'Bolily', new Date(2004, 9, 14).toLocaleDateString())
var myObservedPerson = new ObservedPerson(myPerson);

myObservedPerson.getFullInfo();
console.log(myObservedPerson.calls);

myObservedPerson.getFullInfo();
console.log(myObservedPerson.calls);

myObservedPerson.getFullInfo();
console.log(myObservedPerson.calls);

//7-8

class Shape {
    constructor() {
        if (new.target === Shape) {
            throw new TypeError("Cannot instantiate abstract class Shape");
        }
    }

    Area() {
        throw new Error("Abstract method 'Area()' must be implemented");
    }

    Perimeter() {
        throw new Error("Abstract method 'Perimeter()' must be implemented");
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    area() {
        return Math.PI * this.radius ** 2;
    }

    perimeter() {
        return 2 * Math.PI * this.radius;
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }

    area() {
        return this.width * this.height;
    }

    perimeter() {
        return 2 * (this.width + this.height);
    }
}

var shapesArray = [new Circle(1), new Circle(2), new Circle(3), new Circle(4),  new Circle(5), new Rectangle(1, 2), new Rectangle(3, 4), new Rectangle(5,6), new Rectangle(7, 8), new Rectangle(9, 10)];

let count = 0;
shapesArray.forEach(element => {
    
    console.log(`Shape ${count}:
    Shape type: ${element.constructor.name}
    Shape area: ${element.area()}
    Shape perimeter: ${element.perimeter()}`); 
    count++;
});

