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

const words = ["ground", "control", "to", "major", "tom"];
const greetings = ["hello", "ciao", "salam"];
const fruits = ["apple", "grapes", "watermelon", "pear", "orange"];
const multiples = [1, 2, 3, 4, 5, 6];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}


assertArraysEqual(map(words, word => word[0]), [ 'g', 'c', 't', 'm', 't' ]);
assertArraysEqual(map(greetings, word => word[0]), [ 'h', 'c', 's']);
assertArraysEqual(map(fruits, word => word[0]), [ 'a', 'g', 'w', 'p', 'o']);
assertArraysEqual(map(multiples, word => word * 2), [2, 4, 6, 8, 10, 12]);



