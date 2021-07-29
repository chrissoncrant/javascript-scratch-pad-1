



const ftoc = function(temp) {
    temp = ((temp - 32) * (5/9));
    if (temp % 1) {
        return temp.toFixed(1);
    };
    return temp;

};

const ctof = function(temp) {
    temp = (temp * (9/5)) + 32;
    if (temp % 1) {
        return temp.toFixed(1);
    }
    return temp;
};

console.log(ftoc(0))





//RECURSION PRACTICE

//Merge Sort:
/*
let arr = [4, 1, 3, 2, 0, -1, 7, 10, 9, 20] //length 10

function mergeSort(arr, start, end) {
    //base case: Because we are working from the start to the end once the start overlaps the end value we have reached our base case. Not sure what this means just yet. 

    if (start < end) {
        let mid = Math.floor((start + end) / 2);
        mergeSort(arr, start, mid);
        mergeSort(arr, mid + 1, end);
        merge(arr, start, mid, end);
    };

    return arr;
}

function merge(arr, start, mid, end) {
    //building temp array to avoid modifying original arr.

    let tempArr = [];

    let i = start,
        j = mid + 1,
        k = 0;

    while (i <= mid && j <= end)  {       
        if (arr[i] <= arr[j]) {
            tempArr[k] = arr[i];
            i++;
            k++;
        } else {
            tempArr[k] = arr[j];
            j++;
            k++;
        };    
    }
    
    while (i <= mid) {
        tempArr[k] = arr[i];
        i++;
        k++;
    }

    while (j <= end) {
        tempArr[k] = arr[j];
        j++;
        k++;
    }

    for (i = start; i <= end; i++) {
        arr[i] = tempArr[i - start];
    }

}


console.log(mergeSort(arr, 0, 9))
*/


/* =====================================
//Fibonacci Sequence:

//Non-optimized:
//For higher values the recursions becomes intense and will overload the computer. To reduce this we need MEMOIZATION!!
function getFib(num) {
    let arr = [];
    if (!num) {return 0;};
    if (num === 1) {return 1;};
    return getFib(num - 1) + getFib(num - 2)
}

console.log(getFib(30));
===================================== */

//Binary Search: Find Index Value of a sorted array's value (using divide and conquer):

/*
//Simple and Elegant Version from the Recursion Video:
let inputArr = [1, 2, 8, 10, 33, 45, 65, 76, 89, 100]; //length: 10

function findIndex(inputArr, leftBound, rightBound, value) {
    if (leftBound > rightBound) {
        return inputArr[0];
    }

    let midpoint = Math.floor((leftBound + rightBound) / 2);

    if (value === inputArr[midpoint]) {
        return midpoint;
    }

    if (value < inputArr[midpoint]) {
        return findIndex(inputArr, leftBound, midpoint - 1, value);
    }

    if (value > inputArr[midpoint]) {
        return findIndex(inputArr, midpoint + 1, rightBound, value)
    }
}


console.log(findIndex(inputArr, 0, 9, 89)) 
*/

/*
//Complicated Version (My non elegant attempt)
//Benefit of this one is you do not need to know the length of the Array inserted, though it is not hard to determine this.
let inputArr = [1, 2, 8, 10, 33, 45, 65, 76, 89, 100]; //length: 10

//console.log(inputArr.slice(0, 2).length);

let midpoint = Math.floor((inputArr.length - 1) / 2); //Math.floor is used to eliminate the decimal that occurs if array length - 1 is odd.

function findIndex(inputArr, value) {
    let midpoint = Math.floor((inputArr.length - 1) / 2); 
    let strCheck;
    console.log("here's the string check value: " + strCheck);
    if (inputArr.length === 1) {
        if (inputArr[0] === value) {return 0;}
            else {return "";};
    };    
    if (inputArr[midpoint] === value) {
        return midpoint;
    };
    if (inputArr[midpoint] > value) { 
        strCheck = findIndex(inputArr.slice(0, midpoint), value);
        if (typeof strCheck === "number") {
            return strCheck;
        } else {return "Entered value not found in array"};
        
    }
    if (inputArr[midpoint] < value) {
        strCheck = findIndex(inputArr.slice((midpoint + 1), inputArr.length), value) + inputArr.slice(0, (midpoint + 1)).length;
        if (typeof strCheck === "number") {
            return strCheck;
        } else {return "value not found in array"};
     };
}

console.log(findIndex(inputArr, 4)); 
*/

/* =====================================
//Sum of Natural Numbers
function sumOfRange(start, end) {
    if (!(end - start)) {
        return start;
    }
    return sumOfRange((start + 1), end) + start;
}

console.log(sumOfRange(1, 100))
===================================== */

/* =====================================
//Decimal to Binary:

function decToBin(num) {
    if (!num) {return 0 + "";};
    if (num == 1) {return 1 + "";};
    let remainder = (num % 2) + "";
    return decToBin((num - remainder) / 2) + remainder;
}

console.log(decToBin(233));


function getBinary(decimal, result) {
    if (decimal == 0) {
        return result;
    }
    result = decimal % 2 + result;
    return getBinary(decimal / 2, result)
}
===================================== */


/* =====================================
//Messing with MODULO
/* if we want to find the whole number integer of the number of divisions: 

take in the dividend, so 5 % 3 is basically 5 / 3, only providing the remainder, after max integers of the divisor are removed.

Modulo provides only the remainder. Here is a function that provides the number of times the divisor fully divides into the dividend. 

modulo + (quotient of dividend/divisor)(divisor) = Dividend

m + qb = a

function getWholeQuotients(dividend, divisor) {
    let modulo = dividend % divisor;
    let numOfWholeQuotients = (dividend - modulo) / divisor;
    return numOfWholeQuotients;
}
===================================== */ 

/* =====================================
//Palindrome Finder:
function isThisAPalindrome(str) {
    if (!(str.length) || str.length === 1) {
        return true;
    }
    if (str.charAt(0) === str.charAt(str.length - 1)) {
        return isThisAPalindrome(str.slice(1, (str.length -1)));
    }
    return false;
}

console.log(isThisAPalindrome("kayak"))
===================================== */ 


/* =====================================
//String reverse using recursion:
function strRev(str) {
    if (!str.length) {
        return "";
    }
    return  strRev(str.slice(1)) + str.charAt(0);
}

console.log(strRev("chunky chicken"))
===================================== */ 

/* =====================================
//String reverse using while loop (iteratively):
function strRev(str) {
    let arr = [];
    let strChar = 0;
    let keepGoing = true;
    while(keepGoing) {
        if (str.charAt(strChar) === "") {
            keepGoing = false;
        } 
        arr.unshift(str.charAt(strChar))
        strChar++;
    }
    str = arr.join("");
    return str;
}

console.log(strRev("string this"))
===================================== */


//===================================================
//===================================================
//===================================================
//ARRAY PRACTICE
/*
let fruitArr = ["apples", "oranges", "bananas", "peaches"];

function createLi(arr) {
    let arrLength = arr.length;
    let text = "";
    for (let i = 0; i < arrLength; i++) {
        text += `<li>${arr[i]}</li>`;
    }
    return text;
}

console.log(createLi(fruitArr));

document.getElementById("demo").innerHTML = createLi(fruitArr);
*/


//===================================================
//===================================================
//===================================================
//TRANSFORMING CASE
/*
let str = "camelCaseYourAss";


function lowerCase(str){
    str = str.replace(/([A-Z])/g, " $1");
    str = str.replace(/([A-Z])/g, u => u.toLowerCase());
    console.log(str);
    return str.replace(/^[a-z]/, u => u.toUpperCase());
  }

console.log(lowerCase(str));
*/


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
        alert("Thank you!");
    } else {
        alert("Just say 'yes'.");
    }  
}


function makeGreen() {
    const h1 =  document.querySelector("h1"); //stores the html element in a JS variable so we can manipulate the value and attributes.
    h1.style.color = "green";
    h1.style.textDecoration = "underline";
    h1.style.fontSize = "3em";
    h1.style.textTransform = "uppercase";
}



// =================================================
/*
//DOM PRACTICE
//Storing DOM elements in variables:
const container = document.querySelector("#container");

const content = document.createElement("div");

const para = document.createElement('p');

const h3 = document.createElement('h3');

const container2 = document.createElement('div');

const cont2para = document.createElement('p');

const h1 = document.createElement('h1');


//Adding classes to DOM elements:
content.classList.add('content');

para.classList.add('paragraph');

h3.classList.add('title3');


//Adding text to the DOM elements:
content.textContent = "This is the glorious text-content!";

para.textContent = "Hey! I am a green paragraph!";

h3.textContent = "Yo! I am a blue h3 element!";

h1.textContent = "I'm an h1 in a div!";

cont2para.textContent = "I'm a p in the same div as h1!";


//Styling the DOM elements:
para.style.color = "green";

h3.style.color = "blue";

container2.style.cssText = "border: 2px solid black; background: pink";

//Appending DOM elements to HTML elements:
container.appendChild(h3);

container.appendChild(content);

content.appendChild(para);

container2.appendChild(h1);

container2.appendChild(cont2para);

container.appendChild(container2);
*/

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