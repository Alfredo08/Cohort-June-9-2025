const names = ["Alex", "Martha", "Julie", "Alan", "Michael"];

for(let i = 0; i < names.length; i ++){
    console.log(names[i], i);
}
console.log("--------");
            

const printName = (name) => {
    console.log(name);
}

// We always require 1 argument
names.forEach((name, index) => {
    console.log(name, index);
});

const people = [{
    fName: "Alex",
    lName: "Miller",
    age: 25
},
{
    fName: "Martha",
    lName: "Smith",
    age: 27
},
{
    fName: "Alex",
    lName: "Winston",
    age: 29
},
{
    fName: "Julie",
    lName: "Smith",
    age: 21
}];

let foundAlex = people.find((person) => person.lName === "Winston");
// let foundAlex = people.find((person) => person.lName === "Salazar");
console.log(foundAlex);

let foundAllAlex = people.filter((person) => person.fName === "Alex");
console.log(foundAllAlex);

let fullNames = people.map((person) => {
    return {
       fullName: person.fName + " " + person.lName
    }
});

console.log(fullNames);
console.log(people);