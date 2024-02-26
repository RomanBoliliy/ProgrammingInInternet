//10

var arr = [-4, -2, 0, 2, 4];
console.log(Math.sqrt(arr[2]));
console.log(arr[0]+arr[4]);
var sum = 0;
arr.forEach(element => {
    if(element<0)
    {
    sum +=  Math.pow(element, 2);
    }
});
console.log(sum);

//11

class Car{
constructor(OwnerName, Name, Volume)
{
    this.OwnerName = OwnerName;
    this.Name  = Name;
    this.Volume = Volume;
}
}
var Reno = new Car("Volodimyr", "Megane", 2.0);
var BMW = new Car("Yaroslav", "E90", 3.0);
var Toyota = new Car("Taras", "Supra", 3.0);
var cars = [Reno, BMW, Toyota];
var currentEl = cars[0];
cars.forEach(element => {
    if(element.Volume<currentEl.Volume){currentEl=element}
});
console.log(currentEl);

//12

var first = prompt("Enter first number ", 1);
var seccond = prompt("Enter seccond number ", 2);
var third = prompt("Enter third number ", 3);
var fourth = prompt("Enter fourth number ", 4);

alert(Math.max(Math.min(first, seccond), Math.min(third, fourth)));

//13

var st = prompt("Enter the string: ");
alert("Length of string is equal: " + st.length);
 
const strRev =  st.split('').reverse().join(''); 
alert(strRev); 
 

