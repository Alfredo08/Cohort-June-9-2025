
// Clossure
const first = () => {
    let message = "Hello, this is the first message.";
    console.log(message);

    const second = () => {
        let message2 = "Hey there, this is the second message.";
        console.log(message2);
        console.log(message);
    }
    return second;
}

let whatIsThisHolding = first();
whatIsThisHolding();

const countingVisits = () => {
    let count = 0;
    count ++;
    console.log(count);
    const extraVisit = () => {
        count ++;
        console.log(count);
    }

    return extraVisit;
}

let totalNumOfVisits = countingVisits();
totalNumOfVisits();
totalNumOfVisits();
totalNumOfVisits();
totalNumOfVisits();
totalNumOfVisits();
countingVisits();
totalNumOfVisits();