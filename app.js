// ========================= 01 =============================
// var firstName = prompt('Enter your first name');
// var lastName = prompt('Enter your last name');
// var fullName = firstName + " " + lastName;
// console.log(fullName);


// ========================= 02 =============================
function displayLength() {
    var userInput = document.getElementById('phoneModel').value;
    var length = userInput.length;
    document.getElementById('result1').textContent = `Length of input: ` + length;
}


// ========================= 03 =============================
function findIndex() {
    var word = 'Pakistani';
    var index = word.indexOf('n');
    document.getElementById('result2').textContent = `Index of 'n' in ` + word + ": " + index;
}

window.onload = findIndex;


// ========================= 04 =============================
function findLastIndex() {
    var phrase = 'Hello World';
    var lastIndex = phrase.lastIndexOf('l');
    document.getElementById('result3').textContent = `Last index of 'l' in ` + phrase + ": " + lastIndex ;
}

window.onload = findLastIndex;

// ========================= 05 =============================
function findCharacterAtIndex() {
    var word2 = 'Pakistani';
    var charAtIndex = word2.charAt(3);
    document.getElementById('result4').textContent = `Character at 3rd index in ` + word2 + ": " + charAtIndex;
}

window.onload = findCharacterAtIndex;


// ========================= 06 =============================
// function greetUser() {
//     var firstName = prompt("Enter your first name:");
//     var lastName = prompt("Enter your last name:");
//     var fullName = firstName.concat(" ", lastName);
//     document.getElementById('greeting').textContent = "Hello, " + fullName + "!";
// }

// window.onload = greetUser;




// ========================= 07 =============================
function replaceWord() {
    var originalWord = 'Hyderabad';
    var newWord = originalWord.replace('Hyder', 'Islam');
    document.getElementById('result5').textContent = `Original word: ` + originalWord + " New word: " + newWord;
}

window.onload = replaceWord;


// ========================= 08 =============================
function replaceAnd() {
    var message = "Ali and Sami are best friends. They play cricket and football together.";
    var newMessage = message.replace(/and/g, "&");
    document.getElementById('result6').textContent = newMessage;
}

window.onload = replaceAnd;



// ========================= 09 =============================
function convertStringToNumber() {
    var stringValue = "472";
    var numberValue = Number(stringValue);

    document.getElementById('stringValue').textContent = "String value: " + stringValue + ", Type: " + typeof stringValue;
    document.getElementById('numberValue').textContent = "Number value: " + numberValue + ", Type: " + typeof numberValue;
}

window.onload = convertStringToNumber;



// ========================= 10 =============================
// function convertToUpperCase() {
//     var userInput = prompt("Enter some text:");
//     var upperCaseInput = userInput.toUpperCase();
//     document.getElementById('result7').textContent = "Converted text: " + upperCaseInput;
// }

// window.onload = convertToUpperCase;




// ========================= 11 =============================
// function convertToTitleCase() {
//     var userInput = prompt("Enter some text:");
//     var titleCaseInput = userInput.toLowerCase().split(' ').map(function(word) {
//         return word.charAt(0).toUpperCase() + word.slice(1);
//     }).join(' ');
//     document.getElementById('result8').textContent = "Converted text: " + titleCaseInput;
// }

// window.onload = convertToTitleCase;


// ========================= 12 =============================
function convertAndRemoveDot() {
    var num = 35.36;
    var numAsString = num.toString(); 
    var result = numAsString.replace('.', ''); 
    document.getElementById('result9').textContent = "Number after removing dot: " + result + ", Type: "  + typeof result;
}

window.onload = convertAndRemoveDot;


// ========================= 13 =============================
// function validateUsername() {
//     var username = prompt("Enter your username:");
    
//     var specialSymbols = /[@.,!]/;

//     if (specialSymbols.test(username)) {
//         alert("Invalid username. Please enter a username without @, ., , or !");
//         validateUsername();
//     } else {
//         alert("Username accepted: " + username);
//     }
// }

// window.onload = validateUsername;


// ========================= 14 =============================
// function searchArray() {
//     var A = ["cake", "apple pie", "cookie", "chips", "patties"];
//     var userInput = prompt("Enter an item to search:").toLowerCase(); 
    
//     var flag = false;
//     for (var i = 0; i < A.length; i++) {
//         if (A[i].toLowerCase() === userInput) {
//             flag = true;
//             break;
//         }
//     }

//     if (flag) {
//         alert("Yes, '" + userInput + "' is available in our bakery.");
//     } else {
//         alert("No, '" + userInput + "' is not available in our bakery.");
//     }
// }

// window.onload = searchArray;



// ========================= 15 =============================
// function validatePassword() {
//     var password = prompt("Enter a password:");
    
//     var hasAlphabet = false;
//     var hasNumber = false;
//     for (var i = 0; i < password.length; i++) {
//         var charCode = password.charCodeAt(i);
//         if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
//             hasAlphabet = true;
//         }
//         if (charCode >= 48 && charCode <= 57) {
//             hasNumber = true;
//         }
//     }

//     if (!hasAlphabet || !hasNumber || password.length < 6 || !isNaN(password[0])) {
//         alert("Invalid password. Please enter a valid password:\n" +
//               "- It should contain alphabets and numbers.\n" +
//               "- It should not start with a number.\n" +
//               "- It must be at least 6 characters long.");
//         validatePassword();
//     } else {
//         alert("Password accepted.");
//     }
// }

// window.onload = validatePassword;


// ========================= 16 =============================
function displayAlphabets() {
    var university = "University of Karachi";

    var characters = university.split('');

    for (var i = 0; i < characters.length; i++) {
        document.write(characters[i] + "<br>");
    }
}

window.onload = displayAlphabets;


// ========================= 17 =============================
// function displayLastCharacter() {
//     var userInput = prompt("Enter some text:");
    
//     if (userInput && userInput.length > 0) {
//         var lastCharacter = userInput.charAt(userInput.length - 1);
//         alert("Last character of '" + userInput + "' is: " + lastCharacter);
//     } else {
//         alert("Invalid input. Please enter some text.");
//     }
// }

// window.onload = displayLastCharacter;



// ========================= 18 =============================
function countOccurrences() {
    var str = "The quick brown fox jumps over the lazy dog";
    var wordToFind = "the";
    var count = 0;
    
    var lowerCaseStr = str.toLowerCase();
    var lowerCaseWord = wordToFind.toLowerCase();

    var words = lowerCaseStr.split(' ');
    for (var i = 0; i < words.length; i++) {
        if (words[i] === lowerCaseWord) {
            count++;
        }
    }

    document.getElementById('result11').textContent = "Number of occurrences of '" + wordToFind + "' in the string:\n" + str + "\nis: " + count;
}

window.onload = countOccurrences;
