// Problem 1: Write a function to calculate the area of a triangle.
function triangleArea(base, height) {
  const area = (base * height) / 2;
  return area;
}

// Problem 2: Write a function to convert degrees to radians.
function degreesToRadians(degree) {
  let radians = degree * (Math.PI / 180);
  radians = radians.toFixed(3); // toFixed is used to display 3 digits after decimal point
  return radians;
}
