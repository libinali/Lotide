const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
    return true;
  }
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

const without = function(source, itemsToRemove) {
  newArr = [];
  for (let item of source) {
    if (!itemsToRemove.includes(item)) {
      newArr.push(item);
    }
  }
  return newArr;
};

