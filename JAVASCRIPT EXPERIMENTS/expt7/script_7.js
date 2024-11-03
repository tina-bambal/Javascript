let myArray = [];
let maxSize = 0;

// Function to create an array with the specified size
function createArray() {
  maxSize = parseInt(document.getElementById("arraySize").value);
  myArray = []; // Reset the array
  document.getElementById(
    "arrayResult"
  ).innerHTML = `Array created with size: ${maxSize}`;
}

// Function to add elements to the array // Function to push an element to the end of the array
function pushElement() {
  if (myArray.length >= maxSize) {
    document.getElementById("arrayResult").innerHTML =
      "Array is full. Cannot add more elements.";
    return;
  }

  const value = document.getElementById("addElement").value.trim();

  try {
    const evaluatedValue = eval(value); // Safely evaluate input
    myArray.push(evaluatedValue);

    document.getElementById(
      "arrayResult"
    ).innerHTML = `Element added. Current array: ${JSON.stringify(
      myArray,
      null,
      2
    )}`;
  } catch (error) {
    document.getElementById("arrayResult").innerHTML =
      "Invalid input: Please enter a valid object.";
  }
}

// Function to pop the last element from the array

// Function to view the current array
function viewArray() {
  let arrayObjects = [];
  let resultText = `Current array: ${JSON.stringify(myArray, null, 2)}`;

  // Loop through the array to find any array objects and record their indices
  myArray.forEach((item, index) => {
    if (Array.isArray(item)) {
      arrayObjects.push(index);
    }
  });

  if (arrayObjects.length > 0) {
    resultText += `<br>Array contains the following array objects at indices: ${arrayObjects.join(
      ", "
    )}`;
  } else {
    resultText += "<br>The array does not contain any array objects.";
  }

  document.getElementById("arrayResult").innerHTML = resultText;
}
