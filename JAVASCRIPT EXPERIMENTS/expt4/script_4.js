function userDefinedCompare(str1, str2) {
    // Compare lengths first
    if (str1.length !== str2.length) {
      return false;
    }
  
    // Compare each character one by one
    for (let i = 0; i < str1.length; i++) {
      if (str1[i] !== str2[i]) {
        return false; // If any character doesn't match, return false
      }
    }
  
    // If no mismatches, the strings are equal
    return true;
  }
  
  function compareStrings() {
    const string1 = document.getElementById("string1").value;
    const string2 = document.getElementById("string2").value;
  
    // Clear previous results
    const resultDiv = document.getElementById("comparisonResults");
    resultDiv.innerHTML = "";
  
    if (!string1 || !string2) {
      resultDiv.innerHTML = "<p>Please enter both strings to compare.</p>";
      return;
    }
  
    // Strict equality (===) comparison
    const strictEqualResult = string1 === string2 ? "Equal" : "Not Equal";
  
    // Loose equality (==) comparison
    const looseEqualResult = string1 == string2 ? "Equal" : "Not Equal";
  
    // Length comparison
    let lengthCompareResult = "Equal";
    if (string1.length > string2.length) {
      lengthCompareResult = `"${string1}" is longer`;
    } else if (string1.length < string2.length) {
      lengthCompareResult = `"${string2}" is longer`;
    }
  
    // localeCompare for alphabetical order
    const localeCompareResult = string1.localeCompare(string2);
    let alphabeticOrderResult = "";
    if (localeCompareResult === 0) {
      alphabeticOrderResult = "Both strings are equal alphabetically";
    } else if (localeCompareResult < 0) {
      alphabeticOrderResult = `"${string1}" comes before "${string2}" alphabetically`;
    } else {
      alphabeticOrderResult = `"${string1}" comes after "${string2}" alphabetically`;
    }
  
    // User-defined string comparison
    const userDefinedComparison = userDefinedCompare(string1, string2)
      ? "Equal"
      : "Not Equal";
  
    // Displaying the results
    resultDiv.innerHTML = `
      <p><strong>Strict Equality (===):</strong> ${strictEqualResult}</p>
      <p><strong>Loose Equality (==):</strong> ${looseEqualResult}</p>
      <p><strong>Length Comparison:</strong> ${lengthCompareResult}</p>
      <p><strong>Alphabetical Comparison (localeCompare):</strong> ${alphabeticOrderResult}</p>
      <p><strong>User-defined Comparison:</strong> ${userDefinedComparison}</p>
    `;
  }
  