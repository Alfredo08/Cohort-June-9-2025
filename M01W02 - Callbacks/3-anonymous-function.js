(
    () => console.log("I am an anonymous function")
)

(
    function(){
        console.log("I am also an anonymous function");
    }
)
                                                // Callback
const printInformation = (firstName, lastName, age, hello) => {
    console.log(firstName);
    console.log(lastName);
    console.log(age);
    hello();
}

printInformation("Alex", "Miller", 25, () => console.log("Hello"));