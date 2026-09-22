// Split name into the two parts
function splitName(fullName) {
    let space = fullName.indexOf(" ");
    let firstName = fullName.slice(0, space);
    let lastName = fullName.slice(space + 1);
    console.log("first name " + firstName + ", last name " + lastName);
    return [firstName, lastName];
}

/* Reversed order: "Gordon, Larry"
I don't know if you read these but I love commenting hehe*/
function reverseName(firstName, lastName) {
    let result = lastName + ", " + firstName;
    console.log("reversed name: " + result);
    return result;
}

// Greeting format, bro: "Dear L. Lastname"
function greetingName(firstName, lastName) {
    let initial = firstName.substring(0, 1);
    let result = "Dear " + initial + ". " + lastName;
    console.log("greeting: " + result);
    return result;
}

// Calls the other functions to process the name! I think. Well it should.
function processName(fullName) {
    console.log("Name being processed: " + fullName);
    let [firstName, lastName] = splitName(fullName);
    reverseName(firstName, lastName);
    greetingName(firstName, lastName);
    console.log("");
}

let names = ["Anna Kirkham", "Larry Gordon"];
names.forEach(processName);