// Function to check if the triangle is valid
function isValidTriangle(a, b, c) {
  return a + b > c && a + c > b && b + c > a;
}
// Function to calculate the area of the triangle using Heron's formula
function calculateTriangleArea() {
  const a = parseFloat(document.getElementById("sideA").value);
  const b = parseFloat(document.getElementById("sideB").value);
  const c = parseFloat(document.getElementById("sideC").value);
  if (isNaN(a) || isNaN(b) || isNaN(c)) {
    document.getElementById("triangleResult").innerHTML =
      "Please enter valid numbers for all sides.";
    document.getElementById("triangleResult").classList.add("error");
    return;
  }
  if (a <= 0 || b <= 0 || c <= 0) {
    document.getElementById("triangleResult").innerHTML =
      "Sides of triangle cannot be negative or zero.";
    document.getElementById("triangleResult").classList.add("error");
    return;
  }
  if (!isValidTriangle(a, b, c)) {
    document.getElementById("triangleResult").innerHTML =
      "The sides do not form a valid triangle.";
    document.getElementById("triangleResult").classList.add("error");
    return;
  }
  const s = (a + b + c) / 2;
  const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
  document.getElementById(
    "triangleResult"
  ).innerHTML = `Area of the triangle is: ${area.toFixed(2)} square units`;
  document.getElementById("triangleResult").classList.remove("error");
  document.getElementById("triangleResult").classList.add("success");
}

// Function to calculate the area of a rectangle
function calculateRectangleArea() {
  const length = parseFloat(document.getElementById("length").value);
  const width = parseFloat(document.getElementById("width").value);

  if (isNaN(length) || isNaN(width)) {
    document.getElementById("rectangleResult").innerHTML =
      "Please enter valid numbers for length and width.";
    document.getElementById("rectangleResult").classList.add("error");
    return;
  }
  if (length <= 0 || width <= 0) {
    document.getElementById("rectangleResult").innerHTML =
      "Side of rectangle cannot be negative or zero.";
    document.getElementById("rectangleResult").classList.add("error");
    return;
  }
  const area = length * width;

  document.getElementById(
    "rectangleResult"
  ).innerHTML = `Area of the rectangle is: ${area.toFixed(2)} square units`;
  document.getElementById("rectangleResult").classList.remove("error");
  document.getElementById("rectangleResult").classList.add("success");
}

// Function to calculate the area of a circle
function calculateCircleArea() {
  const radius = parseFloat(document.getElementById("radius").value);

  if (isNaN(radius)) {
    document.getElementById("circleResult").innerHTML =
      "Please enter a valid radius.";
    document.getElementById("circleResult").classList.add("error");
    return;
  }
  if (radius <= 0) {
    document.getElementById("circleResult").innerHTML =
      "Radius value cannot be negative or zero.";
    document.getElementById("circleResult").classList.add("error");
    return;
  }
  const area = Math.PI * Math.pow(radius, 2);

  document.getElementById(
    "circleResult"
  ).innerHTML = `Area of the circle is: ${area.toFixed(2)} square units`;
  document.getElementById("circleResult").classList.remove("error");
  document.getElementById("circleResult").classList.add("success");
}
