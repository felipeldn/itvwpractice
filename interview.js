var myArray = ['a', 'b', 'c', 'd']

myArray = ["start",...myArray, "end"]

console.log(myArray)

function sumUp(n) { 
    let result = 0;
    for (let i = 1; i <= n; i++) {
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