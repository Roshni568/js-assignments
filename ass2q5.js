 function calculateSum(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

let numbers = [10, 20, 30, 40, 50];
let totalSum = calculateSum(numbers);
console.log("The sum of the numbers is:", totalSum);