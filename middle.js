const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(actual, expected) {
  const areEqual = eqArrays(actual, expected);

  if (areEqual) {
    console.log(`✅✅✅ Assertion passed: ${actual} === ${expected}`);
  }

  if (!areEqual) {
    console.log(`🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`);
  }

};

const middle = function(arr) {
  const num1 = arr[Math.floor(arr.length / 2)];
  const num2 = arr[Math.floor(arr.length / 2) - 1];

  if (arr.length === 1 || arr.length === 2) {
    return [];
  }
  
  if (arr.length % 2 === 1) {
    return [num1];
  }

  if (arr.length % 2 === 0) {
    return [num2, num1];
  }

};

assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
