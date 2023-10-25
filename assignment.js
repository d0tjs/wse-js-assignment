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

// Problem 7: Create a function removeDuplicates that takes an array and returns a new array with duplicates removed.
function removeDuplicates(array) {
  const arrayWithoutDuplicates = [];
  for (let i = 0; i < array.length; i++) {
    if (arrayWithoutDuplicates.indexOf(array[i]) == -1) {
      arrayWithoutDuplicates.push(array[i]);
    }
  }
  return arrayWithoutDuplicates;
}

// Problem 8: Create a function convertToCelsius that takes a temperature in Fahrenheit and returns the equivalent temperature in Celsius.
function convertToCelsius(fahrenheit) {
  let celsius = (fahrenheit - 32) * (5 / 9);
  celsius = celsius.toFixed(2);
  return celsius;
}

// Problem 9: Write a function to find the maximum of five numbers.
function maximumOfFiveNumbers(num1, num2, num3, num4, num5) {
  let maximum = num1 > num2 ? num1 : num2;
  maximum = maximum > num3 ? maximum : num3;
  maximum = maximum > num4 ? maximum : num4;
  maximum = maximum > num5 ? maximum : num5;
  return maximum;
}

// Problem 10: Create a function called evenOdd() that takes a string as a parameter. Now you have to give the output based on the total number of characters in your String. The output will be 'even' or 'odd'. [ Input: ‘JavaScript’ Output: even, Input: ‘Hello’ Output: odd]
function evenOdd(string) {
  let charactersCount = 0;
  for (let i = 0; i < string.length; i++) {
    charactersCount++;
  }
  if (charactersCount % 2 == 0) {
    return "even";
  } else {
    return "odd";
  }
}


// Question 1 ::: Explain the difference between 'if...else' and 'switch' statements for conditional logic.

/*
Ans::: 

In JavaScript, for conditional logic, we can use either if...else or switch statements. Though the concept is quite similar in both cases,
they work differently in some cases.
1) if...else allows us to have loose or non-strict comparison, meaning when two values are compared, their value type can be changed
behind the scene by javascript engine. But the swicth statement doesn't allow this. Rather swicth statement follows strict comparison, meaning the values must be of same type. 

2) if...else if... else statements only executes one condition if it is true but switch staement allows to execute multiple cases if break is not used after any true case. Swicth staement continues executing cases when it finds the first true case and until it finds a break statement.


*/

// Question 2 ::: What is JavaScript, and what is its primary purpose in web development?