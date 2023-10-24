const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`);
  }
};

const findKey = function(object, callback) {
  for (let name in object) {
    if (callback(object[name])) {
      return name;
    }
  }
}

const data = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};

assertEqual(findKey(data, x => x.stars === 2), "noma"); // => "noma"

const data1 = {
  apple: { color: 'red'},
  banana: { color: 'yellow'},
  cherry: { color: 'red'},
  date: { color: 'brown'}
};

assertEqual(findKey(data1, fruit => fruit.color === 'red'), "apple");

const data2 = {
  alice: { age: 25, gender: 'female' },
  bob: { age: 40, gender: 'male' },
  carol: { age: 35, gender: 'female' },
  david: { age: 28, gender: 'male' }
};

assertEqual(findKey(data2, person => person.age > 30), "bob");