let myArray = ['a', 'b', 'c', 'd']

myArray = ["start",...myArray, "end"]

console.log(myArray)

function sumUp(n) { 
    let result = 0;
    for (let i = 1; i <= n; i++) {           // Linear time - A bigger 'n' in this function would lead to more interations, increasing the time it takes to perform the function in a linear way. This function has linear time complexion.
       result = result + i;
   }
  return result;
}

console.log(sumUp(3))

function sumUpAlt(n) {
  return (n / 2) * (1 + n);                      // This function operates within the same time period regardless of the argument given for 'n'. This is function has constant time complexion. 
}

console.log(sumUpAlt(5))

// Write an algorithm that takes an array of numbers as input and calculates the sum of those numbers
// function sumNumbers() { } 
// sumNumbers([1, 3, 10]) should yield 14

myArray = [1, 3, 10]

function sumNumbers(numbers) {
  result = numbers.reduce((a, b) => a + b)
  return result
}

console.log(sumNumbers(myArray))

function response( input ) {
  //Insert your code here 
  const response = []; 
 for (let i = 1; i <= input; i++){
   if (i % 15 == 0) response.push("FizzBuzz");
   else if (i % 3 == 0) response.push("Fizz");
   else if (i % 5 == 0) response.push("Buzz");
   else response.push(i);
 }
 return response;
}

console.log(response(15))

// Sum grades

function sumGrades(grades) {
  let sum = 0

  grades.forEach(function(grade) {
      sum = sum + grade 
  })

  return sum
}

// Sum positive numbers

function sumPositiveNumbers(numbers) {
  let sum = 0

  numbers.forEach(function(number) {
      if (number > 0) {
          sum = sum + number
      }
  })

  return sum
}

// Sum odd numbers 

function sumOddNumbers(numbers) {
  let sum = 0

  numbers.forEach(function(number) {
      if (number % 2 !== 0) {
          sum = sum + number
      }
  })

  return sum
}

// return average

function getAverageValue(grades) {
  // TODO: return the average value of all grades (sum of all grades divided by the total number of grades)
  let sum = 0 
  let count = grades.length

  grades.forEach(function(grade){
      sum = sum + grade
  })

  let average = sum / count

  return average 

}

// Alter elements in array

function getRaisedGrades(grades) {
  // TODO: return all the grades raised by 1 (no grade should exceed 20)
  const raisedGrades = grades.map(function(grade){
      if (grade + 1 > 20) {
          return 20
      }
      return grade + 1
  })

  return raisedGrades
}

//compare strings to find anagrams

function stringAnagrams(a, b) {
  let y = a.split("").sort().join(""),
      z = b.split("").sort().join("");
  
  console.log(
    z === y 
    ? a + " and " + b + " are anagrams! "
    : a + " and " + b + " are not anagrams! "
  )
}

// create a function to compress a string from aaaabbbccab into a5b4c2

function stringCompression (string) {
  if (string.length === 0) {
    console.log("Please enter valid string.");
    return;
  }
  let output = "";
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    count++;
    if (string[i] != string[i+1]) {
      output += string[i] + count;
      count = 0;
    }
  }
  console.log(output);
}
