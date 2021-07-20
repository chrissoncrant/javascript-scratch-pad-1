function getLastLetter(string) {
    return string.slice((string.length - 1), (string.length));
}

console.log(getLastLetter("chicken"));

//==========================================

const theButton = document.querySelector("button");

theButton.onclick = function() {
    let answer = prompt("Are you pressing my button?");
    if (answer === "yes") {
        alert("okay!");
    } else {
        alert("well screw you then buddy!");
    }  
}


function makeGreen() {
    const h1 =  document.querySelector("h1"); //stores the html element in a JS variable so we can manipulate the value and attributes.
    h1.style.color = "green";
    h1.style.textDecoration = "underline";
    h1.style.fontSize = "3em";
    h1.style.textTransform = "uppercase";
}


/*
let firstName = prompt("Enter your first name.");
let lastName = prompt("Enter your last name.");
let currentYear = prompt("Enter the current year.");
let birthYear = prompt("Enter your birth year.");


let greeting = "Hello there " + firstName + " " + lastName + "! " + "I see that you are aproximately " + (currentYear - birthYear) + " years old. Nice!";
console.log(greeting);

alert(greeting);
*/


/*
let age = 16;

let allowed = (age > 18) ? "let them in." : (age === 18) ? "You're so close!" : (age < 18) ? "kick em out" : '';

console.log(allowed);

let answer = prompt("What's the official name of Javascript?");

if (answer === "ECMAScript") {
    alert("Right!");
} else {
    alert("You don't know? \"ECMASript\"");
}
*/

