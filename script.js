let age = 16;

let allowed = (age > 18) ? "let them in." : (age === 18) ? "You're so close!" : (age < 18) ? "kick em out" : '';

console.log(allowed);

let answer = prompt("What's the official name of Javascript?");

if (answer === "ECMAScript") {
    alert("Right!");
} else {
    alert("You don't know? \"ECMASript\"");
}