//1
function average(...arr) {
    let sum = 0;
    
    arr.forEach(   el => {  sum += el; } )

    return sum / arr.length;
}

var numbers = [1, 2, 3, 4, 5];
var averageValue = average(...numbers);
console.log( averageValue );

console.log(average(14,17,2));

//2

function values(f, low, high) {
    var res = [];
    for (let i = low; i <= high; i++) {
        res.push(f[i]);
    }
    return res;
}

const f = [1,2,3,3,2,1];
const valuesArray = values(f, 0, 4);
console.log(valuesArray); 

//3

function callWithContext(obj, callback) {
    callback.call(obj);
}

var person = {
    name: "Roman",
    age: 19,
};

const Callback = function () {
    console.log(`Today is ${this.age}! Happy birthday ${this.name}.`);
};

callWithContext(person, Callback);

//4

function ff() {
    let count = 0;
    return {
        increment() {
            count++;
        },
        getValue() {
            return count;
        },
    };
}

const counter = ff();
for(let j = 0; j < 10; j++)
{counter.increment();}
console.log(counter.getValue()); 

//5

function getGreeting(name) {
    let cachedGreeting;
    return function () {
        if (!cachedGreeting) {
            cachedGreeting = `Hello ${name}`;
        }
        return cachedGreeting;
    };
}

var greeting = getGreeting("Roman");
console.log(greeting()); 

greeting = getGreeting("Oleg");
console.log(greeting()); 

console.log(greeting()); 

//6

function Sum1(num1) {
    return function(num2) {
        return num1 + num2;
    };
}

var rs = Sum1(5);
console.log(rs(10));

//7

function CheckText(text) {
    return function(element) {
        return text.includes(element);
    };
}

var checkedText = CheckText(['Roma', 'Dima', 'Andriy']);

console.log(checkedText('Roma'));
console.log(checkedText('Dima'));
console.log(checkedText('Oleksandr'));

//8

const capitalizeProperty = (array, property) => {
    return array.map(obj => ({
      ...obj,
      [property]: obj[property].charAt(0).toUpperCase() + obj[property].slice(1)
    }));
  };
  
  const objectsArray = [
    { name: 'john', age: 25 },
    { name: 'emma', age: 30 },
    { name: 'alex', age: 22 }
  ];
  
  const capitalArray = capitalizeProperty(objectsArray, 'name');
  console.log(capitalArray);

//9

//call

function callWithContext(obj, callback) {
    callback.call(obj);
}

var person = {
    name: "Roman",
    age: 19,
};

const Callback1 = function () {
    console.log(`Today is ${this.age}! Happy birthday ${this.name}.`);
};

//apply

const n = [5, 6, 2, 3, 7];

const max = Math.max.apply(null, n);

console.log(max);
// Expected output: 7

const min = Math.min.apply(null, n);

console.log(min);
// Expected output: 2

//bind
const module = {
    x: 42,
    getX: function () {
      return this.x;
    },
  };
  
  const unboundGetX = module.getX;
  console.log(unboundGetX()); // The function gets invoked at the global scope
  // Expected output: undefined
  
  const boundGetX = unboundGetX.bind(module);
  console.log(boundGetX());
  // Expected output: 42

  //10
  
  function callBackSave(callback, ...args) {
    console.log(`function name: ${callback.name}`);
    console.log(`args: ${args}`)
    console.log(`execution time: ${new Date().toLocaleString()}`);
    console.log('function result:');
    return callback(...args);
}

function pow(x, n) {
    return x ** n;
}

console.log(callBackSave(pow, 3, 3));

//11

function cachedFunction(func) {
    let lastResult;
    let lastInvoke;

    return function(...args) {
        if (!lastInvoke || (Date.now() - lastInvoke) > 10) {
            lastResult = func(...args);
            lastInvoke = Date.now();
        }
        return lastResult;
    };
}

function pow(x, n) {
    return x ** n;
}

const cachedPow = cachedFunction(pow);

console.log(cachedPow(3, 3));
console.log(`cached: ${cachedPow()}`);
setTimeout(() => { console.log(cachedPow(3, 3)) });