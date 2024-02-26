// 1 
console.log("It`s first task " + (Math.random()*100));
// 2
var string = "it`s 2 task, and its string, number and bool "
var num = 10;
var bool = false; 
console.log(string + num + " "+ bool);
// 3 
var first = 1, seccond = 2, third = first + seccond;
console.log("it`s 3 task, and resault of: " + first + " + " + seccond + " = " + third);
// 4
alert("it`s alert");
var promptres = prompt("i`m using prompt", "that`s nice");
var confirmres = confirm("confirm is here too");
console.log("Resault of prompt & confirm are " + promptres + " and " + confirmres);
//5
let age = prompt("How old are you?", 100);
alert("You are " + age +  " Years old!"); 
//6
let number = prompt("How much did you buy?", 100);
let cost = prompt("How much did it cost?", 100);
alert("You spend: " + (number*cost)); 
//7
let isNegative = true;
if(prompt("Enter number", 1)>0)
{
    isNegative = false;
}
alert("Your number is negative: " + isNegative);
//8
var day = prompt("Enter number of day", 1);
alert(day);
switch (day) {
    case "1":
        alert("Sunday");
        break;
    case "2":
        alert("Monday");
        break;
    case "3":
        alert("Tuesday");
        break;
    case "4":
        alert("Wednesday");
        break;
    case "5":
        alert("Thursday");
        break;
    case "6":
        alert("Friday");
        break;
    case "7":
        alert("saturday");
        break;
}
//9
console.log("multiplication table for 6");
for(var i = 0; i<10; i++)
{
console.log(6+"*"+i+"="+(6*i));
}

