const assertArraysEqual = function(actual, expected) {
  const areEqual = eqArrays(actual, expected);

  if (areEqual) {
    console.log(`✅✅✅ Assertion passed: ${actual} === ${expected}`);
  }

  if (!areEqual) {
    console.log(`🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`);
  }

};

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

const takeUntil = function(array, callback) {
  const results = [];
  for (let item of array) {
    if (!callback(item)) {
      results.push(item);
    } else {
      break;
    }
  }
  return results;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
assertArraysEqual(takeUntil(data1, num => num < 0), [1, 2, 5, 7, 2]); 

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
assertArraysEqual(takeUntil(data2, word => word === ','), ["I've", "been", "to", "Hollywood"]); 

const data3 = [1, 2, 3, 4, 5];
assertArraysEqual(takeUntil(data3, num => num > 2), [1, 2]);

const data4 = ["apple", "banana", "cherry", "date"];
assertArraysEqual(takeUntil(data4, word => word.startsWith("c")), ["apple", "banana"]);