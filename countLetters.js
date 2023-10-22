const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(str) {
  const results = {};
  const sentence = str.toLowerCase();
  
  for (let letter of sentence) {
    if (results[letter]) {
      results[letter]++;
    } else {
      results[letter] = 1;
    }
  }
  return results;
}


const sentence1 = "This is a test sentence.";
const result1 = countLetters(sentence1);

assertEqual(result1["t"], 4);
assertEqual(result1["h"], 1);
assertEqual(result1["i"], 2);
assertEqual(result1["s"], 4);
assertEqual(result1["a"], 1);
assertEqual(result1["e"], 4);
assertEqual(result1["n"], 2);
assertEqual(result1["c"], 1);
