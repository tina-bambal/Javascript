// Function to reverse a string
function reverseString() {
    let str = document.getElementById("stringInput").value;
  
    // Using standard method
    let reversed = str.split("").reverse().join("");
  
    // Display result
    document.getElementById(
      "resultOutput"
    ).innerHTML = `Reversed String: ${reversed}`;
  
    /* Manual logic for reversing a string
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    */
  }
  
  // Function to replace characters in a string
  function replaceCharacter() {
    let str = document.getElementById("stringInput").value;
    let charToReplace = document.getElementById("replaceChar").value;
    let replaceWith = document.getElementById("replaceWith").value;
  
    // Using standard method
    let replaced = str.split(charToReplace).join(replaceWith);
  
    // Display result
    document.getElementById(
      "resultOutput"
    ).innerHTML = `Replaced String: ${replaced}`;
  
    /* Manual logic for replacing characters
    let replaced = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] === charToReplace) {
            replaced += replaceWith;
        } else {
            replaced += str[i];
        }
    }
    */
  }
  
  // Function to check if a string is a palindrome
  function checkPalindrome() {
    let str = document.getElementById("palindromeInput").value;
    let originalStr = str.replace(/\s/g, "").toLowerCase();
    let reversedStr = originalStr.split("").reverse().join("");
  
    // Check palindrome using standard method
    if (originalStr === reversedStr) {
      document.getElementById(
        "resultOutput"
      ).innerHTML = `The string "${str}" is a palindrome.`;
    } else {
      document.getElementById(
        "resultOutput"
      ).innerHTML = `The string "${str}" is not a palindrome.`;
    }
  
    /* Manual logic for checking palindrome
    let isPalindrome = true;
    for (let i = 0; i < originalStr.length / 2; i++) {
        if (originalStr[i] !== originalStr[originalStr.length - 1 - i]) {
            isPalindrome = false;
            break;
        }
    }
    if (isPalindrome) {
        document.getElementById("resultOutput").innerHTML = `The string "${str}" is a palindrome.`;
    } else {
        document.getElementById("resultOutput").innerHTML = `The string "${str}" is not a palindrome.`;
    }
    */
  }
  
  // Function to replace a substring in a string
  function replaceSubstring() {
    let str = document.getElementById("stringInput").value;
    let substringToReplace = document.getElementById("substringInput").value;
    let replaceWith = document.getElementById("replaceWithSubstring").value;
  
    // Using standard method
    let replacedStr = str.replace(substringToReplace, replaceWith);
  
    // Display result
    document.getElementById(
      "resultOutput"
    ).innerHTML = `String after substring replacement: ${replacedStr}`;
  
    /* Manual logic for replacing a substring
    let replacedStr = '';
    let i = 0;
    while (i < str.length) {
        if (str.substr(i, substringToReplace.length) === substringToReplace) {
            replacedStr += replaceWith;
            i += substringToReplace.length;
        } else {
            replacedStr += str[i];
            i++;
        }
    }
    */
  }
  