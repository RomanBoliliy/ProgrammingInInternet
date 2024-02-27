//1

class person{
constructor(Name, Age, City)
{
    this.Name = Name;
    this.Age  = Age;
    this.City = City;
}
}

var q = new person("John", 23,"Boston" );
var w = new person("Steve", 31,"Toronto" );
var e = new person("Light", 30,"Tokyo" );
var r = new person("Ema", 14,"Kyoto" );
var t = new person("Gans", 79,"Lviv" );

var persons = [q,w,e,r,t];

persons.groupName = 'A';
persons.teacher = 'Joan Doe';
persons.year = '2023';

console.log("1 method");

persons.forEach(element => {
    console.log(element);
});

console.log("2 method");

for(var i = 0; i < 5; i++)
{
console.log(persons[i]);
}

console.log("3 method");

var j = 0;
while(persons[j]!=null)
{
    console.log(persons[j]);
    j++;
}

console.log("4 method");

for(var s in persons)
{
console.log(persons[s]);
}

//3
function getYear(pers){
    const res = 2024 - pers.Age
    return res; 
}

console.log(getYear(persons[3]));


//4
function toString(per)
{
console.log(per.Name + " was born in " + per.City + " in " + getYear(per));
}

toString(persons[3]);

//6
function older20(arr)
{
    var newArr = [];
arr.forEach(element => {
    if(element.Age>20)
    {
            newArr.push(element);
    }
});

return newArr;
}

console.log(older20(persons));

//7
 
function destruct(pe)
{
var n = pe.Name;
var c = pe.City;
}
var firstPerson = persons[0];

//8

function getUserData(nm){
    let result = persons.find(person => person.Name === nm);
    if (result === undefined) {
        return new Error("Unable to find user");
    }
    return result;
}


function showUserInfo(nam){
console.log("Loading...");
console.log(getUserData(nam));
console.log("Loading finished");
}

showUserInfo("Ema");