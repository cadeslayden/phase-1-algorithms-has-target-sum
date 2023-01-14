function hasTargetSum(array, target) {
  const seenNumbers = {};

  for (const number of array) {
    const difference = target - number;
    if (difference in seenNumbers) return true;
    seenNumbers[number] = true;
  }

  return false;
}



/* 
  runtime: 0(n)
*/

/* 
  function hasTargetSum with arguments (array, target)
    declare seenNumbers = {}

    for (declare number of each integer in array) {
      declare differnce = target - number;
      if (difference in seenNumbers)
      seenNumbers[number] = true
    }
    else return false
*/

/*
declaring a function called hasTargetSum with two arguments array and target
declaring seenNumbers thats equal to an empty array

for each integer in the array
take the difference between the target and that number
if that difference which is put into seenNumbers is equal to a number thats already in our array 
we return true

if not, we return false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
