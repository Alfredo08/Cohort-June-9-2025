                                                        // Callback
const printStudentInformation = (fName, lName, course, message) => {
    console.log("Hey there " + fName + " " + lName + ".")
    console.log("Welcome to the course of " + course);
    message();
}

const welcomeMessage = () => {
    console.log("We are happy to have you here. Hopefully you feel very welcomed!");
}

printStudentInformation("Alex", "Miller", "Ruby on Rails", welcomeMessage);

welcomeMessage();