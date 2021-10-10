var myArray = ['a', 'b', 'c', 'd']

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

// let start = 0;
// let end = 0;

// start = performance.now();
// sumUp(5)
// end = performance.now();

// perf = end - start;

// console.log(perf)

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
 for (var i=1; i <= input; i++){
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
