
//===================================================
//===================================================
//===================================================
//TRANSFORMING CASE

let str = "camelCaseYourAss";


function lowerCase(str){
    str = str.replace(/([A-Z])/g, " $1");
    str = str.replace(/([A-Z])/g, u => u.toLowerCase());
    console.log(str);
    return str.replace(/^[a-z]/, u => u.toUpperCase());
  }

console.log(lowerCase(str));



//===================================================
//===================================================
//===================================================
//INTERSECTION FINDER

/*
let strArr = ["1, 2, 4, 5, 6, 11, 13", "3, 5, 11, 25, 4"];

function findIntersection(strArr) {
    let str1Arr = strArr[0].split(", ");

    let str2Arr = strArr[1].split(", ");
    
    let intArr = [];

    for (let i = 0; i < str1Arr.length; i++) {
        for (let j = 0; j < str2Arr.length; j++) {
            if (str1Arr[i] === str2Arr[j]) {
                intArr.push(str1Arr[i]);
            }
        }
    }
    return intArr.join(", ");
}

console.log(findIntersection(strArr));
*/


//===================================================
//===================================================
//===================================================

// Find Longest String:
/* Version 2:
let sen = "I'm the&%% strings89743(*(*())) thing''s'ss"; //The Input

sen = sen.replace(/[^A-Za-z0-9 ]/g, "");

let longest;

let arr = sen.split(" ");

console.log(arr);

arr = arr.sort(function(a, b) {
    return b.length - a.length
});

console.log(arr);

longest = arr[0];

console.log(longest);
*/


/* Version 1:
function findLargestStr(sen) {
    function splitStrIntoArray(sen) {
        let arr = sen.split(" ");
        return arr;
    }

    let strArray = splitStrIntoArray(sen);

    let largestStr = strArray[0];

    function calcTrueLength(str1) {
        let length1 = str1.length;
        let length2 = 0;
        if (str1.match(/[^A-Za-z0-9]/g)) {
            let length2 = str1.match(/[^A-Za-z0-9]/g).length;
            return length1 - length2;  
        } else {return length1};  
    }

    let largestStrLength = calcTrueLength(largestStr);
    
    for (let i = 1; i < strArray.length; i++) {
        let a = calcTrueLength(strArray[i]);
        if (a > largestStrLength) {
            largestStr = strArray[i];
            largestStrLength = a;
        }
    }
    return largestStr;
}

console.log(findLargestStr(sen))
*/


//===================================================
//===================================================
//===================================================

//STRING VALIDATION
/*
function usernameValidation(str) { 

    //console.log(str.slice(0, 1) === regex)

    /*
    if (str.length < 4 || str.length > 25) {
      return "invalid";
    } 

    if (str.slice(0,1).match(/[^A-Za-z]/)) {
        console.log("Enter a number for the first letter.")
    };
    
    if (str.slice(str.length - 1, str.length).match(/[^_]/)) {
        console.log("Not an underscore");
    } else {
        console.log("You can't use an underscore for the last character!")
    };

    if (str.slice(1, str.length).match(/[A-Za-z0-9_]/)) {
        console.log("body characters are legit");
    }
    */
/*
    const strLength = str.length;

    if (
        (strLength > 4 && strLength < 25) && 
        (str.slice(0, 1).match(/[^0-9_]/)) && 
        (str.slice(1, strLength).match(/[A-za-z0-9_]/)) && 
        (str.slice(strLength - 1, strLength).match(/[^_]/))
        ) {
            return "Valid";
        } else {
            return "Invalid";
        }
    }


console.log(usernameValidation("Hills"));
*/

/* STRING REVERSAL

function firstReverse(str) {
    let arr = [];
    for (let i = str.length; i > 0; i--) {
        arr.push(str.slice((i - 1), i));
    }
    str = arr.join("");
    return str;
}

console.log(firstReverse("eggs and bacon"))
*/

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