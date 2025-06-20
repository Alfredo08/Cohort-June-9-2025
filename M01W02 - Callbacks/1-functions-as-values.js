function addTwoNumbers(num1, num2){
    let total = num1 + num2;
    return total;
}

let result = addTwoNumbers(10, 20);
console.log(result);

let result2 = addTwoNumbers(40);
console.log(result2);

let myValue = addTwoNumbers;
console.log(myValue);

let result3 = myValue(40, 70);
console.log(result3);

let elements = [10, 20, addTwoNumbers];
console.log(elements[0]);
console.log(elements[1]);
console.log(elements[2](30, 40));

let myObj = {
    text: "Hello class of June 9",
    num: 25,
    addTwoNumbers,
    printHello: function(){
        console.log("Hello there!");
    }
}

console.log(myObj);
let result4 = myObj.addTwoNumbers(50, 100);
console.log(result4);
myObj.printHello();