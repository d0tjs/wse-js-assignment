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

// Problem 3: Create a function calculateFactorial that takes a number and returns its factorial.
function calculateFactorial(number) {
  let factorial = 1;
  for (let i = 2; i <= number; i++) {
    factorial = factorial * i;
  }
  return factorial;
}

// Problem 4: Create a function isPrime that takes a number as a parameter and returns true if it's a prime number, and false otherwise.
function isPrime(number) {
  let isPrime = true;
  if (number == 2) {
    isPrime = true;
  } else if (number % 2 == 0 || number == 1) {
    isPrime = false;
  } else {
    for (let i = 3; i < number; i++) {
      if (number % i == 0) {
        isPrime = false;
        break;
      }
    }
  }
  return isPrime;
}

// Problem 5: Create a function mergeArrays that takes two arrays as parameters and returns a new array that merges both arrays.
function mergeArrays(array1, array2) {
  const mergedArray = [];
  for (let i = 0; i < array1.length; i++) {
    mergedArray.push(array1[i]);
  }

  for (let i = 0; i < array2.length; i++) {
    mergedArray.push(array2[i]);
  }

  return mergedArray;
}

// Problem 6: Create a function isLeapYear that takes a year as a parameter and returns "This is a leap year" if it's a leap year, and "Not Leap year" otherwise.
function isLeapYear(year) {
  if (year % 400 == 0) {
    return "This is a leap year";
  } else if (year % 100 == 0) {
    return "Not Leap year";
  } else if (year % 4 == 0) {
    return "This is a leap year";
  } else {
    return "Not Leap year";
  }
}
