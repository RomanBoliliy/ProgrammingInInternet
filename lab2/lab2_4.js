//1 way
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);
//2 way
const array4 = [...array1, ...array2];
//3 way 
array1.push(...array2);  


console.log(array3);
console.log(array4);

console.log(array1);

