let array = [];
let maxSize = 0;

// Function to create an array with the given size
function createArray() {
  maxSize = parseInt(document.getElementById("arraySize").value);
  array = [];
  document.getElementById(
    "result"
  ).innerHTML = `Array created with size: ${maxSize}`;
}

// Function to add an element using standard method (push)
function addElementStandard() {
  const element = parseInt(document.getElementById("addElement").value);
  if (array.length >= maxSize) {
    document.getElementById("result").innerHTML =
      "Array is full. Cannot add more elements.";
    return;
  }
  array.push(element);
  document.getElementById(
    "result"
  ).innerHTML = `Array after adding (Standard): [${array}]`;
}

// Function to add an element using non-standard method (manual insertion)
function addElementNonStandard() {
  const element = parseInt(document.getElementById("addElement").value);
  if (array.length >= maxSize) {
    document.getElementById("result").innerHTML =
      "Array is full. Cannot add more elements.";
    return;
  }
  array[array.length] = element;
  document.getElementById(
    "result"
  ).innerHTML = `Array after adding (Non-Standard): [${array}]`;
}

// Function to delete an element using standard method (splice)
function deleteElementStandard() {
  const element = parseInt(document.getElementById("deleteElement").value);
  const index = array.indexOf(element);

  if (index !== -1) {
    array.splice(index, 1);
    document.getElementById(
      "result"
    ).innerHTML = `Array after deletion (Standard): [${array}]`;
  } else {
    document.getElementById("result").innerHTML = "Element not found.";
  }
}

// Function to delete an element using non-standard method (manual loop)
function deleteElementNonStandard() {
  const element = parseInt(document.getElementById("deleteElement").value);
  const newArray = [];
  let elementFound = false;

  for (let i = 0; i < array.length; i++) {
    if (array[i] !== element) {
      newArray.push(array[i]);
    } else {
      elementFound = true;
    }
  }

  if (elementFound) {
    array = newArray;
    document.getElementById(
      "result"
    ).innerHTML = `Array after deletion (Non-Standard): [${array}]`;
  } else {
    document.getElementById(
      "result"
    ).innerHTML = `Element ${element} not found in the array.`;
  }
}

// Function to check if a value exists in the array using standard method (includes)
function checkValueStandard() {
  const value = parseInt(document.getElementById("checkValue").value);
  const index = array.indexOf(value);

  if (index !== -1) {
    document.getElementById(
      "result"
    ).innerHTML = `Value ${value} found at index ${index} (Standard).`;
  } else {
    document.getElementById(
      "result"
    ).innerHTML = `Value ${value} does not exist in the array.`;
  }
}

// Function to check if a value exists in the array using non-standard method (manual loop)
function checkValueNonStandard() {
  const value = parseInt(document.getElementById("checkValue").value);
  let found = false;
  let index = -1;

  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      found = true;
      index = i;
      break;
    }
  }

  if (found) {
    document.getElementById(
      "result"
    ).innerHTML = `Value ${value} found at index ${index} (Non-Standard).`;
  } else {
    document.getElementById(
      "result"
    ).innerHTML = `Value ${value} does not exist in the array.`;
  }
}

// Function to view the current state of the array
function viewArray() {
  document.getElementById("result").innerHTML = `Current Array: [${array}]`;
}

// Function to empty the array using standard method (length = 0)
function emptyArrayStandard() {
  array.length = 0;
  document.getElementById("result").innerHTML = "Array emptied (Standard).";
}

// Function to empty the array using non-standard method (pop in loop)
function emptyArrayNonStandard() {
  while (array.length) {
    array.pop();
  }
  document.getElementById("result").innerHTML = "Array emptied (Non-Standard).";
}
